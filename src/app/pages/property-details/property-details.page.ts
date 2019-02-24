import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/api/property.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {
  property: Property;
  isLoadingResults = true;
  id: any;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProperty(this.id)
  }

  getProperty(id) {
    this.propertyService.findById(id)
      .subscribe(
        data => {
          this.property = new Property(data);
          console.log(this.property);
          this.isLoadingResults = false;
        }
      );
  }

  favorite(event, property) {
    this.propertyService.favorite(property).subscribe(
      async property => {
        const alert = await this.alertController.create({
          header: 'Favorites',
          message: 'Property is added to Favorites',
          buttons: ['OK']
        });
        await alert.present();
        console.log('Added to favorite')
      }
    );
  }

  like(event, property) {
    this.propertyService.like(property).subscribe(
      data => {
        this.property.likes = data
        console.log('Property liked')
      }
    );
  }

  share(event, property) {

  }

  showBroker(event, broker) {
    this.router.navigateByUrl('broker-details/'+broker.id);
  }

}
