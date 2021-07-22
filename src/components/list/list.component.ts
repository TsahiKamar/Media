import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/models/media.model';
import { ShareService } from 'src/services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tData:Media[]= [];

  selectedIndex:number = null;
  
  constructor(private shareService : ShareService) { 
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
 
  }



sort(type) {

  this.tData.sort((a, b) => { 
            if (a.Title < b.Title) return 1;
            if (a.Title > b.Title) return -1;
            //return 0;
        });
}

linkClick(title,i){
  console.log('list linkClick..selected index :' + i);
  console.log('list  linkClick..selected title :' + title);
  let jsonMessage = {title:title};
  this.shareService.sendMessage(JSON.stringify(jsonMessage));
}

showDetails(i){
  console.log('List selected index :' + i)
  this.selectedIndex = i ;
}

}


  //imgError(image){
  //  console.log('imgError:' + image);
  //   image.onerror = "";
  //   //image.src = "/images/noimage.gif";
  //   return true;
  //}
