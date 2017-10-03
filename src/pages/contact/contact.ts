import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private uniqueDeviceID: UniqueDeviceID) {
  this.uniqueDeviceID.get()
    .then((uuid: any) => console.log(uuid))
    .catch((error: any) => console.log(error));
  }

}
