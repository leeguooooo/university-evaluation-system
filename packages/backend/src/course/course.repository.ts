import { EntityRepository, Repository } from 'typeorm';
import { Course } from './course.entity';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  findAll(): Promise<Course[]> {
    return this.find();
  }

  createCourse(course: Course): Promise<Course> {
    return this.save(course);
  }

  updateCourse(id: number, course: Course): Promise<Course> {
    return this.save({ ...course, id });
  }

  deleteCourse(id: number): Promise<void> {
    return this.delete(id).then(() => {});
  }
}
