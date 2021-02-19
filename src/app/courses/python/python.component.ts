import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'py-intro',
  templateUrl: '../../../assets/courses/python/intro.html',
  styleUrls: ['./python.component.css']
})
export class PyIntro implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}

@Component({
  selector: 'py-dsoverview',
  templateUrl: '../../../assets/courses/python/ds/overview.html',
  styleUrls: ['./python.component.css']
})
export class PyDatatypes implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'py-string',
  templateUrl: '../../../assets/courses/python/ds/string.html',
  styleUrls: ['./python.component.css']
})
export class dstring implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}