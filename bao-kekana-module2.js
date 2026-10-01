                 /* Challenge 1 */



//  const because my name wont have to be changed.
//Data type is a string
const FullName = "Bao Kekana";

// using let because my age will change every year.
// datatype is number
let age = 33;

// this is a boolean, my answer is either true or false.
const Do_I_Enjoy_JS = true;

// my favourite temperature. I enjoy cold weather.
//Decimal number
const My_Fav_Temp = 10.1;

//Nan value.   data type is a string
const NaN = Number("hello");

// variable holding an infinity value, the data type is a number.
const infinity_var = 1/0;

// this is a variable called max_safe_number that holds Number.MAX_SAFE_INTEGER
const max_safe_number = Number.MAX_SAFE_INTEGER;

// explicitly null
let favourite_day_of_week = null;

console.log(FullName)
console.log(age)
console.log(Do_I_Enjoy_JS)
console.log(My_Fav_Temp)
console.log(NaN)
console.log(infinity_var)
console.log(max_safe_number)
console.log(favourite_day_of_week)

 
/* 
   1 The single most important difference between var and let.
   A variable is a named container, we declare it.
   The difference is scope, let is block-scoped while var is function scoped.
   
   2 Why should you default to const, and only use let when you know a value must change?
   Because this will save me if i reasign a value by mistake.

   3 Why is naming a variable usrNm bad? What would you rename it to, and why does naming
    matter for a professional codebase?

    I think this is because usrNm does not really tell much about the variable, the naming is not as clear as could be. i woud name it UserName or User_Name.
    
*/


                  /* Challenge 2. "Explain typeof and its surprises" */

// Variables from challenge 1
console.log("FullName:", typeof FullName);
console.log("age:", typeof age);
console.log("Do_I_Enjoy_JS:", typeof Do_I_Enjoy_JS);
console.log("My_Fav_Temp:", typeof My_Fav_Temp);
console.log("NaN:", typeof NaN);
console.log("infinity_var:", typeof infinity_var);
console.log("max_safe_number:", typeof max_safe_number);
console.log("favourite_day_of_week:", typeof favourite_day_of_week)

// From Cahllenge 2
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof NaN:", typeof NaN);
console.log('typeof "42":', typeof "42");
console.log("typeof (typeof 42):", typeof (typeof 42));
console.log(" typeof [1, 2, 3]:", typeof [1,2,3]);
console.log("typeof function() {}:", typeof function () {});

/* What i did not expect:
favourite_day_of_week : object -> this is because the variable holds a null hence it returned object. This is something cool that i have learnt today.

'Why is typeof NaN equal to number, and typeof null equal to object? Are these bugs in the
language, or intentional?

This is because NaN( Not a Number) is a special value in JavaScript, it is used to represent a numerical operation that is not valid, just like we did earlier in the execise where we had Nember("hello"). So JavaScript clasifies it as a number but typeof null reurns and object.

*/

     /*  Challenge 3. "Convert this string to a number, five different ways" */

 let a = "123";
 let b = "3.14";
 let c = "hello";
 let d = "42abc";
 let e = "";
 let f = 0;
 let g = null;
 let h = undefined;

 function Conversions (value,variableName) {
    console.log(`\n---${variableName}----`);
    console.log("Initial Value:", value);
    console.log("Initial type:", typeof value);

    console.log("Number():", Number(value), "Date type:", typeof Number(value));
    console.log("parseInt(", typeof parseInt(value));

    console.log("parseFloat()", parseFloat(value), typeof parseFloat(value));
    
    
    console.log("Boolean()", Boolean(value), typeof Boolean(value));


    console.log("String()", String(value), typeof String(value));    

 };

 Conversions(a, "a");
 Conversions(b, "b");
 Conversions(c, "c");
 Conversions(d, "d");
 Conversions(e, "e");
 Conversions(f, "f");
 Conversions(g, "g");
 Conversions(h, "h");

/* 1
1 What is the exact difference between Number('42abc') and parseInt('42abc')? What does
each return?

Number('42abc') will return NaN because it is a string and not a valid number

parseInt('42abc') will return 42 because it reads the numbers in the string.

2 When would you reach for parseFloat instead of parseInt in real code?
If i want to output a decimal number or i am expecting a decimal number.

3 What does Number('') return, and why is that a common source of bugs?
The ('') is an empty field, so it will return a zero.

*/


           /* Challenge 4. "What does this print? And why?" */

         /*  Expression 1 

         My Predictiom = 53. 
         */
         console.log("5" + 3);
         
         // Expression 2
         //My prediction = 5

         // I was not too sure what to expect because o the "-", i found it easier with the '+' because it acts as a concatenation when one of the values is a string.

         console.log('"5" - 3 =', "5"- 3);

         // Expression 3
        // "5" * "2"
         //My prediction = Honestly not sure, I did not know that one can multiply two values of type string.

         //expression 4
        // true + 1
        // My prediction = Noty sure
        console.log(true + 1);
        // The output is 2, i have just learnt that true become one in this expression
        
        //expression 5
        console.log(true + "1");
       // type: string
        // My prediction = true1

        //Expression 6
        //My prediction = false
        //type: boolean

        console.log(false + null);

    // both False and null become 0, hence the result is 0.

        //Expression 7
        //My prediction = NaN
        //Type: not sure


       console.log(null + undefined)

       // Expression 8
       // Prediction:
      //Output: Infinity
      //Type: number
      //reason: 1/0 = infinity
      console.log("1 / 0 =", 1 / 0);

      /*
      Expression 9
      Prediction:
      Output: NaN
      Type: number

      Reason: Zero divided by zero is undefined.
     */
    console.log("0 / 0 =", 0 / 0);

    /*

    Prediction:
    Output: NaN
    Type: number

    Reason:"abc" cannot be converted to a number.
    */

