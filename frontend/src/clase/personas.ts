//import {interface} from 'interfaceObjeto',
class personas implements Ipersonas{
    name: string;
    lastName: string;
    age: number;
    email: string;
    hobbies?: string[] | undefined;
    adress: Adress;
    /*printing(): string {
        throw new Error("Method not implemented.");
    }*/
   
    constructor(name: string,lastname: string,age: number,email: string,adress: Adress) {
        this.name = name;
        this.lastName = lastname;
        this.age = age;
        this.email=email;
        this.adress =adress ;
    }  

}
let persona1= new personas ("Joan","Gonzalez",20,"joan@uni.safa",{city:"sadsa",stre1:"10"})
console.log(persona1);

