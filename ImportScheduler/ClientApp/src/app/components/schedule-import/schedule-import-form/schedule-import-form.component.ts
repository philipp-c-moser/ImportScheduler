import { Component } from '@angular/core';

@Component({
  selector: 'schedule-import-form',
  templateUrl: './schedule-import-form.component.html',
})
export class ScheduleImportFormComponent {


  submit(files) {

    if(files.length === 0) 
    {
      return;
    }

    const formData = new FormData();

    for(let file of files) 
    {
      formData.append(file.name, file);
    }

    
    
  }

}
