import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'courses'
    },
    {
        path: 'courses',
        loadChildren: () => import('../courses/courses.routing-module').then(m => m.CoursesRoutingModule)
    },
    {
        path: 'about',
        loadChildren: () => import('../about/about.routing-module').then(m => m.AboutRoutingModule)
    }
]

@NgModule({
  declarations: [
  ],
  imports: [
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
