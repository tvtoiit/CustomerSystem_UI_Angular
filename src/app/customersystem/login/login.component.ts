import { Component, ViewChild, ElementRef } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    @ViewChild('userName') userNameInput!: ElementRef;
    @ViewChild('password') passWordInput!: ElementRef;

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {}
    onLogin = () => {
        const userName = this.userNameInput.nativeElement.value;
        const passWord = this.passWordInput.nativeElement.value;

        //search/handleSearchCustomer.php
        this.apiService.postData('login/handleLogin', {username: userName, password: passWord })
            .subscribe(
                response => {
                    this.router.navigate(['/search']);
                },
                error => {
                    console.log('Login Errors', error);
                }
            );
        
        
    } 
}