const __gtf__ = 0.65;
async function pause(msec, factor = 1) {
  return new Promise((resolve) => {
    setTimeout(resolve, msec * factor);
  });
};

class Egg {
  constructor() {
    this.typingDelay = 350;
    this.phraseDelay = 1500;
    this.microDelay = 50;
    this.flowDelay = 75;
    this.answerDelay = 500;
    this.dom = {};
    this.dom.hero = document.getElementsByClassName('hero')[0];
    this.dom.frontSpan = document.getElementsByClassName('egg-front-span')[0];
    this.dom.face1 = document.getElementsByClassName('egg-front-span-ru egg-front-span-ru--face1')[0];
    this.dom.face1r = document.getElementsByClassName('egg-front-span-ru__r egg-front-span-ru__r--face1')[0];
    this.dom.face1u = document.getElementsByClassName('egg-front-span-ru__u egg-front-span-ru__u--face1')[0];
    this.dom.face2 = document.getElementsByClassName('egg-front-span-ru egg-front-span-ru--face2')[0];
    this.dom.preBracket1 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--pre egg-front-span-bracket--face1')[0];
    this.dom.preBracket2 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--pre egg-front-span-bracket--face2')[0];
    this.dom.postBracket1 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--post egg-front-span-bracket--face1')[0];
    this.dom.postBracket2 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--post egg-front-span-bracket--face2')[0];

    this.dom.dots1Base = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face1 egg-front-span-dots--base')[0];
    this.dom.dots2Base = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face2 egg-front-span-dots--base')[0];
    this.dom.dots1Extra = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face1 egg-front-span-dots--extra')[0];
    this.dom.dots2Extra = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face2 egg-front-span-dots--extra')[0];

    this.dom.extraU = document.getElementsByClassName('egg-front-span-extra-u')[0];
    this.dom.extraRu = document.getElementsByClassName('egg-front-span-extra-ru')[0];

    this.dom.dalenka = document.getElementsByClassName('egg-front-span-dalenka')[0];

    this.dom.face3 = document.getElementsByClassName('egg-front-span-ru egg-front-span-ru--face3')[0];
    this.dom.face4 = document.getElementsByClassName('egg-front-span-ru egg-front-span-ru--face4')[0];

    this.dom.preBracket3 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--pre egg-front-span-bracket--face3')[0];
    this.dom.preBracket4 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--pre egg-front-span-bracket--face4')[0];
    this.dom.postBracket3 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--post egg-front-span-bracket--face3')[0];
    this.dom.postBracket4 = document.getElementsByClassName('egg-front-span-bracket egg-front-span-bracket--post egg-front-span-bracket--face4')[0];

    this.dom.dots3 = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face3')[0];
    this.dom.dots4 = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face4')[0];

    this.dom.spacer3 = document.getElementsByClassName('egg-front-span-spacer egg-front-span-spacer--face3')[0];
    this.dom.spacer4 = document.getElementsByClassName('egg-front-span-spacer egg-front-span-spacer--face4')[0];

    this.dom.colon3 = document.getElementsByClassName('egg-front-span-colon egg-front-span-colon--face3')[0];
    this.dom.colon4 = document.getElementsByClassName('egg-front-span-colon egg-front-span-colon--face4')[0];

    this.dom.dots5 = document.getElementsByClassName('egg-front-span-dots egg-front-span-dots--face5')[0];
    this.dom.spacer51 = document.getElementsByClassName('egg-front-span-spacer egg-front-span-spacer--face5 egg-front-span-spacer--1')[0];
    this.dom.spacer52 = document.getElementsByClassName('egg-front-span-spacer egg-front-span-spacer--face5 egg-front-span-spacer--2')[0];
    this.dom.colon51 = document.getElementsByClassName('egg-front-span-colon egg-front-span-colon--face5 egg-front-span-colon--1')[0];
    this.dom.colon52 = document.getElementsByClassName('egg-front-span-colon egg-front-span-colon--face5 egg-front-span-colon--2')[0];

    this.dom.preBracketTopline = document.getElementsByClassName('egg-topline-bracket egg-topline-bracket--pre')[0];
    this.dom.postBracketTopline = document.getElementsByClassName('egg-topline-bracket egg-topline-bracket--post')[0];

    this.dom.preBracketBottomline = document.getElementsByClassName('egg-bottomline-bracket egg-bottomline-bracket--pre')[0];
    this.dom.postBracketBottomline = document.getElementsByClassName('egg-bottomline-bracket egg-bottomline-bracket--post')[0];

    this.dom.respectDiv = document.getElementsByClassName('egg-bottomline-respect-div')[0];
    this.dom.сontinueButtonDiv = document.getElementsByClassName('egg-bottomline-continue-button-div')[0];
    this.dom.сontinueButtonLink = document.getElementsByClassName('egg-bottomline-continue-button-link')[0];
    this.dom.сontinueButtonLink = document.getElementsByClassName('egg-bottomline-continue-button-link')[0];
    this.dom.sloganDiv = document.getElementsByClassName('egg-bottomline-slogan-div')[0];
    this.dom.sloganTogetherSpan = document.getElementsByClassName('egg-bottomline-slogan-together-span')[0];
    this.dom.backview = document.getElementsByClassName('hero__backview')[0];
    this.isShine = false;

    this.backview = new Backview(this.dom.backview);
    this.dom.face1u.onclick = () => {
      this.runStorylinePart1();
      this.dom.face1u.onclick = null;
      this.dom.face1u.removeAttribute("href");
      this.dom.face1u.classList.add('egg-front-span-ru__u--face1--runned-once');
      return false;
    }
    this.dom.сontinueButtonLink.onclick = () => {
      this.runStorylinePart2();
      // no need to hide/disable link, because whole div will be hidden,
    }
  }
  async runStorylinePart1 () {
    await this.run12ConnectionStoryline();
  }

