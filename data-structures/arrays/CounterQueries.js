/**
 * https://leetcode.com/discuss/interview-question/5838801/Uber-SDE-2-or-Phone-screen
 *
 * Implement a Counter class that has the following methods:
 *  put(number): put the number to the data structure
 *  count(number): count the number of times number was put during the last window=5 minutes
 *  countAll(): count the number of times any number was put during the last window=5 minutes.
 * 
 * TC-> O(1) insertion and O(1) queries with O(n) worst-case eviction 
 * SC -> O(N) + O(N)
 */

class Counter {
  constructor() {
    this.events = [];
    this.map = new Map();
    this.totalCount = 0;
    this.limit = 5 * 60 * 1000;
  }

  removeStaleEntries() {
    const timestamp = Date.now();
    while (
      this.events.length &&
      timestamp - this.events[0].timestamp >= this.limit
    ) {
      const { number } = this.events[0];
      this.events.shift();
      this.map.set(number, this.map.get(number) - 1);
      if (this.map.get(number) === 0) this.map.delete(number);
      this.totalCount--;
    }
  }

  put(number) {
    const timestamp = Date.now();
    this.events.push({ number, timestamp });
    this.map.set(number, (this.map.get(number) || 0) + 1);
    this.totalCount++;
    this.removeStaleEntries();
  }

  count(number) {
    this.removeStaleEntries();
    return this.map.get(number) || 0;
  }

  countAll() {
    this.removeStaleEntries();
    return this.totalCount;
  }
}

const counter = new Counter();
counter.put(2);
counter.put(2);
counter.put(3);
console.log(counter.count(2));
console.log(counter.countAll());
console.log(counter.count(2));
console.log(counter.countAll());
