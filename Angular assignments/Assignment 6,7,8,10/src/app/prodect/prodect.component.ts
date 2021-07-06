import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent {


  filter:any='all'
  funnel:any='a-z'
  
  

  ngOnInit(): void {
  }
  
  Products=[
    {
      productId:1, productName:'Mobile',productPrice:10000,productDes:'Mobiles',productImg:'assets/images/mobile.jpg'
    },
    {
      productId:2, productName:'Table',productPrice:15000,productDes:'Tables ',productImg:'assets/images/table.jpg'},
      {
      productId:3, productName:'Chocolate',productPrice:200,productDes:'Chocolates',productImg:'assets/images/choco.jpg'},
      {
        productId:4, productName:'Laptop',productPrice:45000,productDes:'Hp',productImg:'assets/images/laptop.jpg'},
        {
          productId:5, productName:'Tv',productPrice:50000,productDes:'Tv',productImg:'assets/images/tv.jpg'}

      ]
  
}