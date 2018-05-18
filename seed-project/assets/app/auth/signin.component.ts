import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    selector: `app-signup`,
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();   
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [Validators.required,Validators.email]),
            password: new FormControl(null, Validators.required),
        })
    }
}