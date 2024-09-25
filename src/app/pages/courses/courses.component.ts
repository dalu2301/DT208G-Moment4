import { Component, OnInit } from '@angular/core'
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

  unsortedCourses: Course[] = []
  courses: Course[] = []
  sortedCode: string = 'ascending'
  sortedName: string = 'ascending'
  sortedProg: string = 'ascending'

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe((courses) => {

      // Den Array som kommer att manipuleras
      this.courses = courses
      // Den Array som kommer att agera återställning
      this.unsortedCourses = courses

    })

  }

  
  sortTable(column: string): void {

    switch (column) {
      case 'code':

        if (this.sortedCode === 'ascending') {
          
          this.courses = this.unsortedCourses.sort((a, b) => (a.code.toLowerCase() < b.code.toLowerCase() ? -1 : 1))

          this.sortedCode = 'descending'
          
        } else {
          
          this.courses = this.unsortedCourses.sort((a, b) => (a.code.toLowerCase() < b.code.toLowerCase() ? 1 : -1))

          this.sortedCode = 'ascending'

        }

        break
      case 'name':

        if (this.sortedName === 'ascending') {
            
          this.courses = this.unsortedCourses.sort((a, b) => (a.coursename.toLowerCase() < b.coursename.toLowerCase() ? -1 : 1))

          this.sortedName = 'descending'
          
        } else {
          
          this.courses = this.unsortedCourses.sort((a, b) => (a.coursename.toLowerCase() < b.coursename.toLowerCase() ? 1 : -1))

          this.sortedName = 'ascending'

        }
        
        break
      case 'prog':

        if (this.sortedProg === 'ascending') {
              
          this.courses = this.unsortedCourses.sort((a, b) => (a.progression.toLowerCase() < b.progression.toLowerCase() ? -1 : 1))

          this.sortedProg = 'descending'
          
        } else {
          
          this.courses = this.unsortedCourses.sort((a, b) => (a.progression.toLowerCase() < b.progression.toLowerCase() ? 1 : -1))

          this.sortedProg = 'ascending'

        }
        
        break
      default:
        // Felaktigt val, ignorera...
        break
    }

  }

}
