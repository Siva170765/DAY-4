//(a) Print odd numbers in an array
let Arr=[1,2,3,4,5];
let ODDFInd= e=>{
    let Output=[];
    for(let i of e){
        if(i%2!=0){
            Output.push(i);
        }
    }return Output;
}
console.log(ODDFInd(Arr));

//(b) Convert all the strings to title caps in a string array

let StringArr=["welcome tO iNDIA"];
let Input=StringArr[0].split(" ");
let StringTitleCase= i=>{
    let Output=[];
    for(let e of i ){
        let A=e.toLowerCase();
        A=A[0].toUpperCase()+A.slice(1)
        Output.push(A);
    }
    return (Output.join(" "));
    
}
console.log(StringTitleCase(Input));

//(c) Sum of all numbers in an array
let IntArr=[1,4,5,7,10,20];
let SUM= a=>{
    let sum=0;
    for(i of a){
        sum=sum+i;
    } return sum;
}
console.log(SUM(IntArr));

//(d) Return all the prime numbers in an array
let NumArr=[2,4,5,7,10,20,11];
let FindPrime= Input=>{
    let PrimeNumbers=[];
    for(let i=0;i<Input.length;i++){
        if(Input[i]>1){
            let count=0;
            for(let j=2;j<=Input[i];j++){
                if(Input[i]%j===0 && count!=3){
                    count+=1;
                }
            }if(count===1){
                PrimeNumbers.push(Input[i]);  
            }
        }
    }
    return PrimeNumbers.join(",");
} 
console.log(FindPrime(NumArr));

//(e) Return all the palindromes in an array

let Inp=["12321","asdfg","abcba","12345","98789"];
let Palindromes= e=>{
    let Palindromes=[];
    for(let i in e){
        let RevJoin=e[i].split("").reverse().join("");
        if(e[i]===RevJoin){
            Palindromes.push(e[i]);
        }
    }
    return Palindromes;
} 
console.log(Palindromes(Inp));