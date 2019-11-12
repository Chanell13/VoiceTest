import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoiceComponent } from './voice/voice.component';
import { VoiceService } from './service/voice.service';

@NgModule({
  declarations: [
    AppComponent,
    VoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
