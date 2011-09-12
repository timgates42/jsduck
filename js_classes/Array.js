/**
 * @class Array
 *
 * In JavaScript, the `Array` property of the global object is a constructor for
 * array instances.
 *
 * An array is a JavaScript object. Note that you shouldn't use it as an
 * associative array, use {@link Object} instead.
 *
 * # Creating an Array
 * 
 * The following example creates an array, msgArray, with a length of 0, then assigns values to 
 * msgArray[0] and msgArray[99], changing the length of the array to 100.
 *
 *     var msgArray = new Array();  
 *     msgArray[0] = "Hello";  
 *     msgArray[99] = "world";  
 *     
 *     if (msgArray.length == 100)  
 *     print("The length is 100.");  
 * 
 * # Creating a Two-dimensional Array
 * 
 * The following creates chess board as a two dimensional array of strings. The first move is made by 
 * copying the 'P' in 6,4 to 4,4. The position 4,4 is left blank.
 * 
 *     var board =   
 *     [ ['R','N','B','Q','K','B','N','R'],  
 *     ['P','P','P','P','P','P','P','P'],  
 *     [' ',' ',' ',' ',' ',' ',' ',' '],  
 *     [' ',' ',' ',' ',' ',' ',' ',' '],  
 *     [' ',' ',' ',' ',' ',' ',' ',' '],  
 *     [' ',' ',' ',' ',' ',' ',' ',' '],  
 *     ['p','p','p','p','p','p','p','p'],  
 *     ['r','n','b','q','k','b','n','r']];  
 *     print(board.join('\n') + '\n\n');  
 *     
 *     // Move King's Pawn forward 2  
 *     board[4][4] = board[6][4];  
 *     board[6][4] = ' ';  
 *     print(board.join('\n'));  
 *
 * Here is the output:
 *
 *     R,N,B,Q,K,B,N,R
 *     P,P,P,P,P,P,P,P
 *      , , , , , , , 
 *      , , , , , , , 
 *      , , , , , , , 
 *      , , , , , , , 
 *     p,p,p,p,p,p,p,p
 *     r,n,b,q,k,b,n,r
 * 
 *     R,N,B,Q,K,B,N,R
 *     P,P,P,P,P,P,P,P
 *      , , , , , , , 
 *      , , , , , , , 
 *      , , , ,p, , , 
 *      , , , , , , , 
 *     p,p,p,p, ,p,p,p
 *     r,n,b,q,k,b,n,r
 * 
 * # Accessing array elements
 *
 * Array elements are nothing less than object properties, so they are accessed as such.
 *
 *     var myArray = new Array("Wind", "Rain", "Fire");
 *     myArray[0]; // "Wind"
 *     myArray[1]; // "Rain"
 *     // etc.
 *     myArray.length; // 3
 *
 *     // Even if indices are properties, the following notation throws a syntax error
 *     myArray.2;
 *
 *     // It should be noted that in JavaScript, object property names are strings. Consequently,
 *     myArray[0] === myArray["0"];
 *     myArray[1] === myArray["1"];
 *     // etc.
 *
 *     // However, this should be considered carefully
 *     myArray[02]; // "Fire". The number 02 is converted as the "2" string
 *     myArray["02"]; // undefined. There is no property named "02"
 *
 * # Relationship between length and numerical properties
 *
 * An array's length property and numerical properties are connected. Here is some
 * code explaining how this relationship works.
 *
 *     var a = [];
 *
 *     a[0] = 'a';
 *     console.log(a[0]); // 'a'
 *     console.log(a.length); // 1
 *
 *     a[1] = 32;
 *     console.log(a[1]); // 32
 *     console.log(a.length); // 2
 *
 *     a[13] = 12345;
 *     console.log(a[13]); // 12345
 *     console.log(a.length); // 14
 *
 *     a.length = 10;
 *     console.log(a[13]); // undefined, when reducing the length elements after length+1 are removed
 *     console.log(a.length); // 10
 *
 * # Creating an array using the result of a match
 *
 * The result of a match between a regular expression and a string can create an array.
 * This array has properties and elements that provide information about the match. An
 * array is the return value of RegExp.exec, String.match, and String.replace. To help
 * explain these properties and elements, look at the following example and then refer
 * to the table below:
 *
 *     // Match one d followed by one or more b's followed by one d
 *     // Remember matched b's and the following d
 *     // Ignore case
 *
 *     var myRe = /d(b+)(d)/i;
 *     var myArray = myRe.exec("cdbBdbsbz");
 *
 * The properties and elements returned from this match are as follows:
 *
 *
 * | Property/Element | Description                                                                           | Example
 * |:-----------------|:--------------------------------------------------------------------------------------|:-------------------
 * | `input`          | A read-only property that reflects the original string against which the              | cdbBdbsbz
 * |                  | regular expression was matched.                                                       |
 * | `index`          | A read-only property that is the zero-based index of the match in the string.         | 1
 * | `[0]`            | A read-only element that specifies the last matched characters.                       | dbBd
 * | `[1], ...[n]`    | Read-only elements that specify the parenthesized substring matches, if included in   | [1]: bB [2]: d
 * |                  | the regular expression. The number of possible parenthesized substrings is unlimited. |
 *
 */

