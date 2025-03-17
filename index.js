// Array Methods...
// *******************************************
let array = []
// let array = ['Apple-0', 'Banana-1', 'Orange-2', 'Mango-3', 'Strawberry-4', '30 - 5'];
// 1 - push()
// Adds the specified elements to the end of an array and returns the new length of the array.

// Array.push('Apple')
// Array.push('Banana')
// Array.push('Orange', 'Mango', 'Strawberry', 30)
// console.log(Array);
// console.log(Array.push('Pineapple'));
// console.log(Array);



// *******************************************
// 2 - unshift()
// Adds the specified elements to the beginning of an array and returns the new length of the array.


// console.log(Array);
// console.log(Array.unshift('Cherry'));
// Array.unshift('Blueberry')
// console.log(Array);




// *******************************************
// 3 - pop()
// Removes the last element from an array and returns that element.undefined if the array is empty.


// console.log(Array.pop());

// console.log(Array.pop());
// console.log(Array);




// *******************************************
// 4 - shift()
// Removes the first element from an array and returns that removed element.undefined if the array is empty.


// Array.shift()
// console.log(Array.shift());
// console.log(Array);




// *******************************************
// 5 - concat()
//  Used to merge two or more arrays. This method does not change the existing arrays
// , but instead returns a new array.

// Arrays and / or values to concatenate into a new array.
// let Array2 = ["Plum", "Raspberry"];
// let Array3 = ["Pomegranate", "Guava", "Fig"];
// console.log(Array);

// console.log(Array.concat(Array3));
// console.log(Array.concat(Array2));
// console.log(Array.concat(Array3, Array2));
// console.log(Array.concat("Passion Fruit", "Avocado"));
// console.log(Array);




// *******************************************
// 6 - slice()
// returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
//  where start and end represent the index of items in that array. The original array will not be modified.

// let Array2 = Array.slice(4)
// let Array3 = Array.slice(4, -1)
// let Array4 = Array.slice(2, 4)

// console.log(Array2);
// console.log(Array3);
// console.log(Array4);
// console.log(Array);




// *******************************************
// 7 - splice()
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// To create a new array with a segment removed and / or replaced without mutating the original array, use toSpliced().To access part of an array without modifying it.


// Array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// let Array2 = Array.splice(1, 0, "Orange", "Grapes")
// console.log(Array);
// let Array3 = Array.splice(2, 2)
// console.log(Array);
// let Array4 = Array.splice(5, 1, "Yellow")
// console.log(Array);


// console.log(Array2);
// console.log(Array3);
// console.log(Array4);




// *******************************************
// 8 - join()
// creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.
//  If the array has only one item, then that item will be returned without using the separator.

// Array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// let Array2 = Array.join()
// let Array3 = Array.join("-")
// let Array4 = Array.join("#")

// console.log(Array2);
// console.log(Array3);
// console.log(Array4);



// *******************************************
// 9 - IndexOf()
// instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Array = [10, 20, 30, 20, 30, 50, 40, 60, 50, 40, 10, 10, 20, 30, 50];
// let Array2 = Array.indexOf(10)
// let Array3 = Array.indexOf(60, 8)
// let Array4 = Array.indexOf(30, 4)

// console.log(Array);
// console.log(Array2);
// console.log(Array3);
// console.log(Array4);

// *******************************************
// 9 - lastIndexOf()
// instances returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// Array = [10, 20, 30, 20, 30, 50, 40, 60, 50, 40, 10, 10, 20, 60, 50];
// let Array5 = Array.lastIndexOf(10)
// let Array6 = Array.lastIndexOf(60, 6)
// let Array7 = Array.lastIndexOf(30, 4)

// console.log(Array);
// console.log(Array5);
// console.log(Array6);
// console.log(Array7);



// *******************************************
// 10 - values()
// instances returns a new array iterator object that iterates the value of each item in the array.


// Array = [10, 20, 30, 20, 30, 50, 40, 60, 50, 40, 10, 30, 20, 60, 50];
// let iterator = Array.values()

// for (const values of iterator) {
//     console.log(values);
// }


