import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VirtualizenBrokerComponent } from './components/portfolio/virtualizen-broker/virtualizen-broker.component';
import { WebsiteFrontendComponent } from './components/portfolio/website-frontend/website-frontend.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'resume',component: ResumeComponent},
  {path: 'portfolio',component: PortfolioComponent},
  {path: 'virtualizen-broker',component: VirtualizenBrokerComponent},
  {path: 'website-frontend',component: WebsiteFrontendComponent},
  {path: '**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


