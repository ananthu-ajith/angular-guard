import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { guardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { adminGuard } from './admin.guard';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full',
    },
    {
        path:'login',
        component:LoginComponent,
        
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[guardGuard]
    },
    {
        path:'setting',
        component:SettingsComponent,
        canActivate:[adminGuard]
    },
    {
        path:'profile',
        component:ProfileComponent,
    }
];
