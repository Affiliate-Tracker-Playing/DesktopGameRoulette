import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {check} from '@tauri-apps/plugin-updater';
import {ask, message} from '@tauri-apps/plugin-dialog';
import {invoke} from '@tauri-apps/api/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Text_Update = "";

  async checkForAppUpdates(onUserClick: boolean) {
    try {
      const update = await check();
      if (update) {
        // Puedes notificar al usuario sobre la actualización
        const versionAvailable = update.version; // La versión de la actualización disponible
        this.Text_Update = "Actualización disponible:" + versionAvailable;
      } else {
        this.Text_Update = "No hay actualizaciones disponibles.";
      }
    } catch (error) {
      this.Text_Update = "Error al verificar actualizaciones:" + error;
    }
  }
}
