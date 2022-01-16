import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { GithubUserDetailsComponent } from '../github-user-details/github-user-details.component';
import { RepositoriesComponent } from '../repositories/repositories.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'searchUser', component: GithubUserDetailsComponent },
  { path: 'searchRepos', component: RepositoriesComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),

    CommonModule
  ],
  exports: [RouterModule]
})


export class MyRoutingModule { }
