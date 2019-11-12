// import { UserService } from './user.service';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';


interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class VoiceService {
    speechRecognition: any;
    // tslint:disable-next-line: variable-name
    _me: any;

    constructor( // private userService: UserService,
        private zone: NgZone) {
        // this._me = userService.profile;
    }

    record(): Observable<string> {

        return new Observable(observer => {
            const { webkitSpeechRecognition }: IWindow = window as unknown as IWindow;
            this.speechRecognition = new webkitSpeechRecognition();
            this.speechRecognition.continuous = false;
            // this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = this._me.lang;
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                let term = '';
                if (speech.results) {
                    const result = speech.results[speech.resultIndex];
                    const transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log('Unrecognized result - Please try again');
                        } else {
                            term = transcript.trim();
                            console.log('Did you said? -> ' + term + ' , If not then say something else...');
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error);
            };

            this.speechRecognition.onend = () => {
                observer.complete();
            };

            this.speechRecognition.start();
            console.log('Say something - We are listening !!!');
        });
    }


    stop() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }

}
