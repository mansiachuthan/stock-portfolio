class Portfolio {
	  constructor() {
		      this.stocks = {};
		      this.shares = 0;
		    }
	  isEmpty() {
                      if (this.shares == 0) {
                          return true;
		      }
		      else
			  return false;
	  }
	  addStock(name, count) {
		      if (!(this.stocks).hasOwnProperty(name)) {
                         this.stocks[name] = count;
		         this.shares = count + this.shares;
		      }
		      else {
                         var prevCount = this.stocks[name];
                         this.stocks[name] = count + prevCount;
		         this.shares = count + this.shares;
		      }
	  }
	  stockCount() {
                      return Object.keys(this.stocks).length;
	  }
	  getSharesStock(name) {
                      return this.stocks[name];
	  }
	  makeSale(name, count) {
		      if ((this.stocks).hasOwnProperty(name)) {
                         var prevCount = this.stocks[name];
			 if (prevCount < count) {
                             throw new Error('ShareSaleException');
			 }
                         this.stocks[name] = prevCount - count;
		         this.shares = this.shares - count;
		      }
		      else {
                         throw new Error('ShareSaleException');
		      }
		      if (this.stocks[name] <= 0) {
                         delete this.stocks[name];
		      }
	  }
	 
}

module.exports = Portfolio;
