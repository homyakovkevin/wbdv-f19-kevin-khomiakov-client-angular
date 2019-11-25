import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  findTopicsForLesson = (lId) =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/lessons/' + lId + '/topics')
      .then(response => response.json())
}
