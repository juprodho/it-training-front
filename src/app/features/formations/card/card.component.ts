import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()formation: Formation;

  constructor(private primengConfig: PrimeNGConfig,
              private router : Router
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  
  formationById(){
    this.router.navigate(['formations',this.formation.id])
  }

  
}
