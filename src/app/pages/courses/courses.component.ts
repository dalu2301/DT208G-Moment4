import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service'
import { Course } from '../../models/course'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []

  constructor(private courseService: CourseService ) {}

  ngOnInit(): void {
    
    this.courseService.getCourses().subscribe((courses) => {

      this.courses = courses

    })

  }

}
