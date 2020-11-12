import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Channel, Plot } from '../models/plot';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-panel',
  templateUrl: 'panel.page.html',
  styleUrls: ['panel.page.scss']
})
export class PanelPage {
  public plot: Plot;
  constructor(
    private connectionService: ConnectionService,
    private alertController: AlertController
  ) {
    this.plot = connectionService.getPlot();
  }

  toggleIrrigation(e, channel: Channel) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    this.connectionService.toggleIrrigation(this.plot, channel).subscribe(async success => {
      channel.irrigation = success ? !channel.irrigation : channel.irrigation;
      if (!success) {
        const alert = this.alertController.create({
          cssClass: 'alert-error',
          header: 'Fallo!!',
          subHeader: 'Falló activar el riego',
          message: 'Falló activar el riego',
          buttons: ['OK']
        });
        (await alert).present();
      }
    });
  }

  toggleFertilizer(e, channel: Channel) {
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    this.connectionService.toggleFertilizer(this.plot, channel).subscribe(async success => {
      channel.fertilizer = success ? !channel.fertilizer : channel.fertilizer;
      if (!success) {
        const alert = this.alertController.create({
          cssClass: 'alert-error',
          header: 'Fallo!!',
          subHeader: 'Falló activar el abono',
          message: 'Falló activar el abono',
          buttons: ['OK']
        });
        (await alert).present();
      }

    });
  }
}
