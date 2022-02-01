import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFaceSnapComponent} from "./single-face-snap/single-face-snap.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes:Routes=[
  {path:"facesnaps/:id",component:SingleFaceSnapComponent},
  {path:"facesnaps",component:FaceSnapListComponent},
  {path:"",component:LandingPageComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"**",redirectTo:"not-found"}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports:[
      RouterModule
    ]
  })
export class AppRoutingModule{

}