// iterator.next();     // index ==> 0
// iterator.next();     // index ==> 1
// iterator.next();     // index ==> 2
// iterator.next();     // index ==> 3
// iterator.next();     // index ==> 4

// console.log(iterator.next());     // index ==> 5




// *******************************************
// 11 - keys()
// instances returns a new array iterator object that contains the keys for each index in the array.


// arr = [10, 20, 30, 20, 30, 50, 40, 60, 50, 40, 10, 30, 20, 60, 50];
// let iterator = arr.keys()

// for (const keys of iterator) {
//     console.log(keys);
// }


// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();

// console.log(iterator.next());

// let keysArray = Array.from(arr.keys());
// console.log(keysArray);



// *******************************************
// 12 - entries()
// returns a new array iterator object that contains the key/value pairs for each index in the array.


// arr = [10, 20, 30, 20, 30, 50, 40, 60, 50, 40, 10, 30, 20, 60, 50];
// let iterator = arr.entries()

// for (const entries of iterator) {
//     console.log(entries);
// }
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();
// iterator.next();

// console.log(iterator.next());
// console.log(arr);



// *******************************************
// 13 - reverse()
// reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first.
// In other words, elements order in the array will be turned towards the direction opposite to that previously stated.


// array = [10, 20, 40, 10, 30, 20, 60, 50];
// let Reverse = array.reverse()
// console.log(Reverse);
// let Reversed = Reverse.reverse()
// console.log(Reversed);

// let text = "JavaScript";
// let reversedText = text.split("").reverse().join("");

// console.log(reversedText);


// let original = [10, 20, 30];
// let reversedCopy = original.slice().reverse();

// console.log(original);
// console.log(reversedCopy);


// *******************************************
// 14 - some()
// instances tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// array = [10, 20, 40, 10, 30, 20, 60, 50];
// const Even = (element) => element % 2 === 0;
// const Odd = (element) => element % 2 === 1;
// console.log(array.some(Even));
// console.log(array.some(Odd));



// *******************************************
// 15 - every()
// instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// let array = [10, 20, 40, 10, 30, 20, 60, 50];
// let array1 = [11, 23, 45, 17, 39, 21, 63, 55];

// const isEven = (num) => num % 2 === 0;
// const isOdd = (num) => num % 2 === 1;

// console.log(array.every(isEven));
// console.log(array1.every(isOdd));




// *******************************************
// 16 - sort()
// instances sorts the elements of an array in place and returns the reference to the same array, now sorted.
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF - 16 code unit values.

// let fruits = ["Banana", "Apple", "Mango", "Cherry"];
// fruits.sort();
// console.log(fruits);

// Array = [16, 234, 40, 15, 304, 22, 63, 50];
// Array.sort();
// console.log(Array); //❌
// Array.sort((a, b) => a - b);
// console.log(Array); //✅

// Array.sort((a, b) => b - a);
// console.log(Array); //✅


// *******************************************
// 17 - at()
// instances takes an integer value and returns the item at that index, allowing for positive and negative integers.
//  Negative integers count back from the last item in the array.

// array = [16, 234, 40, 15, 304, 22, 63, 50];
// console.log(array.at(-2));
// console.log(array.at(2));
// console.log(array.at(4));
// console.log(array.at(8));



// *******************************************
// 18 - copyWithin()
// instances shallow copies part of this array to another location in the same array
//  and returns this array without modifying its length.

// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.copyWithin(4, 2, 4));
// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.copyWithin(6, 2));


// *******************************************
// 19 - fill()
// instances changes all elements within a range of indices in an array to a static value.
//  It returns the modified array.

// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.fill(1, 2, 5));
// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.fill(2, 2));
// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.fill("Omar"));



// *******************************************
// 20 - filter()
//  instances creates a shallow copy of a portion of a given array,
//  filtered down to just the elements from the given array that pass the test implemented by the provided function.

// array = [16, 234, 40, 15, 304, 50, 60, 33, true, true, false];
// console.log(array.filter(num => num % 2 === 0));
// console.log(array.filter(num => num % 2 === 1));
// console.log(array.filter(num => num === true));




