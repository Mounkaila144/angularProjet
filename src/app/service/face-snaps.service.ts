import { Injectable } from '@angular/core';
import {ModelsService} from "../models/models.service";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
 faceSnaps:ModelsService[] = [
    {
      id:1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: "assets/open.jpg",
      createdDate: new Date(),
      snaps: 554,
      location: 'Paris'
    },
    {
      id:2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: "assets/cravate.jpg",
      createdDate: new Date(),
      snaps: 6,
      location: 'la montagne'
    },
    {
      id:3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl:"assets/classe.png",
      createdDate: new Date(),
      snaps: 1
    }
  ];
  getFaceSnapById(faceSnapId: number): ModelsService {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
  getAllFaceSnaps(): ModelsService[] {
    return this.faceSnaps;
  }
  constructor() { }
}
