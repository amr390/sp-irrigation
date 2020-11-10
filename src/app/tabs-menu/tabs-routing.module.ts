import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'irrigation',
    component: TabsPage,
    children: [
      {
        path: 'connection',
        loadChildren: () => import('../tab-connection/connection.module').then(m => m.ConnectionPageModule)
      },
      {
        path: 'panel',
        loadChildren: () => import('../tab-panel/panel.module').then(m => m.PanelPageModule)
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/irrigation/connection',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/irrigation/connection',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
