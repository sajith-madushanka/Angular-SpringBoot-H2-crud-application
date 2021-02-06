import { PetDetailsComponent } from './pet-details/pet-details.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

const routes: Routes = [
  { path: '', redirectTo: 'pet', pathMatch: 'full' },
  { path: 'pets', component: PetListComponent },
  { path: 'add', component: CreatePetComponent },
  { path: 'update/:id', component: UpdatePetComponent },
  { path: 'details/:id', component: PetDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }