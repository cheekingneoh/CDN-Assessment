import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private userService: UserService){}

  protected loggedIn: boolean = false
  protected AuthenticationButtonText: string = "Authenticate"

  public authenticateButtonHandler(){
    if(this.loggedIn){
      localStorage.setItem('token', "")
      this.AuthenticationButtonText = "Authenticate"
    }else{
      this.userService.authenticate({email:"test@test.com"}).subscribe((JwtToken: string)=>{
        console.log(JwtToken)
        localStorage.setItem('token', JwtToken)
      })
      this.AuthenticationButtonText = "Log out"
    }
    this.loggedIn = !this.loggedIn
  }

  
}
