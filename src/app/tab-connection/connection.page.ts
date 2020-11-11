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
    private alertController: AlertController) {
    this.plot = new Plot(1, '192.168.18.122', 80);
    this.plot.channels = [
      new Channel(1, 'Parcela Norte (P1)'),
      new Channel(2, 'Parcela Este (P2)'),
      new Channel(1, 'Parcela Sur (P3)')
    ];
  }


  validateConnection() {
    this.connectionService.checkStatus(this.plot).subscribe((success) => this.alertController.create({
      cssClass: success ? 'alert-success' : 'alert-error',
      header: 'Estado',
      subHeader: 'Resultado de la prueba',
      message: success ? 'Conexión establecida con éxito' : 'Fallo al establecer una conexión',
      buttons: ['OK']
    }));
  }

}
