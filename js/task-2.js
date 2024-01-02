const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const list = document.querySelector(".gallery");

// 1-st var

const markup = images
  .map(({url, alt}) => ` <li><img src="${url}" alt="${alt}" width = "360" height = "300" /></li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);

// 2-nd var

// const createList = (arr) => {
//   return arr.map(({ url, alt }) => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = alt;
//     img.width = 360;
//     img.height = 300;
//     li.append(img);
//     return li;
//   });
// };

// const markup = createList(images);

// list.append(...markup);

// 3-rd var

// const markup = images.reduce(
//   (acc, img) =>
//     (acc += `<li><img src="${img.url}" alt="${img.alt}" width = "360" height = "300"></li>`),
//   ''
// );

// list.insertAdjacentHTML('beforeend', markup);

// 4-th var

// const markup = images
//   .map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width = "360" height = "300"></li>`)
//   .join("");
  
// list.innerHTML = markup;