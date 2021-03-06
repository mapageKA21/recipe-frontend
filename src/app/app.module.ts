import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { PostRecipeComponent } from './post-recipe/post-recipe.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main.component';
import { SignupComponent } from './signup/signup.component';
import { AuthEvent } from './auth-event';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    PostRecipeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    FooterComponent,
    RecipeCardComponent,
    LoginComponent,
    MainComponent,
    SignupComponent,
    SuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RecipesComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'postRecipe',
        component: PostRecipeComponent
      },
      {
        path: 'suggestion',
        component: SuggestionComponent
      },
      {
        path: 'recipes/:id',
        component: RecipeCardComponent
      }
    ])
  ],
  providers: [AuthEvent],
  bootstrap: [AppComponent]
})

export class AppModule { }
