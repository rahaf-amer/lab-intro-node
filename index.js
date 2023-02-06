class SortedList {
  constructor() {}
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }
}

add(item) {}
  add(item) {
    this.item.push(item);
    this.item.sort((a,b) => a - b );
    this.length = this.item.length;
  }

  get(pos) {}
  get(pos) {
    if(pos < 0 || pos > this.items.length ){
      throw new Error('OutOfBounds');
    } 
    else {
    return this.item[pos];
  }
  }

  max() {}
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    else {
      return Math.max(...this.items);
  }
}

 min() {}
  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    }
  }

  sum() {}
  sum() {
    if (this.length === 0) return 0;
  }
  else {
      sum = this.items.reduce((a, b) => a + b, 0);
      return sum;
    }

  avg() {}
  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } 
    else {
      return this.sum() / this.items.length;
    }
  }


module.exports = SortedList;
