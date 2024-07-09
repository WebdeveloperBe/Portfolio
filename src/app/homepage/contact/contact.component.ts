import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component.media.scss'],
})
export class ContactComponent {
  
  http: HttpClient = inject(HttpClient);
  buttonName: string = `contact.button`;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest: boolean = true;
  checkbox = false;
  isSubmitted: boolean = false;
  

  post = {
    endPoint: 'https://benedikt-messler.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showFeedback();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.showFeedback();
      ngForm.resetForm();
    }
  }

  toggleCheckbox() {
    this.checkbox = !this.checkbox;
    console.log(this.checkbox);  
  }

  private showFeedback(): void {
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
      this.checkbox = false;
    }, 2000);
  }

}

