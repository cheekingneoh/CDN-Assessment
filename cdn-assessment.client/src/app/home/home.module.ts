import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MatTableModule} from '@angular/material/table';
import { UserUpdateDialogComponent } from './components/user-update-dialog/user-update-dialog.component';
import {
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    HomeComponent,
    UserFormComponent,
    UserTableComponent,
    UserUpdateDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogTitle,
    MatDialogContent,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
