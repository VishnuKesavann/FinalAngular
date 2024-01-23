import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
<<<<<<< HEAD
import {  HttpClientModule } from '@angular/common/http';
=======
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'
>>>>>>> 267ffaa504939765d7397474aa4dd1078b6e0b37

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot( {timeOut:10000,positionClass:'toast-top-right',preventDuplicates:true}),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
<<<<<<< HEAD
    HttpClientModule
=======
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
>>>>>>> 267ffaa504939765d7397474aa4dd1078b6e0b37

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
