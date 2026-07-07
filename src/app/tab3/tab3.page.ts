import { Component } from '@angular/core';

import { PostProvider } from '../../provider/post-provider';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})

export class Tab3Page {

  nim: any;

  data: any;

  constructor(
    public postPvdr: PostProvider
  ) {}

  cekStatus() {

    this.postPvdr.getData(
      'status.php?nim=' + this.nim
    ).subscribe((res: any) => {

      console.log(res);

      if (res.success) {

        this.data = res.data;

      } else {

        this.data = null;

        alert('Data tidak ditemukan');

      }

    });

  }

}