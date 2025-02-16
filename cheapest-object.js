const phoneDetails =[
    {
        name:"Samsung", price: 15000, camera: "15mp", color:"white"
    },
    
    { name:"Iphone", price: 150000, camera: "15mp", color:"black"
    },

    { name:"BlackBerry", price: 30000, camera: "15mp", color:"white"
    },

    { name:"Oppo", price: 25000, camera: "18mp", color:"white"
    },

    { name:"Vivo", price: 12000, camera: "15mp", color:"Silver"
    },
]

function cheapestPhone(phone){
   let priceBest= phone[0];
   for (const element of phone) {
    if( element.price < priceBest.price){
        priceBest = element;
    }
   }
   return priceBest;
}
const bestPhone = cheapestPhone(phoneDetails);
console.log(bestPhone);