import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/models/media.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
@Input() tData:Media[] = null; 


  constructor() { }

  ngOnInit(): void {
    console.log('tData:' + JSON.stringify(this.tData));
  }

}