// Properties

/**
 * @property constructor
 * Specifies the function that creates an object's prototype.
 *
 * Returns a reference to the Array function that created the instance's prototype. Note that the value of 
 * this property is a reference to the function itself, not a string containing the function's name.
 */

/**
 * @property length
 * Reflects the number of elements in an array.
 *
 * The value of the `length` property is an integer with a positive sign and a value less than 2 to the 32 
 * power (232). 
 * 
 * You can set the `length` property to truncate an array at any time. When you extend an array by changing 
 * its `length` property, the number of actual elements does not increase; for example, if you set `length` 
 * to 3 when it is currently 2, the array still contains only 2 elements.
 * 
 * In the following example the array numbers is iterated through by looking at the `length` property to see 
 * how many elements it has. Each value is then doubled. 
 *
 *     var numbers = [1,2,3,4,5];
 *     for (var i = 0; i < numbers.length; i++) {
 *         numbers[i] *= 2;
 *     }
 *     // numbers is now [2,4,6,8,10];
 * 
 * The following example shortens the array `statesUS` to a length of 50 if the current `length` is greater 
 * than 50. 
 * 
 *     if (statesUS.length > 50) {
 *         statesUS.length=50
 *     }
 */

// Mutator methods. These methods modify the array:

/**
 * @method pop
 * The pop method removes the last element from an array and returns that value to the caller.
 *
 * `pop` is intentionally generic; this method can be called or applied to objects resembling
 * arrays. Objects which do not contain a length property reflecting the last in a series of
 * consecutive, zero-based numerical properties may not behave in any meaningful manner.
 *
 *     var myFish = ["angel", "clown", "mandarin", "surgeon"];
 *     var popped = myFish.pop();
 *     alert(popped); // Alerts 'surgeon'
 *
 * @return {Mixed} The last element in the array
 */

/**
 * @method push
 * Adds one or more elements to the end of an array and returns the new length of the array.
 *
 * `push` is intentionally generic. This method can be called or applied to objects resembling
 * arrays. The push method relies on a length property to determine where to start inserting
 * the given values. If the length property cannot be converted into a number, the index used
 * is 0. This includes the possibility of length being nonexistent, in which case length will
 * also be created.
 *
 * The only native, array-like objects are strings, although they are not suitable in
 * applications of this method, as strings are immutable.
 *
 * ### Adding elements to an array
 *
 * The following code creates the sports array containing two elements, then appends two elements
 * to it. After the code executes, sports contains 4 elements: "soccer", "baseball", "football"
 * and "swimming".
 *
 *     var sports = ["soccer", "baseball"];
 *     sports.push("football", "swimming");
 *
 * @param {Mixed} element1,...,elementN The elements to add to the end of the array.
 * @return {Number} The new length property of the object upon which the method was called.
 */

/**
 * @method reverse
 * Reverses the order of the elements of an array -- the first becomes the last, and the
 * last becomes the first.
 *
 * The reverse method transposes the elements of the calling array object in place, mutating the
 * array, and returning a reference to the array.
 *
 * The following example creates an array myArray, containing three elements, then reverses the array.
 *
 *     var myArray = ["one", "two", "three"];
 *     myArray.reverse();
 *
 * This code changes myArray so that:
 *
 *  - myArray[0] is "three"
 *  - myArray[1] is "two"
 *  - myArray[2] is "one"
 *
 * @return {Array} A reference to the array
 */

