// let items = [];

// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (result) {
//     items = result.items;
//     console.log(items);
//   }),
//   function (error) {
//     console.log(error);
//   };
  
  
  ///WAY  1////
  let cont = document.getElementById('container');

  let ul = document.createElement('ul');
  ul.setAttribute('style','padding:0')
  ul.setAttribute('class','row')
  

  const url = 'https://www.googleapis.com/books/v1/volumes?q=search'
  fetch(url )
  .then(status)
  .then(resp => resp.json()) // Transform the data into json
  .then(data =>  {
    console.log(data)
    let listItem = data.items; // Get the results
  
    return listItem.map(function(listItem) { // Map through the results and for each run the code below
      let li = document.createElement('li'); //  Create the elements
      li.setAttribute('class','col-3')
      li.innerHTML = `${listItem.volumeInfo.pageCount}`;

      let span = document.createElement('span')
      span.innerHTML = `${listItem.id}`
      
      let img = document.createElement('img')
      img.src= listItem.volumeInfo.imageLinks.smallThumbnail; // Add the source of the image to be the src of the img element
      li.appendChild(img) // Append all our elements

      li.appendChild(span)
      ul.appendChild(li)  // Append all our elements
        
 
    })

    
  })
  .catch(function(error) {
    console.log(error);
  }); 
  cont.appendChild(ul)

  ///WAY  2////
  // fetch('https://randomuser.me/api/?results=10')
  // .then((resp) => resp.json()) // Transform the data into json
  // .then(function(data) {
  //   console.log(data)
  //   let authors = data.results; // Get the results
  //   return authors.map(function(author) { // Map through the results and for each run the code below
  //     let li = document.createElement('li'); //  Create the elements
  //     li.innerHTML = `${author.name.first} ${author.name.last}`;
  //     let img = document.createElement('img')
  //     img.src= author.picture.medium; // Add the source of the image to be the src of the img element
  //     li.appendChild(img) // Append all our elements
  //     ul.appendChild(li)  // Append all our elements
        
 
  //   })
  // })
  // .catch(function(error) {
  //   console.log(error);
  // }); 


  /////WAY 3///////
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(
//     result => {
//       this.setState({
//         isLoaded: true,
//         items: result
//       });
//     },
//     error => {
//       this.setState({
//         isLoaded: true,
//         error: error
//       });
//     }
//   );






  // let arr =['alpha', 'bravo', 'charlie', 'delta', 'echo','45'];
  // let cont = document.getElementById('container');

  // let ul = document.createElement('ul');
  // ul.setAttribute('style','padding:0')
  // ul.setAttribute('class','col-3')

  // for(i=0; i <= arr.length -1 ;i++){
  //     let li= document.createElement('li');
    
  //     li.innerHTML = arr[i];
  //     ul.appendChild(li)

  // }
  // cont.appendChild(ul)