import { Component, OnInit } from '@angular/core';
import {FeedbacksService} from "../shared/feedbacks.service";
import { NgForm } from "@angular/forms"
import {AngularFirestore} from "@angular/fire/firestore";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(private service: FeedbacksService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id: null,
      name:'',
      email:'',
      feedback:''
    }
  }

  onSubmit(form: NgForm){
    let data = form.value;
    this.firestore.collection('feedbacks').add(data);
    //console.log(data)
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Feedback Form')
  }

}
