window.onload = () => {
  const dataPath = './assets/data/dogs.json';
  let dogsData = {};

  /*--DOM Elements --------------------------------- */
  const dimmer = document.querySelector('.js-dimmer');
  const modal = document.querySelector('.js-modal');
  const imgContainer = document.querySelector('.js-img-container');
  const closeBtn = document.querySelector('.js-modal-close');
  const tilesContainer = document.querySelector('.js-tiles-container');
  const spinner = document.querySelector('.js-spinner');


  /*--Click Handlers --------------------------------- */

  //Handles opening the modal - injects the selected image and adds `active` class to make modal visible.
  const clickHandler = (src, titleSrc) => {
    const modalImg = buildImg(src, 'modal__img', titleSrc, 'modal');
    imgContainer.appendChild(modalImg);
    dimmer.classList.add('active');
    modal.classList.add('active');
  };

  //Closing the modal should remove 'active' class to change visibility and clear the image for the next time the modal is activated. 
  const closeHandler = () => {
    const modalImg = document.querySelector('.modal__img');
    dimmer.classList.remove('active');
    modal.classList.remove('active');
    imgContainer.removeChild(modalImg);
  }


  /*--Event Listeners --------------------------------------- */
  closeBtn.addEventListener("click", closeHandler); //closes modal
  dimmer.addEventListener("click", closeHandler); //Allow clicking of area outside of the image to also close modal.


  /*--Imperative DOM Creation Functions --------------------- */

  // Creates 'img' DOM element and adds all relevant attributes.
  const buildImg = (src, className, titleSrc, type, index='') => {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = src;
    img.alt = `puppy ${type} image ${index}`;
    img.title = `photo credit: ${titleSrc}`;
    return img;
  };

  // Creates 'figure' DOM element as a wrapper for the img. 
  const buildTile = (tileImg, onCLickHandler) => {
    const tile = document.createElement('figure');
    tile.classList.add('tile');
    tile.onclick = onCLickHandler;
    tile.appendChild(tileImg);
    return tile;
  };

  const render = () => {
    const {dogs} = dogsData;
    const tiles = dogs.map((dog, index) => {
      const thumbsSrc = `.${dog.thumb}`; // '.' added to allow image to render locally
      const fullSizeSrc = `.${dog.image}`;
      const titleSrc = dog.source;
      const className = 'tile__img';
      const tileImg = buildImg(thumbsSrc, className, titleSrc, 'thumbnail', index);
      const tile = buildTile(tileImg, () => clickHandler(fullSizeSrc, titleSrc));
      return tile;
    });

    for (let tile of tiles) {
      tilesContainer.appendChild(tile);
    }
  };

  /*--AJAX --------------------------------- */

  const fetchData = (dataPath) => {
    fetch(dataPath)
    .then(response => response.json())
    .then(json => {
      dogsData = json;
      tilesContainer.removeChild(spinner); //remove loading spinner
      render();
    })
    .catch(()=> alert("Oops! Something went wrong. Please refresh the page."));
  }
  //Initialize rendering
  fetchData(dataPath);
}