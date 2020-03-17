import { MaterialModule } from './../material/material.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeResolver } from './RecipeResolver';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'recipe/list', component: RecipeListComponent },
  { path: 'recipe/add', component: AddRecipeComponent },
  {
    path: 'recipe/detail/:id',
    component: RecipeDetailComponent,
    resolve: { recipe: RecipeResolver }
  }
];
@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeFilterPipe,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [AddRecipeComponent, RecipeListComponent]
})
export class RecipeModule {}
