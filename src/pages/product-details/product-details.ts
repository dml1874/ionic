import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ThemeableBrowser } from 'ionic-native';

import { AppShare } from '../../app/app.share';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})

export class ProductDetailsPage {

  selectedItem: any;
  imgs: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public actionSheetCtrl: ActionSheetController, 
  	public appShare: AppShare
  ) {
  	this.selectedItem = this.navParams.get("item");
  	if (this.selectedItem.SmallImages) {
  		this.imgs = this.selectedItem.SmallImages;
  	}
  }

  //内置浏览器
  goBuy() {
  	let options = {
	  	statusbar: {
	  		color: '#f8285c'
	  	},
	  	toolbar: {
	  		height: 44,
	  		color: '#f8285c'
	  	},
	  	title: {
	  		color: '#ffffff',
	  		showPageTitle: true
	  	},
	  	backButton: {
	  		image: 'assets/imgs/back.png',
	  		imagePressed: 'assets/imgs/back_pressed.png',
	  		align: 'left',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	  		event: 'backPressed'
	  	},
	  	closeButton: {
	  		image: 'close',
	  		imagePressed: 'close_pressed',
	  		align: 'left',
	  		event: 'closePressed'
	  	},
	  	backButtonCanClose: true
	};
	new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank', options);
  }

  //分享
  share(event) {
  	let actionSheet = this.actionSheetCtrl.create({
  		title: '分享',
  		buttons: [
  			{
  				text: 'QQ好友',
  				handler: () => {
  					this.appShare.qqShare(0);
  				}
  			},
  			{
  				text: 'QQ空间',
  				handler: () => {
  					this.appShare.qqShare(1);
  				}
  			},
  			{
  				text: '微信好友',
  				handler: () => {
  					this.appShare.wxShare(0);
  				}
  			},
  			{
  				text: '朋友圈',
  				handler: () => {
  					this.appShare.wxShare(1);
  				}
  			},
  			{
  				text: '取消',
  				role: 'cancel',
  				handler: () => {
  					console.log('您取消分享了！');
  				}
  			}
  		]
  	});

  	actionSheet.present();
  }
 
}
