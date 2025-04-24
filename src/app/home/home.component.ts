import { Component } from '@angular/core';
import { FirstComponent } from '../homepage/first/first.component';
import { SecondComponent } from '../homepage/second/second.component';
import { ThirdComponent } from '../homepage/third/third.component';
import { RatingComponent } from '../homepage/rating/rating.component';
import { ProductComponent } from '../homepage/product/product.component';

@Component({
  selector: 'app-home',
  imports:[FirstComponent, SecondComponent,ThirdComponent,RatingComponent ,ProductComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
