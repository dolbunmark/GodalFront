import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private router: Router,
                private http: HttpClient) {

        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl('', [
                Validators.required
            ])
        });
    }

    ngOnInit(): void {

    }


    submit(): void {
        console.log(this.form.value);
        this.router.navigate(["/products"]);
        if (this.form.valid) {
            const headers = new HttpHeaders({
                Authorization: 'Basic ' + btoa(this.form.value.email + ':' + this.form.value.password)
            });
            this.http.get('http://localhost:4200/api', {headers, responseType: 'json'})
                .subscribe(response => {
                    console.log(this.form);
                });
        }
    }
}

