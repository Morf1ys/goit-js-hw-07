"use strict";
const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories:${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector(".title-name").textContent;

  const itemsList = category.querySelectorAll(".li-item");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsList.length}`);
});
