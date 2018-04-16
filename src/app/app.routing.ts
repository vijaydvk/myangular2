import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppHomeComponent } from './HomePage/weather.component';

const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'weather', component: WeatherComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
