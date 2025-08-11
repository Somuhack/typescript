"use strict";
// const myname:string[]=["Somnath","Ritu"]
// console.log(myname);
// let obj:{name:string,age:number}={
//     name:"Somnath",
//     age:31,
// }
// const a = obj
// console.log(a);
//6. Create a number[] array of your 5 favorite numb
// let arr :number[]=[1,2,3]
// 7.Create a function add that takes two numbers and returns their sum.
// function sum(a:number,b:number):number{
//     return a+b
// }
// console.log(sum(4,5));
// 8. Write a function greet(name?: string) that prints "Hello, Guest" if no name is provided.
// function Greet(name?:string){
//     if(typeof name ==="string"){
//         console.log(`Hello, ${name}`);
//     }else{
//         console.log("Hello, Guest");
//     }
// }
// Greet("Somnath")
// 9. Use type to define a custom type User with id: number, name: string, and email: string.
// type User ={
//     id:number,
//     name:string,
//     email:string
// }
// 10. Use interface to define a Product with id, name, price.
// interface Product{
//     id:number,
//     name:string,
//     price:number
// }
// 11. Create a union type Status = "loading" | "success" | "error" and assign it to a variable.
// type Status = "loding" | "success" | "error"
// let a:Status="loding"
// console.log(a);
// // 12.Create a literal type for days of the week ("Mon" | "Tue" | ...)
// type Week =("Mon" | "Tue" | "Wed" | "Thu" | "Fry" | "Sat" | "Sun")
// 13. Create a function logMessage(msg: string | number) that handles both types
// function logMsg(name :string | number){
//     console.log(name);
// }
// logMsg("12")
// logMsg(12)
// 14. Declare a tuple type to represent a [string, number] pair for a student name and score.
// type a=[string,number]
// const st1:a=["Somnath",220]
// const st2:a=["Ritu",440]
// 15. Create an enum Direction with "Up", "Down", "Left", "Right".
// enum Direction{
//     UP="UP",
//     DOWN="DOWN",
//     LEFT="LEFT",
//     RIGHT="RIGHT"
// }
// const mydirection:Direction =Direction.UP
// console.log(mydirection);
// ? INTERMEDIATE LEVEL (16?30)
// 16. Write a Car interface with brand, year, and an optional model.
// interface Car{
//     brand:string,
//     year:number,
//     model?:string
// }
// const BMW:Car={
//     brand:"bmw",
//     year:2000,
//     model:"BC1"
// }
// 17. Create a readonly property inside an object using interface.
// interface Car{
//     readonly brand:string,
//     readonly id:number
// }
// const Bmw:Car={
//     brand:"BMW",
//     id:1
// }
// Bmw.id
// console.log(Bmw.id);
// console.log(Bmw);
// 18. Write a class Person with name, age, and a greet() method.
// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     greet(){
//         console.log(`Name is ${this.name} and age ${this.age}`);
//     }
// }
// const p1=new Person("Somnath",22)
// p1.greet()
// // 19. Make a BankAccount class with a private balance and methods to deposit() and getBalance().
// class BankAccount{
//     private balance:number
//     constructor(){
//         this.balance=0
//     }
//     deposite(balance:number){
//         this.balance+=balance
//     }
//     getBalance(){
//         return this.balance
//     }
// }
// const ba= new BankAccount()
// ba.deposite(1000)
// ba.deposite(1000)
// ba.deposite(1000)
// console.log(ba.getBalance());
// 20. Extend a class Animal into Dog and Cat with their own methods.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    showDetails() {
        console.log(`Name is ${this.name} and age ${this.age} and breed ${this.breed}`);
    }
}
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    showDetails() {
        console.log(`Name is ${this.name} and age ${this.age} and breed ${this.color}`);
    }
}
const Bob = new Dog("Bob", 3, "Golden Retriever");
const Oggy = new Dog("Oggy", 15, "blue");
Bob.showDetails();
Oggy.showDetails();
