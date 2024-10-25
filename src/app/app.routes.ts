import { Routes } from '@angular/router'
import { CoursesComponent } from './pages/courses/courses.component'

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent, title: 'Kurslista' },
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: '**', component: CoursesComponent, title: 'Kurslista' }
]
