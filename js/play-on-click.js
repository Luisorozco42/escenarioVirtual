AFRAME.registerComponent('play-on-click', {
    init: function () {
      this.onClick = this.onClick.bind(this);
      var vid = document.getElementById("lugar");
      vid.muted = false;
    },
    play: function () {
      window.addEventListener('click', this.onClick);
    },
    pause: function () {
      window.removeEventListener('click', this.onClick);
    },
    onClick: function (evt) {
      var videoEl = this.el.getAttribute('material').src;
      if (!videoEl) { return; }
      this.el.object3D.visible = true;
      videoEl.play();
    }
  });