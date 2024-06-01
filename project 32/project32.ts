let current_user:string[]=["HaSSan","AzLan","HuZAIfa","GazALi ALi","HaSan"]
let new_user:string[]=["BiLal","HaSSan","SuBHan","AzLan","HaMza","GazALi ALi"]

new_user.forEach(new_user_name =>{
let lowerCase =new_user_name.toLowerCase()
if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
 console.log("The username "+ new_user_name +" is not avarible. Please try another name ")   
}
else{
    console.log("The username "+ new_user_name +" is avarible")
}
}
)