/**
 * @method shift
 * Removes the first element from an array and returns that element.
 *
 * The `shift` method removes the element at the zeroeth index and shifts the values at consecutive 
 * indexes down, then returns the removed value.
 *
 * `shift` is intentionally generic; this method can be called or applied to objects resembling 
 * arrays. Objects which do not contain a `length` property reflecting the last in a series of 
 * consecutive, zero-based numerical properties may not behave in any meaningful manner.
 *
 * The following code displays the `myFish` array before and after removing its first element. It also 
 * displays the removed element:
 *
 *     // assumes a println function is defined
 *     var myFish = ["angel", "clown", "mandarin", "surgeon"];
 *     println("myFish before: " + myFish);
 *     var shifted = myFish.shift();
 *     println("myFish after: " + myFish);
 *     println("Removed this element: " + shifted);
 *
 * This example displays the following:
 *
 *     myFish before: angel,clown,mandarin,surgeon
 *     myFish after: clown,mandarin,surgeon
 *     Removed this element: angel
 *
 * @return {Mixed} The first element of the array prior to shifting.
 */

/**
 * @method sort
 * Sorts the elements of an array.
 * 
 * If `compareFunction` is not supplied, elements are sorted by converting them to strings and 
 * comparing strings in lexicographic ("dictionary" or "telephone book," not numerical) order. For 
 * example, "80" comes before "9" in lexicographic order, but in a numeric sort 9 comes before 80.
 *
 * If `compareFunction` is supplied, the array elements are sorted according to the return value of 
 * the compare function. If a and b are two elements being compared, then:
 * If `compareFunction(a, b)` is less than 0, sort `a` to a lower index than `b`.
 * If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but 
 * sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee 
 * this behaviour, and thus not all browsers respect this.
 * If `compareFunction(a, b)` is greater than 0, sort `b` to a lower index than `a`.
 * `compareFunction(a, b)` must always returns the same value when given a specific pair of elements a 
 * and b as its two arguments. If inconsistent results are returned then the sort order is undefined
 * 
 * So, the compare function has the following form:
 * 
 *     function compare(a, b)  
 *     {  
 *         if (a is less than b by some ordering criterion)  
 *             return -1;  
 *         if (a is greater than b by the ordering criterion)  
 *            return 1;  
 *         // a must be equal to b  
 *         return 0;  
 *     }  
 *
 * To compare numbers instead of strings, the compare function can simply subtract `b` from `a`:
 *
 *     function compareNumbers(a, b)  
 *     {  
 *     return a - b;  
 *     }  
 *
 * The sort() method can be conveniently used with closures: 
 *
 *     var numbers = [4, 2, 5, 1, 3];  
 *     numbers.sort(function(a, b) {  
 *         return a - b;  
 *     });  
 *     print(numbers);   
 *
 * @param {Mixed} compareFunction Specifies a function that defines the sort order. If omitted, the 
 * array is sorted lexicographically (in dictionary order) according to the string conversion of each 
 * element.
 * @return {Array} A reference to the array
 */

/**
 * @method splice
 * Adds and/or removes elements from an array.
 *
 * If you specify a different number of elements to insert than the number you're removing, the array 
 * will have a different length at the end of the call.
 *
 *     // assumes a print function is defined  
 *     var myFish = ["angel", "clown", "mandarin", "surgeon"];  
 *     print("myFish: " + myFish);  
 * 
 *     var removed = myFish.splice(2, 0, "drum");  
 *     print("After adding 1: " + myFish);  
 *     print("removed is: " + removed);  
 *     
 *     removed = myFish.splice(3, 1);  
 *     print("After removing 1: " + myFish);  
 *     print("removed is: " + removed);  
 *     
 *     removed = myFish.splice(2, 1, "trumpet");  
 *     print("After replacing 1: " + myFish);  
 *     print("removed is: " + removed);  
 *     
 *     removed = myFish.splice(0, 2, "parrot", "anemone", "blue");  
 *     print("After replacing 2: " + myFish);  
 *     print("removed is: " + removed);  
 *
 * This script displays:
 *
 *     myFish: angel,clown,mandarin,surgeon
 *     After adding 1: angel,clown,drum,mandarin,surgeon
 *     removed is: 
 *     After removing 1: angel,clown,drum,surgeon
 *     removed is: mandarin
 *     After replacing 1: angel,clown,trumpet,surgeon
 *     removed is: drum
 *     After replacing 2: parrot,anemone,blue,trumpet,surgeon
 *     removed is: angel,clown
 *
 * @param {Number} index Index at which to start changing the array. If negative, will begin that 
 * many elements from the end.
 * @param {Number} howMany An integer indicating the number of old array elements to remove. If 
 * `howMany` is 0, no elements are removed. In this case, you should specify at least one new element. 
 * If no `howMany` parameter is specified all elements after index are removed.
 * @param {Mixed} element1, ..., elementN The elements to add to the array. If you don't specify any 
 * elements, `splice` simply removes elements from the array.
 * @return {Array} An array containing the removed elements. If only one element is removed, an array 
 * of one element is returned..
 */

