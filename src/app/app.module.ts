import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import{HttpClientModule} from'@angular/common/http'
import { NewsapiService } from './services/newsapi.service';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HealthNewsComponent } from './health-news/health-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnologyNewsComponent,
    BusinessNewsComponent,
    HealthNewsComponent,
    SportsNewsComponent,
    ScienceNewsComponent,
    EntertainmentNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
