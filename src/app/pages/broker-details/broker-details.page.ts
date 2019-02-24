import { Component, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/api/broker.service';
import { ActivatedRoute } from '@angular/router';
import { Broker } from 'src/app/models/broker';

@Component({
  selector: 'app-broker-details',
  templateUrl: './broker-details.page.html',
  styleUrls: ['./broker-details.page.scss'],
})
export class BrokerDetailsPage implements OnInit {
  id: any;
  broker: Broker;

  constructor(
    private brokerService: BrokerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBroker(this.id);
  }


  private getBroker(id) {
    this.brokerService.findById(id).subscribe(
      broker => this.broker = new Broker(broker)
    );
  }
}