/**
 * @method unshift
 * Adds one or more elements to the front of an array and returns the new length of the array.
 *
 * The `unshift` method inserts the given values to the beginning of an array-like object.
 *
 * `unshift` is intentionally generic; this method can be called or applied to objects resembling 
 * arrays. Objects which do not contain a `length` property reflecting the last in a series of 
 * consecutive, zero-based numerical properties may not behave in any meaningful manner.
 *
 * The following code displays the myFish array before and after adding elements to it.
 *
 *     // assumes a println function exists
 *     myFish = ["angel", "clown"];
 *     println("myFish before: " + myFish);
 *     unshifted = myFish.unshift("drum", "lion");
 *     println("myFish after: " + myFish);
 *     println("New length: " + unshifted);
 * 
 * This example displays the following:
 *
 *     myFish before: ["angel", "clown"]
 *     myFish after: ["drum", "lion", "angel", "clown"]
 *     New length: 4
 *
 * @param {Mixed} element1, ..., elementN The elements to add to the front of the array.
 * @return {Number} The array's new length.
 */

// Accessor methods. These methods do not modify the array and return some representation of the array.

/**
 * @method concat
 * Returns a new array comprised of this array joined with other array(s) and/or value(s).
 *
 * `concat` creates a new array consisting of the elements in the `this` object on which it is called, 
 * followed in order by, for each argument, the elements of that argument (if the argument is an 
 * array) or the argument itself (if the argument is not an array).
 *
 * `concat` does not alter `this` or any of the arrays provided as arguments but instead returns a 
 * "one level deep" copy that contains copies of the same elements combined from the original arrays. 
 * Elements of the original arrays are copied into the new array as follows:
 * Object references (and not the actual object): `concat` copies object references into the new 
 * array. Both the original and new array refer to the same object. That is, if a referenced object is 
 * modified, the changes are visible to both the new and original arrays.
 * Strings and numbers (not {@link String} and {@link Number} objects): `concat` copies the values of 
 * strings and numbers into the new array.
 *
 * Any operation on the new array will have no effect on the original arrays, and vice versa.
 * 
 * ### Concatenating two arrays
 * 
 * The following code concatenates two arrays:
 *
 *     var alpha = ["a", "b", "c"];  
 *     var numeric = [1, 2, 3];  
 *     
 *     // creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged  
 *     var alphaNumeric = alpha.concat(numeric);  
 *
 * ### Concatenating three arrays
 *
 * The following code concatenates three arrays:
 *
 *     var num1 = [1, 2, 3];  
 *     var num2 = [4, 5, 6];  
 *     var num3 = [7, 8, 9];  
 *     
 *     // creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged  
 *     var nums = num1.concat(num2, num3);  
 *
 * ### Concatenating values to an array
 *
 * The following code concatenates three values to an array:
 * 
 *     var alpha = ['a', 'b', 'c'];  
 *     
 *     // creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged  
 *     var alphaNumeric = alpha.concat(1, [2, 3]);  
 *
 * @param {Mixed} ValueN Arrays and/or values to concatenate to the resulting array.
 * @return {Array} New array.
 */

