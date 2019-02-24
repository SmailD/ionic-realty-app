export class Broker {

    id: number;
    firstName: String;
    lastName: String;
    title: String;
    phone: String;
    mobilePhone: String;
    email: String;
    picture: String; 

    public constructor(data) {
        this.id = data.id;
        this.firstName = data.first_name__c;
        this.lastName = data.last_name__c;
        this.title = data.title__c;
        this.phone = data.phone__c;
        this.mobilePhone = data.mobile_phone__c;
        this.email = data.email__c;
        this.picture = data.picture__c;
    }

}