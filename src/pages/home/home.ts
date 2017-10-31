import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner1: boolean = true;

  params = {
  	favoritesId: 2054400,
  	pageNo: 1,
  	pageSize: 20
  }

  constructor(
  		public appService: AppService,
  		public navCtrl: NavController
  	) { }

  //获取幻灯片
  getSlides() {
  	var params = {
  		favoritesId: 2056439,
  		pageNo: 1,
  		pageSize: 5
  	}
  	this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
  		console.debug(rs);
  		this.slides = rs.data;
  		this.spinner1 = false;
  	})
  }

  //获取分类
  getCategories() {}

}
