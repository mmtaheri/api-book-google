const url = 'https://www.googleapis.com/books/v1/volumes?q=search'
fetch(url )
.then(resp => resp.json()) // Transform data to json
.then(data =>  {
  console.log(data)
  let listItem = data.items; // Get data
})


/////////search
// url: "https://www.googleapis.com/books/v1/volumes?q=" + request,
// dataType: "json",
// data: {
//   term: request.term
// },

//////2
function search(query) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    success: function(response) {
      console.log(response)
    }
  })

  .then(resp => resp.json()) // Transform data to json
  .then(data =>  {
    console.log(data)
    let listItem = data.items; // Get data
 
}


// const Url = 'https://jsonplaceholder.typicode.com/posts';
// const Data={
//     name :"Saeed",
//     id:25
// };

// const otherParam ={
//     header :{
//         "content-type" : "application/json; charset=UTF-8"
//     },
//     body:Data,
//     method:"POST"
// };
// fetch(Url,otherParam)
// .then(data=> {return data.json()})
// .then(res=> {console.log(res)})
// .catch(error=>console.log(error))