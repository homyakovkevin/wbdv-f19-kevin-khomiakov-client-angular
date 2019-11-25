import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  findWidgetsForTopic = (tId) =>
    fetch('https://wbdv-f19-kevin-kho-s-c-react.herokuapp.com/api/topics/' + tId + '/widgets')
      .then(response => response.json())
}
