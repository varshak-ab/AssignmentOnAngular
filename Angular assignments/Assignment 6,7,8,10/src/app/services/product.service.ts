import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:any='assets/json/product.json'

  constructor(private http:HttpClient) { }

  getProductsInfo():Observable<any>{

    return this.http.get(this.baseUrl)
 //return 
  //  [
     // {
       // productId:1, productName:'Mobile',productPrice:10000,productDes:'Mobiles',productImg:'assets/images/mobile.jpg'
     // },
     // {
      //  productId:2, productName:'Table',productPrice:15000,productDes:'Tables ',productImg:'assets/images/table.jpg'},
       // {
      //  productId:3, productName:'Chocolate',productPrice:200,productDes:'Chocolates',productImg:'assets/images/choco.jpg'},
       // {
        //  productId:4, productName:'Laptop',productPrice:45000,productDes:'Hp',productImg:'assets/images/laptop.jpg'},
         // {
          //  productId:5, productName:'Tv',productPrice:50000,productDes:'Tv',productImg:'assets/images/tv.jpg'}
  

  //  ]
 }
}
