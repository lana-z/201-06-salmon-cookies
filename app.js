const Seattle = {
    city: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,


    getRandomNumOfCustomers: function() {
      return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );
    }
};

let customersSeattle = Seattle.getRandomNumOfCustomers();
console.log(`Random number of customers in ${Seattle.city}: ${customersSeattle}`);



  const Tokyo = {
    city: "Tokyo",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,

    getRandomNumOfCustomers: function() {
      return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );
    }
  };

let customersTokyo = Tokyo.getRandomNumOfCustomers();
console.log(`Random number of customers in ${Tokyo.city}: ${customersTokyo}`);


  const Dubai = {
    city: "Dubai",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,

    getRandomNumOfCustomers: function() {
      return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );
    }
  };
  let customersDubai = Dubai.getRandomNumOfCustomers();
  console.log(`Random number of customers in ${Dubai.city}: ${customersDubai}`);
  


const Paris = {
    city: "Paris",
    minCustomer: 20, 
    maxCustomer: 38,
    avgCookie: 2.3,

    getRandomNumOfCustomers: function() {
      return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );
    }
};
let customersParis = Paris.getRandomNumOfCustomers();
console.log(`Random number of customers in ${Paris.city}: ${customersParis}`);


const Lima = {
    city: "Lima",
    minCustomer: 2, 
    maxCustomer: 16,
    avgCookie: 4.6,

    getRandomNumOfCustomers: function() {
      return Math.floor( Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer );
    }
};
let customersLima = Lima.getRandomNumOfCustomers();
console.log(`Random number of customers in ${Lima.city}: ${customersLima}`);



