// NPM Modules
import { Model } from 'objection';

class Text2Model extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'text2'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        firstname: { type: 'string', minLength: 1, maxLength: 9255 },
        lastname: { type: 'string', minLength: 1, maxLength: 92595 },
        surname: { type: 'string', minLength: 1, maxLength: 9255 },
        phonenumber: { type: 'string', maxLength: 8255 },
        key: { type: 'string', maxLength: 9255 }
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

  static getText() {
    return Text2Model.query().select('*').orderBy('id');
  }

  static edit(id, update) {
    return Text2Model.query().update(update).where({ id }).orderBy('id')
      .returning('*');
  }

  static delete(id) {
    return Text2Model.query().select('*').where('id', '=', id).del()
      .orderBy('id')
      .returning('*');
  }

  static create(addToDB) {
    return Text2Model.query().insert(addToDB);
  }
}

export default Text2Model;
