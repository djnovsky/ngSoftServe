import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbacksComponent} from "./feedbacks/feedbacks.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: 'feedbacks', component: FeedbacksComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
