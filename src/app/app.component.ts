import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '献叼';
  person = {
    cc: '献狗',
    zz: '献儿'
  };

  xianDiao() {
    alert('献叼最叼');
  }
}
