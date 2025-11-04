import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      console.log('[cam] success', capturedPhoto);
      this.photos.unshift({
        filepath: 'soon...',
        webviewPath: capturedPhoto.webPath!,
      });
    } catch (e) {
      console.error('[cam] failed:', e);
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
