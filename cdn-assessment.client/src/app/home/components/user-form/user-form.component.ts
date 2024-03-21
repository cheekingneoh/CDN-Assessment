import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  constructor(private userService: UserService, private SnackBar: MatSnackBar){}

  userFormControl = new FormGroup({
    username: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    skillsets: new FormControl([''], [Validators.required]),
    hobby: new FormControl('', [Validators.required]),
  })

  submitForm(){
    const skillsetArray = this.userFormControl.value.skillsets?.toString().split(",")
    this.userFormControl.get("skillsets")?.setValue(skillsetArray?skillsetArray:[])

    if(this.userFormControl.valid){
      this.userService.addUser(this.userFormControl.value).subscribe((data)=>{
        console.log(data)
      }, (error)=>{
        this.SnackBar.open(error,"x")
      })
    }
  }

}
