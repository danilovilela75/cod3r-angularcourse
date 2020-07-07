import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ProductsCrudComponent } from './components/views/products-crud/products-crud.component';
import { ProductsCreateComponent } from './components/views/products-create/products-create.component';


const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },

  {
    path: "products",
    component: ProductsCrudComponent
  },

  {
    path: "products/create",
    component: ProductsCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

