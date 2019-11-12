import { Component } from '@angular/core';
import { VoiceService } from './service/voice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: VoiceService
  }]
})
export class AppComponent {
  title = 'voicetesting';
}
