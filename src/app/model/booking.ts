//classe d'une réservation
export class Booking {
    client:string = ``;
    startDate:Date = new Date();
    endDate:Date = new Date();
    nigthNumber:number = 0;
    price:number = 0;

    constructor(
        client:string = ``,
         startDate:Date = new Date(), 
         endDate:Date = new Date(), 
         nigthNumber:number = 0, 
         price:number = 0)
         {
        this.client = client;
        this.startDate = startDate;
        this.endDate = endDate;
        this.nigthNumber = nigthNumber;
        this.price = price;
    }
}
