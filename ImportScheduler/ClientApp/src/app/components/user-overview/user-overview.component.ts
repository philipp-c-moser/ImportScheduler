import { Component, OnInit } from '@angular/core';
import { UserOverviewService } from 'src/app/services/user-overview.service';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})


export class UserOverviewComponent {

  rows: any[];
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

    this.userOverviewService.getUsers().subscribe(
      users => this.rows = users
    );

   }

 
}