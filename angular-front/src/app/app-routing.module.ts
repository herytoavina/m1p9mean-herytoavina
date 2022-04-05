import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { PlatDetailsComponent } from './components/plat-details/plat-details.component';
import { PlatsListComponent } from './components/plats-list/plats-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: PlatsListComponent },
  { path: 'tutorials/:id', component: PlatDetailsComponent },
  { path: 'add', component: AddPlatComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
