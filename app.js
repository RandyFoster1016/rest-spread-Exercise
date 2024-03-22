//ES5 Function that takes a variable number of arguments
function filterOutOdds(){
    var nums = Array.prototype.slice.call(aurguments);
    return nums.filter(function(num){
        return num % 2 ===0
    });
}
//ES2015 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(v => v % 2 ===0)

//findMin
const findMin = (...args) => Math.min(...args)

findMin(1,4,12,-3) //-3
findMin(1,-1) //-1
findMin(3,1) //3

//mergeObjects
const mergeObjects = (obj1, obj2,) => ({...obj1...obj2})

mergeObjects({a:1,b:2},{c:3,d:4}) //{a:1,b:2, c:3,d:4}

//doubleAndReturnArgs
const removeRandom = items => {
    let idx =Math.floor(Math.random() * items.length);
    return[...items.slice(0,idx), ...items.slice(idx + 1)];
}
/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => {
    return [...array1, ...array2];
    }

  /** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj,key,val) =>{
    //Option 1
    let newObj = {...obj }
    delete newObj[key]
    return obj;
}  

/** Combine two objects and return a new object. */
const combine = (obj1, obj2)=>{
    return{...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */
const update = (obj,key, val) => {

    //Option 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

     // return { ...obj, [key]: val };
}