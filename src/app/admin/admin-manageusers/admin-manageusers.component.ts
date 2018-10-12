import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';



@Component({
  selector: 'app-admin-manageusers',
  templateUrl: './admin-manageusers.component.html',
  styleUrls: ['./admin-manageusers.component.css']
})
export class AdminManageusersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('addUserModal') public addUserModal: ModalDirective;

  submitted = false;

  onSubmit() { this.submitted = true; }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }



  addUserModalToggle(e) {
    if (e == 1) {
      this.addUserModal.show();
    } else {
      this.addUserModal.hide();
    }
  }
}
