//1. Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(x){
    for(let i=0; i<x.length; i++){
        if(x[i] < 0){
            x[i] = 0;
        }
    }

    return x;
}

console.log(resetNegatives([1,2,-1, -3]));

//2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.
//   For example moveForward( [1,2,3]) should return [2,3,0].

let array = [2,3,4,-1,6];

function moveForward(x){
    x.shift();
    x.push(0);

    return x;
}

console.log(moveForward(array));

//3. Given an array, return an array with values in a reversed order.
//   For example, returnReversed([1,2,3]) should return [3,2,1].

function returnReversed(arr){
    let reverseArr = [];

    for(let x=arr.length-1; x>=0; x--){
        reverseArr.push(arr[x]);
    }

    return reverseArr;
}

console.log(returnReversed([1,2,3]))

//4. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.
//   For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(arr){
    let newArray = [];

    for(let x=0; x<arr.length; x++){
        newArray.push(arr[x])
        newArray.push(arr[x]);
    }

    return newArray;
}

console.log(repeatTwice([4,'Ulysses', 42, false]));