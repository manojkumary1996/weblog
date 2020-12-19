import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateComponent } from './create/create.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FooterComponent } from './footer/footer.component';

let firebaseConfig = {
  apiKey: "AIzaSyC6FS2hDVFv2FX00duV0kYK6aB6rVtFT44",
  authDomain: "scribe-804a3.firebaseapp.com",
  databaseURL: "https://scribe-804a3.firebaseio.com",
  projectId: "scribe-804a3",
  storageBucket: "scribe-804a3.appspot.com",
  messagingSenderId: "435630892776",
  appId: "1:435630892776:web:bba7f59fb848b607020b5d"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MyblogsComponent,
    PostComponent,
    ProfileComponent,
    ViewComponent,
    CommentsComponent,
    CreateComponent,
    EditProfileComponent,
    CapitalizePipe,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
