# game-of-life-js

Conway's game of life using javascript

## Getting Started

Clone the repository in your local machine or download the zip file.

### Prerequisities

To run this program you only need a browser and internet connection to download mocha.js and chai.js libraries.

### Installing and running

Once you cloned or downloaded and unzip the files:

Open sampleUsage.html file in your browser

```
game-of-life-js\sampleUsage.html
```

The page will show you three simple examples of the game, you only need to click on the "Next Generation" button to see the game in action.

This page is manipulated by runLife.js file
```
js\runLife.js
```
Which is using the classes Cell and Universe.

```
js\cell.js
js\universe.js
```

To restart the games just reload the page.

## Running the tests

The tests for this program were made using mocha.js and chai.js. Inside the test folder you will find two files to test the behavior for the two main involved entities, Cell and Universe:

```
tests\testCell.js
tests\testUniverse.js
```

To run all the tests just open testRunner.html file in your browser

```
game-of-life-js\testRunner.html
```

## Authors

* **José Luis Díaz** - [jldm11](https://github.com/jldm11)