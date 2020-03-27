const siteContent = { 
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Option A:
// let navItems = document.querySelectorAll('header nav a');

// navItems[0].textContent = siteContent.nav["nav-item-1"];
// navItems[1].textContent = siteContent.nav["nav-item-2"];
// navItems[2].textContent = siteContent.nav["nav-item-3"];
// navItems[3].textContent = siteContent.nav["nav-item-4"];
// navItems[4].textContent = siteContent.nav["nav-item-5"];
// navItems[5].textContent = siteContent.nav["nav-item-6"];

//Option B:
// let navLinks = document.getElementsByTagName('nav')[0].children;
// for(let i = 0; i < navLinks.length; i++){
//   navLinks[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
// }

//Option C: 
let navButtons = document.querySelectorAll("a");
  navButtons.forEach((currentValue, index) => currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`]);

// CTA Heading
let ctaHeading = document.querySelector(".cta-text h1");
ctaHeading.textContent = siteContent.cta.h1

// CTA Heading – Add new line
ctaHeading.setAttribute('style', 'white-space: pre;');
ctaHeading.textContent = siteContent["cta"]["h1"].split(" ").join("\n");

// CTA Button
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

// CTA Image
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];


let mainArray = ['features', 'about', 'services', 'product', 'vision'];

// Main Content Headings
let mainH4 = document.querySelectorAll('.text-content h4');
mainH4.forEach((currentValue, index) => currentValue.textContent = siteContent["main-content"][`${mainArray[index]}-h4`])

// Main Content Paragraphs
let mainParagraph = document.querySelectorAll('.text-content p');
mainParagraph.forEach((currentValue, index) => currentValue.textContent = siteContent["main-content"][`${mainArray[index]}-content`]);

// Main Content Image
let midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

// Contact Heading
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

let contactArray = ['address', 'phone', 'email'];

// Contact Paragraphs
let contactParagraph = document.querySelectorAll('.contact p');
contactParagraph.forEach((currentValue, index) => currentValue.textContent = siteContent.contact[`${contactArray[index]}`]);

// Footer Paragraph
let footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent.footer.copyright;

// Change the color of the navigation text to be green
navButtons.forEach((element) => element.style.color = "green");

// Add new items to the navigation system
let firstNavLink = document.createElement('a');
firstNavLink.textContent = 'Home';
firstNavLink.style.color = 'green';

let lastNavLink = document.createElement('a');
lastNavLink.textContent = 'Subscribe';
lastNavLink.style.color = 'green';

let navBar = document.querySelector('nav');
navBar.prepend(firstNavLink);
navBar.appendChild(lastNavLink);


// Update styles throughout page
let textContentClass = document.querySelectorAll('h4');
textContentClass.forEach((element) => element.style.color = 'green');