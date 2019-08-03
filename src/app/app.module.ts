
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**Mobile */
import {LayoutModule} from '@angular/cdk/layout'; 
import {PlatformModule} from '@angular/cdk/platform';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
/** Page de l'Application*/
import { CartographieComponent } from './cartographie/cartographie.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component'; 

import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { ProfessionalComponent } from './professional/professional.component';
import { VerificationComponent } from './verification/verification.component';
import { SearchSimpleComponent } from './search-simple/search-simple.component';
import { SearchComplexeComponent } from './search-complexe/search-complexe.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AksantimedComponent } from './aksantimed/aksantimed.component';
import { DciComponent } from './dci/dci.component';
import { ServiceComponent } from './service/service.component';

/** Material*/
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatSortModule} from '@angular/material/sort'; 


//Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    NavComponent,
    CartographieComponent,
    ContactComponent,
    HomeComponent,
    FaqComponent,
    ProfessionalComponent,
    VerificationComponent,
    SearchSimpleComponent,
    SearchComplexeComponent,
    InteractionsComponent,
    InscriptionComponent,
    MonCompteComponent,
    AksantimedComponent,
    ServiceComponent,
    DciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    LayoutModule,
    PlatformModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule 

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

