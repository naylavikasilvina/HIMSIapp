import { Component } from '@angular/core';

import { PostProvider } from '../../../provider/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})

export class DashboardPage {

  pendaftar: any[] = [];

  semuaData: any[] = [];

  total: number = 0;
  diterima: number = 0;
  ditolak: number = 0;

constructor(
  public postPvdr: PostProvider,
  private router: Router
) {}

ionViewWillEnter() {

  const id = localStorage.getItem('id');

  if (!id) {

    this.router.navigate(['/tabs/tab1']);
    return;

  }

  this.getData();

}

  getData() {

    this.postPvdr.getData(
      'get_pendaftar.php'
    ).subscribe((res: any) => {

      this.pendaftar = res;
      this.semuaData = res;

      this.total = res.filter(
        (x: any) => x.status == 'Pending'
      ).length;

      this.diterima = res.filter(
        (x: any) => x.status == 'Diterima'
      ).length;

      this.ditolak = res.filter(
        (x: any) => x.status == 'Ditolak'
      ).length;

    });

  }

  filterData(status: any) {

    if (status == 'Semua') {

      this.pendaftar = this.semuaData;

    } else {

      this.pendaftar = this.semuaData.filter(
        (x: any) => x.status == status
      );

    }

  }

  terima(id: any) {

    this.postPvdr.getData(
      'terima.php?id=' + id
    ).subscribe(() => {

      this.getData();

    });

  }

  tolak(id: any) {

    this.postPvdr.getData(
      'tolak.php?id=' + id
    ).subscribe(() => {

      this.getData();

    });

  }
logout() {

  localStorage.clear();

  this.router.navigate(['/tabs/tab1']);

}

}