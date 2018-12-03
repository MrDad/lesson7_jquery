/*
    Program Name: Recipe Display Application 
    
    Author: Anthony Haddad
    
    Date: 12/3/2018
    
    Filename: myRecipe.js
    
*/

/* global $ */

//displays and animates the next element after the current target
function myRecipeDisplay (event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
    
} //end of myRecipeDisplay

//event listener to h3 elements to invoke myRecipeDisplay function when clicked
$("h3").click(myRecipeDisplay);

