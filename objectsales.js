var salesTaxRates = {
    AB: 0.05,
    BC: 0.12,
    SK: 0.10
  };
  
var companySalesData = [
{
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
},
{
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
}
];

function calculateSalesTax(salesData, taxRates) {
  var final = {};
  var company = []
  var salesTax = [];

  for (let company of salesData) {
    for (let sale of company.sales) {
      final[company.name] = {
        'totalSales' : [],
        'totalTaxes' : []
      }
    }
  }
  for (let company of salesData) {
    for (let sale of company.sales) {
      final[company.name].totalSales.push(calculateSum(sale));
      final[company.name].totalTaxes.push(calculateTaxPerProv(sale, taxRates[company.province]));
    }   
  }

  for (let company in final) {
    final[company].totalSales = calculateTotalSales(final[company].totalSales);
    final[company].totalTaxes = calculateTotalSales(final[company].totalTaxes);
  }
  return final;
  function calculateTaxPerProv(eachSale, tax) {
    return eachSale * (tax);
  }
  function calculateSum(num) {
    let equals = 0;
    return equals += num;
  }
  function calculateTotalSales(saleArray) {
    let finalTotal = 0;
    for (let total of saleArray) {
      finalTotal += total;
    }
    return finalTotal;
  }
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results)
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/