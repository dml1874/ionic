import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//引入自定义组件
import { ComponentsModule } from '../../components/components.module';

import { HomePage } from './home';

@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		IonicPageModule.forChild(HomePage),
		ComponentsModule
	],
})

export class HomePageModule { }
