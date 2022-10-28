
//An ice cream shop offers customers the choice of a cup or a cone. 
// It offers a choice of three different 
// flavors=['chocolate', 'vanilla','strawberry', 'fudge']. 
//It also offers three different 
// toppings=['sprinkles', 'nuts','hot fudge', 'chocolate chip'].
flavors="chocolate vanilla strawberry fudge";
toppings=['sprinkles','nuts', 'hot fudge','chocolate chip'];
console.log(iceCream(flavors,toppings));

function iceCream(flavors,toppings){
    let flavored=[];
    let _flavors=flavors.split(" ");
    for(let i=0;i<_flavors.length;i++){
        let flavor=_flavors[i];
        for(let j=0;j<toppings.length;j++){
           let topping=toppings[j];
            if(!topping.includes(flavor)){
                flavored.push(flavor+" "+"on"+" "+toppings[j]);
            }
       }
    }
    return flavored;
}