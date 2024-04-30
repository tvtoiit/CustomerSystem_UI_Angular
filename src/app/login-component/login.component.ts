import { Component } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

interface Customer {
    customerName: string;
    sex: string;
    birthday: string;
}

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    customers: Customer[] = [];
    displayedColumns: string[] = ['customerName', 'sex', 'birthday'];

    constructor(private http: HttpClient) { } 

    ngOnInit(): void {
        this.xemDanhSach();
      }

    xemDanhSach() {
        this.http.get<Customer[]>('http://localhost/Customer_ST_Angular/api/search/handleSearchCustomer.php', {responseType: 'json'})
          .subscribe(
            (data: Customer[]) => { 
                this.customers = data;
            },
            (error) => {
              console.error(error);
            }
        );
    }
}