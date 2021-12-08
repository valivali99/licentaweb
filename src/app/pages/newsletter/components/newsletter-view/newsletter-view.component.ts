import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mail } from 'src/app/shared/models/mailModel';
import { MailService } from 'src/app/shared/services/mail-service/mail.service';

@Component({
    selector: 'app-newsletter-view',
    templateUrl: './newsletter-view.component.html',
    styleUrls: ['./newsletter-view.component.scss']
})
export class NewsletterViewComponent {
    mailForm: FormGroup = new FormGroup({
        email: new FormControl(null, Validators.required)
    });

    constructor(private mailSerivce: MailService, private snackBar: MatSnackBar) {}

    sendMail(): void {
        const email = this.mailForm.get('email')!.value;

        if (email) {
            const emailModel: Mail = {
                mail: email
            };

            this.mailSerivce.sendNewsLetterEmail(emailModel).subscribe({
                next: () => this.snackBar.open('The email has been sent!', 'X'),
                error: () => this.snackBar.open('An error has occured!', 'X')
            });
        }
    }
}
