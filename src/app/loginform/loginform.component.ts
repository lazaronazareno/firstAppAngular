import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]],
    })
   }
  
   ngOnInit(): void {}
   
   get Password(){
     return this.form.get("password");
    }
    
    get Mail(){
      return this.form.get("email");
    }
    
    get PasswordValid(){
      return this.Password?.touched && !this.Password?.valid;
    }
    
    get MailValid() {
      return false
    }
    
    onSend(e: Event) {
      e.preventDefault
  
      if(this.form.valid){
        console.log('formulario valido!' +' password: '+ this.form.value.password +' mail : ' + this.form.value.email)
      } else {
        this.form.markAllAsTouched()
      }
    }
}
