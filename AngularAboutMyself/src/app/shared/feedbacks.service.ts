import { Injectable } from '@angular/core';
import {Feedback} from "./feedback.model";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  formData: Feedback

  constructor(private firestore: AngularFirestore ) { }

  getFeedbacks(){
    return this.firestore.collection('feedbacks').snapshotChanges()
  }

}
