import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from '../models/course'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url: string = 'https://webbutveckling.miun.se/files/ramschema_ht23.json'

  constructor(private http: HttpClient) { }

  // Hämtar JSON-data från adressen ovan med
  // hjälp av HttpClient och Observable.
  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.url)

  }

}
