import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'db-intro',
  templateUrl: '../../assets/database/dbintro.html',
  styleUrls: ['./database.component.css']
})
export class dbintroduction implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
