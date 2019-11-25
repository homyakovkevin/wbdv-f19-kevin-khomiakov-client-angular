import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cId) =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/courses/' + cId + '/modules')
      .then(response => response.json())
}
