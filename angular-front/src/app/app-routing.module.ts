import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { PlatDetailsComponent } from './components/plat-details/plat-details.component';
import { PlatsListComponent } from './components/plats-list/plats-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'plats', component: PlatsListComponent },
  { path: 'plats/:id', component: PlatDetailsComponent },
  { path: 'add', component: AddPlatComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
