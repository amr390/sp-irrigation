import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { Plot, Channel } from '../models/plot';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: 'connection.page.html',
  styleUrls: ['connection.page.scss']
})
export class ConnectionPage {
  public plot: Plot;
  savedConnections: BehaviorSubject<Plot[]> = new BehaviorSubject([]);

  constructor(
    private connectionService: ConnectionService,
    private alertController: AlertController
  ) {
    this.plot = this.connectionService.getPlot();
  }


  async validateConnection() {
    this.connectionService.checkStatus(this.plot).subscribe(async (success) => {
      const alert = this.alertController.create({
        cssClass: success ? 'alert-success' : 'alert-error',
        header: success ? 'Correcto!!' : 'Fallo!!',
        subHeader: success ? 'Prueba de conexión correcta' : 'La prueba de conexión falló',
        message: success ? 'Conexión establecida con éxito' : 'Fallo al establecer una conexión',
        buttons: ['OK']
      });
      (await alert).present();
    }
    );
  }

}
