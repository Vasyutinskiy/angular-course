import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';

const routes: Route[] = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
