import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Course } from '../course/course.entity';
// ... 导入其他实体类

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'your_database_name',
  entities: [Course /* ... 其他实体类 */],
  synchronize: true, // 在开发环境中设置为 true，生产环境中请设置为 false
};
