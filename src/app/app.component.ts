import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    password = "";

    onButtonClick() {
        this.password = "My Password!!!!!!";
    }
}
