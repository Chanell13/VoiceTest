import { Component, OnInit } from '@angular/core';
import { VoiceService } from '../service/voice.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  run = true;
  constructor(private voiceservice: VoiceService) { }

  ngOnInit() {
  }
  onPress() {
    this.voiceservice.record().subscribe();

    // if (this.run) {
    //   this.run = !this.run;
    // } else {
    //   this.voiceservice.stop();
    //   this.run = !this.run;
    // }
  }


}
