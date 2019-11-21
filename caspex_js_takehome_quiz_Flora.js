//1. 
function replaceString(s) {
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] += i + 1;
  }
  return arr.join(' ');
}
//test:
console.log(replaceString('The quick brown fox jumps over the lazy dog')); //The1 quick2 brown3 fox4 jumps5 over6 the7 lazy8 dog9

//2. 
var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
console.log(dwarves.split(' ').reverse().join(' ')); //sneezy sleepy happy grumpy dopey doc bashful

//3.
let months = ['January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 
              'September', 'October', 'November', 'December'
            ];
function numToMonth(num) {
  return months[num - 1] || 'no result';
}
//test:
console.log(numToMonth(1)); //January
console.log(numToMonth(12)); //December
console.log(numToMonth(13)); //no result
console.log(numToMonth(0)); //no result

//4.
function digit(str) {
  return str.match(/\d/);
}
//test:
console.log(digit('zaq-')); //null
console.log(digit('s1p')); //1 

//5. 
function compare(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      };
    }
  }
  return true;
}
//test:
console.log(compare([1, 'dd', 2, 4], [1, 'dd', 2, 4]));  //true
console.log(compare([1, 'aaa', 2], [1, 'dd', 2, 4]));  //false

6.


var response = {
  "cartItems": [{
    "id": "ci186012014536",
    "qty": 3,
    "itemInfo": {
    "model": "UN55NU6950FXZA",
    "itemNo": "980142010",
    "minDeliveryDate": 1561938400000,
    "name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K (2160p) Ultra HD Smart LED TV",
    "skuId": "sku23018986",
    "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhdsmart-led-tv-6000-series/prod22464496.ip"
    },
    "inventoryInfo": {
      "minQtyLimit": -1,
      "lowStockLevel": 5,
      "maxQtyLimit": -1,
      "itemLowInStockFlag": false,
      "stockLevel": "inStock"
    },
    "priceInfo": {
      "mapPriceInCents": 0,
      "listPriceInCents": 44900,
      "shippingAmountInCents": 0,
      "shippingAmount": 0,
      "originalPrice": 0,
      "itemTotalInCents": 44900,
      "totalMapPrice": 0,
      "originalPriceInCents": 0,
      "salesTax": 3500
    },
    "props": {
      "selectedChannel": "ONLINE",
      "shippingChargeIncluded": false,
      "shippingDiscountEligible": true,
      "freeShipEligible": false,
      "specialItem": false,
      "weightedItem": false,
      "onlineChannelMinLimitQty": -1,
    }
  }]
};

products = {
    "prod": response.cartItems[0].itemInfo.itemPageUrl.split('/')[3],
    "quantity": response.cartItems[0].qty.toString(), 
    "shipdays": new Date(response.cartItems[0].itemInfo.minDeliveryDate), 
    "shipvalue": response.cartItems[0].props.shippingDiscountEligible?'free-plus':'', 
    "subtotal": (response.cartItems[0].qty) * (response.cartItems[0].
                priceInfo.listPriceInCents/100), 
    "uprice": (response.cartItems[0].priceInfo.listPriceInCents/100)
              .toLocaleString("en-US", {style:"currency", currency:"USD"}),
};

console.log(products);