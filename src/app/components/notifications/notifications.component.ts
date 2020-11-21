import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  @Input() type: 'error' | 'info' | 'success' | 'warning';
  @Input() title: string;
  @Input() message: string;
  @Input() showClose: boolean;
  @Input() lowContrast: boolean;
  @Input() actions: {};
  @Input() links: {};
  constructor() { }

  ngOnInit(): void {
  }

}
