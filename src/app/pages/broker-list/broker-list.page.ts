import { Component, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/api/broker.service';
import { Router } from '@angular/router';
import { Broker } from 'src/app/models/broker';

@Component({
  selector: 'app-broker-list',
  templateUrl: './broker-list.page.html',
  styleUrls: ['./broker-list.page.scss'],
})
export class BrokerListPage implements OnInit {
  brokers: Broker[];

  constructor(
    private brokerService: BrokerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBrokers();
  }

  getBrokers() {
    this.brokerService.findAll().subscribe(
      data => {
        this.brokers = data.map((item) => new Broker(item))
      }
    );
  }

  itemTapped(event, broker) {
    this.router.navigateByUrl('/broker-details/'+broker.id);
  }

}
