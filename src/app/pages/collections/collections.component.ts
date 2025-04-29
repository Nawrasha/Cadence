import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-collections',
  imports: [CommonModule,RouterModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css',
  standalone: true
})
export class CollectionsComponent {

  categories: any[] = [];
  constructor(public services: ServicesService) {
    this.getCategories()
  }

  async getCategories() {
    await this.services.getCategories().then((data:any) => {
      this.categories = data;
    })
  }
}
