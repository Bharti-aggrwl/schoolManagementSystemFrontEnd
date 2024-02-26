import { Component, OnInit } from '@angular/core';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css']

})
export class TopThreeProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
