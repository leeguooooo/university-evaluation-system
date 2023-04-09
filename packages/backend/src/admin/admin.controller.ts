import { AdminService } from './admin.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Course } from '../course/course.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Patch('change-password')
  async changePassword(
    @Body('id') id: number,
    @Body('password') password: string,
  ): Promise<boolean> {
    return await this.adminService.changePassword(id, password);
  }

  @Get('courses')
  getCourses() {
    return this.adminService.getAllCourses();
  }

  @Put('courses/:id')
  async updateCourse(
    @Param('id') id: number,
    @Body() course: Course,
  ): Promise<Course> {
    return await this.adminService.updateCourse(id, course);
  }

  @Delete('courses/:id')
  async deleteCourse(@Param('id') id: number): Promise<void> {
    return await this.adminService.deleteCourse(id);
  }
}
