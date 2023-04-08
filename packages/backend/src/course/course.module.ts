import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseRepository } from './course.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService, CourseRepository],
  controllers: [CourseController],
})
export class CourseModule {}
