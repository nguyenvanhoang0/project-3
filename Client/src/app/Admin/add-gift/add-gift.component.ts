import { Component } from '@angular/core';

@Component({
  selector: 'app-add-gift',
  templateUrl: './add-gift.component.html',
  styleUrls: ['./add-gift.component.css']
})
export class AddGiftComponent {
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
}
