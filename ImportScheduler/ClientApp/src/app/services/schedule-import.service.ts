import { Http } from '@angular/http';


export class ScheduleImportService {

    constructor(private http: Http) {}


    uploadFile(file) {

        return this.http
            .post('', file);


    }


}