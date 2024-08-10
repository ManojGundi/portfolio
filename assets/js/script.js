"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// ========== Projects Portfolio ============

const projects = [
  {
    name: "Heartfulness Magazine",
    dept: "Fullstack",
    projectLink: "https://heartfulness.org/magazine",
    rr: `<h4>Roles and Responsibilities</h4>
 
    <strong>Frontend Development:</strong>
    <ul>
      <li style="list-style-type: circle;">Migrated WordPress applications to React Developed and implemented UI components Ensured design consistency across applications Optimized application performance</li>
    </ul>
  
    <strong>Full-Stack Collaboration:</strong>
    <ul>
      <li style="list-style-type: circle;">Seamlessly integrated frontend and backend Delivered cohesive user experiences</li>
    </ul>
  
    <strong>User Experience:</strong>
    <ul>
      <li style="list-style-type: circle;">Contributed to intuitive design Ensured cross-browser compatibility Focused on overall user satisfaction</li>
    </ul>
 
    <strong>Team Contribution:</strong>
    <ul>
      <li style="list-style-type: circle;">Worked collaboratively on team projects Delivered scalable and robust solutions</li>
    </ul>`,
  },
  {
    name: "Bloomberg Clone",
    dept: "Fullstack",
    projectLink: "https://manojg9951.github.io/bloomberg-clone/",
    rr: `<h2>Roles and Responsibilities</h2>
<ul>
<li style="list-style-type: circle;">Note: Dynamic Routing Not Working On GitHub Pages You can See The responsiveness with above link and Its limited to 100 API calls per day…</li>
  <li style="list-style-type: circle;">Created the Bloomberg Site using Next.js, ensuring a responsive and user-friendly interface.</li>
  <li style="list-style-type: circle;">Developed and implemented UI components to enhance the overall visual appeal and functionality of the applications.</li>
  <li style="list-style-type: circle;">Ensured consistency in design elements and user interface across different sections of the web applications.</li>
  <li style="list-style-type: circle;">Enabled users to view news from different countries in their preferred languages.</li>
  <li style="list-style-type: circle;">Implemented a feature allowing users to choose news categories based on their interests.</li>
  <li style="list-style-type: circle;">Utilized the newsAPI site's free API calls to fetch and display real-time news content on the site.</li>
  <li style="list-style-type: circle;">Innovatively added a Dark Mode Feature, providing users with an alternative visual experience not available in the original site.</li>
</ul>`,
  },
  {
    name: "Heartfulness",
    dept: "Frontend",
    projectLink: "https://heartfulness.org/us/#",
    rr: `<h2>Roles and Responsibilities</h2>
    <ul>
  <li style="list-style-type: circle;">Contributed as a team member in migrating web applications to React.JS and NextJS from WordPress. Developed and implemented UI components to enhance the overall visual appeal and functionality of the applications.</li>
  <li style="list-style-type: circle;">Ensured consistency in design elements and user interface across different sections of the web applications. Seamlessly integrated frontend and backend for a cohesive user experience.</li>
  <li style="list-style-type: circle;">Played a part in optimizing application performance for enhanced efficiency. Contributed to improving user experience through intuitive design elements.</li>
  <li style="list-style-type: circle;">Ensured applications were compatible across various devices and browsers. Assisted in delivering robust and scalable solutions to meet project requirements.</li>
  <li style="list-style-type: circle;">Demonstrated versatility in handling both frontend and backend development tasks.</li>
  </ul>`,
  },
  {
    name: "Heartfulness Meditation",
    dept: "Fullstack",
    projectLink:
      "https://heartfulness.org/en/?utm_source=google&utm_medium=cpc&utm_campaign=heartfulness%20brand&utm_term=heartfulness%20meditation&gad_source=1&gclid=CjwKCAjw_Na1BhAlEiwAM-dm7FykQ_qs-2TlJyfM1gZ0SD-vF8MyDAdv93z1tCAQj0bAguT4yFO23RoCQTMQAvD_BwE",
    rr: `<h4>Roles and Responsibilities</h4>
 
    <strong>Frontend Development:</strong>
    <ul>
      <li style="list-style-type: circle;">Migrated WordPress applications to React Developed and implemented UI components Ensured design consistency across applications Optimized application performance</li>
    </ul>
  
    <strong>Full-Stack Collaboration:</strong>
    <ul>
      <li style="list-style-type: circle;">Seamlessly integrated frontend and backend Delivered cohesive user experiences</li>
    </ul>
  
    <strong>User Experience:</strong>
    <ul>
      <li style="list-style-type: circle;">Contributed to intuitive design Ensured cross-browser compatibility Focused on overall user satisfaction</li>
    </ul>
 
    <strong>Team Contribution:</strong>
    <ul>
      <li style="list-style-type: circle;">Worked collaboratively on team projects Delivered scalable and robust solutions</li>
    </ul>`,
  },
  {
    name: "Kanha Shantivanam(Heartfulness)",
    dept: "Frontend",
    projectLink: "https://heartfulness.org/kanha/",
    rr: `<h2>Roles and Responsibilities</h2>
    <ul>
  <li style="list-style-type: circle;">Contributed as a team member in migrating web applications to React.JS and NextJS from WordPress. Developed and implemented UI components to enhance the overall visual appeal and functionality of the applications.</li>
  <li style="list-style-type: circle;">Ensured consistency in design elements and user interface across different sections of the web applications. Seamlessly integrated frontend and backend for a cohesive user experience.</li>
  <li style="list-style-type: circle;">Played a part in optimizing application performance for enhanced efficiency. Contributed to improving user experience through intuitive design elements.</li>
  <li style="list-style-type: circle;">Ensured applications were compatible across various devices and browsers. Assisted in delivering robust and scalable solutions to meet project requirements.</li>
  <li style="list-style-type: circle;">Demonstrated versatility in handling both frontend and backend development tasks.</li>
  </ul>`,
  },
  {
    name: "Daaji Official",
    dept: "Fullstack",
    projectLink: "https://www.daaji.org/",
    rr: `<h4>Roles and Responsibilities</h4>
 
    <strong>Frontend Development:</strong>
    <ul>
      <li style="list-style-type: circle;">Migrated WordPress applications to React Developed and implemented UI components Ensured design consistency across applications Optimized application performance</li>
    </ul>
  
    <strong>Full-Stack Collaboration:</strong>
    <ul>
      <li style="list-style-type: circle;">Seamlessly integrated frontend and backend Delivered cohesive user experiences</li>
    </ul>
  
    <strong>User Experience:</strong>
    <ul>
      <li style="list-style-type: circle;">Contributed to intuitive design Ensured cross-browser compatibility Focused on overall user satisfaction</li>
    </ul>
 
    <strong>Team Contribution:</strong>
    <ul>
      <li style="list-style-type: circle;">Worked collaboratively on team projects Delivered scalable and robust solutions</li>
    </ul>`,
  },
  {
    name: "Notes App",
    dept: "Frontend",
    projectLink: "#",
    rr: `<h2>Roles and Responsibilities</h2>
    <ul>
  <li style="list-style-type: circle;">Contributed as a team member in migrating web applications to React.JS and NextJS from WordPress. Developed and implemented UI components to enhance the overall visual appeal and functionality of the applications.</li>
  <li style="list-style-type: circle;">Ensured consistency in design elements and user interface across different sections of the web applications. Seamlessly integrated frontend and backend for a cohesive user experience.</li>
  <li style="list-style-type: circle;">Played a part in optimizing application performance for enhanced efficiency. Contributed to improving user experience through intuitive design elements.</li>
  <li style="list-style-type: circle;">Ensured applications were compatible across various devices and browsers. Assisted in delivering robust and scalable solutions to meet project requirements.</li>
  <li style="list-style-type: circle;">Demonstrated versatility in handling both frontend and backend development tasks.</li>
  </ul>`,
  },
  {
    name: "Aurigine Pharma",
    dept: "Backend",
    projectLink: "#",
    rr: `<h2>Backend Management Team Member Responsibilities</h2>
<ul>
<li style="list-style-type: circle;">worked on aurigine Timesheet management application</li>
  <li style="list-style-type: circle;">Ensuring smooth operation and efficiency of backend systems</li>
  <li style="list-style-type: circle;">Monitoring and managing data flow within the Angular application</li>
  <li style="list-style-type: circle;">Safeguarding accuracy and integrity of user credentials</li>
  <li style="list-style-type: circle;">Conducting thorough code reviews of backend systems</li>
  <li style="list-style-type: circle;">Generating comprehensive daily reports on system performance</li>
  <li style="list-style-type: circle;">Identifying potential areas for improvement</li>
  <li style="list-style-type: circle;">Maintaining stability and reliability of backend infrastructure</li>
</ul>`,
  },
];

