import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizacionGuard } from './autorizacion.guard';
import { HelpComponent } from './help/help.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  { path: '', redirectTo: '/personas', pathMatch: 'full' },
  { path: 'personas', component: PersonaComponent},
  { path: 'help', component: HelpComponent, canActivate: [AutorizacionGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
