import { Component } from '@angular/core';

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

  loadingIndicator = true;
  reorderable = true;


  columns = [
    { prop: 'id' },
    { prop: 'firstname' },
    { prop: 'lastname' },
    { prop: 'gender', minWidht: 50 },
    { prop: 'email', minWidth: 300 },
    { prop: 'mobilenumber', sortable: false }
  ];



}
