// NPM Modules
import { Model } from 'objection';

// Local Modules
// import Status from '../enum/status.enum';
// import Role from '../enum/role.enum';

class UsersModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'users'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        firstname: { type: 'string', minLength: 1, maxLength: 9255 },
        lastname: { type: 'string', minLength: 1, maxLength: 9255 },
        surname: { type: 'string', minLength: 1, maxLength: 9255 },
        phonenumber: { type: 'string', maxLength: 9255 },
        key: { type: 'string', maxLength: 9255 }
      }
    };
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  $beforeInsert() {
    const date = new Date();
    this.created_at = date;
  }

  $beforeUpdate() {
    const date = new Date();
    this.updated_at = date;
  }

  static findByUsername(user) {
    return UsersModel.query().findOne({ user });
  }

  // Methods
  // static getOneOrFail(id) {
  //   return UsersModel.query().findById(id).throwIfNotFound();
  // }

  // static getById(id) {
  //   return UsersModel.query().findById(id).from('mps');
  // }

  static create(addToDB) {
    return UsersModel.query().insert(addToDB);
  }

  // }

  // static edit(id, update) {
  //   return UsersModel.query().update(update).where({ id }).returning('*');

  // static fullList() {
  //   return UsersModel.query().select('*');
  // }

  // static list() {
  //   return UsersModel.query()
  //     .select('id',
  //       'firstname',
  //       'lastname',
  //       'position',
  //       'status')
  //     .where((builder) => builder
  //       .where('status', '=', 'active')
  //       .andWhere('role', '=', 'member'));
  // }

  // static delete(id) {
  //   return UsersModel.query().select('*').where('id', '=', id).del()
  //     .returning('*');
  // }
}

export default UsersModel;
