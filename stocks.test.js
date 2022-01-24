var Portfolio = require('./stocks.js'); 
var assert = require('assert');

test("Testing new portfolio setup -- success", () => {
	  var portfolio = new Portfolio();
	  const target = true;
	  const target2 = 0;
	  const result = portfolio.isEmpty();
	  const result2 = portfolio.stockCount();
	  expect(target).toBe(result);
	  expect(target2).toBe(result2);
});

test("Testing empty portfolio -- success", () => {
	  var portfolio = new Portfolio();
	  const target = true;
	  const result = portfolio.isEmpty();
	  expect(target).toBe(result);
});

test("Testing number of stocks -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target = 2;
	  const result = portfolio.stockCount();
	  expect(target).toBe(result);
});

test("Testing adding stocks -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target1 = 5;
	  const target2 = 10;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
          portfolio.addStock('RBLX', 9);
	  const target3 = 19;
	  const result3 = portfolio.getSharesStock('RBLX');
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
	  expect(target3).toBe(result3);
});

test("Testing selling stock -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target1 = 5;
	  const target2 = 10;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
          portfolio.makeSale('RBLX', 9);
	  const target3 = 1;
	  const result3 = portfolio.getSharesStock('RBLX');
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
	  expect(target3).toBe(result3);
});

test("Testing getting number of shares per stock -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 4);
	  portfolio.addStock('RBLX', 6);
	  const target1 = 4;
	  const target2 = 6;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
});

test("Testing removing stock -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target1 = 5;
	  const target2 = 10;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
          portfolio.makeSale('RBLX', 10);
	  const target3 = false;
	  const result3 = ((portfolio.stocks).hasOwnProperty('RBLX'));
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
	  expect(target3).toBe(result3);
});

test("Testing overselling -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target1 = 5;
	  const target2 = 10;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
          try {	  	  
             portfolio.makeSale('RBLX', 11);
          }
	  catch (e) {
             assert.equal(e.message, 'ShareSaleException');
	  }
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
});

test("Testing selling what is not owned -- success", () => {
	  var portfolio = new Portfolio();
	  portfolio.addStock('GME', 5);
	  portfolio.addStock('RBLX', 10);
	  const target1 = 5;
	  const target2 = 10;
	  const result1 = portfolio.getSharesStock('GME');
	  const result2 = portfolio.getSharesStock('RBLX');
          try {	  	  
             portfolio.makeSale('DIS', 2);
          }
	  catch (e) {
             assert.equal(e.message, 'ShareSaleException');
	  }
	  expect(target1).toBe(result1);
	  expect(target2).toBe(result2);
});
