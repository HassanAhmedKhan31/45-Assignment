let num:number[]=[1,2,3,4,5,6,7,8,9]
for(let i = 1 ;i<=num.length;i++){
 let ordinalnumber:string
 if (i===1){
    ordinalnumber="st";
 }
 else if (i===2){
    ordinalnumber="nd";
 }else if (i===3){
    ordinalnumber="rd";
 }else {
    ordinalnumber="th"
 }
 console.log(i+ordinalnumber)
}
