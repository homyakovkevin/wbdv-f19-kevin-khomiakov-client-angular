import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mId) =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/modules/' + mId + '/lessons')
      .then(response => response.json())
}
