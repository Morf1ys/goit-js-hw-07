"use strict";
const categoriesList = document.querySelectorAll(".item");

console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  const itemsList = category.querySelectorAll("ul li");

  console.log(`Категорія: ${categoryName}`);
  console.log(`Елементи: ${itemsList.length}`);
});
