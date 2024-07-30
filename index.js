// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
    return collection;
  }
  
  // Example calls
  // myEach([1, 2, 3], alert); // alerts each number in turn and returns the original collection
  // myEach({ one: 1, two: 2, three: 3 }, alert); // alerts each number value in turn and returns the original collection
  
  // myMap
  function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
      result.push(callback(values[i]));
    }
    return result;
  }
  
  // Example calls
  console.log(myMap([1, 2, 3], function(num){ return num * 3; })); // [3, 6, 9]
  console.log(myMap({ one: 1, two: 2, three: 3 }, function(num, key){ return num * 3; })); // [3, 6, 9]
  
  // myReduce
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // Example calls
  console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10)); // 16
  console.log(myReduce({ one: 1, two: 2, three: 3 }, function(acc, val, collection) { return acc + val; })); // 6
  
  // myFind
  function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // Example calls
  console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // 2
  console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function(num){ return num % 2 == 0; })); // 4
  
  // myFilter
  function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        result.push(values[i]);
      }
    }
    return result;
  }
  
  // Example calls
  console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); // [2, 4, 6]
  console.log(myFilter({ one: 1, three: 3, five: 5 }, function(num){ return num % 2 == 0; })); // []
  
  // mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Example calls
  console.log(mySize({ one: 1, two: 2, three: 3 })); // 3
  console.log(mySize([])); // 0
  
  // Array Functions
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  // Example calls
  console.log(myFirst([5, 4, 3, 2, 1])); // 5
  console.log(myFirst([5, 4, 3, 2, 1], 3)); // [5, 4, 3]
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  // Example calls
  console.log(myLast([5, 4, 3, 2, 1])); // 1
  console.log(myLast([5, 4, 3, 2, 1], 3)); // [3, 2, 1]
  
  // Object Functions
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Example call
  console.log(myKeys({ one: 1, two: 2, three: 3 })); // ["one", "two", "three"]
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  // Example call
  console.log(myValues({ one: 1, two: 2, three: 3 })); // [1, 2, 3]
  