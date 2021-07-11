import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotificationsManagerComponent } from './cc-inputs-outputs/notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './cc-inputs-outputs/notifications-button/notifications-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NotificationsManagerComponent, NotificationsButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
