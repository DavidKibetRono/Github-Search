import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
 //declaring variables
 username = 'DavidKibetRono';
 personalToken = environment.apiKey;
 userRepositories: any;
 myData: any;
 // end of declaring variables

 constructor(private http: HttpClient) {
  this.myData = new User('', '', '', '', '', 0, 0, 0, 0, new Date());
  this.userRepositories = new Repository('', '', '', '', new Date());
}


  // from homepage

  retrieveSearchData() {
    return this.http.get('https://api.github.com/users/' +this.username +'?client_id=' +'&client_secret=' +this.personalToken
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getProfileRepositories() {
    return this.http.get('https://api.github.com/users/' +this.username +'/repos?client_id=' +this.personalToken
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

}
