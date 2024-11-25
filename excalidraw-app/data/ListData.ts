import {
  createStore,
  entries,
  del,
  getMany,
  get,
  set,
  setMany,
  type UseStore,
} from "idb-keyval";

class ElementsData {
  private store: UseStore;

  constructor() {
    this.store = createStore("list-db", "elements-store");

    entries(this.store).then((entries) => {
      console.log("elements entries", entries);
    });
  }

  async getList() {
    return await entries(this.store);
  }

  async getItem(key: string) {
    return await get(key, this.store);
  }

  async addOrUpdateItem(key: string, value: any) {
    await set(key, value, this.store);
  }

  async deleteItem(key: string) {
    await del(key, this.store);
  }
}

export const elementsData = new ElementsData();

class StateData {
  private store: UseStore;

  constructor() {
    this.store = createStore("list-db", "elements-store");

    entries(this.store).then((entries) => {
      console.log("state entries", entries);
    });
  }

  async getList() {
    return await entries(this.store);
  }

  async getItem(key: string) {
    return await get(key, this.store);
  }

  async addOrUpdateItem(key: string, value: any) {
    await set(key, value, this.store);
  }

  async deleteItem(key: string) {
    await del(key, this.store);
  }
}

export const stateData = new StateData();
