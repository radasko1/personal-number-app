import { Component } from '@angular/core'

@Component({
    selector: 'app-birth-code',
    template: `
        <app-birth-code-form />

        <!-- TODO: cycle from list -->
        <div class="">
            <app-birth-code-info title="Pohlaví" />
            <app-birth-code-info title="Věk" />
            <app-birth-code-info title="Den v týdnu" />
            <app-birth-code-info title="Datum narození" [isLast]="true" />
        </div>
    `,
})
export class BirthCodeComponent {}
