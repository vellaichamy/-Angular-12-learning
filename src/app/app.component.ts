import { Component,ViewChild, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  notificationsCount = 0;
  updateNotificationsCount(count: number) {
    this.notificationsCount = count;
  }

  @ViewChild(GalleryComponent) gallery;

  addNewPicture() {
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    this.gallery.pictures.shift();
  }
}
