import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';

import { AboutPage } from './about';

@NgModule({
	declarations: [
		AboutPage
	],
	imports: [
		IonicPageModule.forChild(AboutPage),
		ComponentsModule
	],
})

export class AboutPageModule { }