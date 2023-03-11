var arr=[1,24,'єроі',6,'dsf',null,6,7,'fie',10];
var arr1=[];

/*Цикл для задання масиву рандомними числами*/ 

/*for(let i=0; i<10; i++){
    arr[i]=Math.round(Math.random()*1000);
}*/


/*цикл на видалення не чисел та знаходження суми*/
let sum=0;
for(let i=0; i<arr.length; i++){
    if(typeof(arr[i])=='number'){
        arr1.push(arr[i]);
        sum+=arr[i];
    }
}

console.log(arr1);
console.log("Sum=", sum);

/*Пошук максимуму-мінімуму*/
let min=arr1[0],max=arr1[0];
for(let i=1; i<arr1.length; i++){
    if(arr1[i]<min){
        min=arr1[i];
    }
    if(arr1[i]>max){
        max=arr1[i];
    }
}
console.log("Min=", min);
console.log("Max=", max);

/*Виведення ришіток*/ 
let a='#';
for(let i=0; i<5; i++){
    console.log(a);
    a+='#';
}