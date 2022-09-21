import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstServiceService } from './services/first-service.service';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { SummaryPipe } from './summary.pipe';
import { ItemComponent } from './item/item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DirectivesComponent } from './directives/directives.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteIconComponent,
    SummaryPipe,
    ItemComponent,
    ItemDetailsComponent,
    DirectivesComponent,
    PostsComponent,
    PostDetailsComponent,
    TdfComponent,
    ReactiveFormsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
