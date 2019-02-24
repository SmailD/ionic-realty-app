import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/api/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.page.html',
  styleUrls: ['./favorite-list.page.scss'],
})
export class FavoriteListPage implements OnInit {
  properties: any[];

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.propertyService.getFavorites().subscribe(
      data => this.properties = data
    );
  }

  itemTapped(event, property) {
    this.router.navigateByUrl('/property-details/'+property.id)
  }

  deleteItem(event, property) {
    this.propertyService.unfavorite(property).subscribe(
      data => {
        this.properties.forEach(element => {
          if (element.id == property.id) {
            const index = this.properties.indexOf(element);
            this.properties.splice(index, 1);
          }
        });
      }
    );
  }
}
