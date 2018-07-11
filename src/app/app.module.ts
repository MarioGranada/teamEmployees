import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectModule } from 'ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter';
import { AppStoreModule } from './store/app-store.module';
import { AppStore } from './app.store';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesNewComponent } from './components/employees-new/employees-new.component';
import { EmployeesEditComponent } from './components/employees-edit/employees-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './components/child-components/select-box/select-box.component';
import { SelectBoxOptionComponent } from './components/child-components/select-box-option/select-box-option.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesNewComponent,
    EmployeesEditComponent,
    SelectBoxComponent,
    SelectBoxOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false
    // }),
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({ count: counterReducer })
    AppStoreModule
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