console.log('"abc" - 1 =', "abc" - 1);


// Challenge 5



/*Part 1

Issues

1.The use of var instead of let or const
2.var userAge = "25" The issue here is that useAge is stored as a string instead of a number.
3.Issue 3:
var scoreAdjustment = "10" : scoreAdjustment is stored as a string instead of a number.
4.salary is stored as a string instead of a number.
5. isAdmin is a string, not a boolean.
6. Logical error: Boolean("false") returns true because non-empty strings are truthy.


*/

const userName = "Sarah";
const userAge = 25;
const userScore = 85.5;
const scoreAdjustment = 10;
const newScore = userScore + scoreAdjustment;
console.log(`New score: ${newScore}`);

const salary = 50000;
const TAX_RATE = 0.15;

const tax = salary * TAX_RATE;
console.log(`Tax: R${tax}`);

const yearsUntilRetirement = 65 - userAge;
console.log(`Years until retirement: ${yearsUntilRetirement}`);

const totalAgeAndScore = userAge + userScore;
console.log(`Age plus score: ${totalAgeAndScore}`);

const isAdmin = false;
console.log(`Admin: ${isAdmin}`);

/* Summary 

I replaced var with const because these values do not change.
I converted numeric values stored as strings into numbers to avoid
I also fixed the isAdmin variable by using a real boolean value
instead of the string "false".
 I used template literals to improve readability
*/

/* Challenge 6


*/

console.log("0.1 + 0.2 =", 0.1 + 0.2);
console.log("0.3 - 0.1 =", 0.3 - 0.1);
console.log("0.1 * 3 =", 0.1 * 3);
console.log("0.1 + 0.2 === 0.3 =", 0.1 + 0.2 === 0.3);

/* Explanation
I have found that, JavaScript uses 745 foating - point standard to store decimals as not all decimal numbers can be stored exactly in binary.
This is not a bug but something that is found in most of the programming languages.
*/

// Challenge 7

//Refractored version

// Product price stored as a string 
const productPriceInput = "199.99";

// Quantity stored as a string 
const quantityInput = "3";

// Tax rate stored as a number because calculations require numeric values( float to be exact)
const taxRate = 0.15;

// Explicit conversion makes the code predictable and easier to debug
const productPrice = Number(productPriceInput);
const quantity = Number(quantityInput);

// Clear variable names improve readability
const subtotal = productPrice * quantity;

// Calculate tax amount
const taxAmount = subtotal * taxRate;

// Calculate final total
const totalAmount = subtotal + taxAmount;

console.log(`Total: R${totalAmount.toFixed(2)}`);

// The origonal Version with comments
/*
Variable names p, q, t, sub, tot and r dont tell us much, they are not as descriptive as they should be.
 var p = "199.99";

 Quantity is stored as a string instead of a number.
 var q = "3";

 Single-letter variable are not clear enough, it appears a bit vague
 var t = 0.15;

 String concatenation is used instead of template literals.
 var r = "Total: " + tot;
*/
 
//Challenge 8

// Challenge 8

// Product information
const receiptProductName = "Laptop";
const receiptUnitPrice = 7999.99;

// Simulate form input
const receiptQuantityInput = "2";

// VAT rate
const receiptTaxRate = 0.15;

// Convert quantity safely
const receiptQuantity = Number(receiptQuantityInput);

// Calculations
const receiptSubtotal =
  receiptUnitPrice * receiptQuantity;

const receiptTax =
  receiptSubtotal * receiptTaxRate;

const receiptTotal =
  receiptSubtotal + receiptTax;

// Receipt
const receipt = `
========================
RECEIPT
========================
Product : ${receiptProductName}
Price   : R${receiptUnitPrice.toFixed(2)}
Quantity: ${receiptQuantity}

Subtotal: R${receiptSubtotal.toFixed(2)}
Tax     : R${receiptTax.toFixed(2)}
Total   : R${receiptTotal.toFixed(2)}
========================
`;

console.log(receipt);

// Edge Case
const invalidQuantityInput = "abc";
const invalidQuantity = Number(invalidQuantityInput);

console.log("Invalid Quantity Input:", invalidQuantityInput);
console.log("Converted Value:", invalidQuantity);

/*
Number("abc") returns NaN because the value
cannot be converted into a valid number.

A real application should validate user input
before performing calculations.
*/