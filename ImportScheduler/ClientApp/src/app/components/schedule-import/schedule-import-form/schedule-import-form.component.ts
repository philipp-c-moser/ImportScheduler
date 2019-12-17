import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ScheduleImportService } from 'src/app/services/schedule-import.service';
import { HttpRequest, HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'schedule-import-form',
  templateUrl: './schedule-import-form.component.html',
})
export class ScheduleImportFormComponent {


  constructor(private http: HttpClient) { }

  upload(files) {

    if (files.length === 0)
    {
      return;
    }

    const formData = new FormData();

    for (let file of files) 
    {
      formData.append(file.name, file);
    }


    // TODO: Move to shedule-import.service.ts
    const uploadHttpRequest = new HttpRequest('POST', '/api/import', formData);

    this.http.request(uploadHttpRequest).subscribe(event => { });
    
  }

}
