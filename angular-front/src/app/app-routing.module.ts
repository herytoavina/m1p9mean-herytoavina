import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardDelivererComponent } from './components/board-deliverer/board-deliverer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatDetailsComponent } from './components/plat-details/plat-details.component';
import { PlatsListComponent } from './components/plats-list/plats-list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'deliverer', component: BoardDelivererComponent },
  { path: 'plats', component: PlatsListComponent },
  { path: 'plats/:id', component: PlatDetailsComponent },
  { path: 'add', component: AddPlatComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
