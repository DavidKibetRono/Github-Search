import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubSearchService } from '../github-search.service';
import { User } from '../user';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css'],
})
export class GithubUserDetailsComponent implements OnInit {
    // declaring variables

  individualsInformation!: User;
  inputData!: string;
  userExist = false;
  @ViewChild('myForm') frm!: NgForm;
    // end of declaring variables

  constructor(public githubSearchService: GithubSearchService) {}

  ngOnInit(): void {}

  accessUser() {
    this.inputData = this.frm.value.search;
    this.githubSearchService.getUserRequest(this.inputData).then(
      (response: any) => {
        this.individualsInformation = this.githubSearchService.myData;
        this.userExist = true;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
