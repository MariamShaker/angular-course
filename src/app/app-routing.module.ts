import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemComponent } from './item/item.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'favorite-icon', component: FavoriteIconComponent },
  { path: 'item', component: ItemComponent },
  { path: 'item-details', component: ItemDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/details/:postId', component: PostDetailsComponent },
  { path: 'user', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
