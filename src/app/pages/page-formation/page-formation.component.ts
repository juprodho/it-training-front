import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';


@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

 @Input() idFormation:number 
 
 formation: Formation

  constructor(private formationhttpService: FormationHttpService) {

  }

  ngOnInit(): void {
    this.formationhttpService.findById(this.idFormation).subscribe(res => { 
      this.formation = res;
    })
  }

}