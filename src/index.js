 
  // ///WAY  1////
  // let cont = document.getElementById('container');

  // let ul = document.createElement('ul');
  // ul.setAttribute('style','padding:0')
  // ul.setAttribute('class','row')
  

  // const url = 'https://www.googleapis.com/books/v1/volumes?q=search'
  // fetch(url )
  // .then(resp => resp.json()) // Transform data to json
  // .then(data =>  {
  //   console.log(data)
  //   let listItem = data.items; // Get data
  
  //   // Map each
  //   return listItem.map(listItem => { 
  //     let li = document.createElement('li'); //  Create the elements
  //     li.setAttribute('class','cols')
  //     li.innerHTML = `${listItem.volumeInfo.pageCount}`;

  //     // Add the span 
  //     let span = document.createElement('span')
  //     span.className ="list"
  //     span.innerHTML = `${listItem.id}`
      
  //     // Add the src of the img
  //     let img = document.createElement('img')
  //     img.src= listItem.volumeInfo.imageLinks.smallThumbnail; 

  //     // Append all our elements
  //     li.appendChild(img) 
  //     li.appendChild(span)
  //     ul.appendChild(li)  // Append all our elements
        
 
  //   })

    
  // })
  // .catch(function(error) {
  //   console.log(error);
  // }); 
  // cont.appendChild(ul)


  import  '../css/style.css';
  ///WAY  2////
  let cont = document.getElementById('container');

  let ul = document.createElement('ul');
  ul.setAttribute('style','padding:0')
  ul.setAttribute('class','row')
  let html = '';



  function search(query) {
     fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    
   
     .then(resp => resp.json()) // Transform data to json
     .then(data =>  {
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


  //search('[]')
  //////
  let inputs = document.querySelector('.search')
  console.log(inputs)
  //let vals = inputs.value;
  //console.log(vals)
  inputs.addEventListener('input', evt => {
      const value = inputs.value.trim()
      if(value){
         search(value);
          //console.log('fill')
     
      }else {
        //console.log('unfill');
        search('[]')
      }
   
  })

/////WAY  3////
// async function getBooks() {
//   let url = 'https://www.googleapis.com/books/v1/volumes?q=search';
//   try {
//       let res = await fetch(url);
//       return await res.json();
//   } catch (error) {
//       console.log(error);
//   }
// }

//   async function renderBook() {
//     let books = await getBooks();
//     console.log(books)
//     let html = '';
//     books.items.map(listItem => {
//       let htmlsec = `<div class="cols ">
//       <div class="product-card">
//           <div class="product-list-content">
//               <div class="card-image">
//                   <img src=${listItem.volumeInfo.imageLinks.smallThumbnail} alt=""> 
//               </div>
//               <div class="product-card--body">
//                   <div class="product-header">
//                       <a href="" class="author">
//                          ${listItem.volumeInfo.authors[0]}
//                       </a>
//                       <h3>
//                           <a href="${listItem.volumeInfo.canonicalVolumeLink}" tabindex="0">${listItem.volumeInfo.title} </a>
//                           </h3>
//                   </div>
//                   <article>
//                       <h2 class="sr-only">${listItem.volumeInfo.subtitle}</h2>
//                       <p>${listItem.volumeInfo.description} </p>
//                   </article>
              
              
//               </div>
//           </div>
//       </div>
//       </div>`;
//         html += htmlsec;
//     });

//     let container = document.querySelector('.row');
//     container.innerHTML = html;
// }

// renderBook();


