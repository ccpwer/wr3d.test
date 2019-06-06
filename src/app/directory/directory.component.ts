import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  people = [
    {name: '献叼', color: 'red', phone: '123-456-789'},
    {name: '献狗', color: 'blue', phone: '123-456-789'},
    {name: '献儿', color: 'green', phone: '123-456-789'},
    {name: '献叼', color: 'red', phone: '123-456-789'},
    {name: '献毛', color: 'yellow', phone: '123-456-789'},
    {name: '献爷', color: 'black', phone: '123-456-789'},
    {name: '献叼', color: 'red', phone: '123-456-789'}
  ]
  constructor() {

  }

  ngOnInit() {
  }

}
