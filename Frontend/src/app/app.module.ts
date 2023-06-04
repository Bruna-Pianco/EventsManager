import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/template/header/header.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/template/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './account/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav';
import { DashboardComponent } from './components/template/dashboard/dashboard.component';
import { EventsUpdateComponent } from './components/events-update/events-update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgImageSliderModule } from 'ng-image-slider';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { UpdatenameComponent } from './components/updatename/updatename.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventCreateComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    EventsUpdateComponent,
    UpdatenameComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMatFileInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    NgImageSliderModule,
    IvyCarouselModule
    
    

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
