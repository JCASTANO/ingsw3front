import {Component, OnInit, ViewChild, signal, inject} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Persona} from './persona';
import { PersonaService } from './persona.service';

import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {MatSnackBar} from '@angular/material/snack-bar';

import { saveAs as importedSaveAs } from 'file-saver';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  personaForm = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    apellido : new FormControl('', [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = ['nombre', 'apellido'];
  personas = signal<Persona[]>([]);

  @ViewChild(MatTable) table!: MatTable<Persona>;

  private personaService = inject(PersonaService);
  private notification = inject(MatSnackBar);
  
  ngOnInit(): void {
    this.listar();
  }

  private listar() {
    this.personaService.getAll().subscribe(respuesta => {
      this.personas.set(respuesta);
      this.table.renderRows();
    });
  }

  onClickCrear() : void {

    this.personaService.add(this.personaForm.value).subscribe(respuesta => {
      this.notification.open('Creación exitosa');
      this.listar();
    });
  }

  onClickExcelReport() : void {
    this.personaService.excelReport().subscribe((blob) => {
      const fileName = `Reporte.xls`;
      importedSaveAs(blob, fileName);
    });
  }

}
