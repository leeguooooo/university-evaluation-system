import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findById(id: number): Promise<Course> {
    return await this.courseRepository.findOne({ where: { id } });
  }

  async create(course: Course): Promise<Course> {
    return await this.courseRepository.save(course);
  }

  async update(id: number, course: Course): Promise<Course> {
    await this.courseRepository.update(id, course);
    return await this.courseRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
