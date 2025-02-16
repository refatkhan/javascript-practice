function getMin(numbers){
    let cheapestPhone = numbers[0];
for (const price of numbers) {
        if(cheapestPhone > price){
            cheapestPhone = price;
        }
    }
    return cheapestPhone;

    
}
const priceList =[20000,30000,15000,25000,78000]
const result = getMin(priceList);
console.log(result);
