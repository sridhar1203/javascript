class student
{
    rollno;
    name;
    age;
    constructor(rollno,name,age)
    {
        this.rollno = rollno;
        this.name = name;
        this.age = age;
    }
    add()
    {
        console.log("student added");
    }
    
    add(a,b)
    {
        console.log("student added with two parameters");
    }
    print()
    {
        console.log(`${this.rollno},${this.name},${this.age}`);
        console.log(this.name);
        console.log(this.age);
    }
}
class teacher extends student
{
    
}
let s1 = new student(101,"sridhar",22);
s1.add();
s1.add(10,20);
//consider the last method only there is np method overloading in js

//promise
let p1 = new Promise((resolve,reject)=>
{
    let a = 10;
    let b = 20;
    if(a+b == 30)
    {
        resolve("success");
    }
    else
    {
        reject("failure");
    }
});
p1.then((message)=>
{
    console.log(message);
}).catch((message)=>
{
    console.log(message);
});

function ticketbooking(prize)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        if(prize<800)
        {
            resolve("booking success");
        }
        else{
            reject("Booking rejected");
        }
        },2000);
    })
}
 async function bookingupdate()
{
    let result= await ticketbooking(500);
    console.log(result);
}
bookingupdate();
console.log("start");
setTimeout(()=>{
    console.log("this is timeout")
},5000);//it will execute after 5 sec
console.log("End");

console.log("start");
setInterval(()=>{
    console.log("this is timeout")
},5000);//it will execute after 5 sec
console.log("End");

async function datafetching() {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await fetch(url);
    let data = await response.json();

    console.log(data[0].name);
}
datafetching();