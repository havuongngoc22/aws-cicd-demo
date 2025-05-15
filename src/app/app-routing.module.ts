import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';

const routes: Routes = [
  { path: 'new-page', component: NewPageComponent },
  { path: '', redirectTo: '/new-page', pathMatch: 'full' }, // Optional: Redirect to new-page by default
  { path: '**', redirectTo: '/new-page' } // Optional: Wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}