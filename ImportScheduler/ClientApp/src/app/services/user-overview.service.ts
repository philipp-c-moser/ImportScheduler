import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import  { map } from 'rxjs/operators';


@Injectable()
export class UserOverviewService {

    constructor(private http: Http) {}


    getUsers() {
        return this.http
            .get('/api/users').map(res => res.json());
    }


}