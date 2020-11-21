import { Routes } from '@angular/router';
import { GridunoComponent } from './components/grids/griduno/griduno.component';
import { GriddosComponent } from './components/grids/griddos/griddos.component';
import { PosicionamientoComponent } from './components/grids/posicionamiento/posicionamiento.component';
import { AreasComponent } from './components/grids/areas/areas.component';
import { AlineacionesComponent } from './components/grids/alineaciones/alineaciones.component';
import { TracksComponent } from './components/grids/tracks/tracks.component';
import { ImplicitaComponent } from './components/grids/implicita/implicita.component';





export const routes: Routes = [
    { path: 'gridUno', component: GridunoComponent },
    { path: 'gridDos', component: GriddosComponent },
    { path: 'posicionamiento', component: PosicionamientoComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'alinear', component: AlineacionesComponent },
    { path: 'tracks', component: TracksComponent },
    { path: 'implicita', component: ImplicitaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'gridUno' },
    { path: '**', component: GridunoComponent }
];
