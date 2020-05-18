import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: 'hello-route', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule)  },
  { path: 'world-route', component: WorldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
