import { Component, OnInit } from '@angular/core';
import { UserOverviewService } from 'src/app/services/user-overview.service';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})


export class UserOverviewComponent {

  rows = [
    { id: 1, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 2, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 3, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 4, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 5, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 6, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 7, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 8, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 9, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 10, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 11, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { id: 12, firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
  ];
  columns = [
    { prop: 'id' },
    { prop: 'firstname' },
    { prop: 'lastname' },
    { prop: 'gender', minWidht: 50 },
    { prop: 'email', minWidth: 300 },
    { prop: 'mobilenumber', sortable: false }
  ];

  loadingIndicator = true;
  reorderable = true;

  constructor(private userOverviewService: UserOverviewService) {

    // this.rows = this.userOverviewService.getUsers();


   }

 


  

}