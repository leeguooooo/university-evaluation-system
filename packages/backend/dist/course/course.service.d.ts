import { Repository } from 'typeorm';
import { Course } from './course.entity';
export declare class CourseService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    findAll(): Promise<Course[]>;
    findById(id: number): Promise<Course>;
    create(course: Course): Promise<Course>;
    update(id: number, course: Course): Promise<Course>;
    delete(id: number): Promise<void>;
}
