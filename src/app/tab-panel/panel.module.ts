import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelPage } from './panel.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PanelPageRoutingModule } from './panel-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PanelPageRoutingModule
  ],
  declarations: [PanelPage]
})
export class PanelPageModule {}
