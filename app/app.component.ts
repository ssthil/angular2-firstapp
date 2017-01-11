import { Component } from "@angular/core";

@Component ({
    selector:'main-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
})

export class AppComponent {
    public name: string = `My First Angular 2 Demo`;
    public description: string = "Here the details of my family member's name, age and relationship"; 
}