// let names = ["Ali", "Mohammed", "Omar", "Sara", "Hussein", "Amr"];
// let shortNames = names.filter(name => name.length <= 4);
// console.log(shortNames);



// *******************************************
// 21 - find()
// instances returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

// array = [10, 234, 40, 10, 304, 50, 60, 30];
// console.log(array.find(num => num > 20));
// console.log(array.find(num => num % 2 === 0));
// console.log(array.find(num => num % 2 === 1));


// let names = ["Ali", "Mohammed", "Omar", "Sara", "Hussein", "Amr"];
// let shortNames = names.find(name => name.endsWith('r'));
// console.log(shortNames);


// *******************************************
// 22 - findIndex()
// instances returns the index of the first element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.

// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.findIndex(num => num > 20));
// console.log(array.findIndex(num => num % 2 === 0));
// console.log(array.findIndex(num => num % 2 === 1));
// let names = ["Ali", "Mohammed", "Omar", "Sara", "Hussein", "Amr"];
// let shortNames = names.findIndex(name => name.endsWith('r'));
// console.log(shortNames);



// *******************************************
// 23 - flat()
// instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 1-When dealing with nested data such as JSON or databases.
// 2-When you want to convert nested arrays to a flat array.
// 3-When working with data containing empty slots.

// array = [16, [234, [40, 15, [304], 50], 60], , , , 33];
// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(Infinity));



// *******************************************
// 24 - flatMap()
// instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 1- When we need to convert elements and then flatten the result directly.
// 2- When dealing with nested data(like JSON).
// 3- When parsing texts into words or characters.
// 4- {flatMap() does not work on nested arrays (depth = 1).}

// array = [16, [234, [40, 15, [304], 50], 60], , , , 33];
// console.log(array.flat(Infinity).filter(num => num !== undefined).flatMap(num => [num, num * 2]));
// array = [16, 234, 40, 15, 304, 50, 60, 33];
// console.log(array.flatMap(num => [num, num * 2]));



// *******************************************
// 25 - from()
// static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// such as a NodeList, Set, Map, or String.

// Array from a String
// console.log(Array.from("foo"));

// // Array from a Set
// let mySet = new Set([10, 20, 30, 30, 40]);
// console.log(Array.from(mySet));

// // Array from a Map
// let myMap = new Map([
//     [1, "a"],
//     [2, "b"],
//     [3, "c"]
// ]);

// console.log(Array.from(myMap));
// console.log(Array.from(myMap.values()));
// console.log(Array.from(myMap.keys()));
// console.log(Array.from([1, 2, 3], x => x * 2));

// Array from a NodeList
// let divs = document.querySelectorAll("div");
// let divArray = Array.from(divs);
// console.log(divArray);


// // Array from an Array - like object(arguments)
// function myFunc() {
//     let argsArray = Array.from(arguments);
//     console.log(argsArray);
// }
// myFunc(10, 20, 30, 40);




// *******************************************
// 26 - reduce()
// instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// 1- reduce() is used to calculate a single value from an array(sum, largest number, data transformation).
// 2- Accepts a callbackFunction containing accumulator and currentValue.
// 3- Often you need initialValue to specify the initial value of the accumulator.
// 4- Can be used with numbers, strings, objects, and arrays.

// array = [10, 20, 30, 40];
// console.log(array.reduce((sum, num) => sum + num * 2, 0));
// console.log(array.reduce((acc, cur) => Math.max(acc, cur)));

// let pairs = [["name", "Adham"], ["age", 25], ["country", "Egypt"]];
// let obj = pairs.reduce((acc, [key, value]) => { acc[key] = value; return acc; }, {});
// console.log(obj);



// *******************************************
// 27 - reduceRight()
// instances applies a function against an accumulator and each value of the array
// (from right-to-left) to reduce it to a single value.
// 1- reduceRight() is used to reduce an array to a single value, but it works from right to left.
// 2- It is useful when dealing with text, calculations, and data transformations.
// 3- The main difference between it and reduce() is the direction of execution.

