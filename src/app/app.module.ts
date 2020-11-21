import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GridModule, ButtonModule,
  InputModule, HeaderModule,
  TableModule, ModalModule,
  SideNavModule, TilesModule, NotificationModule, NotificationService,
  TabsModule, UIShellModule, PanelModule, DialogModule, DropdownModule, ModalService, PlaceholderModule, CodeSnippetModule } from 'carbon-components-angular';

import { DeleteModule, SaveModule, DownloadModule,
  OverflowMenuVerticalModule, OverflowMenuHorizontalModule, AddModule, DataTableModule, MenuModule, SettingsModule } from '@carbon/icons-angular';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ModalComponent } from './components/modal/modal.component';

import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireMessagingModule, AngularFireMessaging } from '@angular/fire/messaging';
import { SubscriptionsTableComponent } from './components/subscriptions-table/subscriptions-table.component';
import { IconModule } from 'carbon-components-angular/icon';
import { NotificationsComponent } from './components/notifications/notifications.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    ModalComponent,
    HomeComponent,
    SubscriptionsComponent,
    SubscriptionsTableComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule, // .withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    UIShellModule,
    HeaderModule,
    GridModule,
    ButtonModule,
    InputModule,
    TableModule,
    TilesModule,
    TabsModule,
    DropdownModule,
    DataTableModule,
    SideNavModule,
    DeleteModule,
    SaveModule,
    DownloadModule,
    AddModule,
    SettingsModule,
    MenuModule,
    IconModule,
    NotificationModule,
    PlaceholderModule,
    OverflowMenuVerticalModule,
    OverflowMenuHorizontalModule,
    FormsModule,
    PanelModule,
    ModalModule,
    DialogModule,
    CodeSnippetModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
    // , { enabled: environment.production }),
    RouterModule
  ],
  providers: [AngularFirestore, AngularFireMessaging, ModalService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
