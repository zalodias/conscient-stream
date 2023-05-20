import { readFileSync, writeFileSync } from "fs";

export class Database {
  constructor(filename, data = []) {
    this.filename = filename;
    this.data = data;

    try {
      this.data = JSON.parse(readFileSync(filename));
    } catch (error) {
      writeFileSync(filename, JSON.stringify(data, null, 2));
    }
  }

  insert(record) {
    const newRecord = {
      id: crypto.randomUUID(),
      ...record,
    };
    this.data.push(newRecord);
    this.save();
    return newRecord;
  }

  select(query) {
    return this.data.filter((record) => {
      for (let key in query) {
        if (record[key] !== query[key]) return false;
      }
      return true;
    });
  }

  update(id, updatedFields) {
    const record = this.data.find((record) => record.id === id);

    if (!record) throw new Error("Record not found");

    Object.assign(record, updatedFields);
    this.save();
  }

  delete(id) {
    this.data = this.data.filter((record) => record.id !== id);
    this.save();
  }

  save() {
    writeFileSync(this.filename, JSON.stringify(this.data, null, 2));
  }
}
