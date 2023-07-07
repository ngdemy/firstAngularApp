import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: `
    //     <p>Template from User component</p>
    // `,
    // styleUrls: ['./user.component.css'] // ['style-1.css', 'style-2.css', ...]
    // styles: [`
    //     p{color: orange; padding: 5px; background-color: black;}
    // `]
})
export class UserComponent {
    title = 'UserComponent'
    description = '<app-user>'
}