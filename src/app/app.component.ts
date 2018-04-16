import { Component } from '@angular/core';
//import { CONST_ROUTING } from './app.routing';
import { DispJSON } from './AcessJSON/AccessJSON';



@Component({
  selector: 'app-root',
  template: `<div class="row">
   <div class="col-xs-12">
    <ul class="nav nav-pills">
     <li routerLinkActive="active"> <a [routerLink]="['/']" >Index</a></li>
     <li routerLinkActive="active"> <a [routerLink]="['/home']" >Home</a></li>
     <li routerLinkActive="active"> <a [routerLink]="['/weather']" >Weather</a></li>
    </ul>
  </div>
 </div>
  <button (click)="loadUser()">Load profile</button>
  <router-outlet></router-outlet>
      <table class="table">
                    <tr>
                        <th>#</th>
                        <th>UID</th>
                        <th>Name</th> 
                    </tr>
                    <tr *ngFor="let pf of profile; let i = index">
                        <td>{{i + 1}}</td>
                        <td>{{pf.uid}}</td>
                        <td>{{pf.name}}</td>
                    </tr>
                </table>
  {{ profile | json }}`,
  providers:[DispJSON],
  //templateUrl: './home.component.html',
  //styleUrls: ['./app.component.css'],
  //directives: [CONST_ROUTING] //here
  
})
export class AppComponent {
    constructor(private dispJSON: DispJSON) {
        console.log("hi");
	}
		//console.log(name.getUser());
profile = [];

  loadUser() {
    console.log(this.dispJSON.getUser().subscribe(data => this.profile = data));
	console.log("here");
    }

}
