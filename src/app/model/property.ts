import { UUID } from "angular2-uuid";
import { Booking } from "./booking";

//classe d'un bien en location
export class Property {

    id:string = ``;
    nameProperty:string =``;
    nameOwner:string = ``;
    location:string= ``;
    pricePerNigth:number = 0;
    textOffer:string = ``;
    bookingList:Array<Booking> = [];
    assetPropertyList:Array<string> = [];
    pictureList:Array<string> =[];
    userLike:Array<boolean> = [];


    constructor(
        nameProperty:string = ``, 
        nameOwner:string = ``,
        location:string = ``,
        pricePerNigth:number = 0,
        bookingList:Array<Booking> = [],
        assetPropertyList:Array<string> = [],
        pictureList:Array<string> = [],
        userLike:Array<boolean> = [],
        textOffer:string = ``,
        id:string = UUID.UUID()
        )
        {
        this.id =id; // Génération d'un identifiant unique avec le package UUID
        this.nameProperty = nameProperty;
        this.nameOwner = nameOwner;
        this.location = location;
        this.pricePerNigth = pricePerNigth;
        this.bookingList = bookingList;
        this.assetPropertyList = assetPropertyList;
        this.pictureList = pictureList;
        this.userLike = userLike;
        this.textOffer = textOffer;
    }
}
