import {Component, Input, OnInit} from '@angular/core';
import {ModelsService} from "../models/models.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:ModelsService;
  constructor() { }

  ngOnInit(): void {
  }
  onAddSnap() {
    this.faceSnap.snaps++
    if (this.faceSnap.snaps%2===1)
    {this.faceSnap.buttonText="ooh un snaps"}
    else {
      this.faceSnap.buttonText="snapé la photo"
    }
  }
}
