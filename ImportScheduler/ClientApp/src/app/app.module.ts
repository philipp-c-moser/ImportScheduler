import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';

import { UserOverviewService } from './services/user-overview.service';
import { ScheduleImportService } from './services/schedule-import.service';

import { AppComponent } from './components/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleImportComponent } from './components/schedule-import/schedule-import/schedule-import.component';
import { ScheduleImportFormComponent } from './components/schedule-import/schedule-import-form/schedule-import-form.component';
import { ImportHistoryComponent } from './components/import-history/import-history.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ImportHistoryComponent,
    ScheduleImportComponent,
    ScheduleImportFormComponent,
    UserOverviewComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    UserOverviewService,
    ScheduleImportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
