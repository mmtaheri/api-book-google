   
   import serviceApi  from './serviceApi.js';
   //// Map each
   function searchBook(parm){
    serviceApi(parm).then(data => {
      let html = '';
      let listItem = data.items; // Get data

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
              <h5 class="book-id-number book-hight-text">Id Number: ${listItem.id}</h5>
              </div>
              <div class="book-details-footer">
              <span class="book-badge book-badge-blue"> ${listItem.volumeInfo.pageCount} p </span>
              <span class="book-badge book-badge-green"> ${listItem.volumeInfo.language} </span>
              <span class="book-badge book-badge-red"> #${listItem.volumeInfo.categories} </span>
              </div>
      
     
      </div>
  </div>
</div>
</div>`;

      html += htmlsec;

       let rows = document.querySelector('.row');
    rows.innerHTML = html;

     })

    })
  }

  searchBook('[]');

  export {searchBook}