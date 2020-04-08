class Backview {
  constructor(domContainer) {
    this.config = {};
    this.config.spaces = {min: 4, max: 40};
    this.config.faces = 100;
    this.dom = {};
    this.dom.container = domContainer;
    this.dom.faces = [];
    this.fill();
  }
  fill() {
    for (let faceId = 0; faceId < this.config.faces; faceId++) {
      const preBracket = document.createElement('span');
      const postBracket = document.createElement('span');
      preBracket.innerText = '[';
      postBracket.innerText = ']';
      const faceHolder = document.createElement('span');
      const face = document.createElement('span');
      face.innerText = 'ru';
      const preSpan = document.createElement('span');
      const postSpan = document.createElement('span');
      const spaceCountPre = this.config.spaces.min + Math.random() * (this.config.spaces.max - this.config.spaces.min) / 2;
      const spaceCountPost = this.config.spaces.min + Math.random() * (this.config.spaces.max - this.config.spaces.min) / 2;
      preSpan.innerHTML =  ' ' + '&nbsp;'.repeat(spaceCountPre);
      postSpan.innerHTML = '&nbsp;'.repeat(spaceCountPost) + ' ';
      faceHolder.className = "backview-span-nowrap";

      faceHolder.appendChild(preBracket);
      faceHolder.appendChild(face);
      faceHolder.appendChild(postBracket);

      this.dom.container.appendChild(preSpan);
      this.dom.container.appendChild(faceHolder);
      this.dom.container.appendChild(postSpan);

      this.dom.faces.push(face);
    }
  }
  shine() {
    this.dom.faces.forEach(face => {
      face.innerText = ':)';
    });
    setInterval(() => {
      for (let i = 0; i < 4; i++) {
        const faceId = Math.floor(Math.random() * this.config.faces);
        const faceDom = this.dom.faces[faceId];
        FaceChanger.blinkFace(faceDom, 500);
      }
    }, 100);
  }
}