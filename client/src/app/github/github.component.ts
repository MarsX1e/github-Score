import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GitscoreService } from '../gitscore.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:{[key:string]:string};
  score:number;
  constructor(private _service:GitscoreService) {
    this.user={"name":""};
   }
   getscore(){
    this._service.getdata(this.user.name,(data)=>{
      if(data==false){
        this.score=undefined;
        console.log("problem");
      }
      else{
        this.score=data["public_repos"]+data["followers"];
        console.log(this.score);
      }
      
    })
   }
  ngOnInit() {
  }

}
