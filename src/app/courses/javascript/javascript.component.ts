import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'js-intro',
  templateUrl: '../../../assets/courses/javascript/jsintro.html',
  styleUrls: ['./javascript.component.css']
})
export class jsintro implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dom-intro',
  templateUrl: '../../../assets/courses/javascript/dom/dom-intro.html',
  styleUrls: ['./javascript.component.css']
})
export class jsdom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dom-example',
  templateUrl: '../../../assets/courses/javascript/dom/dom_examples.html',
  styleUrls: ['./javascript.component.css']
})
export class domexample implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}