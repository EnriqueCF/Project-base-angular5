import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PetitionsService } from '../services/petitions.service';
import { Candidate } from '../models/candidate';

@Component({
  selector: 'add-item',
  templateUrl: '../views/addItem.html',
  providers: [PetitionsService]
})

export class AddItemComponent {
    public title: string;
    public newItem: Candidate;

    constructor(
      private _petitionService: PetitionsService,
      private _route: ActivatedRoute,
      private _router: Router
    ) {
      this.title = 'Crear un nuevo usuario';
      this.newItem = new Candidate('', '' , '' );
    }

    ngOnInit() {
        console.log('Componente: addItem.component.ts, cargado.');
    }

   onSubmit() {
      this._petitionService.addPetition(this.newItem).subscribe(
        response => {
          if (response.status !== 200) {
            console.log('Error al guardar el objeto');
          } else {
            this._router.navigate(['/list']);
            console.log(response._body);
          }
          console.log(response);
        },
        error => {
          console.log(<any>error);
        }
      );
    }

}
