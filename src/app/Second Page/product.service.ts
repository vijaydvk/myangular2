import { Injectable } from '@angular/core';
import { Http , Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
   private _producturl='http://localhost/suncom/CRUD.php?action=getTickets4GivenStatus';
   constructor(private _http: Http){}
   
   getproducts(): Observable<> {
      return this._http.get(this._producturl)
      .map((response: Response) => response.json())
	  .catch((error:any) => console.log(error));
   }
}