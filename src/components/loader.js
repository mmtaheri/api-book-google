  let boxLoader = document.createElement('div')
  boxLoader.setAttribute("id","spinner")
  let selLoaderToWrap = document.querySelector('.wrap');
  selLoaderToWrap.append(boxLoader)
 const loaderShow = isLoad => {
    boxLoader.classList.add(isLoad);
    }
 const loaderHide = notLoad =>{
    boxLoader.classList.remove(notLoad);
    boxLoader.remove()
    }

  export  {loaderShow,loaderHide}
 

