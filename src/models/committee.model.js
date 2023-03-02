// NPM Modules
import { Model } from 'objection';

class CommitteeModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'committee'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 9555 },
        member1: { type: 'string', maxLength: 9555 },
        member2: { type: 'string', maxLength: 9555 },
        cityphone: { type: 'string', maxLength: 8555 },
        internalphone: { type: 'string', maxLength: 8555 },
        internalphone2: { type: 'string', maxLength: 8555 }
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

  static getCommittee() {
    return CommitteeModel.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return CommitteeModel.query().update(update).where({ id }).returning('*').orderBy('id');
  }

  static delete(id) {
    return CommitteeModel.query().select('*').where('id', '=', id).del().orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return CommitteeModel.query().insert(addToDB);
  }
}

export default CommitteeModel;
