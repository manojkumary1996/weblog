import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  message: string = "";
  userError: any;

  constructor(public fb: FormBuilder, public authService: AuthService,public router:Router) {
    this.signup = this.fb.group({

      firstName: ['', [Validators.required]
      ],

      lastName: ['', [Validators.required]
      ],

      email: ['', [Validators.required]
      ],

      password: ['', [Validators.required, Validators.minLength(8)]
      ],

      confirmPassword: ['', [Validators.required]
      ]
    }, {
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })
  }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if (password.value == confirmPassword.value) {
        return;
      } else {
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signup) {
    let email: string = signup.value.email;
    let password: string = signup.value.password;
    let firstName: string = signup.value.firstName;
    let lastName: string = signup.value.lastName;
    this.authService.signup(email, password, firstName, lastName)
      .then((user:any) => {
        firebase.firestore().collection("users").doc(user.uid).set({
          firstName: signup.value.firstName,
          lastName: signup.value.lastName,
          email: signup.value.email,
          photoURL: user.photoURL,
          interests: "",
          bio: "",
          hobbies: ""
        }).then(() => {
          this.message = "You have been signed up successfully.";
          this.userError = null;
          this.router.navigate(['/myblogs'])
        })
      }).catch((error) => {
        console.log(error);
        this.userError = error;
      })
  }

  ngOnInit(): void {
  }

}
