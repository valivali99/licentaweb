import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../../models/itemModel';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    serviceUrl = `${environment.endpoint}/api/store/items`;

    constructor(private http: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.serviceUrl);
    }
}
