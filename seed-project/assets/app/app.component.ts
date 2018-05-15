import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [ ` 
    .author{
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
    }
    .config{
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 80%;
        }` ]
})
export class AppComponent {
    messages: Message[] = [new Message('Some message', 'Dheeraj'), new Message('Message2','Lalwani'), new Message('Message 3','Rock')];
}