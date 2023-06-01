function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'South Africa'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

// addressMaker({city:'Cape Town',state: 'WC'})
let arr = [1,2,3,4,5,6]
 
// console.log(arr.reduce(function(x,y) {
//      return x+y;
// }))

const setx = new Set([1,1,1,1,2,2,3])
// setx.delete(3)

console.log(setx);