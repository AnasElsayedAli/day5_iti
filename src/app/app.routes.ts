import { Routes } from '@angular/router';
import { Body } from './body/body';
import { Navbar } from './navbar/navbar';
import { UserCard } from './user-card/user-card';

export const routes: Routes = [
    {path:"",component:Body},
    {path:"admin",component:Body},
    {path:"moderator",component:Body},
    {path:"user",component:Body},

];
