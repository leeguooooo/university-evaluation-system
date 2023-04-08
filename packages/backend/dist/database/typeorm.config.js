"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const course_entity_1 = require("../course/course.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'your_database_name',
    entities: [course_entity_1.Course],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map