import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GitscoreService } from './gitscore.service';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitscoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
