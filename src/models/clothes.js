'use strict';

const uuid = require('uuid').v4;

class Clothes {

  constructor() {
    this.clothesDB = [];
  }

  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.clothesDB.push(record);
    return record;
  } 
  
  read(id) {
    if (id) {
      return this.clothesDB.find((record) => record.id === id);
    } else {
      return this.clothesDB;
    }
  }

  update(id, obj) {
    for (let i = 0; i < this.clothesDB.length; i++) {
      if (this.clothesDB[i].id === id) {
        this.clothesDB[i].data = obj;
        return this.clothesDB[i];
      }
    }
  }

  delete(id) {
    this.clothesDB = this.clothesDB.filter((c) => c.id !== id);
    return this.clothesDB;
  }

}

module.exports = Clothes;