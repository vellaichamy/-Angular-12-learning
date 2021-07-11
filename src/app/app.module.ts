import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotificationsManagerComponent } from './cc-inputs-outputs/notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './cc-inputs-outputs/notifications-button/notifications-button.component';
import { VersionControlComponent } from './cc-ng-on-changes/components/version-control/version-control.component';
import { VcLogsComponent } from './cc-ng-on-changes/components/vc-logs/vc-logs.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NotificationsManagerComponent,
    NotificationsButtonComponent,
    VersionControlComponent,
    VcLogsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
