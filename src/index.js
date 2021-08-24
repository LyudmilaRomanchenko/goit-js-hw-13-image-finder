// import './sass/main.scss';

// import formTemplates from './templates/form';
// console.log(formTemplates);

import ApiService from './js/apiService';
console.log(ApiService);

import debounce from 'lodash.debounce';



const newApiService = new ApiService;
newApiService.fetchImg();

const refs = {
    getForm: document.querySelector('.search-form'),
}
console.log(refs.getForm);

refs.getForm.addEventListener('input', debounce(onSearch, 5000));

function onSearch(event) {
    event.preventDefault();
    console.log('hhhhhhhhh');
}
  
