import { AuthService } from './../auth.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean;
  myForm:FormGroup;
  message:string="";
  userError:any;
    constructor(public fb:FormBuilder, public authService:AuthService, public router:Router) {
      this.myForm=this.fb.group({
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required]]
      })
    }

  ngOnInit(): void {
  }


toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
  onSubmit(myForm){
    this.authService.login(myForm.value.email,myForm.value.password)
    .then((data)=>{
      console.log(data);
      this.message="You have been logged in successfully. "

      this.router.navigate(['/myblogs'])

    }).catch((error)=>{
      console.log(error);
      this.userError=error;
    })
  }
}
