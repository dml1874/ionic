import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ThemeableBrowser } from 'ionic-native';

@IonicPage({})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items = [
  	{ title: '我的淘宝' },
  	{ title: '购物车' },
  	{ title: '我的订单' },
  	{ title: '待付款' },
  	{ title: '待发货' },
  	{ title: '待收货' },
  	{ title: '待评价' }
  ];

  constructor() { }

  itemClick(item) {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    new ThemeableBrowser(item.link, '_blank', options)
  }


}
