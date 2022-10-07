    /***********************************************************************
    Write a function `pairProduct(arr, num)` that accepts an array of
    numbers (arr) and a target number (num). It should return pairs of
    indices whose elements multiply to `num`. No pair should appear twice in
    the result.

    Use only `while` loops. No `for` loops.

    Examples:

    pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
    pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
    pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
    ***********************************************************************/
    let arr = [1, 2, 3, 12, 8];
    let num = 24;
    console.log(pairProduct(arr, num));
    function pairProduct(arr, num) {
    let pairs = [];
    let i = 0;
    while (i < arr.length) {
            let num1 = arr[i];
           // console.log("num1" +num1)
            let j = i+1;
            while (j < arr.length) {
               let num2 = arr[j];
                //console.log("num2----" +num2)
                    if (num1 * num2 === num) {
                        //let ele=([i,j])
                        //console.log("ELE"+ele)
                        pairs.push([i, j]);
                        //console.log("pairs---"+pairs)
                    }
                j++;
            }
        i++;
    }
    return pairs;
}

    /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
    module.exports = pairProduct;
