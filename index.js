/*Перевірка об'єкта на пустоту*/ 
function isObjectEmpty(obj){
    return Object.keys(obj).length === 0;
}

/*Об'єкт юзер*/ 
const person = {
    name:'John',
    age:22,
    sayHello(){
            return ('Привіт, я ' + this.name + ', мені ' + this.age+ ' років' );
    }
};

person.name=prompt("Введіть своє ім'я ", );
person.age=prompt("Введіть свій вік ", );

console.log(person.sayHello());

/*Об'єкт калькулятор*/ 
const calculator={
    ask(){
        calculator.num1=prompt("Введіть перше число = ");
        calculator.num2=prompt("Введіть 2 число = ");
    },
    sum(){
        console.log("Сума = ",Number(this.num1)+Number(this.num2));
    },
    mul(){
        console.log("Добуток = ",Number(this.num1)*Number(this.num2));
    }
}

calculator.ask();
calculator.sum();
calculator.mul();
