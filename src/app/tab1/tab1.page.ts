import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})

export class Tab1Page {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  async loginAdmin() {

    const alert = await this.alertController.create({

      header: 'Login Admin',

      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Masukkan Password Admin'
        }
      ],

      buttons: [

        {
          text: 'Batal',
          role: 'cancel'
        },

        {
          text: 'Login',

          handler: (data) => {

            if (data.password === '123') {

              localStorage.setItem('id', '1');

              this.router.navigate(['/dashboard']);

            } else {

              this.gagalLogin();

            }

          }

        }

      ]

    });

    await alert.present();

  }

  async gagalLogin() {

    const alert = await this.alertController.create({

      header: 'Login Gagal',

      message: 'Password admin salah',

      buttons: ['OK']

    });

    await alert.present();

  }

}