/**
 * @method join
 * Joins all elements of an array into a string.
 *
 * The string conversions of all array elements are joined into one string.
 *
 * The following example creates an array, `a`, with three elements, then joins the array three times: 
 * using the default separator, then a comma and a space, and then a plus.
 *
 *     var a = new Array("Wind","Rain","Fire");
 *     var myVar1 = a.join();      // assigns "Wind,Rain,Fire" to myVar1
 *     var myVar2 = a.join(", ");  // assigns "Wind, Rain, Fire" to myVar2
 *     var myVar3 = a.join(" + "); // assigns "Wind + Rain + Fire" to myVar3
 *
 * @param {String} Separator Specifies a string to separate each element of the array. The separator 
 * is converted to a string if necessary. If omitted, the array elements are separated with a comma.
 * @return {String} A string of the array elements.
 */

/**
 * @method slice
 * Extracts a section of an array and returns a new array.
 *
 * `slice` does not alter the original array, but returns a new "one level deep" copy that contains 
 * copies of the elements sliced from the original array. Elements of the original array are copied 
 * into the new array as follows:
 * *   For object references (and not the actual object), `slice` copies object references into the 
 * new array. Both the original and new array refer to the same object. If a referenced object 
 * changes, the changes are visible to both the new and original arrays.
 * *   For strings and numbers (not {@link String} and {@link Number} objects), `slice` copies strings 
 * and numbers into the new array. Changes to the string or number in one array does not affect the 
 * other array.
 * 
 * If a new element is added to either array, the other array is not affected.
 *
 * ### Using slice
 *
 * In the following example, `slice` creates a new array, `newCar`, from `myCar`. Both include a 
 * reference to the object `myHonda`. When the color of `myHonda` is changed to purple, both arrays 
 * reflect the change.
 *
 *     // Using slice, create newCar from myCar.
 *     var myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
 *     var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
 *     var newCar = myCar.slice(0, 2);
 *     
 *     // Print the values of myCar, newCar, and the color of myHonda
 *     //  referenced from both arrays.
 *     print("myCar = " + myCar.toSource());
 *     print("newCar = " + newCar.toSource());
 *     print("myCar[0].color = " + myCar[0].color);
 *     print("newCar[0].color = " + newCar[0].color);
 *     
 *     // Change the color of myHonda.
 *     myHonda.color = "purple";
 *     print("The new color of my Honda is " + myHonda.color);
 *     
 *     // Print the color of myHonda referenced from both arrays.
 *     print("myCar[0].color = " + myCar[0].color);
 *     print("newCar[0].color = " + newCar[0].color);
 *
 * This script writes:
 *
 *     myCar = [{color:"red", wheels:4, engine:{cylinders:4, size:2.2}}, 2, "cherry condition", 
 *     "purchased 1997"]
 *     newCar = [{color:"red", wheels:4, engine:{cylinders:4, size:2.2}}, 2]
 *     myCar[0].color = red 
 *     newCar[0].color = red
 *     The new color of my Honda is purple
 *     myCar[0].color = purple
 *     newCar[0].color = purple
 *
 * @param {Number} begin Zero-based index at which to begin extraction.
 * As a negative index, `start` indicates an offset from the end of the sequence. `slice(-2)` extracts 
 * the second-to-last element and the last element in the sequence
 * @param {Number} end Zero-based index at which to end extraction. `slice` extracts up to but not 
 * including `end`.
 * `slice(1,4)` extracts the second element through the fourth element (elements indexed 1, 2, and 3).
 * As a negative index, end indicates an offset from the end of the sequence. `slice(2,-1)` extracts 
 * the third element through the second-to-last element in the sequence.
 * If `end` is omitted, `slice` extracts to the end of the sequence.
 * @return {Array} Array from the new start position up to (but not including) the specified end position.
 */

/**
 * @method toString
 * Returns a string representing the array and its elements. Overrides the `Object.prototype.toString` 
 * method.
 *
 * The {@link Array} object overrides the `toString` method of {@link Object}. For Array objects, the 
 * `toString` method joins the array and returns one string containing each array element separated by 
 * commas. For example, the following code creates an array and uses `toString` to convert the array 
 * to a string.
 *
 *     var monthNames = new Array("Jan","Feb","Mar","Apr");
 *     myVar = monthNames.toString(); // assigns "Jan,Feb,Mar,Apr" to myVar
 * 
 * JavaScript calls the `toString` method automatically when an array is to be represented as a text 
 * value or when an array is referred to in a string concatenation.
 *
 * @return {String} The array as a string.
 */