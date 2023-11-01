

const Seattle = {
  city: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  phone: "206-111-1111",
  location: "111 California Avenue",
  storeManager: "Amanda",
  hours: "6am - 7pm Daily",
  render: function() {
    const rootElement = document.getElementById("root");
    //console.log(rootElement)
    const storeSection = document.createElement("section");
    storeSection.classList.add("location");
    rootElement.appendChild(storeSection);
    const whichLocation = document.createElement("h2");
    whichLocation.textContent = this.city;
    storeSection.appendChild(whichLocation);
    const storeDetails = document.createElement("ul");
    storeSection.appendChild(storeDetails);
    const phoneNum = document.createElement("li");
    phoneNum.textContent = this.phone;
    storeSection.appendChild(phoneNum);
    const location = document.createElement("li")
    location.textContent = this.location;
    storeSection.appendChild(location);
    const storeManager = document.createElement("li")
    storeManager.textContent =(`Store manager: ${this.storeManager}`);
    storeSection.appendChild(storeManager);
    const hours = document.createElement("li")
    hours.textContent =(`Hours: ${this.hours}`);
    storeSection.appendChild(hours);
  }

}

Seattle.render();



