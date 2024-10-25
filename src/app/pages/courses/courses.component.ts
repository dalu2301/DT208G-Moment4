import { Component, OnInit } from '@angular/core'
import { CourseService } from '../../services/course.service'
import { Course } from '../../models/course'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

enum Filter {
  'Ascending' = 0,
  'Descending' = 1
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})

export class CoursesComponent implements OnInit {

  unsortedCourses: Course[] = []
  courses: Course[] = []
  sortedCode: number = Filter.Ascending
  sortedName: number = Filter.Ascending
  sortedProg: number = Filter.Ascending
  filterValue: string = ''

  // Dependency Injection för CourseService
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    // Hämta in den data som finns is JSON-filen
    this.courseService.getCourses().subscribe((courses) => {

      // Den Array som kommer att manipuleras
      this.courses = courses
      // Den Array som kommer att agera återställning
      this.unsortedCourses = courses

    })

  }

  // Metod för att filtrera resultatet utifrån kurskod 
  // eller kursnamn. Plockar ut korrekta träffar utifrån
  // "facit" i unsortedCourses med hjälp av filter().
  filterResult(): void {

    this.courses = this.unsortedCourses.filter((inputValue) => {

      return ((inputValue.coursename.toLowerCase().includes(this.filterValue.toLowerCase())) || (inputValue.code.toLowerCase().includes(this.filterValue.toLowerCase())))

    })

  }

  // Metod för att sortera tabellen i stigande eller fallande
  // ordning utifrån kurskod, kursnamn eller progression. 
  // Sorterar tabellen med hjälp av sort().
  sortTable(column: string): void {

    switch (column) {
      case 'code':

        if (this.sortedCode === Filter.Ascending) {

          this.courses = this.unsortedCourses.sort((a, b) => (a.code.toLowerCase() < b.code.toLowerCase() ? -1 : 1))

          this.sortedCode = Filter.Descending

        } else {

          this.courses = this.unsortedCourses.sort((a, b) => (a.code.toLowerCase() < b.code.toLowerCase() ? 1 : -1))

          this.sortedCode = Filter.Ascending

        }

        break
      case 'name':

        if (this.sortedName === Filter.Ascending) {

          this.courses = this.unsortedCourses.sort((a, b) => (a.coursename.toLowerCase() < b.coursename.toLowerCase() ? -1 : 1))

          this.sortedName = Filter.Descending

        } else {

          this.courses = this.unsortedCourses.sort((a, b) => (a.coursename.toLowerCase() < b.coursename.toLowerCase() ? 1 : -1))

          this.sortedName = Filter.Ascending

        }

        break
      case 'prog':

        if (this.sortedProg === Filter.Ascending) {

          this.courses = this.unsortedCourses.sort((a, b) => (a.progression.toLowerCase() < b.progression.toLowerCase() ? -1 : 1))

          this.sortedProg = Filter.Descending

        } else {

          this.courses = this.unsortedCourses.sort((a, b) => (a.progression.toLowerCase() < b.progression.toLowerCase() ? 1 : -1))

          this.sortedProg = Filter.Ascending

        }

        break
      default:
        // Felaktigt val, ignorera...
        break
    }

  }

}
