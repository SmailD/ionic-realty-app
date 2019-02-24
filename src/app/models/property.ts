import { Broker } from "./broker";

class Property {

    id: number;
    city: string
    state: string
    price: string
    title: string
    beds: number
    baths: number
    likes: number
    broker: Broker
    pic: string
    thumb: string
    description: string
    zip: string

    public constructor(data) {
        console.log(data)
        this.id = data.id;
        this.city = data.city__c;
        this.state = data.state__c;
        this.price = data.price__c;
        this.title = data.title__c;
        this.beds = data.beds__c;
        this.baths = data.baths__c;
        this.likes = data.likes__c;
        this.broker = data.broker ? new Broker(data.broker) : null;
        this.pic = data.pic__c;
        this.thumb = data.thumb__c;
        this.description = data.description__c;
        this.zip = data.zip__c;
    }

}

export { Property }