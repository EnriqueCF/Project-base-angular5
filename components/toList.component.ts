import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { PetitionsService } from '../services/petitions.service';
import { Candidate } from '../models/candidate';

@Component({
  selector: 'list',
  templateUrl: '../views/toList.html',
  providers: [PetitionsService]
})

export class ListComponent {
    public title: string;
    public list_petition: Candidate[];

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _petitionsService: PetitionsService
    ) {
      this.title = 'Listado - petición get al servidor.';
    }

    ngOnInit() {
      console.log('Componente: list.component.ts, cargado.');
      this._petitionsService.getUsers().subscribe(
        result => {
          this.list_petition = result;

          console.log(result);
        },
        error => {
          console.log(<any>error);
        }
      );
      this._petitionsService.getPetition().subscribe(
        result => {
          this.list_petition = result;
          console.log('Petición GET realizada');
          },
        error => {
          console.log(<any>error);
        }
      );

    }
}
