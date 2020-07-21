function loaderShow(){
  let loader = `<div class="spinner"></div>`;
  loader.className = "show";
}

function search(query) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  loaderShow()
 
  .then(resp => resp.json()) // Transform data to json
  .then(data =>  {
    loader.className = "hide";
    console.log(data)
    let listItem = data.items; // Get data
 

  // Map each
  return listItem.map((listItem) => { 

  //generate HTML
let htmlsec = `<div class="cols ">
<div class="product-card">
  <div class="product-list-content">
      <div class="card-image">
          <img src=${listItem.volumeInfo.imageLinks.thumbnail} alt=""> 
      </div>
      <div class="product-card-body">
          <div class="product-header">
              <h4 class="title ht">Title: ${listItem.volumeInfo.title.substr(0,40)}</h4>
              <h4 class="author ht">Author: ${listItem.volumeInfo.authors}</h4>
              <h4 class="el-link ht"><a href="${listItem.volumeInfo.canonicalVolumeLink}" >${listItem.volumeInfo.title} </a></h4>
          </div>
          <div class="product-details">
              <h5 class="publisher ht">Publisher: ${listItem.volumeInfo.publisher}</h5>
              <h5 class="id-number">Id Number: ${listItem.id}</h5>
          </div>
          <div class="">
             <span class="badge badge-blue"> ${listItem.volumeInfo.pageCount} p </span>
             <span class="badge badge-green"> ${listItem.volumeInfo.language} </span>
             <span class="badge badge-red"> #${listItem.volumeInfo.categories} </span>
          
          
          </div>
      </div>
  </div>
</div>
</div>`;

html += htmlsec;

let container = document.querySelector('.row');
container.innerHTML = html;
  })

})
.catch(function(error) {
  console.log(error);
}); 

let html = '';

}