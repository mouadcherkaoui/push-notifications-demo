import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class.bx--header') headerClass = true;
  items: Array<headerItem>;
  constructor() {
    this.items = [
      { title: 'subscriptions', action: 'subscriptions'},
      { title: 'manage', subItems: [
        { title: 'link1', action: 'home'}
      ]}
    ]
  }

  ngOnInit(): void {
  }

}
export type headerItem = {title: string, action?: string | (() => void|any), subItems?: Array<headerItem>};
