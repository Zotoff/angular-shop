import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
@Component({
    selector: 'app-recipebook', // селектор, куда компонент будет вставляться 
    templateUrl: 'recipebook.component.html', // файл шаблона компонента 
    styleUrls: ['recipebook.component.scss'] // файл стилизации 
})

export class RecipeBook{
    selectedRecipe: Recipe;
    constructor(){}
    ngOnInit(){}
}