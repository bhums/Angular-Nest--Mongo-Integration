import { UserService } from './../services/user.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { AlertService, UserService, AuthenticationService } from '../_services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    selectedRow: any[];
    isSave = false;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        // private authenticationService: AuthenticationService,
        private userService: UserService,
        // private alertService: AlertService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailId: ['', Validators.required],
          //  password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.activatedRoute.queryParams.subscribe((params: Params) => {
         if(Object.keys(params).length !== 0) {
          this.selectedRow = JSON.parse(params['selDetails']);
          this.registerForm.get('firstName').setValue(this.selectedRow[0].firstName);
          this.registerForm.get('lastName').setValue(this.selectedRow[0].lastName);
          this.registerForm.get('emailId').setValue(this.selectedRow[0].emailId)
         } else {
            this.isSave = true;
         }

        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        if (!this.isSave) {
          this.userService.updateUser(this.selectedRow[0]._id, this.registerForm.value)
          .subscribe(
              data => {
                alert('User updated successfully');
                this.router.navigate(['/main']);
              },
              error => {
                  this.loading = false;
              });
          }
          else {
            try {
              this.userService.saveUser(this.registerForm.value)
            .subscribe(
                data => {
                  alert('User saved successfully');
                  this.router.navigate(['/main']);
                },
                error => {
                    this.loading = false;
                });
            } catch (e) {
              console.log(e);
            }

            }

        }


}
