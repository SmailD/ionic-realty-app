import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertyService } from 'src/app/api/property.service';
import { Router } from '@angular/router';
import { Property } from 'src/app/models/property';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.page.html',
  styleUrls: ['./property-list.page.scss'],
})
export class PropertyListPage implements OnInit {
  properties: Property[];
  
  constructor(
    private propertyService: PropertyService,
    public router: Router
  ) { }

  ngOnInit() {
    this.propertyService.findAll().subscribe(
      data => {
        this.properties = data.map((item) => new Property(item))
      }
    );
  }

  itemTapped(event, property) {
    this.router.navigateByUrl('/property-details/'+property.id)
  }
}