// array = [10, 20, 30, 40];
// console.log(array.reduceRight((sum, num) => sum + num * 2, 0));
// console.log(array.reduceRight((acc, cur) => Math.max(acc, cur)));

// let pairs = [["name", "Adham"], ["age", 25], ["country", "Egypt"]];
// let obj = pairs.reduceRight((acc, [key, value]) => { acc[key] = value; return acc; }, {});
// console.log(obj);



// let words = ["Hello", "World", "from", "JavaScript"];

// let sentence1 = words.reduce((acc, cur) => acc + " " + cur);
// let sentence2 = words.reduceRight((acc, cur) => acc + " " + cur);

// console.log(sentence1);
// console.log(sentence2);

// *******************************************
// 28 - isArray()
// static method determines whether the passed value is an Array.

// console.log(Array.isArray([1, 2, 3]));
// console.log(Array.isArray("Hello"));
// console.log(Array.isArray({ name: "Adham" }));
// console.log(Array.isArray(new Array(5)));
// console.log(Array.isArray(null));
// console.log(Array.isArray(undefined));
// console.log(Array.isArray(Array.prototype));

// *******************************************
// 29 - of()
// static method creates a new Array instance from a variable number of arguments,
// regardless of number or type of the arguments.

// console.log(Array.of(1, 2, 3));
// console.log(Array.of("Hello"));
// console.log(Array.of({ name: "Adham" }));
// console.log(Array.of(new Array(5)));
// console.log(Array.of(3));
// console.log(Array.of(null));
// console.log(Array.of(undefined));
// console.log(Array.of(Array.prototype));


// *******************************************
// 30 - toString()
// static method creates a new Array instance from a variable number of arguments,
// regardless of number or type of the arguments.


// array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// console.log(array.toString());
// let mixedArray = [10, "Hello", true, null, undefined, [1, 2]];
// console.log(mixedArray.toString());
// NesArray = [16, [234, [40, 15, [304], 50], 60], 33];
// console.log(NesArray.toString());


// *******************************************
// 31 - includes()
// method of Array instances determines whether an array includes a certain value
//  among its entries, returning true or false as appropriate.
// 1- When you need to check if a value exists inside an array without knowing its index.
// 2- When searching for NaN, since indexOf() cannot find it.
// 3- When dealing with a quick search for the existence of a specific element without having to extract its index.

// array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// console.log(array.includes('Orange'));
// let mixedArray = [10, "Hello", true, null, undefined, [1, 2]];
// console.log(mixedArray.includes());
// NesArray = [16, [234, [40, 15, [304], 50], 60], , 33];
// console.log(NesArray.includes(50, 2));
// console.log(NesArray.flat(Infinity).includes(50, 7));



// *******************************************
// 32 - forEach()
// method of Array instances executes a provided function once for each array element.

// array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// array.forEach(str => console.log(str));
// array.forEach((fruit, index) => { console.log(`Index ${index}: ${fruit}`); });

// array = [10, 20, 30, 40];
// array.forEach((num, index, arr) => { arr[index] = num * 2; });
// console.log(array)



// *******************************************
// 33 - map()
// instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// array = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry', 30];
// array.map((fruit, index) => { console.log(`Index ${index}: ${fruit}`); });

// array = [10, 20, 30, 40];
// console.log(array.map(num => num * 2))

// let items = ["Apple", "Banana", "Mango"];
// let listItems = items.map(item => `<li>${item}</li>`);
// console.log(listItems);





// Array Property...
// *******************************************
// 34 - length
// data property of an Array instance represents the number of elements in that array.
// The value is an unsigned, 32 - bit integer that is always numerically greater than the highest index in the array

// 1-length is used to find the number of elements inside an array or string.
// 2-The size of an array can be changed using length (adding or removing elements).
// 3-The fastest way to empty an array is array.length = 0.

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.length);

// let text = "Hello, JavaScript!";
// console.log(text.length);


// let arr = [1, 2, 3, 4, 5, 6];
// arr.length = 3;
// console.log(arr);