import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product"; 

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Mysteries 5000";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false; // define a class property that keeps track of whether the images are currently displayed
  
  _listFilter: string;
  // The get syntax binds an object property to a function that will be called when that property is looked up.
  get listFilter(): string {
    return this._listFilter;
  }
  // The set syntax binds an object property to a function to be called when there is an attempt to set that property.
  set listFilter(value: string) { 
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2016",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2016",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
      productId: 10,
      productName: "Video Game Controller",
      productCode: "GMG-0042",
      releaseDate: "October 15, 2015",
      description: "Standard two-button video game controller",
      price: 35.95,
      starRating: 4.6,
      imageUrl:
        "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "saw";
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); 
  }
  
  toggleImage(): void { // no return type, so declare as void
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("In OnInit");
  }
    // build the method that the event binding will call; goes after all properties are declared by convention
}
