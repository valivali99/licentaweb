import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Item } from '../../models/itemModel';
import { Mail } from '../../models/mailModel';

@Injectable({
    providedIn: 'root'
})
export class MailService {
    serviceUrl = `${environment.endpoint}/api/mail`;

    constructor(private http: HttpClient) {}

    sendNewsLetterEmail(mail: Mail) {
        return this.http.post<any>(this.serviceUrl, mail);
    }
}
