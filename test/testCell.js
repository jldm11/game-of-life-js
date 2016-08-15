/*
	Tests for Cell class
*/

'use strict';

var assert = chai.assert,
	cell

before(function(){
	cell = new Cell()
})

describe('Cell', function() {

	it('should be possible to create a Cell', function(){
		assert.instanceOf(cell, Cell, 'there is not any Cell')
	})

	it('should have a state of life', function(){
		assert.isBoolean(cell.isAlive(), 'not possible to know if it is alive or not')
	})

	it('should be killed', function(){
		cell.killCell()
		assert.equal(cell.isAlive(), false, 'cell is still alive')
	})

	it('should be revived', function(){
		cell.reviveCell()
		assert.equal(cell.isAlive(), true, 'cell is still dead')
	})

	it('should print cell state', function(){
		cell.killCell()
		assert.strictEqual(cell.toString(), "0")
	})
})