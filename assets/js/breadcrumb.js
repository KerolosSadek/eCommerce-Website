"use strict";

// Breadcrumb
const breadcrumb = document.getElementById("breadcrumb");
const currentPage = document.title.split("/").pop().replace('.html', '');
const links = document.title.split("/").filter((link) => link !== "");
let path = "Home";

links.forEach((link) => {
    const breadcrumbItem = document.createElement("li");
    breadcrumbItem.classList.add("breadcrumb-item");
    const breadcrumbLink = document.createElement("a");
    breadcrumbLink.href = "/" + link;
    breadcrumbLink.innerText = link;
    breadcrumbItem.appendChild(breadcrumbLink);
    // breadcrumb.appendChild(breadcrumbItem);
    path += " > " + link;
});

const currentBreadcrumbItem = document.createElement("li");
currentBreadcrumbItem.classList.add("breadcrumb-item");
currentBreadcrumbItem.classList.add("active");
currentBreadcrumbItem.setAttribute("aria-current", "page");
currentBreadcrumbItem.innerText = currentPage;
breadcrumb.appendChild(currentBreadcrumbItem);




