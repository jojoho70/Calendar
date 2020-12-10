import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Day } from '../classes';

@Component({
  selector: 'app-actual-assignment-model',
  templateUrl: './actual-assignment-model.component.html',
  styleUrls: ['./actual-assignment-model.component.scss']
})
export class ActualAssignmentModelComponent implements OnInit {
  @Input('assignment') assignment: Day[];
  @Input('dayselected') todaysday
  public AssignmentForm: FormGroup
  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder) { }
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']

  ngOnInit(): void {
    this.AssignmentForm=  this.fb.group({
      day:['',Validators.required],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
}