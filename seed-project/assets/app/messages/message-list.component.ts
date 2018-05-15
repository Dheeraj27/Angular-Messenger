import { Component } from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message 
            [inputMessage]="message" 
                        (editClicked)="message.content = $event" 
                        *ngFor="let message of messages">
            </app-message>
        </div>`
    
})

export class MessageListComponent{
    messages: Message[] = [ new Message('Some message', 'Dheeraj'), 
                            new Message('Message2','Lalwani'), 
                            new Message('Message 3','Rock')];
}