// import { galleryItems } from './gallery-items.js';
// // Change code below this line


// const gallery = document.querySelector('.gallery');
// const markupGallery = createGallery(galleryItems);
// gallery.insertAdjacentHTML('beforeend', markupGallery);



// function createGallery(galleryItems) {
//   return galleryItems.map(({preview, original, description}) => {
//     return `<div class="gallery__item">
//   <a class="gallery__link" ${original} ">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
// }).join(''); 
// };

// function onGalleryClick (evt) {
//        const galleryImage = evt.target.classList.contains('gallery__image');
//    if (!galleryImage){
//        return;
//    }
//    const source = evt.target.dataset.source;
//    const instance = basicLightbox.create(`
//        <img src="${source} " width="800" height="600">
//    `);
//    instance.show();

// gallery.addEventListener('keydown', (evt) => {
//   if (evt.code === "Escape") {
//     instance.close();
//   };
// })


//    };
//    gallery.addEventListener('click', onGalleryClick);


import { galleryItems } from './gallery-items.js';

//! Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" ${original} ">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryContainer.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
  const galleryImage = event.target.classList.contains('gallery__image');
   if (!galleryImage){
       return;
   }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source} " width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );

  // instance.show();

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  // window.addEventListener('keydown', onKeydownEsc);
  // window.removeEventListener('keydown', onKeydownEsc);

  instance.show();
}


