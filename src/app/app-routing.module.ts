import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {ContacUsComponent} from "./contac-us/contac-us.component"
import { VitrineComponent } from './vitrine/vitrine.component';

const routes: Routes = [
  {path: '', redirectTo: '/vitrine', pathMatch: 'full'},
  {path: 'vitrine', component:VitrineComponent},
  {path: 'contact', component:ContacUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
