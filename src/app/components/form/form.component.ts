import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save( forma: NgForm): any{
    if( forma.invalid ){
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }
}
