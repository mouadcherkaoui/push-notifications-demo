import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { NotificationComponent } from '@carbon/icons-angular';
import { ModalButtonType, ModalService, NotificationService, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { Observable, Subject, Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { SubscriptionsTableComponent } from 'src/app/components/subscriptions-table/subscriptions-table.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions = [];
  subscriptionsSubject = new Subject<any[]>();

  subscription = { id: '', identifier: '', description: '', token: ''};
  initialSnapshot = true;

  constructor(readonly firestore: AngularFirestore, readonly messaging: AngularFireMessaging,
              readonly modalSvc: ModalService, readonly notificationSvc: NotificationService) { }

  @ViewChild(ModalComponent)
  appModal: ModalComponent;

  @ViewChild(SubscriptionsTableComponent)
  subscriptionsTable: SubscriptionsTableComponent;

  ngOnInit(): void {
    this.firestore
    .collection('subscriptions')
    .ref.onSnapshot(snapShot => {
      snapShot.docChanges({ }).forEach(change => {
        const data: any = change.doc.data();
        const dto = { id: change.doc.id, identifier: data.identifier, description: data.description, token: data.token};

        const index = this.subscriptions.findIndex(v => v.id === change.doc.id);

        switch (change.type){
          case 'added': {
            this.subscriptions.push(dto);
            break;
          } case 'removed': {
            this.subscriptions.splice(index, 1);
            break;
          } case 'modified': {
            this.subscriptions[index] = dto;
          }
        }
        if (!this.initialSnapshot) {
        this.notificationSvc
          .showNotification({
              type: 'info',
              message: `subscription ${change.type} ${dto.identifier}`, 
              title: 'subscriptions',
              smart: true,
              target: '#notifications-container'});
          }
        });
      this.initialSnapshot = false;
      this.subscriptionsSubject.next(this.subscriptions);
      });
  }
  cancelMethod(): void{
    console.log('Custom cancel method');
  }

  async onPrimaryButtonClick(): Promise<any> {
    let localSubscription: string | any = localStorage.getItem('subscription');
    console.log(localSubscription);

    if (localSubscription) {
      localSubscription = JSON.parse(localSubscription);
      this.showSecondaryModal();
    } else {
      this.appModal.open = true;
      // await this.subscribeClient();
    }
  }

  async registerSubscription(): Promise<void> {


  }
  closeModal(): void {
    this.appModal.open = false;
  }

  onDelete(selectedEntries: boolean[]): void{
    console.log(selectedEntries);
    selectedEntries.forEach(async (v, i) => {
      if (v){
        const currentItem = this.subscriptionsTable.model.data[i];
        await this.firestore.collection('subscriptions').doc(currentItem[0].data).delete();
      }
    });
  }

  copyToken(token): void {
    navigator.clipboard.writeText(token);
  }

  showSecondaryModal(): void {
    this.modalSvc.show({
      label: 'Secondary header label',
      title: 'Sample secondary modal works.',
      content: 'you already have an active subscription in this browser',
      size: 'lg',
      buttons: [{
        text: 'Cancel',
        type: ModalButtonType.secondary
      }, {
        text: 'OK',
        type: ModalButtonType.primary,
        click: () => this.appModal.open = true
      }]
    });
  }

  async subscribeClient(): Promise<any>{
    try {
      const identifier = this.subscription.identifier;
      const description = this.subscription.description;

      let token: string;

      this.messaging.requestPermission.subscribe(async () => {
        token = await this.messaging.getToken.toPromise();
        if (!token) {
          token = await this.messaging.requestToken.toPromise();
        }
        console.log(token);
        await this.firestore.collection('subscriptions').add({ token, identifier, description});
        localStorage.setItem('subscription', JSON.stringify({ token, identifier, description}));
        this.appModal.open = false;
      });
      if (!token){
      }
    } catch (error) {
        // setTokenSentToServer(false);
        console.log(error);
    }
  }
}
