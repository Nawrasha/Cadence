import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [FormsModule , RouterModule,CommonModule], 
  templateUrl: './accounte.component.html',
  styleUrl: './accounte.component.css'
})
export class AccounteComponent {
  
}
