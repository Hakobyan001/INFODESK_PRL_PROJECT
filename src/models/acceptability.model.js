// NPM Modules
import { Model } from 'objection';

class AcceptabilityModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'acceptability'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 9555 },
        member1: { type: 'string',  maxLength: 9855 },
        member2: { type: 'string',  maxLength: 9555 },
        cityphone: { type: 'string',  maxLength: 9555 },
        internalphone: { type: 'string',  maxLength: 9555 },
        internalphone2: { type: 'string', maxLength: 9555 }
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

  static getAcceptability() {
    return AcceptabilityModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return AcceptabilityModel.query().update(update).where({ id }).orderBy('id').returning('*');
  }

  static delete(id) {
    return AcceptabilityModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return AcceptabilityModel.query().insert(addToDB);
  }
}

export default AcceptabilityModel;
