import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public urls = [];

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

  }

  public fileChanged(event) {
    console.log('file changed: ', event);
    let file = event.target.files[0];
    // this.db.object('file').set(file.name)
    //   .then(data => console.log('success: ',data), err => console.error(err))
    firebase.storage().ref('files/' + file.name)
      .put(event.target.files[0])
      .then(data => this.urls.push(data.downloadURL), err => console.error(err))
  }
}
