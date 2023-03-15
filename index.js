function isObjectEmpty(obj){
    return Object.keys(obj).length === 0;
}

const person = {
    name:'kdjf',
    age:22,
    sayHello(){
            return ('Привіт, я ' + this.name + ', мені ' + this.age+ ' років' );
    }
};

person.name=prompt("Введіть своє ім'я ", );
person.age=prompt("Введіть свій вік ", );

console.log(person.sayHello());
