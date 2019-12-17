import { Component } from '@angular/core';
import { ScheduleImportService } from 'src/app/services/schedule-import.service';

@Component({
  selector: 'schedule-import-form',
  templateUrl: './schedule-import-form.component.html',
})
export class ScheduleImportFormComponent {

  constructor(private scheduleImportService: ScheduleImportService) { }


  upload(files) {

    if(files.length === 0) 
    {
      return;
    }

    const formData = new FormData();

    for(let file of files) 
    {
      formData.append(file.name, file);
    }

    this.scheduleImportService.uploadFile(formData);
    
  }

}