  async runStorylinePart2 () {
    let timeFactor = 1 * __gtf__;
    this.startCharflow();
    this.plugCordDalenka();
    this.plugCordFace1();
    this.plugCordFace2();
    this.fireNewPacketsFromRoot(1);
    await this.runWakeStoryline();
    //await pause(this.phraseDelay * 1, timeFactor);
    await this.run3ConnectionStoryline();
    this.plugCordFace3();
    this.fireNewPacketsFromRoot(1);
    await pause(this.phraseDelay * 1, timeFactor);
    await this.run4ConnectionStoryline();
    this.plugCordFace4();
    this.fireNewPacketsFromRoot(1);
    await this.run5ConnectionStoryline();
    this.plugCordFace5();
    await this.runShineStoryline();
  }
  async run12ConnectionStoryline() {
    let timeFactor = 1 * __gtf__;
    //await pause(this.phraseDelay, timeFactor);
    this.dom.face1r.style = 'display: inline';

    await pause(this.phraseDelay, timeFactor);
    this.dom.dots1Base.innerText = '..';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots1Base.innerText = '...';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots1Base.innerText = '....';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots1Base.innerText = '.....';

    await pause(this.phraseDelay, timeFactor);
    this.dom.dots2Base.innerText = '..';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots2Base.innerText = '...';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots2Base.innerText = '....';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots2Base.innerText = '.....';

    await pause(this.phraseDelay, timeFactor);
    this.dom.hero.classList.add('hero--egg-distance');

    await pause(this.typingDelay, timeFactor);

    await pause(this.phraseDelay, timeFactor);
    this.dom.preBracket1.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracket1.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracket1.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracket1.style = 'opacity: 0.3;';

    await pause(this.phraseDelay, timeFactor);
    this.dom.preBracket2.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracket2.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracket2.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracket2.style = 'opacity: 0.3;';

    await pause(this.phraseDelay, timeFactor);
    this.dom.preBracketTopline.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracketTopline.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracketTopline.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracketTopline.style = 'opacity: 0.3;';


    await pause(this.phraseDelay, timeFactor);
    this.dom.respectDiv.style = 'display: none;';
    this.dom.сontinueButtonDiv.style = 'display: flex;';

    //await pause(this.phraseDelay, timeFactor);
    this.dom.preBracketBottomline.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracketBottomline.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracketBottomline.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracketBottomline.style = 'opacity: 0.3;';

    await pause(this.phraseDelay, timeFactor);
    this.dom.сontinueButtonLink.style = 'opacity: 1';



  }
  async run3ConnectionStoryline() {
    let timeFactor = 0.5 * __gtf__;
    const initialSpaces = 10;
    await pause(this.phraseDelay, timeFactor);
    this.dom.face3.style = 'display: inline';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 5)

