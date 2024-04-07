import { Component  } from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})

export class LoginComponent {
    ngayOfff = "";
    receivedMessage: string = 'Hello ban!';

    receiveMessage(message: string) {
        this.receivedMessage = message;
    }
}