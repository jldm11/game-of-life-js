/*
	Universe class implementation
	Every Universe contains a population of Cells
*/

'use strict';

function Universe (rows = 1, columns = 1) {
	
	//population contains all the cells
	this.population = initPopulation(rows, columns)

	//This function puts some living cells in the population, randomly
	this.randomPopulation = function(){
		var population = this.population
		population.forEach(function(column, index){
			var newColumn = column.map(function(cell){
				var randomState = Math.round(Math.random())
				if(randomState)
					cell.reviveCell()
				return cell
			})
			population[index] = newColumn
		})
	}

	//This function returns the living cells around the cell indicated with the parameters
	this.getCellLivingNeighbors = function(row, column){
		var rows = this.population.length,
			columns = this.population[0].length | 0,
			livingNeighbors = 0

		//Cells above target cell
		if(row - 1 >= 0){
			livingNeighbors += +(this.population[row - 1][column])
			if(column - 1 >= 0)
				livingNeighbors += +(this.population[row - 1][column - 1])
			if(column + 1 < columns)
				livingNeighbors += +(this.population[row - 1][column + 1])
		}

		//Cells on the sides of target cell
		if(column - 1 >= 0)
			livingNeighbors += +(this.population[row][column - 1])
		if(column + 1 < columns)
			livingNeighbors += +(this.population[row][column + 1])

		//Cells below target cell
		if(row + 1 < rows){
			livingNeighbors += +(this.population[row + 1][column])
			if(column - 1 >= 0)
				livingNeighbors += +(this.population[row + 1][column - 1])
			if(column + 1 < columns)
				livingNeighbors += +(this.population[row + 1][column + 1])
		}

		return livingNeighbors
	}

	this.getNewGeneration = function() {
		var newGeneration = [],
			universe = this
		this.population.forEach(function(column, rowIndex) {
			var newColumn = column.map(function(cell, columnIndex){
				var newCell = new Cell()
				if(universe.shouldItBeAlive(rowIndex, columnIndex))
					newCell.reviveCell()
				else
					newCell.killCell()
				return newCell
			})
			newGeneration.push(newColumn)
		})

		this.population = newGeneration
	}

	/*
		This function applies the game rules to the cell indicated with the parameters
		- Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
		 -Any live cell with more than three live neighbours dies, as if by overcrowding.
		- Any live cell with two or three live neighbours lives on to the next generation.
		- Any dead cell with exactly three live neighbours becomes a live cell.
	*/
	this.shouldItBeAlive = function(row, column){
		var totalLivingNeighbors = this.getCellLivingNeighbors(row, column)

		if(this.population[row][column].isAlive()) {
			if(totalLivingNeighbors === 2 || totalLivingNeighbors === 3)
				return true
		} else {
			if(totalLivingNeighbors === 3)
				return true
		}

		return false
	}

	//This function is to overwrite the default toString() and print the population matrix as a string with \n
	this.toString = function() {
		var matrixString = "\n"

		this.population.forEach(function(column){
			matrixString +=  column.join(' ') + '\n'
		})

		return matrixString
	}

	//Universe constructor uses this function to fill the population matrix with Cell objects
	function initPopulation(rows, columns){
		var cellsPopulation = new Array(rows)
		for(var i = 0; i < rows; i++){
			cellsPopulation[i] = new Array()
			for(var j = 0; j < columns; j++){
				cellsPopulation[i].push(new Cell())
			}
		}
		return cellsPopulation
	}
}