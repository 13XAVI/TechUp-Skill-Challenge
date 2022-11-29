const items = [
    {name: 'Bike',     price: 100  }, {name: 'TV',       price: 200  },{name: 'Album',    price: 10   },{name: 'Book',     price: 5    },{name: 'Phone',    price: 500  },{name: 'Computer', price: 1000 }
]

var i = 0
var sum = 0
  while(i<6){
    if(items[i].price < 10 ){
    i++
    }
    else
    {
    sum = sum + items[i].price
    i++;  
    }
  }
  
console.log(`The full price minus products that are under 10 dollar is ${sum}`)
