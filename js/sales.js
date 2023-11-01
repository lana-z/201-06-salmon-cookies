


let Stores = [Seattle, Tokyo, Dubai, Paris, Lima]

let tableCity = document.getElementById("city");
let cityRow = document.createElement('tr');
body.appendChild(cityRow);

let nameCell = document.createElement('td');
nameCell.textContent = this.name;
cityRow.appendChild(nameCell);

let breedCell = document.createElement('td');
breedCell.textContent = this.breed;
dogRow.appendChild(breedCell);

for( let i = 0; i < this.Stores.length; i++ ) {
 let cell = document.createElement("td");
 cell.textContent = this.isGoodWith[i].toString();
 dogRow.appendChild(cell);
}




/* 
const Seattle = {
    city: "Seattle",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    phone: "+1-206-111-1111",
    location: "189 Pike Street",
    storeManager: "Amanda",
    hours: "6am - 7pm Daily",
    estimatedSales: [],
    render: function() {
      renderStore(this);
    },
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }

  const Tokyo = {
    city: "Tokyo",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    phone: "+81 54-4322-2231",
    location: "19530 Shibuya Dori",
    storeManager: "Takashi",
    hours: "6am - 7pm Daily",
    estimatedSales: [],
    render: function() {
      renderStore(this);
    },
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }
  
  const Dubai = {
    city: "Dubai",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    phone: "+971-06-579-2951",
    location: "8 Sheikh Zayed Road",
    storeManager: "Fatima",
    hours: "6am - 7pm Daily",
    estimatedSales: [],
    render: function() {
      renderStore(this);
    },
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }
  
  const Paris = {
    city: "Paris",
    minCustomer: 20, 
    maxCustomer: 38,
    avgCookie: 2.3,
    phone: "+33-20-2311-9014",
    location: "90 Champs-Élysées",
    storeManager: "Pierre",
    hours: "6am - 7pm Daily",
    estimatedSales: [],
    render: function() {
      renderStore(this);
    },
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }

  const Lima = {
    city: "Lima",
    minCustomer: 2, 
    maxCustomer: 16,
    avgCookie: 4.6,
    phone: "+51-908-987-5537",
    location: "75 4th Avenida Arequipa",
    storeManager: "Ana",
    hours: "6am - 7pm Daily",
    estimatedSales: [],
    render: function() {
      renderStore(this);
    },
    estimate: function() {
      this.estimatedSales = estimate(this);
    }
  }

  function random(min,max) {
    return Math.floor( Math.random() * (max-min+1)) + min;
  }
  
  // Based on the min/max and average
  // return an array of estimated sales per hour
  function estimate(store) {
    let estimatedSales = [];
    // loop over the hours array
    // for each, do the math and add that to the estimated sales
    for( let i=0; i < hours.length; i++ ) {
      const numCustomers = random( store.minCustomer, store.maxCustomer);
      const hourlySales = Math.ceil(numCustomers * store.avgCookie);
      estimatedSales.push( hourlySales );
    }
    return estimatedSales;
  }
  
  function renderStore( store ) {
  
    console.log("In the renderStore(), store is: ", store);
  
    // Looks for any element with an id="root", i.e.
    // <section id="root">
    const rootElement = document.getElementById("root");
  
    // Create a new, empty section for a store
    const storeSection = document.createElement("section");
    rootElement.appendChild(storeSection);
  
    const whichLocation = document.createElement("h2");
    // Give it some content
    whichLocation.textContent = store.city;
    // Add it to the page, as a child of rootElement
    storeSection.appendChild(whichLocation);
  
    // Add a unordered list to show the address...
    const storeDetails = document.createElement("ul");
    storeSection.appendChild(storeDetails);
  
    // Put the estimates in the UL
    let total = 0;
    for( let i=0; i < hours.length; i++ ) {
      total += store.estimatedSales[i];
      const est = document.createElement('li');
      // Add the actual number, from the store object
      est.textContent = `${hours[i]}: ${store.estimatedSales[i]}`
      // Append that to the UL
      storeDetails.appendChild(est);
    }
  
    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: ${total}`;
    storeDetails.appendChild(totalElement);
  
  }
  
  
//   Way #1
//   seattle.estimate();
//   seattle.render();
  
//   tokyo.estimate();
//   tokyo.render();

// Way #2
let stores = [ Seattle, Tokyo, Dubai, Paris, Lima ];

for( let i=0; i < stores.length; i++ ) {
stores[i].estimate();
stores[i].render();
}
*/