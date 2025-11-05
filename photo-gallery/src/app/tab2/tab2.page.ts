import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFabButton, IonFab, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonFabButton, IonFab, IonGrid, IonRow, IonCol, IonImg]
})
export class Tab2Page {
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  constructor(public photoService: PhotoService) {
    addIcons({ camera })
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
