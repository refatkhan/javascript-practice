function woodCalculator(chair,table,bed){
    const chairWood = 3;
    const tableWood = 6;
    const bedWood = 20;
     const totalChairWood = chair * chairWood;
     const totalTableWood  = table * tableWood;
     const totalBedWood = bed * bedWood;
     const totalWood = totalBedWood + totalChairWood + totalTableWood;
     return totalWood;
}
const wood = woodCalculator(2,6,2);
console.log(wood);