import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
    // declaring variables
totalRepositories!:any;
@ViewChild('myForm') searchRepoForm!: NgForm;
userSearch!: string;
displayUserRepos = false;
myRepositories!:Repository;
  // end of declaring variables

  
  constructor(public githubSearchService:GithubSearchService ) { }

  ngOnInit(): void {
  }

    // search github user repositories
    accessRepositories() {
      this.userSearch = this.searchRepoForm.value.search;
      this.githubSearchService.getRepository(this.userSearch).then(
        (response:any) => {
          this.totalRepositories = this.githubSearchService.userRepositories;
          this.displayUserRepos = true;
        },
        (error:any) => {
          console.log(error);
        }
      ); 

      // end of searchGithubUserRepositories

}
}
