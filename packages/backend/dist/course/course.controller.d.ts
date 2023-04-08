import { CourseService } from './course.service';
import { Course } from './course.entity';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): Promise<Course[]>;
    getCourseById(id: number): Promise<Course>;
    createCourse(course: Course): Promise<Course>;
    updateCourse(id: number, course: Course): Promise<Course>;
    deleteCourse(id: number): Promise<void>;
}
