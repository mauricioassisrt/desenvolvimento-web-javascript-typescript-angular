import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit():void {
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCZJ7KcpLtbMB-yhG3vpKH6JDrFgEWGwGg",
      authDomain: "jta-instagram-clone-dc621.firebaseapp.com",
      projectId: "jta-instagram-clone-dc621",
      storageBucket: "jta-instagram-clone-dc621.appspot.com",
      messagingSenderId: "974214815029",
      databaseURL:"https://jta-instagram-clone-dc621-default-rtdb.firebaseio.com",
      appId: "1:974214815029:web:e96407bfd219e5d2a4c07c",
      measurementId: "G-31MQLQ8HXQ"
    };
    firebase.initializeApp(firebaseConfig)
  }
}
