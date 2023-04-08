import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async getAllCourses(): Promise<Course[]> {
    return await this.courseService.findAll();
  }

  @Get(':id')
  async getCourseById(@Param('id') id: number): Promise<Course> {
    const course = await this.courseService.findById(id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  @Post()
  async createCourse(@Body() course: Course): Promise<Course> {
    return await this.courseService.create(course);
  }

  @Put(':id')
  async updateCourse(
    @Param('id') id: number,
    @Body() course: Course,
  ): Promise<Course> {
    return await this.courseService.update(id, course);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: number): Promise<void> {
    await this.courseService.delete(id);
  }
}
