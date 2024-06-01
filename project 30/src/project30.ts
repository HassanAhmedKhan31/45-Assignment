let names:string[]=["Admin","Hassan","Azlan","Huzaifa","Hamza","Ali"]
for(let i=0;i<names.length;i++){
    if (names[i]=="Admin"){
       console.log("Hello Admin, would you like to see a status report")

    }
    else{
        console.log("Hello"+names[i]+", thank you for loging in again")
    }
}
