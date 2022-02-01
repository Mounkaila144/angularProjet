import { Component, OnInit } from '@angular/core';
import {ModelsService} from "../models/models.service";
import {FaceSnapsService} from "../service/face-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: ModelsService[];

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }

}
