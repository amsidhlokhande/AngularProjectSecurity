import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
} )
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted: boolean = false;
  errorMessage: string;

  constructor ( private formBuilder: FormBuilder, private authenticationService: AuthenticationService ) {
    this.userForm = this.formBuilder.group( {
      username: new FormControl( '', Validators.compose( [ Validators.required, Validators.minLength( 3 ), Validators.maxLength( 20 ) ] ) ),
      password: new FormControl( '', Validators.compose( [ Validators.required, Validators.minLength( 6 ) ] ) ),
      email: new FormControl( '', Validators.compose( [ Validators.required, Validators.email ] ) )
    } );

  }

  ngOnInit(): void {
    this.errorMessage = null;
    this.formSubmitted = false;
  }

  registerSubmit() {
    this.formSubmitted = true;
    this.authenticationService.signUp( this.userForm.value ).subscribe(
      response => {
        console.log( response );
        this.userForm.reset();
      },
      err => {
        console.error( err );
        this.errorMessage = err.error.message;
      }
    );
  }

  public resetUserForm() {
    this.userForm.reset();
    this.formSubmitted = false;
    this.errorMessage = '';
  }
}
