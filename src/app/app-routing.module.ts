import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    { path: 'teachers', component: TeacherComponent },
    { path: 'main', component: MainComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }