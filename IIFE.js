//(a) Print odd numbers in an array
let Arr=[1,2,3,4,5];
(function(e){
    let Output=[];
    for(let i of e){
        if(i%2!=0){
            Output.push(i);
        }
    }console.log(Output);
})(Arr);

//(b) Convert all the strings to title caps in a string array

let StringArr=["welcome tO iNDIA"];
let Input=StringArr[0].split(" ");
(function(i){
    let Output=[];
    for(let e of i ){
        let A=e.toLowerCase();
        A=A[0].toUpperCase()+A.slice(1)
        Output.push(A);
    }console.log(Output.join(" "));
    
})(Input);

//(c) Sum of all numbers in an array
let IntArr=[1,4,5,7,10,20];
(function (a){
    sum=0;
    for(i of a){
        sum=sum+i;
    } 
    console.log(sum);
})(IntArr);

//(d) Return all the prime numbers in an array
let NumArr=[2,4,5,7,10,20,11];
(function(Input){
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
    console.log(PrimeNumbers.join(","));
})(NumArr);

//(e) Return all the palindromes in an array

let Inp=["12321","asdfg","abcba","12345","98789"];
(function(Input){
    let Palindromes=[];
    for(let i in Input){
        let RevJoin=Input[i].split("").reverse().join("");
        if(Input[i]===RevJoin){
            Palindromes.push(Input[i]);
        }
    }
    console.log(Palindromes);
})(Inp);

//(f) Return median of two sorted arrays of the same size

let Arr1=[1,4,6,8,9];
let Arr2=[3,5,2,7,10];
if(Arr1.length===Arr2.length){
    let Arr=[...Arr1,...Arr2]
    let Input=Arr.sort((a,b)=> a-b);
    (function(InArr){
        let Len=InArr.length;
        let LenMid1= Len/2;
        let LenMid2= (LenMid1-1);
        if(Len%2===0){
            console.log((InArr[LenMid1]+InArr[LenMid2])/2) ;
        }
        
    })(Input);
}else{
    console.log("Two Array sizes are different");
}

//(g) Remove duplicates from an array
let InputArray=[1,1,2,3,3,4,5,6,7,6,"a","b","b","a","s","d","f","g"];
(function(e){
    console.log([...new Set(e)]);
})(InputArray);

//(h) Rotate an array by k times
let InputArr=[1,1,2,3] ;
(function(e,k){
    k=k%e.length;
    let Remove=e.splice(-k);
    e.unshift(...Remove);
     console.log(e);
    
 })(InputArr,3);

