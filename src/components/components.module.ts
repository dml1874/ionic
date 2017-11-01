import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
//懒加载
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [IonProductsComponent],
	imports: [
		IonicModule,
	],
	exports: [IonProductsComponent]
})
export class ComponentsModule {}
