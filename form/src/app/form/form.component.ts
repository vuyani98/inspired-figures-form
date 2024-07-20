import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  alert  = false;
  constructor(private router: Router){

  }

  showAlert(){
    this.router.navigateByUrl('/review')
  }
}
