import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map';


export class ScheduleImportService {

    constructor(private http: Http) {}


    uploadFile(file) {
        
        return this.http
            .post('', file)
            .map(res => res.json());

    }


}