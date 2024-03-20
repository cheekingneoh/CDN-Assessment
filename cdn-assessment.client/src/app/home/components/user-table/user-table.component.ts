import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserUpdateDialogComponent } from '../user-update-dialog/user-update-dialog.component';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {

  constructor(private userService: UserService, private dialog: MatDialog){}

  displayedColumns: string[] = ['username', 'mail', 'phoneNumber', 'skillsets', 'hobby'];
  protected users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any)=>{
      this.users = data
    })
  }

  rowClickHandler(row: User){
    console.log(row);
    this.dialog.open(UserUpdateDialogComponent,{
      data: row
    });
  }

}
