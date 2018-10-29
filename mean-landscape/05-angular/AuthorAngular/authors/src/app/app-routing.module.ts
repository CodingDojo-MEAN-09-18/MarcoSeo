import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorHomeComponent } from './author-home/author-home.component';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { HttpService } from './services/http.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: AuthorHomeComponent,
      },
      {
        path: 'add',
        component: AuthorNewComponent,
      },
      {
        path: 'edit',
        component: AuthorDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
