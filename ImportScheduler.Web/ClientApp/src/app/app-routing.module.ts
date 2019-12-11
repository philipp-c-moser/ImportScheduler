import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'ImportHistory', component: HomeComponent},
  { path: 'ScheduleImport', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
