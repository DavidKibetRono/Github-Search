import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubUserDetailsComponent } from './github-user-details/github-user-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyRoutingModule } from './my-routing/my-routing.module';
import { TimePassedPipe } from './time-passed.pipe';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    GithubUserDetailsComponent,
    RepositoriesComponent,
    PageNotFoundComponent,
    TimePassedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
