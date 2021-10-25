import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'SIGCA-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() public opened: boolean=false;
  //estado:boolean=true;

  constructor() {

   }

  ngOnInit(): void {
  }

}
