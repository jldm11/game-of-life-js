/*
	This js file is to show how to run the game of life
*/

'use strict';
//Universe with random population
var randomUniverse = new Universe(8, 8)
randomUniverse.randomPopulation()
document.getElementById('randomPtrnDisplay').innerHTML = randomUniverse.toString()

//Universe with repeat pattern
var repeatUniverse = new Universe(3, 3)
repeatUniverse.population[1][0].reviveCell()
repeatUniverse.population[1][1].reviveCell()
repeatUniverse.population[1][2].reviveCell()
document.getElementById('repeatPtrnDisplay').innerHTML = repeatUniverse.toString()

//Universe with glider pattern
var gliderUniverse = new Universe(10, 12)
gliderUniverse.population[0][0].reviveCell()
gliderUniverse.population[0][2].reviveCell()
gliderUniverse.population[1][1].reviveCell()
gliderUniverse.population[1][2].reviveCell()
gliderUniverse.population[2][1].reviveCell()
document.getElementById('gliderPtrnDisplay').innerHTML = gliderUniverse.toString()


//This function displays the new generation of cells in the page
function showNextGeneration(universe, elementId){
	universe.getNewGeneration()
	universe.toString()
	document.getElementById(elementId).innerHTML = universe.toString()
}
