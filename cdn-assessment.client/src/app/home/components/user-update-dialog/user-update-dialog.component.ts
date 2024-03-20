import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'user-update-dialog',
  templateUrl: './user-update-dialog.component.html',
  styleUrl: './user-update-dialog.component.css'
})
export class UserUpdateDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<UserUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private userService: UserService,
    private SnackBar: MatSnackBar,
  ) {}
  
  userUpdateFormControl = new FormGroup({
    username: new FormControl(this.user.username, [Validators.required]),
    mail: new FormControl(this.user.mail, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(this.user.phoneNumber, [Validators.required]),
    skillsets: new FormControl(this.user.skillsets, [Validators.required]),
    hobby: new FormControl(this.user.hobby, [Validators.required]),
  })

  submitForm(){
    const skillsetArray = this.userUpdateFormControl.value.skillsets?.toString().split(",")
    this.userUpdateFormControl.get("skillsets")?.setValue(skillsetArray?skillsetArray:[])


    this.userService.updateUser(this.userUpdateFormControl.value, this.user.username).subscribe((result)=>{
      console.log(result)
      this.dialogRef.close();
    }, (error)=>{
      this.SnackBar.open(error,"x")
    })

  }

  deleteUser(){
    this.userService.deleteUser(this.user.username).subscribe((result)=>{
      console.log("Deleted User", this.user.username)
    }, (error)=>{
      this.SnackBar.open(error,"x")
    })

    this.dialogRef.close();
  }
}
