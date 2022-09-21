import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  personsName = ['mariam', 'mohamed', 'shaker', 'elroba'];

  peopleByCountry = [
    {
      country: 'egypt',
      personName: [
        {
          name: 'mariam',
        },
        {
          name: 'mohamed',
        },
      ],
    },
    {
      country: 'london',
      personName: [
        {
          name: 'shaker',
        },
        {
          name: 'ahmed',
        },
      ],
    },
  ];
  // courses = ['java', 'c++', 'javascript'];

  // newCourse = '';
  // onAdd(newCourse: string) {
  //   this.courses.push(newCourse);
  //   console.log(newCourse);
  // }
  // onDelete(course: string) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  courses = [
    { id: 1, courseName: 'java' },
    { id: 2, courseName: 'c++' },
    { id: 3, courseName: 'javascript' },
    { id: 4, courseName: 'c#' },
  ];
  newCourse = '';
  courseId = 0;
  onAdd(newCourse: string, idValue: number) {
    this.courses.push({ id: idValue, courseName: newCourse });
    console.log({ id: idValue, courseName: newCourse });
  }

  printValue(value: number) {
    console.log(this.courseId);
  }
  onDelete(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  defaultValue = 'courses';
  setView(value: string) {
    this.defaultValue = value;
  }
}
