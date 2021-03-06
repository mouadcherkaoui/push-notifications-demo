import { Component, ComponentRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BaseModal, ModalService } from 'carbon-components-angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends BaseModal implements OnInit {
  label = 'Add Subscriptions';
  title = 'Subscriptions';
  open = false;

  @ViewChild('content')
  contentRef: ComponentRef<any>;

  @Output()
  secondaryAction: EventEmitter<any> = new EventEmitter<any>(); // () => void;

  @Output()
  primaryAction: EventEmitter<void | any> = new EventEmitter<void | any>();
  constructor(readonly modalSvc: ModalService/*@Inject('primaryAction') public primaryAction: () => void | any,
              @Inject('secondaryAction') public secondaryAction: () => void*/) {
    super();
   }

  ngOnInit(): void {
  }

  // showConfirmationModal (ok, cancel): boolean {
  //     this.modalSvc.show({
  //       label: 'Secondary header label',
  //       title: 'Sample secondary modal works.',
  //       content: '',
  //       size: 'sm',
  //       buttons: [{
  //         text: 'Cancel',
  //         type: ModalButtonType.secondary
  //       }, {
  //         text: 'OK',
  //         type: ModalButtonType.primary,
  //         click: () => this.subscribeClient()
  //       }]
  //     });
  // }
  closeModal(): void {
    this.open = false;
  }
}
