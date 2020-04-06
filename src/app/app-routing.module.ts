import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent} from './contacts/contacts.component';
import { FormComponent} from './form/form.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
    const routes: Routes = [
        {
            path: '',
            component: ContactsComponent,
            
        },
        { path: 'form',
        component: FormComponent,},
        { path: 'view',
        component: ViewContactsComponent,}
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
