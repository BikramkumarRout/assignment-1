import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexComponent } from './spacex/spacex.component';

const routes: Routes = [
  {path: '', redirectTo: 'spacex', pathMatch: 'prefix'},
  { path: 'spacex' , component: SpacexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
