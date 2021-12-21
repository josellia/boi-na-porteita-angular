import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root',
})
export class ConfigParamsService {
  constructor() {}

  configParams(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();

    config.search ? (httpParams = httpParams.set('q', config.search)) : '';
    config.field
      ? (httpParams = httpParams.set(
          config.field.type,
          config.field.value.toString()
        ))
      : '';

    httpParams = httpParams.set('_page', config.page.toString());
    httpParams = httpParams.set('_limit', config.limit);
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
