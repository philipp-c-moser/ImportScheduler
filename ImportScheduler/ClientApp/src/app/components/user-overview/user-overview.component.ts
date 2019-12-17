import { Component, OnInit } from '@angular/core';
import { UserOverviewService } from 'src/app/services/user-overview.service';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})


export class UserOverviewComponent {

  rows = [];
  columns = [
    { prop: 'id' },
    { prop: 'firstName' },
    { prop: 'lastName' },
    { prop: 'gender', minWidht: 50 },
    { prop: 'email', minWidth: 300 },
    { prop: 'mobileNumber', sortable: false }
  ];

  loadingIndicator = true;
  reorderable = true;

  constructor(private userOverviewService: UserOverviewService) {

    this.userOverviewService.getUsers().subscribe(
      users => this.rows = users
    );

   }

 
}