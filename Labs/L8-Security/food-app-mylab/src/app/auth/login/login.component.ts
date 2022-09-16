import { Component, OnInit } from "@angular/core";
import { FBAuthService } from "../firebase-auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private as: FBAuthService, private router: Router) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  logIn(form: FormGroup) {
    this.as
      .logOn(form.value.email, form.value.password)
      .then(() => this.router.navigate(["/food"]));
  }
}