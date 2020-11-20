import { Component, ComponentRef, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AlertModalType, ModalButtonType, ModalService, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.scss']
})
export class SubscriptionsTableComponent implements OnInit {
  model = new TableModel();
  subscriptions = [];
  size: 'sm' | 'lg' | 'xs' = 'sm';
  title = 'title';
  showSelectionColumn = true;
  striped = true;
  sortable = true;
  skeleton = true;
  stickyHeader = true;
  isDataGrid = true;
  description = 'With toolbar';
  searchModel = 'Initial search value';
  enableSingleSelect =   false;
  batchText = {
    SINGLE: '1 item selected',
    MULTIPLE: '{{count}} items selected'
  };
  toolbar = {
    selected: false
  };
  offset = { x: -9, y: 0 };

  subscription = { id: '', identifier: '', description: '', token: ''};
  constructor(readonly firestore: AngularFirestore, readonly messaging: AngularFireMessaging,
              readonly modalSvc: ModalService) { }

  @ViewChild(ModalComponent)
  appModal: ModalComponent;

  cancelMethod(): void{
    console.log('Custom cancel method');
  }

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({data: 'Id'}),
      new TableHeaderItem({data: 'Identifier'}),
      new TableHeaderItem({data: 'Description'}),
      new TableHeaderItem({data: 'Token'})
    ];
    this.firestore
      .collection('subscriptions')
      .ref.onSnapshot(snapShot => {
        snapShot.docChanges().forEach(change => {
        if (change.type === 'added'){
          const data: any = change.doc.data();
          this.subscriptions.push({ id: change.doc.id, identifier: data.identifier, description: data.description, token: data.token});
          this.model.data = this.prepareData(this.subscriptions);
        }
      });
    });
  }

  prepareData(data: any[]): any[] {
    this.skeleton = false;
    const newData = [];

    data.forEach(res => console.log(res));
    for (const item of data){
      const datum = item;
      console.log(datum);
      newData.push([
        new TableItem({ data: datum.id }), // , expandedData: datum.Description }),
        new TableItem({ data: datum.identifier }),
        new TableItem({ data: datum.description }),
        new TableItem({ data: datum.token })
      ]);
    }
    return newData;
  }

  showSubscriptionForm(): any {
    // this.modalSvc.create({ component: ModalComponent,
    //   inputs: {primaryAction: () => this.showSecondaryModal(), secondaryAction: () => alert('secondary')} });
    this.appModal.open = true;
  }

  closeModal(): void{
    this.subscribeClient().then(result => {
      // alert(result);
    });
  }

  showSecondaryModal(): void {
    this.modalSvc.show({
      label: 'Secondary header label',
      title: 'Sample secondary modal works.',
      content: '',
      size: this.size,
      buttons: [{
        text: 'Cancel',
        type: ModalButtonType.secondary
      }, {
        text: 'OK',
        type: ModalButtonType.primary,
        click: () => alert('OK button clicked')
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
