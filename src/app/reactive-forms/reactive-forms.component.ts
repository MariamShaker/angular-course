import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidators } from './validators/confim-password';
import {  forbiddenNameValidators } from './validators/custom-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {}
  show = false;
  pShow = false;
  password() {
    this.show = !this.show;
  }
  Ppassword() {
    this.pShow = !this.pShow;
  }

  // registerationForms = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     street: new FormControl(''),
  //     portalCode: new FormControl(''),
  //   }),
  // });
  registerationForms = this.fb.group(
    {
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          forbiddenNameValidators(/admin/),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],

      address: this.fb.group({
        city: [''],
        street: [''],
        portalCode: [''],
      }),
    },
    { validators: [confirmPasswordValidators] }
  );
  get userName() {
    return this.registerationForms.get('userName');
  }
  get email() {
    return this.registerationForms.get('email');
  }

  ngOnInit(): void {}
  getData() {
    this.registerationForms.patchValue({
      userName: 'mariam',
      address: {
        city: 'belbeise',
        street: 'elmatager',
        portalCode: '1235',
      },
    });
  }
  setEmailValidator(){
      this.registerationForms.get("subscribe")?.valueChanges.subscribe(checkedValue=>{
        const email= this.registerationForms.get("email");
        if(checkedValue){
          email?.setValidators(Validators.required);
        }else{
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
    })
  }
}
