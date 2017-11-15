import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GitscoreService {
  data;
  constructor(private _http:Http) { }
  getdata(str,score){
    this._http.get("https://api.github.com/users/"+str).subscribe(response=>{
      this.data=response.json();
      score(this.data);
    },error=>{
      console.log(error)
      this.data=false;
      score(this.data);
    })
  }
}

