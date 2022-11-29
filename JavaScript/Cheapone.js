const items = [
    {name: 'Bike',     price: 100  },{name: 'TV',       price: 200  },{name: 'Album',    price: 10   },{name: 'Book',     price: 5    },
    {name: 'Phone',    price: 500  },{name: 'Computer', price: 1000 }
]

var i = 1
var j = 0 
container = items[0].price
  while(i<6){
    if (items[i].price < container){
    j = i
    i++
  }else{
    i++
  }
  }
console.log(`The cheapest item in all items is a ${items[j].name} and it costs ${items[j].price}`)
