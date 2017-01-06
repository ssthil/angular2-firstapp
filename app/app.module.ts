import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
//child component
import { FamilyMembersComponent } from "./familymembers/members.component";
import { SenthilFamilyMembersComponent } from "./senthilfamily/senthilfamily.component";
import { MythiliFamilyMembersComponent } from "./mythilifamily/mythilifamily.component";

@NgModule({
    //modules
    imports: [BrowserModule],
    // directives, components, and pipes
    declarations: [
        AppComponent,
        FamilyMembersComponent,
        SenthilFamilyMembersComponent,
        MythiliFamilyMembersComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }