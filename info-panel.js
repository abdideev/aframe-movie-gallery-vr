/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      asmButton: {
        title: 'The Amazing Spider-Man (2012)',
        imgEl: document.querySelector('#asmMovieImage'),
        description: 'After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe, The Lizard.'
      },
      asm2Button: {
        title: 'The Amazing Spider-Man 2 (2014)',
        imgEl: document.querySelector('#asm2MovieImage'),
        description: 'When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones. He faces off against the powerful Electro and his old friend Harry Osborn.'
      },
      sm2Button: {
        title: 'Spider-Man 2 (2004)',
        imgEl: document.querySelector('#sm2MovieImage'),
        description: 'Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius. He must choose between his responsibilities as a superhero and the woman he loves, Mary Jane Watson.'
      },
      tronUpButton: {
        title: 'Tron: Uprising (2012)',
        imgEl: document.querySelector('#tronUpMovieImage'),
        description: 'Taking place between the two Tron movies, this animated series follows Beck, a young program who becomes the leader of a revolution inside the computer world of The Grid. He is trained by Tron to fight against the tyranny of Clu.'
      },
      narutoButton: {
        title: 'The Last: Naruto the Movie (2014)',
        imgEl: document.querySelector('#narutoMovieImage'),
        description: 'Two years after the Fourth Great Ninja War, the moon is beginning to fall, and will destroy everything on Earth. Naruto must deal with this new threat while rescuing Hanabi Hyuga and discovering his true feelings for Hinata.'
      },
      tronLegButton: {
        title: 'Tron: Legacy (2010)',
        imgEl: document.querySelector('#tronLegMovieImage'),
        description: 'The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father\'s corrupted creation and a unique ally who was born inside the grid.'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 2;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 1;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});