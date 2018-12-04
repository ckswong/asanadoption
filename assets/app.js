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
        "image": "/assets/images/raw/1.jpeg",
        "source": "https://unsplash.com/photos/ybHtKz5He9Y"
      },

      {
        "image": "/assets/images/raw/2.jpeg",
        "source": "https://unsplash.com/photos/rY79kwEEyGo"
      },

      {
        "image": "/assets/images/raw/3.jpeg",
        "source": "https://unsplash.com/photos/ngqyo2AYYnE"
      },

      {
        "image": "/assets/images/raw/4.jpeg",
        "source": "https://unsplash.com/photos/9A64wd1QaAU"
      },

      {
        "image": "/assets/images/raw/5.jpeg",
        "source": "https://unsplash.com/photos/915UJQaxtrk"
      },

      {
        "image": "/assets/images/raw/6.jpeg",
        "source": "https://unsplash.com/photos/mx0DEnfYxic"
      },

      {
        "image": "/assets/images/raw/7.jpeg",
        "source": "https://unsplash.com/photos/OsOQhAzcEKc"
      },

      {
        "image": "/assets/images/raw/8.jpeg",
        "source": "https://unsplash.com/photos/6WneSv56YVI"
      },

      {
        "image": "/assets/images/raw/9.jpeg",
        "source": "https://unsplash.com/photos/CdVG9f96kyg"
      },

      {
        "image": "/assets/images/raw/10.jpeg",
        "source": "https://unsplash.com/photos/bVA2DI7c9e8"
      },

      {
        "image": "/assets/images/raw/11.jpeg",
        "source": "https://unsplash.com/photos/GvhSUEN-Lm8"
      },

      {
        "image": "/assets/images/raw/12.jpeg",
        "source": "https://unsplash.com/photos/t2XHKIdc4Kw"
      },

      {
        "image": "/assets/images/raw/13.jpeg",
        "source": "https://unsplash.com/photos/saRU3vzmgkY"
      },

      {
        "image": "/assets/images/raw/14.jpeg",
        "source": "https://unsplash.com/photos/1z-kI6gIEpg"
      },

      {
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

  const clickHandler = (src) => {
    const modalImg = buildImg(src, 'modal__img');
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

  const buildImg = (src, className) => {
    const img = document.createElement('img');
    img.classList.add(className);
    img.src = src;
    return img;
  };

  const buildTile = (tileImg, onCLickHandler) => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.onclick = onCLickHandler;
    tile.appendChild(tileImg);
    return tile;
  }

  const tiles = dogs.map(dog => {
    const src = `.${dog.image}`;
    const className = 'tile__img';
    const tileImg = buildImg(src, className);
    const tile = buildTile(tileImg, () => clickHandler(src));
    return tile;
  });

  for (let tile of tiles) {
    tilesContainer.appendChild(tile);
  }
  console.log(tilesContainer);
}