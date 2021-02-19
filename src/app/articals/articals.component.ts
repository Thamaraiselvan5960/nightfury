import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.css']
})
export class ArticalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'artical-laptop',
  templateUrl: '../../assets/articals/laptop.html',
  styleUrls: ['./articals.component.css']
})
export class laptop {
}

@Component({
  selector: 'artical-git',
  templateUrl: '../../assets/articals/git.html',
  styleUrls: ['./articals.component.css']
})
export class git {


}

@Component({
  selector: 'artical-linux_command',
  templateUrl: '../../assets/articals/linux_commands.html',
  styleUrls: ['./articals.component.css']
})
export class linux_commands {


}

@Component({
  selector: 'artical-paramikofilecopy',
  templateUrl: '../../assets/articals/python/paramiko.html',
  styleUrls: ['./articals.component.css']
})
export class paramikofilecopy {


}