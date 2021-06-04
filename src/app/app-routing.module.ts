import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PacketPageComponent } from './packet-page/packet-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'paket', component: PacketPageComponent },
  { path: 'paket#menu', component: PacketPageComponent },
  { path: 'paket/#menu', component: PacketPageComponent },
  { path: 'home/paket', redirectTo: 'paket', pathMatch: 'full' },
  { path: 'home/paket#menu', redirectTo: 'paket#menu', pathMatch: 'full' },
  { path: 'home/paket/#menu', redirectTo: 'paket/#menu', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
