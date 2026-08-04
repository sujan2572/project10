export interface UserData{
    fullname:string;
    email:string;
    password:string;
    confirmpassword:string;
}
const stamp =():string=>{
    return `${Date.now()}${Math.floor(Math.random()*1000)}`
   
}

export const  newuser=():UserData=>{
    return{
        fullname:'testing'+stamp(),
        email:'testing@12345gmail.com'+stamp(),
        password:'test678',
        confirmpassword:'test678'
    }
}