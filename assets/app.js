window.onload = () => {
  const dataPath = './assets/data/dogs.json';
  // let dogsData = {};
  // fetch(dataPath)
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(json) {
  //   // console.log(JSON.stringify(json));
  //   dogsData = json;
  // });

  const dogsData = {
    "dogs": [
    {
        "thumb": "/assets/images/thumb/1.jpg",
        "image": "/assets/images/raw/1.jpeg",
        "source": "https://unsplash.com/photos/ybHtKz5He9Y"
      },

      {
        "thumb": "/assets/images/thumb/2.jpg",
        "image": "/assets/images/raw/2.jpeg",
        "source": "https://unsplash.com/photos/rY79kwEEyGo"
      },

      {
        "thumb": "/assets/images/thumb/3.jpg",
        "image": "/assets/images/raw/3.jpeg",
        "source": "https://unsplash.com/photos/ngqyo2AYYnE"
      },

      {
        "thumb": "/assets/images/thumb/4.jpg",
        "image": "/assets/images/raw/4.jpeg",
        "source": "https://unsplash.com/photos/9A64wd1QaAU"
      },

      {
        "thumb": "/assets/images/thumb/5.jpg",
        "image": "/assets/images/raw/5.jpeg",
        "source": "https://unsplash.com/photos/915UJQaxtrk"
      },

      {
        "thumb": "/assets/images/thumb/6.jpg",
        "image": "/assets/images/raw/6.jpeg",
        "source": "https://unsplash.com/photos/mx0DEnfYxic"
      },

      {
        "thumb": "/assets/images/thumb/7.jpg",
        "image": "/assets/images/raw/7.jpeg",
        "source": "https://unsplash.com/photos/OsOQhAzcEKc"
      },

      {
        "thumb": "/assets/images/thumb/8.jpg",
        "image": "/assets/images/raw/8.jpeg",
        "source": "https://unsplash.com/photos/6WneSv56YVI"
      },

      {
        "thumb": "/assets/images/thumb/9.jpg",
        "image": "/assets/images/raw/9.jpeg",
        "source": "https://unsplash.com/photos/CdVG9f96kyg"
      },

      {
        "thumb": "/assets/images/thumb/10.jpg",
        "image": "/assets/images/raw/10.jpeg",
        "source": "https://unsplash.com/photos/bVA2DI7c9e8"
      },

      {
        "thumb": "/assets/images/thumb/11.jpg",
        "image": "/assets/images/raw/11.jpeg",
        "source": "https://unsplash.com/photos/GvhSUEN-Lm8"
      },

      {
        "thumb": "/assets/images/thumb/12.jpg",
        "image": "/assets/images/raw/12.jpeg",
        "source": "https://unsplash.com/photos/t2XHKIdc4Kw"
      },

      {
        "thumb": "/assets/images/thumb/13.jpg",
        "image": "/assets/images/raw/13.jpeg",
        "source": "https://unsplash.com/photos/saRU3vzmgkY"
      },

      {
        "thumb": "/assets/images/thumb/14.jpg",
        "image": "/assets/images/raw/14.jpeg",
        "source": "https://unsplash.com/photos/1z-kI6gIEpg"
      },

      {
        "thumb": "/assets/images/thumb/15.jpg",
        "image": "/assets/images/raw/15.jpeg",
        "source": "https://unsplash.com/photos/zHZ2nTnBnAQ"
      }
    ]
  }

  const {dogs} = dogsData;

  const dimmer = document.querySelector('.js-dimmer');
  const modal = document.querySelector('.js-modal');
  const imgContainer = document.querySelector('.js-img-container');
  const closeBtn = document.querySelector('.js-modal-close');
  const tilesContainer = document.querySelector('.js-tiles-container');

  const clickHandler = (src, titleSrc) => {
    const modalImg = buildImg(src, 'modal__img', titleSrc, 'modal');
    imgContainer.appendChild(modalImg);
    dimmer.classList.add('active');
    modal.classList.add('active');
  };

  const closeHandler = () => {
    const modalImg = document.querySelector('.modal__img');
    dimmer.classList.remove('active');
    modal.classList.remove('active');
    imgContainer.removeChild(modalImg);
  }

  closeBtn.addEventListener("click", closeHandler);
  dimmer.addEventListener("click", closeHandler);

  const buildImg = (src, className, titleSrc, type, index='') => {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = src;
    img.alt = `puppy ${type} image ${index}`;
    img.title = `photo credit: ${titleSrc}`;
    return img;
  };

  const buildTile = (tileImg, onCLickHandler) => {
    const tile = document.createElement('figure');
    tile.classList.add('tile');
    tile.onclick = onCLickHandler;
    tile.appendChild(tileImg);
    return tile;
  }

  const tiles = dogs.map((dog, index) => {
    const thumbsSrc = `.${dog.thumb}`;
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
}