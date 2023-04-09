import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CourseService } from 'src/course/course.service';
import { Course } from 'src/course/course.entity';

@Injectable()
export class AdminService {
  constructor(
    private readonly userService: UserService,
    private readonly courseService: CourseService,
  ) {}

  async getAllCourses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  async createCourse(course: Course): Promise<Course> {
    return this.courseService.create(course);
  }

  async updateCourse(id: number, course: Course): Promise<Course> {
    return this.courseService.update(id, course);
  }

  async deleteCourse(id: number): Promise<void> {
    return this.courseService.delete(id);
  }

  async changePassword(id: number, newPassword: string): Promise<boolean> {
    return await this.userService.changePassword(id, newPassword);
  }
}
