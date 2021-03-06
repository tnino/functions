<script>
Returns whatever value is passed as the argument.
EX: identity(6) --> 6

let identity = function(num){
  return num;
}
console.log(identity(6));


// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
//
// EX: first([1, 2, 3, 4, 5, 6], 2) --> [1, 2]
// EX: first([10, 34, 68, 19]) --> 10

let first =  function(array, n) {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(first([1,2,3,4,5,6],4));
console.log(first([10,34,68,19]));

https://www.w3resource.com/w3r_images/javascript-array-exercise-3.png

// Like first, but for the last elements. If n is undefined, return just the
// last element.
//
// EX: last([1, 2, 3, 4, 5], 2) --> [4, 5]
// EX: last([10, 34, 68, 19]) --> 19
let last =  function(array, n) {
  let id = array.length-1;
  if(n !== null){
    let elementos = array.length - n;
    
  for(let i = 0; i<elementos; i++){
array.splice(0,1);
  }
  return array;
  }else{
    return array[id];
  }
};

                  
console.log(last([1,2,3,4,5,6],4));




// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.
 
  let each = function(collection, iterator){
  if(Array.isArray(collection)){
    for(var i = 0; i < collection.length; i++){
    iterator(collection[i], i, collection);
    }
  } else if(typeof collection === 'object'){
    for(var key in collection){
      iterator(collection[key], key, collection);
    }
  }
};

each({"nombre":"asd"},function(a,b,c){console.log(a,b,c)})

/*
let array = [123,243,6123,6,23,62,3,43]
array[0];

let objeto = {
  "nombre":"sdf",
  "apellido":"asfd"
}
objeto.nombre
*/

// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// TIP: You can use a standard for loop, or you can reuse the each function from above as a helper function.
//
// EX: indexOf([1, 2, 3], 2) --> 1
// EX: indexOf([10, 20, 30], 5) --> 0
let indexOf = (array, target) => {
};

// Return all elements of an array that pass a truth test.
//
// filter([1, 2, 3], (val) => {
//    val > 2
// }) --> 3
let filter = (collection, test) => {
};

// Return all elements of an array that don't pass a truth test.
//
// reject([1, 2, 3, 4, 5], () => {
//    val < 3
// }) --> 4, 5
let reject = (collection, test) => {
};

// Produce a duplicate-free version of the array.
//
// EX: uniq([1, 1, 2, 2, 3, 4, 5]) --> [1, 2, 3, 4, 5]
let numbers = [1, 1, 2, 2, 3, 4, 5];

let uniq_numbers = [... new Set(numbers)];

console.log(uniq_numbers);

[ 1, 2, 3, 4, 5 ]




// Return the results of applying an iterator to each element.
// map() works a lot like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
//
// map({firstName: 'Kayla', lastName: 'Handy', age: 29}, (item) => {
//    return item[key]
// }) --> ['Kayla', 'Handy', 29]

 let myObject = {firstName: 'Kayla', lastName: 'Handy', age: 29};

Object.keys(myObject).map((key, index) => myObject[key]);

console.log(myObject);




https://developer.mozilla.org/en-US/docs/Archive/Web/Iterator

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// EX:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
let reduce = (collection, iterator, accumulator) => {
};

// Determine if the array or object contains a given value (using `===`).
//
// contains([1, 2, 3, 4], 3) --> true
let contains = (collection, target) => {
};


// Determine whether all of the elements pass a truth test.
//
// EX: every([1, 2, 3], (item) => {
//    item < 5
// }) --> true

let every = (collection, iterator) => {
  let all = true;
  for(let i = 0; i<collection.length; i++){
    if(!iterator(collection[i])){
      all = false;
    }
  }
    console.log(all);
};

every([1,2,3,4,5],(item)=> item<5)

// Determine whether any of the elements pass a truth test.
//
// EX: some([1, 2, 3], (item) => {
//    item < 2
// }) --> true
let some = (collection, iterator) => {
};
</script>
