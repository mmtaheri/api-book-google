import { loaderShow, loaderHide } from './components/loader.js';
import listItem from './components/service.js'
import './css/style.css';
///WAY  2////
let ul = document.createElement('ul');
ul.setAttribute('style', 'padding:0')
ul.setAttribute('class', 'row')
let html = '';

///////////api
// const serviceApi = (searchKey) => {
//   loaderShow('show')
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Could load json.");
//       }
//       return response.json()
//     }) // Transform data to json
//     .then(data => {

//       console.log(data)
//       let listItem = data.items; // Get data
//       loaderHide('show');

//       // Map each
//       return listItem.map((listItem) => {

//         //generate HTML
//         let htmlsec = `<div class="book-column ">
//   <div class="book-card">
//     <div class="book-list-content">
//         <div class="book-card-image">
//             <img src=${listItem.volumeInfo.imageLinks.thumbnail} alt=""> 
//         </div>
//         <div class="book-card-body">
//             <div class="book-header">
//                 <h4 class="book-title book-hight-text">Title: ${listItem.volumeInfo.title.substr(0, 40)}</h4>
//                 <h4 class="book-author book-hight-text">Author: ${listItem.volumeInfo.authors}</h4>
//                 <h4 class="book-el-link book-hight-text"><a href="${listItem.volumeInfo.canonicalVolumeLink}" >${listItem.volumeInfo.title} </a></h4>
//             </div>
//             <div class="book-details">
//                 <h5 class="book-publisher book-hight-text">Publisher: ${listItem.volumeInfo.publisher}</h5>
//                 <h5 class="book-id-number">Id Number: ${listItem.id}</h5>
//             </div>
//             <div class="">
//                <span class="book-badge book-badge-blue"> ${listItem.volumeInfo.pageCount} p </span>
//                <span class="book-badge book-badge-green"> ${listItem.volumeInfo.language} </span>
//                <span class="book-badge book-badge-red"> #${listItem.volumeInfo.categories} </span>
            
            
//             </div>
//         </div>
//     </div>
//   </div>
//   </div>`;

//         html += htmlsec;

//         let rows = document.querySelector('.row');
//         rows.innerHTML = html;
//       })

//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   let html = '';

// }
////////////api end
      ////// Map each
      
       listItem.map((listItem) => {

        //generate HTML
        let htmlsec = `<div class="book-column ">
  <div class="book-card">
    <div class="book-list-content">
        <div class="book-card-image">
            <img src=${listItem.volumeInfo.imageLinks.thumbnail} alt=""> 
        </div>
        <div class="book-card-body">
            <div class="book-header">
                <h4 class="book-title book-hight-text">Title: ${listItem.volumeInfo.title.substr(0, 40)}</h4>
                <h4 class="book-author book-hight-text">Author: ${listItem.volumeInfo.authors}</h4>
                <h4 class="book-el-link book-hight-text"><a href="${listItem.volumeInfo.canonicalVolumeLink}" >${listItem.volumeInfo.title} </a></h4>
            </div>
            <div class="book-details">
                <h5 class="book-publisher book-hight-text">Publisher: ${listItem.volumeInfo.publisher}</h5>
                <h5 class="book-id-number">Id Number: ${listItem.id}</h5>
            </div>
            <div class="">
               <span class="book-badge book-badge-blue"> ${listItem.volumeInfo.pageCount} p </span>
               <span class="book-badge book-badge-green"> ${listItem.volumeInfo.language} </span>
               <span class="book-badge book-badge-red"> #${listItem.volumeInfo.categories} </span>
            
            
            </div>
        </div>
    </div>
  </div>
  </div>`;

serviceApi('[]')

///////seach/////////
let inputs = document.querySelector('.search');
let btnSearch = document.querySelector('.btn-search');

console.log(inputs)
     btnSearch.addEventListener('click', evt => {
  const value = inputs.value.trim()
  if (value) {
    serviceApi(value);
  } else {
    serviceApi('[]')
  }

})

