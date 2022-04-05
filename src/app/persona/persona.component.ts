import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Persona} from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido'];
  dataSource: any;

  @ViewChild(MatTable) table!: MatTable<Persona>;

  constructor(private personaService: PersonaService) {}
  
  ngOnInit(): void {
    this.personaService.getAll().subscribe (respuesta => {
      this.dataSource = respuesta;
    })
  }

  onClickCrear() : void {
    this.table.renderRows();
  }

}
