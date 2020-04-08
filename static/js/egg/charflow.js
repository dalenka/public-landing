class CharflowCord {
  constructor (length) {
    this.length = length;
    this.exitsMap = [];
  }
  getValidPlacesToFlow(mapId) {
    const validPlaces = [];
    if (mapId > 0) {
      validPlaces.push(new CharflowPlace(this, mapId - 1));
    }
    if (mapId < this.length - 1) {
      validPlaces.push(new CharflowPlace(this, mapId + 1));
    }
    const exits = this.exitsMap[mapId];
    if (exits) {
      exits.forEach((exit)=>{
        validPlaces.push(exit);
      });
    }
    return validPlaces;
  }
  renderPresenceMap(packets) {
    const presenceMap = [];
    for (let i = 0; i < this.length; i++) {
      presenceMap[i] = packets.reduce((presence, packet) => {
        if (packet.currentPlace.cord === this && packet.currentPlace.mapId === i) {
          presence++;
        }
        return presence;
      }, 0);
    }
    return presenceMap;

  }
  addToExitsMap(mapId, place) {
    if (!this.exitsMap[mapId]) { this.exitsMap[mapId] = []; }
    this.exitsMap[mapId].push(place);
  }
  debugDraw(packets) {
    const presenceMap = [];
    for (let i = 0; i < this.length; i++) {
      presenceMap[i] = packets.some((packet) => {
        return (packet.currentPlace.cord === this && packet.currentPlace.mapId === i);
      });
    }
    const presenceString = presenceMap.map(hasPacket => hasPacket ? '!' : '.').join('');
    return presenceString;

  }
}
class CharflowPacket {
  constructor(place) {
    this.currentPlace = place;
    this.previousPlace = place;
  }

  flowToNewPackets() {
    const currentCord = this.currentPlace.cord;
    const currentCordMapId = this.currentPlace.mapId;
    const previousCord = this.previousPlace.cord;
    const previousCordMapId = this.previousPlace.mapId;

    const validPlaces = currentCord.getValidPlacesToFlow(currentCordMapId);
    let allowedValidPlaces;
    if (this.previousPlace) {
      allowedValidPlaces = validPlaces.filter((validPlace) => { return validPlace.cord !== previousCord || validPlace.mapId !== previousCordMapId });
       // may filter additional prev places here
    } else {
      allowedValidPlaces = validPlaces;
    }
    const newPackets = allowedValidPlaces.map((place)=>{
      return this.cloneAndStepTo(place);
    });
    return newPackets;
  }

  cloneAndStepTo(newPlace) {
    const clonedPacked = new CharflowPacket(newPlace);
    clonedPacked.previousPlace = this.currentPlace; // may keep additional prev places here
    return clonedPacked;
  }

}

class CharflowSchema {
  constructor() {
    this.cords = [];
    this.packets = [];
  }
  flowIteration() {
    const newPacketsPerPacket = [];
    this.packets.forEach((packet)=>{
      const newPackets = packet.flowToNewPackets();
      newPacketsPerPacket.push(newPackets);
    });
    this.packets = newPacketsPerPacket.flat();
  }
}

class CharflowPlace {
  constructor(cord, mapId) {
    this.cord = cord, this.mapId = mapId;
  }
}

