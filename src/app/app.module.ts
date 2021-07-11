import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotificationsManagerComponent } from './cc-inputs-outputs/notifications-manager/notifications-manager.component';
import { NotificationsButtonComponent } from './cc-inputs-outputs/notifications-button/notifications-button.component';
import { VersionControlComponent } from './cc-ng-on-changes/components/version-control/version-control.component';
import { VcLogsComponent } from './cc-ng-on-changes/components/vc-logs/vc-logs.component';
import { VcLogsComponent1 } from './cc-setters/components/vc-logs/vc-logs.component';
import { VersionControlComponent1 } from './cc-setters/components/version-control/version-control.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NotificationsManagerComponent,
    NotificationsButtonComponent,
    VersionControlComponent,
    VcLogsComponent,
    VersionControlComponent1,
    VcLogsComponent1
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
