import { Component } from '@angular/core';
import {ModelsService} from "./models/models.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: ModelsService;
  myLastSnap!: ModelsService;
  myOtherSnap!: ModelsService;

  ngOnInit() {
    this.mySnap = new ModelsService(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0,
      'snapé la photo'
    );
    this.myOtherSnap = {

      title: 'Three Rock Mountain',

      description: 'Un endroit magnifique pour les randonnées.',

      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',

      createdDate: new Date(),

      snaps: 0,
      buttonText:'snapé la photo'
    };

    this.myLastSnap = {

      title: 'Un bon repas',

      description: 'Mmmh que c\'est bon !',

      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',

      createdDate: new Date(),

      snaps: 0,
      buttonText:'snapé la photo'

    };

  }
}
