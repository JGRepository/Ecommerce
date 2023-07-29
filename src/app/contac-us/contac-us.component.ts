import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contac-us',
  templateUrl: './contac-us.component.html',
  styleUrls: ['./contac-us.component.scss']
})
export class ContacUsComponent {
  @ViewChild('inputName') nameInputRef!: ElementRef;
  @ViewChild('inputEmail') emailInputRef!: ElementRef;
  @ViewChild('textArea') textArealInputRef!: ElementRef;

  OnSubmit() {

    const nameInp = this.nameInputRef.nativeElement.value;
    const emailInp = this.emailInputRef.nativeElement.value;
    const textArea = this.textArealInputRef.nativeElement.value;
  }
  OnClose() {

    this.nameInputRef.nativeElement.value = '';
    this.emailInputRef.nativeElement.value = '';
    this.textArealInputRef.nativeElement.value = '';
  }
}

