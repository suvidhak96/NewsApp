import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'technews',component:TechnologyNewsComponent},
  {path:'businessnews', component:BusinessNewsComponent},
  {path:'health', component:HealthNewsComponent},
  {path:'sports', component:SportsNewsComponent},
  {path:'science', component:ScienceNewsComponent},
  {path:'entertain',component:EntertainmentNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
