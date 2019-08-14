import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { InteractionsListComponent } from './interactions/interactions-list/interactions-list.component';

import { HomeComponent } from './home/home.component';
import {CartographieComponent} from './cartographie/cartographie.component';
import {ContactComponent} from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VerificationComponent } from './verification/verification.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SearchComplexeComponent } from './search-complexe/search-complexe.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { ServiceComponent } from './service/service.component';
import { AksantimedComponent } from './aksantimed/aksantimed.component';
import { DciComponent } from './dci/dci.component';
import { TreeInteractionsComponent } from './tree-interactions/tree-interactions.component';
import { TreewiewinteractionsComponent } from './treewiewinteractions/treewiewinteractions.component';
import { InteractionListComponent } from './interaction/interaction-list/interaction-list.component';

/*Liens vers les pages */
const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'carte', component: CartographieComponent},
  { path: 'code', component: HomeComponent},
  { path: 'verification', component: VerificationComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'interaction', component: InteractionsListComponent},
  { path: 'professional', component: ProfessionalComponent},
  { path: 'simple', component: DciComponent},
  { path: 'avancee', component: SearchComplexeComponent},
  { path: 'compte', component: MonCompteComponent},
  { path: 'aksantimed', component: AksantimedComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'vue', component: TreeInteractionsComponent},
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'dci', component: DciComponent},
  { path: 'risque', component: InteractionListComponent},
  { path: 'tree', component: TreewiewinteractionsComponent}


];
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