    await pause(this.phraseDelay, timeFactor);
    this.dom.preBracket3.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracket3.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracket3.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracket3.style = 'opacity: 0.3;';

    await pause(this.phraseDelay, timeFactor);
    this.dom.dots3.innerText = '.';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 4)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots3.innerText = '..';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 3)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots3.innerText = '...';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 2)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots3.innerText = '....';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 1)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots3.innerText = '.....';
    this.dom.spacer3.innerHTML = '&nbsp;'.repeat(initialSpaces + 0)
    await pause(this.typingDelay, timeFactor);
    this.dom.colon3.innerText = '.';


  }
  async run4ConnectionStoryline() {
    let timeFactor = 0.5 * __gtf__;
    const initialSpaces = 10;
    await pause(this.phraseDelay, timeFactor);
    this.dom.face4.style = 'display: inline';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 5)

    await pause(this.phraseDelay, timeFactor);
    this.dom.preBracket4.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.preBracket4.style = 'opacity: 0.3;';
    await pause(this.typingDelay, timeFactor);
    this.dom.postBracket4.style = 'display: inline';
    await pause(this.microDelay, timeFactor);
    this.dom.postBracket4.style = 'opacity: 0.3;';

    await pause(this.phraseDelay, timeFactor);
    this.dom.dots4.innerText = '.';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 4)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots4.innerText = '..';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 3)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots4.innerText = '...';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 2)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots4.innerText = '....';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 1)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots4.innerText = '.....';
    this.dom.spacer4.innerHTML = '&nbsp;'.repeat(initialSpaces + 0)
    await pause(this.typingDelay, timeFactor);
    this.dom.colon4.innerText = '.';
  }
  async run5ConnectionStoryline() {
    let timeFactor = 1 * __gtf__;
    const initialSpaces = 1;
    await pause(this.phraseDelay, timeFactor);
    this.dom.colon52.innerText = '.';
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '.';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 8)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '..';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 7)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '...';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 6)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '....';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 5)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '.....';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 4)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '......';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 3)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '.......';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 2)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '........';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 1)
    await pause(this.typingDelay, timeFactor);
    this.dom.dots5.innerText = '.........';
    this.dom.spacer52.innerHTML = '&nbsp;'.repeat(initialSpaces + 0)
    await pause(this.typingDelay, timeFactor);
    this.dom.colon51.innerText = '.';
    this.dom.spacer51.innerHTML = '&nbsp;'.repeat(1)
  }
  async runWakeStoryline() {
    let timeFactor = 1 * __gtf__;
    this.dom.сontinueButtonDiv.style = 'display: none;';
    this.dom.sloganDiv.style = 'display: flex;';
    await pause(this.phraseDelay, timeFactor);
    this.dom.sloganDiv.style = 'opacity: 1;';

    await pause(this.phraseDelay * 4, timeFactor);
    //this.dom.hero.classList.remove('hero--egg-shine');
    this.dom.hero.classList.add('hero--egg-wake');
    await pause(this.phraseDelay * 2, timeFactor);
  }


  async runShineStoryline() {
    let timeFactor = 1 * __gtf__;
    this.dom.hero.classList.remove('hero--egg-wake');
    this.dom.hero.classList.add('hero--egg-shine');
    this.dom.face1.innerText = ':)';
    this.dom.face2.innerText = ':)';
    this.dom.face3.innerText = ':)';
    this.dom.face4.innerText = ':)';
    this.backview.shine();
    this.startFaceBlinking();
    this.isShine = true;
    await pause(this.phraseDelay * 3, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' ';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' в';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' вм';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' вме';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' вмес';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' вмест';
    await pause(this.typingDelay, timeFactor);
    this.dom.sloganTogetherSpan.innerText = ' вместе';
    console.log('qwe');

  }
  startCharflow() {
    this.schema = new CharflowSchema();
    setInterval( () => {
      this.flowIteration();
    }, this.flowDelay);
  }
  plugCordDalenka() {
    if (this.cordDalenka) { throw new Error('Already plugged'); }
    this.cordDalenka = new CharflowCord(7);
    this.schema.cords.push(this.cordDalenka);
  }
  plugCordFace1() {
    if (!this.cordDalenka) { throw new Error('Plug dalenka root first'); }
    if (this.cordFace1) { throw new Error('Already plugged'); }
    this.cordFace1 = new CharflowCord(5);
    this.schema.cords.push(this.cordFace1);
    this.cordFace1.addToExitsMap(4, new CharflowPlace(this.cordDalenka, 0));
    this.cordDalenka.addToExitsMap(0, new CharflowPlace(this.cordFace1, 4));
  }
  plugCordFace2() {
    if (!this.cordDalenka) { throw new Error('Plug dalenka root first'); }
    if (this.cordFace2) { throw new Error('Already plugged'); }
    this.cordFace2 = new CharflowCord(5);
    this.schema.cords.push(this.cordFace2);
    this.cordFace2.addToExitsMap(0, new CharflowPlace(this.cordDalenka, 6));
    this.cordDalenka.addToExitsMap(6, new CharflowPlace(this.cordFace2, 0));
  }
  plugCordFace3() {
    if (!this.cordDalenka) { throw new Error('Plug dalenka root first'); }
    if (this.cordFace3) { throw new Error('Already plugged'); }
    this.cordFace3 = new CharflowCord(6);
    this.schema.cords.push(this.cordFace3);
    this.cordFace3.addToExitsMap(5, new CharflowPlace(this.cordDalenka, 2));
    this.cordDalenka.addToExitsMap(2, new CharflowPlace(this.cordFace3, 5));
  }
  plugCordFace4() {
    if (!this.cordDalenka) { throw new Error('Plug dalenka root first'); }
    if (this.cordFace4) { throw new Error('Already plugged'); }
    this.cordFace4 = new CharflowCord(6);
    this.schema.cords.push(this.cordFace4);
    this.cordFace4.addToExitsMap(0, new CharflowPlace(this.cordDalenka, 4));
    this.cordDalenka.addToExitsMap(4, new CharflowPlace(this.cordFace4, 0));
  }
  plugCordFace5() {
    if (!this.cordDalenka) { throw new Error('Plug dalenka root first'); }
    if (this.cordFace5) { throw new Error('Already plugged'); }
    this.cordFace5 = new CharflowCord(11);
    this.schema.cords.push(this.cordFace5);
    this.cordFace5.addToExitsMap(0, new CharflowPlace(this.cordDalenka, 4));
    this.cordDalenka.addToExitsMap(4, new CharflowPlace(this.cordFace5, 0));
  }
  renderCordDalenka() {
    let renderedStringAsArray = Array.from('dalenka');
    const presenceMap = this.cordDalenka.renderPresenceMap(this.schema.packets);
    presenceMap.forEach((presence, mapId) =>{
      if (presence > 0) {
        renderedStringAsArray[mapId] = renderedStringAsArray[mapId].toUpperCase();
      }
    });
    const renderedString = renderedStringAsArray.join('');
    this.dom.dalenka.innerText = renderedString;
  }
  renderCordFace1() {
    const presenceMap = this.cordFace1.renderPresenceMap(this.schema.packets);
    const renderedArray = presenceMap.map(presence => presence ? '·' : '.' );
    let renderedString
    if (this.isShine) {
      renderedArray[3] = presenceMap[3] ? 'U' : 'u';
    }
    renderedString = renderedArray.join('');
    if (this.isShine) {
      this.dom.dots1Base.innerText = renderedString.substring(0, 3);
      this.dom.extraU.innerText = renderedString.substring(3, 4);
      this.dom.dots1Extra.innerText = renderedString.substring(4, 5);
    } else {
      this.dom.dots1Base.innerText = renderedString;
    }
  }
  renderCordFace2() {
    const presenceMap = this.cordFace2.renderPresenceMap(this.schema.packets);
    const renderedArray = presenceMap.map(presence => presence ? '·' : '.' );
    let renderedString
    if (this.isShine) {
      renderedArray[1] = presenceMap[1] ? 'R' : 'r';
      renderedArray[2] = presenceMap[2] ? 'U' : 'u';
    }
    renderedString = renderedArray.join('');
    if (this.isShine) {
      this.dom.dots2Base.innerText = renderedString.substring(0, 1);
      this.dom.extraRu.innerText = renderedString.substring(1, 3);
      this.dom.dots2Extra.innerText = renderedString.substring(3, 5);
    } else {
      this.dom.dots2Base.innerText = renderedString;
    }
  }
  renderCordFace3() {
    const presenceMap = this.cordFace3.renderPresenceMap(this.schema.packets);
    const presenceForColon = presenceMap.splice(presenceMap.length - 1, 1)[0];
    const renderedString = presenceMap.map(presence => presence ? '·' : '.' ).join('');
    this.dom.dots3.innerText = renderedString;
    this.dom.colon3.innerText = presenceForColon ? '·' : '.';
  }
  renderCordFace4() {
    const presenceMap = this.cordFace4.renderPresenceMap(this.schema.packets);
    const presenceForColon = presenceMap.splice(1, 1)[0];
    const renderedString = presenceMap.map(presence => presence ? '·' : '.' ).join('');
    this.dom.dots4.innerText = renderedString;
    this.dom.colon4.innerText = presenceForColon ? '·' : '.';
  }
  renderCordFace5() {
    const presenceMap = this.cordFace5.renderPresenceMap(this.schema.packets);
    const presenceForColon1 = presenceMap.splice(1, 1)[0];
    const presenceForColon2 = presenceMap.splice(presenceMap.length - 1, 1)[0];
    const renderedString = presenceMap.map(presence => presence ? '·' : '.' ).join('');
    this.dom.dots5.innerText = renderedString;
    this.dom.colon51.innerText = presenceForColon1 ? '·' : '.';
    this.dom.colon52.innerText = presenceForColon2 ? '·' : '.';
  }
  renderTextToDom() {
    if (this.cordDalenka) { this.renderCordDalenka(); }
    if (this.cordFace1) { this.renderCordFace1(); }
    if (this.cordFace2) { this.renderCordFace2(); }
    if (this.cordFace3) { this.renderCordFace3(); }
    if (this.cordFace4) { this.renderCordFace4(); }
    if (this.cordFace5) { this.renderCordFace5(); }
  }
  flowIteration() {
    this.schema.flowIteration();
    this.fireNewPackets(0.1);
    this.renderTextToDom();
  }
  fireNewPackets(chance) {
    let plugedCordsCount = !!this.cordFace1 * 1 +
                           !!this.cordFace2 * 1 +
                           !!this.cordFace3 * 1 +
                           !!this.cordFace4 * 1;
    if (plugedCordsCount > 0) {
      let normedChance = chance / plugedCordsCount;

      if (this.cordFace1 && Math.random() < normedChance) {
        const place = new CharflowPlace(this.cordFace1, 0);
        this.schema.packets.push(new CharflowPacket(place));
      }
      if (this.cordFace2 && Math.random() < normedChance) {
        const place = new CharflowPlace(this.cordFace2, 4);
        this.schema.packets.push(new CharflowPacket(place));
      }
      if (this.cordFace3 && Math.random() < normedChance) {
        const place = new CharflowPlace(this.cordFace3, 0);
        this.schema.packets.push(new CharflowPacket(place));
      }
      if (this.cordFace4 && Math.random() < normedChance) {
        const place = new CharflowPlace(this.cordFace4, 5);
        this.schema.packets.push(new CharflowPacket(place));
      }
      if (this.cordFace5 && Math.random() < normedChance) {
        const place = new CharflowPlace(this.cordFace5, 10);
        this.schema.packets.push(new CharflowPacket(place));
      }
    }
  }
  fireNewPacketsFromRoot(chance) {
    if (this.cordDalenka && Math.random() < chance) {
      const place = new CharflowPlace(this.cordDalenka, 3);
      this.schema.packets.push(new CharflowPacket(place));
    }
  }
  startFaceBlinking() {
    const faceDoms = [
      this.dom.face1,
      this.dom.face2,
      this.dom.face3,
      this.dom.face4,
    ]
    setInterval(() => {
      if (Math.random() < 0.05) {
        const faceId = Math.floor(Math.random() * faceDoms.length);
        const faceDom = faceDoms[faceId];
        FaceChanger.blinkFace(faceDom, 500);
      }
    }, 100);
  }
}