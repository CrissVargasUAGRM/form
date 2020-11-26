import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'form/:id', component: FormComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
