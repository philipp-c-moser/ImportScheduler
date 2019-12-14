import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScheduleImportComponent } from './components/schedule-import/schedule-import/schedule-import.component';
import { ImportHistoryComponent } from './components/import-history/import-history.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ImportHistory', component: ImportHistoryComponent},
  { path: 'ScheduleImport', component: ScheduleImportComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
