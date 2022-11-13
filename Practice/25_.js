console.log(findElement([5,3,6,7,10,10],4));

function findElement(array,k){
    array.sort((a, b) => a- b);
    console.log(array);
    return array[k-1]; 
    //time complexity(O(1)
    }