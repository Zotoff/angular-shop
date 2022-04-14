import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shoppinglist', // селектор, куда компонент будет вставляться 
    templateUrl: 'shoppinglist.component.html', // файл шаблона компонента 
    styleUrls: ['shoppinglist.component.scss'] // файл стилизации 
})

export class ShoppingList implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10)
    ];
    constructor(){}
    ngOnInit(){}

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}