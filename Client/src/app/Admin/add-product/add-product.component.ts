import { Component } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import tinymce from 'tinymce';
// import * as Quill from 'quill';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],

})


export class AddProductComponent {
  // public Editor = ClassicEditor;


  // selectedFile: File | null = null;
  // fileName: string | ArrayBuffer | null = null;
  // imageSrc: string | ArrayBuffer | null = null;

  // onFileSelected(event : any) {
  //   this.selectedFile = <File>event.target.files[0];
  //   this.fileName = this.selectedFile.name;

  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     this.imageSrc = e.target.result;
  //   };

  //   reader.readAsDataURL(this.selectedFile);
  // }

  inputIndices = [0, 1, 2, 3, 4];
  files: { src: string, name: string }[] = [];
  // files: (File | null)[] = [null, null, null, null, null];
  onFileSelecteds(event: any, i: number) {
    const file: File | null = event?.target?.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.files[i] = { src: e.target.result, name: file.name };
      };
      reader.readAsDataURL(file);
    }
  }

  // public Editor = ClassicEditor;
  // public content: string = '<p>Initial content</p>';

  



}

