import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsF1Component } from './champions-f1/champions-f1.component';
import { AddChampionsComponent } from './add-champions/add-champions.component';

const routes: Routes = [
  {path:'champions', component:ChampionsF1Component},
  {path:'', redirectTo:'/champions', pathMatch:'full'},
  {path:'addchampions', component:AddChampionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
