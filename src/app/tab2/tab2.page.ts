import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { PostProvider } from '../../provider/post-provider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})

export class Tab2Page {

  nama_lengkap: any;
  nim: any;
  semester: any;
  alamat: any;
  tempat_lahir: any;
  tanggal_lahir: any;
  agama: any;
  hoby: any;
  keahlian: any;
  ipk: any;
  no_hp: any;
  email: any;
  alasan_bergabung: any;
  foto: any;

  constructor(

    public postPvdr: PostProvider,

    private alertController: AlertController

  ) {}

  ambilFoto(event: any) {

    this.foto = event.target.files[0];

  }

  async daftar() {

    let body = new FormData();

    body.append('nama_lengkap', this.nama_lengkap);
    body.append('nim', this.nim);
    body.append('semester', this.semester);
    body.append('alamat', this.alamat);
    body.append('tempat_lahir', this.tempat_lahir);
    body.append('tanggal_lahir', this.tanggal_lahir);
    body.append('agama', this.agama);
    body.append('hoby', this.hoby);
    body.append('keahlian', this.keahlian);
    body.append('ipk', this.ipk);
    body.append('no_hp', this.no_hp);
    body.append('email', this.email);
    body.append('alasan_bergabung', this.alasan_bergabung);

    body.append('foto', this.foto);

    this.postPvdr.uploadData(

      body,

      'register.php'

    ).subscribe(

      async (res: any) => {

        const alert = await this.alertController.create({

          header: 'Berhasil',

          message: res.message,

          buttons: ['OK']

        });

        await alert.present();

      },

      async (error) => {

        const alert = await this.alertController.create({

          header: 'Error',

          message: JSON.stringify(error.error),

          buttons: ['OK']

        });

        await alert.present();

      }

    );

  }

}