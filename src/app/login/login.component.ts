import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logindata;

  constructor(private router: Router) { }

  ngOnInit() {
    this.logindata = new FormGroup({
         username: new FormControl(""),
         password: new FormControl("")
      });
  }

  onClickSubmit(data) {
      console.log(data.username);
      if (data.username == "systemadmin" && data.password == "admin123") {
         alert("Login Successful");
         this.router.navigate(['/home']);
      }
   }

}
