// Local Modules
import { ParlamentModel } from '../models';

export default class ParlamentService {
//   static fullList() {
//     return ParlamentModel.fullList();
//   }

  static getUsers() {
    return ParlamentModel.getUsers();
  }

  //   static list() {
  //     return ParlamentModel.list();
  //   }

  //   static getById(id) {
  //     return ParlamentModel.getById(id);
  //   }

  static add(payload) {
    return ParlamentModel.create(payload);
  }

  static edit(id, update) {
    return ParlamentModel.edit(id, update);
  }

  static delete(id) {
    return ParlamentModel.delete(id);
  }
}
