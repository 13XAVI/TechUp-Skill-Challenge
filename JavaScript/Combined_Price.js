const items = [
    {name: 'Bike',     price: 100  }, {name: 'TV',       price: 200  },{name: 'Album',    price: 10   },{name: 'Book',     price: 5    },{name: 'Phone',    price: 500  },{name: 'Computer', price: 1000 }
]

var i = 0
var sum = 0 
  while(i<6){
    sum = sum + items[i].price
    i++
  }
console.log(`The full prices of all products combined is ${sum}`)
