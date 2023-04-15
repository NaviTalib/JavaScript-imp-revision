typeCast= (x)=>{
    // console.log((typeof Number(x))+":"+Number(x))  string to number type conversion
// console.log((typeof x)+":"+x.toString());  number to string type conversion
//  console.log((typeof parseInt(x))+":"+parseInt(x));  used for converting string to number
}

typeCast("777")


// Number() converts the type whereas parseInt parses the value of input.
//  As you see, parseInt will parse up to the first non-digit character. 
//  On the other hand, Number will try to convert the entire string.