// projectlist variable

const projectLists = document.querySelectorAll("[project-list-item]");
const projectModalContainer = document.querySelector(
  "[project-modal-container]"
);
const projectModalCloseBtn = document.querySelector(
  "[project-modal-close-btn]"
);
const projectOverlay = document.querySelector("[project-overlay]");

// project Model Variable

const projectModalImg = document.querySelector("[project-modal-img]");
const projectModalTitle = document.querySelector("[project-modal-title]");
const projectModalText = document.querySelector("[project-modal-text]");
const projectModalLink = document.querySelector("[project-link]");

// project Modal toggle function
const projectsModalFunc = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
};

for (let i = 0; i < projectLists.length; i++) {
  projectLists[i].addEventListener("click", function () {
    console.log(projectModalLink.href);
    projectModalImg.src = this.querySelector("[project-image]").src;
    modalImg.alt = this.querySelector("[project-image]").alt;
    projectModalTitle.innerHTML = projects[i].name;
    projectModalText.innerHTML = projects[i].rr;
    projectModalLink.innerHTML = projects[i].projectLink;
    projectModalLink.href = projects[i].projectLink;
    projectsModalFunc();
  });
}

// add click event to project modal close button
projectModalCloseBtn.addEventListener("click", projectsModalFunc);
projectOverlay.addEventListener("click", projectsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
