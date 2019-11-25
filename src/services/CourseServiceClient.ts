import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/courses')
      .then(response => response.json());

  findCourseById = (cId) =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/courses/' + cId)
      .then(response => response.json());

}
