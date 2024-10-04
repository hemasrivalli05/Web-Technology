//! Array: linear datastructure used to store the multiple values
//it is index based
//it is dynamic in nature - write own

//!syntax
//var/let/const arr_name = [val1,val2,val3.....]

//? this method is known as array literal
// let arr = [123, 'ajay' , true , 2000.00 , 3.04]
// console.log(arr);

// let nums = [10,20,30,40,50]
// console.log(nums);

// //acess
// console.log(nums[1]);

// //update
// nums[2] = 100;
// console.log(nums);

// //add
// nums[1] = 600
// console.log(nums);

// //delete
// delete nums[3]
// console.log(nums);

//! array constructor
// let stds = new Array('hema' , 'sneha' , 'raj' ,'mahi')
// console.log(stds);

// let girls = new Array();
// girls[0] = 'sri';  
// girls[1] = 'priya';
// girls[2] = 'ram';

// console.log(girls);

//! Array methods
// let flipkart = ['laptop' , 'mobile', "headphone"]
// console.log(flipkart);

// //** */ push() : used to add the multiple array elements
// flipkart.push('watch' ,"clothes")
// console.log("after push - add more (at the end of array)")
// console.log(flipkart);

// //** unshift(): used to add the multiple array elements from starting
// flipkart.unshift('charger',"kurti")
// console.log("after unshift - add more (at the starting of array)")
// console.log(flipkart);

// //** */ pop() : used to remove the last element from the array
// flipkart.pop() // removes last element array
// console.log("after pop - remove last element");
// console.log(flipkart);

// //** */ shift() : used to remove the first element from the array
// flipkart.shift() // removes first element array
// console.log("after shift - remove first element");
// console.log(flipkart);

// //!splice : used to add and delete the element
// // splice(index, no of elements to delete, elements to add)
// flipkart.splice(3, 2, "pen", "pencil" , "book" , "sheets" , "scooty"); 
// // if dont want to delete any element then add 0 instead of 2 place similarly want to delete but not to add anything then dont mention elements
// console.log("after splice - add and delete element");
// console.log(flipkart);

// //!slice() : to get the part of the array */
// // slice(starting index, ending index)
// let newArray = flipkart.slice(2, 7);
// console.log("after slice - get part of the array");
// console.log(newArray);
// console.log(flipkart);// full array to see just 

// //! includes() :
// // to check the element is present in the array or not
// console.log(flipkart.includes("pen")); // true
// console.log(flipkart.includes("pen1")); // false

// //! indexOf() : returns the index value of specified element
// console.log(flipkart.indexOf("pen")); // 3
// console.log(flipkart.indexOf("pen1")); // -1 (not found)

// //! at(): returns the element present in the specified index
// console.log(flipkart.at(3)); // pen
// console.log(flipkart.at(100)); 

// //! join() : join all the array elements into single string
// console.log(flipkart.join()); 
// console.log(flipkart.join('')); //all the array elements into single string

// //! concat(): used to merge the multiple arrays
// let amazon = ['bottle' , 'camera', 'plant']
// let meshoo = ['saree' , 'home appliances']
// console.log(flipkart.concat(amazon,meshoo)); // merge two arrays
// console.log(amazon.concat(flipkart)); // merge two arrays

// //! to.string() : same as join
// console.log(flipkart.toString()); // same as join

// //! split() : to convert the string into array
// let str = 'good evening my dear friends';
// console.log(str.split()); // convert string into array
// console.log(str.split(' ')); // convert string into array split by space
// console.log(str.split('e')); // e removes

// //! reverse() : returns reversed array
// console.log(flipkart); 
// console.log(flipkart.reverse()); // returns reversed array

//? filter(), map() and reduce()
//* filter(): to filter the array elements
let costs = [300, 5000 , 6000, 1, 290, 0 , 20000];
// console.log(costs.filter((cost) => cost > 1000)); // filter the array
let filteredArr = costs.filter(function(c){
    if(c >= 100){
        return c;
    }
})
console.log(filteredArr); // filter the array

//* map(): to change each of the array elements
let mappedArr = filteredArr.map((e)=>{
    return e-e*5/100;
})
console.log(mappedArr); // change the array elements

//* reduce() : returns the single value
let totalCost = mappedArr.reduce((acc,value)=>{
    return acc+value;
})
console.log(totalCost); // returns the single value

//string reverse and palindrome
let str = "imadam";
console.log(str)
// console.log(str.split('').reverse().join('')); 
// console.log(str)
let revStr = str.split('').reverse().join(''); // reverse the string
console.log(revStr); 
// reverseStr.split('')
if (str === revStr){
    console.log("palindrome");
}else{
    console.log("not palindrome");
}

