console.log("Equality test with strings: " , "Apple"=="Apple" )
console.log("Unequality test with strings: " , ("Apple" as string)!="Orange" )

console.log("Lowercase function test: ", "HELLO".toLocaleLowerCase() == "hello")
console.log("Uppercase function test: ", "hello".toUpperCase() == "HELLO")

console.log("Equality test with number: " , 34==34 )
console.log("Unequality test with number: " ,(45 as number) !=89 )

console.log("Less than test with number: " , 34<78 )
console.log("Greater than test with number: " ,45>30 )

console.log("Less than equal to test with number: " , 34<=78 )
console.log("Greater than equal to test with number: " ,45>=30 )

console.log("And operator test with number: " , 45>=30 && 34<=78 )
console.log("Or operator test with number: " ,45>=30 ||89<= 67 )

let fruit:string[] = ["Banana", "Orange","Grapes"]
console.log("Test 'Orange' in the array: "+ fruit.includes("Banana"))
console.log("Test 'Apple' in the array: "+ !fruit.includes("Apple"))
 
