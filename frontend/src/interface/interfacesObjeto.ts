interface Ipersonas{
    name:string;
    lastName:string;
    age:number;
    email:string;
    hobbies?:string[];
    adress:Adress;
    //printing():string;
}
interface Adress{
    city:string;
    stre1:string;
    stre2?:string;
    zipCode?:number;
}
const empleado:Ipersonas={
    name: "Sebastian",
    lastName: "Gonzalez",
    age: 20,
    email: "sebas@gmail.com",
    adress:{
        city:"Bogota",
        stre1:"10"
    }/*,
    printing:function (): string{
        return ``;
    }*/
}
console.log(empleado);