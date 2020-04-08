class FaceChanger {
  static faces = [
    ';)',
    ':]',
    ':О',
    ':|',
    ':(',
    ':/',
    ':\'',
    '.)',
    ',)',
    ':>',
    ':X',
    ':Р',
    ':D',
    ' )',
    '=)',
    '%)',
    '8)',
  ]
  static getRandomFaceString() {
    const id = Math.floor(Math.random() * FaceChanger.faces.length);
    return FaceChanger.faces[id];
  }
  static async blinkFace(dom, msec) {
    //const originalFace = dom.innerText;
    dom.innerText = FaceChanger.getRandomFaceString();
    await pause(msec);
    //dom.innerText = originalFace;
    dom.innerText = ':)';
  }
}