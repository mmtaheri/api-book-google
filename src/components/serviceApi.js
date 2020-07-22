import { loaderShow, loaderHide } from './loader.js';


async function serviceApi (searchKey){
  loaderShow('show')
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchKey}`);
    if (!response.ok) {
      throw new Error("Could load json.");
    }
    const data = await response.json();
    loaderHide('show');
   
    return data;
  
     
  }
  catch (error) {
    console.log('Fail for load contact taheri');
  }
}


export default serviceApi
 