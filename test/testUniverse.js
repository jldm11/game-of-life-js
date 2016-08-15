/*
	Tests for Universe class
*/

'use strict';

var assert = chai.assert,
	universe, rows, columns, squareUniverse

before(function() {
	rows = 4
	columns = 6
	universe = new Universe(rows, columns)
})

describe('Universe', function() {

	it('should exist a universe', function(){
		assert.instanceOf(universe, Universe, 'universe does not exists')
	})

	it('should have a population', function(){
		assert.property(universe, 'population', 'universe has not a population')
	})

	it('should print population', function(){
		var littleUniverse = new Universe(3,3)
		assert.equal(littleUniverse.toString(), "\n0 0 0\n0 0 0\n0 0 0\n")
	})

	describe('Population', function(){

		it('should be an matrix of cells', function(){
			assert.isArray(universe.population, 'population is not an array')

			universe.population.forEach(function(column){
				assert.isArray(column, column + ' population is not an array')
				column.forEach(function(item){
					assert.instanceOf(item, Cell, item + ' is not a Cell')
				})
			})
		})

		it('should have the correct size', function(){
			assert.equal(universe.population.length, rows, 'population has not the correct rows')
			if(rows !== 0)
				assert.equal(universe.population[0].length, columns, 'population has not the correct rows')
		})

		it('should have some living Cells', function(){
			universe.randomPopulation()
			var livingCells = 0
			universe.population.forEach(function(column){
				column.forEach(function(item){
					if(item.isAlive())
						livingCells++
				})
			})
			assert.notEqual(livingCells, 0, 'there are not living cells')
		})

		before(function(){
			/*
				0 0 0
				1 1 1
				0 0 0
			*/
			squareUniverse = new Universe(3, 3)
			squareUniverse.population[1][0].reviveCell()
			squareUniverse.population[1][1].reviveCell()
			squareUniverse.population[1][2].reviveCell()
		})

		it('should return the living neighbors of any Cell', function(){
			var row = 1,
				column = 1,
				livingNeighbors = squareUniverse.getCellLivingNeighbors(row, column)
			assert.equal(livingNeighbors, 2, 'does not contains all neighbors')
		})

		it('should be possible to know the cell state in the next generation', function(){
			assert.equal(squareUniverse.shouldItBeAlive(0, 0), false)
			assert.equal(squareUniverse.shouldItBeAlive(0, 1), true)
			assert.equal(squareUniverse.shouldItBeAlive(0, 2), false)
			assert.equal(squareUniverse.shouldItBeAlive(1, 0), false)
			assert.equal(squareUniverse.shouldItBeAlive(1, 1), true)
			assert.equal(squareUniverse.shouldItBeAlive(1, 2), false)
			assert.equal(squareUniverse.shouldItBeAlive(2, 0), false)
			assert.equal(squareUniverse.shouldItBeAlive(2, 1), true)
			assert.equal(squareUniverse.shouldItBeAlive(2, 2), false)
		})

		it('should genetare the new cells generation', function(){
			squareUniverse.getNewGeneration()
			assert.equal(squareUniverse.toString(), "\n0 1 0\n0 1 0\n0 1 0\n")
		})
	})
})
