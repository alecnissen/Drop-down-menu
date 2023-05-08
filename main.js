// when you click on an item 

// trigger the drop down menu to display all its within the header 

// keeping certain classes active? 

// for now add all of it's content within each section 

// look into making classes visable, 

// add event listener to the header elements, 

// once clicked reveal the children or items within the element 



// event listeners for header elements 

let informationHeaderElement = document.getElementById("information"); 

let contactHeaderElement = document.getElementById("contact"); 

let hiddenClassInfo = document.getElementById("hidden-property-info"); 

let hiddenClassContact = document.getElementById("contact-info-container");

informationHeaderElement.addEventListener("click", () => { 
     console.log("you clicked the info header element");

    // hiddenClassInfo.style.display = "block"; 
    hiddenClassInfo.removeAttribute("hidden"); 

    
});  


contactHeaderElement.addEventListener("click", () => { 
    console.log("you clicked the contact element");

    // hiddenClassContact.style.display = "block";

    hiddenClassContact.removeAttribute("hidden");

    
});   


