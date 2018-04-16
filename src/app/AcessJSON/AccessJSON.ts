import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DispJSON {
	
 constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`http://localhost/suncom/CRUD.php?action=getTickets4GivenStatus`)
    .map((res:Response) => res.json());
  }

}