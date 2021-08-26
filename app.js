const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
  
// const allImg = document.querySelectorAll('img');
// const sec = document.querySelectorAll('.js_container_img');

// const fnEntry = (entries, observer) => {
//   // console.log('observer', observer);

//   if (entries[0].isIntersecting) {
//     const img = entries[0].target;
//     const needSrc = img.dataset.needsrc;
//     img.src = needSrc;
//     observer.disconnect();
//   }
// };

// const addIO = img => {
//   const intOb = new IntersectionObserver(fnEntry);
//   intOb.observe(img);
// };

// allImg.forEach(img => addIO(img));
const refs = {
  jsLightBox: document.querySelector('.js-lightbox'),
  lightBoxOverlay: document.querySelector('.lightbox__overlay'),
  lightBoxContent: document.querySelector('.lightbox__content'),
  lightBoxImage: document.querySelector('.lightbox__image'),
  lightBoxButton: document.querySelector('.lightbox__button'),
  gallery: document.querySelector('.js-gallery')
}

const createGallaryMarkup = galleryItems.map(({ preview, original, description }) => {
    return`<li class="gallery__item">
      <a class ="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
     </li>`;
  }).join('');

refs.gallery.insertAdjacentHTML('beforeend', createGallaryMarkup);
// ------ modal----------------
refs.gallery.addEventListener('click', onPictureClick)

function onPictureClick(e) {
e.preventDefault();
//   if (!e.target.classList.contains('gallery__image')) {
//   return
// }
  refs.jsLightBox.classList.add('is-open');
  refs.lightBoxImage.src = e.target.dataset.source;
}

refs.jsLightBox.addEventListener('click', onModalCloseClick)
window.addEventListener('keydown', onKeydown)

function onModalCloseClick(e) {
  if (e.target.classList.contains('lightbox__button')) {
    closeModal();
  }
  if (e.target.classList.contains('lightbox__overlay')) {
    closeModal();
  }
}
 
function onKeydown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModal(e) {
  refs.lightBoxImage.src = '';
  refs.jsLightBox.classList.remove('is-open');
}



