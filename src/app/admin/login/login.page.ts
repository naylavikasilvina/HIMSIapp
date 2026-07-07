import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PostProvider } from '../../../provider/post-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  password: string = '';

constructor(
  private http: HttpClient,
  private alertCtrl: AlertController,
  private router: Router,
  public postPvdr: PostProvider
) {}

login() {

  const body = {
    password: this.password
  };

  this.postPvdr.postData(
    body,
    'login.php'
  ).subscribe(

    async (res: any) => {

      if (res.success) {

        localStorage.setItem(
          'id',
          res.data.id
        );

        const alert = await this.alertCtrl.create({
          header: 'Berhasil',
          message: 'Login berhasil',
          buttons: ['OK']
        });

        await alert.present();
        await alert.onDidDismiss();

        this.router.navigate(['/dashboard']);

      } else {

        const alert = await this.alertCtrl.create({
          header: 'Gagal',
          message: 'Password salah',
          buttons: ['OK']
        });

        await alert.present();

      }

    },

    async () => {

      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Koneksi ke API gagal',
        buttons: ['OK']
      });

      await alert.present();

    }

  );

}
}