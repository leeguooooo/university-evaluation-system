import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from 'src/user/user.module';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [UserModule, CourseModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
