import './sass/main.scss';

import galleryTemplates from './templates/gallery';
console.log(galleryTemplates);

import cardTemplates from './templates/card';
console.log(cardTemplates);

import ApiService from './js/apiService';
console.log(ApiService);

import debounce from 'lodash.debounce';



const newApiService = new ApiService;

const refs = {
    getInput: document.querySelector('.search-input'),
    getGalleryList: document.querySelector('.gallery-list'),
    getGalleryListItem: document.querySelector('.gallery-item'),
    getCard: document.querySelector('.photo-cardist'),
    
}
console.log(refs.getInput);

refs.getInput.addEventListener('input', debounce(onSearch, 1000));

function onSearch(event) {
    event.preventDefault();

    newApiService.query = refs.getInput.value;
    console.log(newApiService.query);

    if (newApiService.query.trim() === '') {
        return;
    }

    newApiService.resetPage();
    clearGalleryList();
    


    newApiService.fetchImg().then(gallery => {
        console.log(gallery);
        renderGalleryList(gallery);
    
    })

     

    console.log(newApiService.fetchImg());
    
}

function renderGalleryList(gallery) {
    const markUp = galleryTemplates(gallery);
    refs.getGalleryList.innerHTML = markUp;
}

function clearGalleryList() {
  refs.getGalleryList.innerHTML = '';
}


// для кнопки показать еще
function scroll() {
    const element = document.getElementById('my-element-selector');

    element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    });
}

  
