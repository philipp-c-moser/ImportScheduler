import { Component } from '@angular/core';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {

  rows = [
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
    { firstname: 'Reginald', lastname: 'Edison', gender: 'Male', email: 'ReginaldAEdison@einrot.com', mobilenumber: '206-808-8464' },
  ];

  loadingIndicator = true;
  reorderable = true;


  columns = [
    { prop: 'firstname' },
    { prop: 'lastname' },
    { prop: 'gender', minWidht: 50 },
    { prop: 'email', minWidth: 300 },
    { prop: 'mobilenumber', sortable: false }
  ];



}
