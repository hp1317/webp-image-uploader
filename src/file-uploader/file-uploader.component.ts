import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  uploadFile(event: any) {
    console.log(event.target.files[0]);
    const URL = window.URL || window.webkitURL;
    const Img = new Image();

    const filesToUpload = event.target.files;
    Img.src = URL.createObjectURL(filesToUpload[0]);

    Img.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;

      console.log(height, width);
    };
  }
}
