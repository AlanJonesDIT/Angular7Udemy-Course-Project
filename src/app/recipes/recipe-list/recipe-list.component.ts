import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_640.jpg'),
    new Recipe('Another Recipe', 'This is another test', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_640.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
