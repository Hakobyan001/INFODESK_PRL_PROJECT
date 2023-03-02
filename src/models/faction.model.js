// NPM Modules
import { Model } from 'objection';

class FactionModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'faction'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 8555 },
        member1: { type: 'string', maxLength: 9555 },
        member2: { type: 'string', maxLength: 9555 },
        cityphone: { type: 'string', maxLength: 7555 },
        internalphone: { type: 'string', maxLength: 7555 }
      }
    };
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static getFaction() {
    return FactionModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return FactionModel.query().update(update).where({ id }).orderBy('id').returning('*');
  }

  static delete(id) {
    return FactionModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return FactionModel.query().insert(addToDB);
  }
}

export default FactionModel;
