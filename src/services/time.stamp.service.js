import { TimeStampModel } from '../models';

export default class TimeStampServic {
  static getTime() {
    return TimeStampModel.getTime();
  }

  static async addTime(date) {
    await TimeStampModel.delete();
    return TimeStampModel.addTime(date);
  }
}
