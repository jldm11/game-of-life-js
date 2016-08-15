/*
	Cell class implementation
*/

'use strict';

function Cell () {
	
	/*
		true = living cell
		false = dead cell
	*/
	var state = false

	//This function returns true if the cell is alive, false otherwise
	this.isAlive = function() {
		return state
	}

	//This function is to kill the cell (changes state to false)
	this.killCell = function() {
		state = false
	}

	//This function is to revive the cell (changes state to true)
	this.reviveCell = function() {
		state = true
	}

	//This function is to overwrite the default toString() to print a Cell as 1 (living cell) or 0 (dead cell)
	this.toString = function() {
		return +state + ""
	}
}