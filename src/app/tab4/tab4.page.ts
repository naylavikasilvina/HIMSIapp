import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false
})
export class Tab4Page {

  fotoAktif = 0;

  fotoList = [
    {
      gambar: 'assets/pembina1.jpeg',
      caption: 'Dokumentasi Bersama Pembina I dan Pembina II HIMSI ITB INDONESIA '
    },
    {
      gambar: 'assets/pengurus himsi medan.jpeg',
      caption: 'Dokumentasi Bersama Pengurus Inti HIMSI ITB INDONESIA Kampus Medan'
    },
    {
      gambar: 'assets/pengurus himsi tandem.jpeg',
      caption: 'Dokumentasi Bersama Pengurus Inti HIMSI ITB INDONESIA Kampus Pusat'
    }
  ];

  nextFoto() {

    if(this.fotoAktif < this.fotoList.length - 1){

      this.fotoAktif++;

    }

  }

  prevFoto() {

    if(this.fotoAktif > 0){

      this.fotoAktif--;

    }

  }

}