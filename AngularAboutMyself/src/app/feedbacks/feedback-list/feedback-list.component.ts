import { Component, OnInit } from '@angular/core';
import {FeedbacksService} from "../../shared/feedbacks.service";
import {Feedback} from "../../shared/feedback.model";

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  list: Feedback[];
  constructor(private service: FeedbacksService) { }

  ngOnInit() {
    this.service.getFeedbacks().subscribe(actionArray=>{
  this.list = actionArray.map(item=>{
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()} as Feedback;
  })
    })
  }

}
