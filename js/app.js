const lightDark = document.getElementById("ldm-button");
const body = document.body;


function lightDarkMode() {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

lightDark.addEventListener("click", lightDarkMode);

const Seattle = {
  city: "Seattle",
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  phone: "+1-206-111-1111",
  location: "189 Pike Street",
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

  const Tokyo = {
    city: "Tokyo",
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    phone: "+81 54-4322-2231",
    location: "19530 Shibuya Dori",
    storeManager: "Takashi",
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
  
  };

  Tokyo.render();

  const Dubai = {
    city: "Dubai",
    minCustomer: 11,
    maxCustomer: 38,
    avgCookie: 3.7,
    phone: "+971-06-579-2951",
    location: "8 Sheikh Zayed Road",
    storeManager: "Fatima",
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
  };
  Dubai.render();

const Paris = {
    city: "Paris",
    minCustomer: 20, 
    maxCustomer: 38,
    avgCookie: 2.3,
    phone: "+33-20-2311-9014",
    location: "90 Champs-Élysées",
    storeManager: "Pierre",
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
};
Paris.render();

const Lima = {
    city: "Lima",
    minCustomer: 2, 
    maxCustomer: 16,
    avgCookie: 4.6,
    phone: "+51-908-987-5537",
    location: "75 4th Avenida Arequipa",
    storeManager: "Ana",
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
};
Lima.render();