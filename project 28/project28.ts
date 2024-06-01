let person_age = 29
if (person_age<=2){
    console.log("The person is baby")
}
else if (person_age>=2 && person_age<4){
    console.log("The person is toddle")
}
else if (person_age>=4 && person_age<13){
    console.log("The person is kid")
}
else if (person_age=>13 && person_age<20){
    console.log("The person is teenager")
}
else if (person_age=>20 && person_age<65){
    console.log("The person is adult")
}
else if (person_age>=65){
    console.log("The person is elder")
}
else{
    console.log("invalid value")
}