import { Component } from '@angular/core';

@Component({
  selector: 'app-hearder-admin',
  templateUrl: './hearder-admin.component.html',
  styleUrls: ['./hearder-admin.component.css']
})
export class HearderAdminComponent {
  changeClass() {
    const element = document.querySelector('.search');
    if (element) {
      element.classList.replace('search', 'searchs');
    }
  }

}

