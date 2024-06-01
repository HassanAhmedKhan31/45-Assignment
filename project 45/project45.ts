function store_car_information (manufacture:string,modelName:string,...extraoption:{[key:string]:any}[]){
    const carinformation={
        manufacture,
        modelName,
        ...Object.assign({},...extraoption)
    }
    return carinformation;
}
let abc = store_car_information("Honda","Civic",{color:"Black"},{features:["Navigation","Power Window"]})
console.log(abc)