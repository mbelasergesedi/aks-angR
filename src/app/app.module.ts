
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**Mobile */
import {LayoutModule} from '@angular/cdk/layout'; 
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/** Page de l'Application*/
import { CartographieComponent } from './cartographie/cartographie.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component'; 

import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';


import { InteractionDetailsComponent } from './interaction/interaction-details/interaction-details.component';
import { InteractionListComponent } from './interaction/interaction-list/interaction-list.component';
import { CreateInteractionComponent } from './interaction/create-interaction/create-interaction.component';

import { ProfessionalComponent } from './professional/professional.component';
import { VerificationComponent } from './verification/verification.component';
import { SearchSimpleComponent } from './search-simple/search-simple.component';
import { SearchComplexeComponent } from './search-complexe/search-complexe.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TreeInteractionsComponent } from './tree-interactions/tree-interactions.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { AksantimedComponent } from './aksantimed/aksantimed.component';
import { DciComponent } from './dci/dci.component';
import { ServiceComponent } from './service/service.component';
//import { TreewiewinteractionsComponent } from './treewiewinteractions/treewiewinteractions.component';

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
import {FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatSortModule} from '@angular/material/sort'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
//import {NestedTreeControl} from '@angular/cdk/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
//Firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { InteractionsDetailsComponent } from './interactions/interactions-details/interactions-details.component';
import { InteractionsListComponent } from './interactions/interactions-list/interactions-list.component';
import { CreateInteractionsComponent } from './interactions/create-interactions/create-interactions.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,


    InteractionDetailsComponent,
    InteractionListComponent,
    CreateInteractionComponent,

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
    DciComponent,
    InteractionsDetailsComponent,
    InteractionsListComponent,
    CreateInteractionsComponent,
    TreeInteractionsComponent
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
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database,
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    PortalModule,
    MatTreeModule,
    MatExpansionModule,
    HttpClientModule,

    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

