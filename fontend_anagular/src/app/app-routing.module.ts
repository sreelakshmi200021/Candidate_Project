import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogincoordinatorComponent } from './logincoordinator/logincoordinator.component';
import { TrainerComponent } from './trainer/trainer.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"login", component:LoginComponent},
  {path:"logincoordinator", component:LogincoordinatorComponent},
  {path:"trainer",component:TrainerComponent},
  {path:"candidate",component:CandidateComponent},
  {path:"coordinator",component:CoordinatorComponent},
  {path:"update-candidate/:id",component:UpdateCandidateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
