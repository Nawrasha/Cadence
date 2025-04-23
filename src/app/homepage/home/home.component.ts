import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from "../second/second.component";
import { ThirdComponent } from '../third/third.component';


@Component({
  selector: 'app-home',
  imports: [FirstComponent,SecondComponent,ThirdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
