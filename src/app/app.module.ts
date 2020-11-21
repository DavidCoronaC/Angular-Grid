import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridunoComponent } from './components/grids/griduno/griduno.component';
import { HeaderComponent } from './components/shared/header/header.component';

// Routes
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { GriddosComponent } from './components/grids/griddos/griddos.component';
import { PosicionamientoComponent } from './components/grids/posicionamiento/posicionamiento.component';
import { AreasComponent } from './components/grids/areas/areas.component';
import { AlineacionesComponent } from './components/grids/alineaciones/alineaciones.component';
import { TracksComponent } from './components/grids/tracks/tracks.component';
import { ImplicitaComponent } from './components/grids/implicita/implicita.component';


@NgModule({
  declarations: [
    AppComponent,
    GridunoComponent,
    HeaderComponent,
    GriddosComponent,
    PosicionamientoComponent,
    AreasComponent,
    AlineacionesComponent,
    TracksComponent,
    ImplicitaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
