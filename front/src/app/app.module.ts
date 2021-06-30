import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ConfirmDialogComponent} from "./components/confirm-dialog/confirm-dialog.component";
import {PeopleAddComponent} from "./pages/people/people-add/people-add.component";
import {PeopleDetailsComponent} from "./pages/people/people-details/people-details.component";
import {PeopleListComponent} from "./pages/people/people-list/people-list.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import {PeopleService} from "../shared/services/people.service";
import {MatInputModule} from "@angular/material/input";
import {PeopleSearchComponent} from "./pages/people/people-search/people-search.component";

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    ConfirmDialogComponent,

    PeopleAddComponent,
    PeopleDetailsComponent,
    PeopleListComponent,
    PeopleSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatTooltipModule
  ],
  providers: [
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
