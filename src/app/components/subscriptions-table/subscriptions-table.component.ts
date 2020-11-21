import { Component, ComponentRef, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { DataTableComponent } from '@carbon/icons-angular';
import { AlertModalType, ModalButtonType, ModalService, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { Observable, Subscription } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.scss']
})
export class SubscriptionsTableComponent implements OnInit {
  public model = new TableModel();

  @Input()
  subscriptions = new Observable<[]>();

  @Output()
  primaryButtonClick: EventEmitter<void | any> = new EventEmitter(true);

  @Output()
  deleteButtonClick: EventEmitter<void | any> = new EventEmitter(true);

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

  @ViewChild('tokenCellTemplate')
  tokenCellTemplate: TemplateRef<any>;

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({data: 'Id'}),
      new TableHeaderItem({data: 'Identifier'}),
      new TableHeaderItem({data: 'Description'}),
      new TableHeaderItem({data: 'Token'})
    ];
    this.subscriptions.subscribe(values => {
      this.model.data = this.prepareData(values);
    });
  }

  cancelMethod(): void{
    console.log('Custom cancel method');
  }

  public deleteRows(rows: number[]): void{
    rows.forEach(row => this.model.deleteRow(row));
  }

  async onDeleteClick(): Promise<void | any> {
    const selectedEntries = this.model.rowsSelected;
    this.deleteButtonClick.emit(selectedEntries);
    console.log(selectedEntries);
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
        new TableItem({ data: datum.token, template: this.tokenCellTemplate})
      ]);
    }
    return newData;
  }
}
