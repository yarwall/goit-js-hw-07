const categories = document.querySelector("#categories");
console.log("Number of categories:", Number(categories.children.length));

// console.log(`Number of categories: ${categories.children.length}`);
// const titles = document.querySelectorAll("h2");
// titles.forEach(title => {
//     console.log(`Category: ${title.textContent}`);
//     console.log(`Elements: ${title.nextElementSibling.children.length}`);
// });

[...categories.children].forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", Number(item.lastElementChild.children.length));
})