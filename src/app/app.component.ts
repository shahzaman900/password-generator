import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    length: number = 0;
    includeLetters = false;
    includeNumbers = false;
    includeSymbols = false;
    password = '';

    onButtonClick() {
        const numbers = '1234567890';
        const letters = 'abcdefghijklmnopqrstuvxyz';
        const symbols = '!@#$%^&*()';

        let validCharacters = '';
        if (this.includeLetters) {
            validCharacters += letters;
        }

        if (this.includeNumbers) {
            validCharacters += numbers;
        }

        if (this.includeSymbols) {
            validCharacters += symbols;
        }

        let generatePassword = '';
        for (let i = 0; i < this.length; i++) {
            const index = Math.floor(Math.random() * validCharacters.length);
            generatePassword += validCharacters[index];
        }

        this.password = generatePassword;
    }

    onChangeLength(value: any) {
        const newLength = parseInt(value.target.value);

        if (!isNaN(newLength)) {
            this.length = newLength;
        }
    }

    onChangeUseLetter() {
        this.includeLetters = !this.includeLetters;
    }

    onChangeUseNumber() {
        this.includeNumbers = !this.includeNumbers;
    }

    onChangeUseSymbol() {
        this.includeSymbols = !this.includeSymbols;
    }
}
