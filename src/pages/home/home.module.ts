import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//引入自定义组件
import { IonProductsComponent } from '../../components/ion-products/ion-products';

import { HomePage } from './home';

@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		IonicPageModule.forChild(HomePage),
		IonProductsComponent
	],
})

export class HomePageModule { }
