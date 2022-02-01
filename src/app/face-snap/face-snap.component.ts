import {Component, Input, OnInit} from '@angular/core';
import {ModelsService} from "../models/models.service";
import {FaceSnapsService} from "../service/face-snaps.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:ModelsService;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,private router:Router) {}

  ngOnInit(): void {
    this.buttonText="Oh Snap!"
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"snap");
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"unsnap");
      this.buttonText = 'Oh Snap!';
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);  }
}
