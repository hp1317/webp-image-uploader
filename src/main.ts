import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FileUploaderComponent],
  template: `
    <app-file-uploader></app-file-uploader>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
