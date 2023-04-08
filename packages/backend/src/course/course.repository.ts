import { EntityRepository, Repository } from 'typeorm';
import { Course } from './course.entity';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  // 在这里添加自定义的数据库操作方法，如有需要
}
