import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";


@Component({
    selector: 'app-formulario-escuela',
    templateUrl: './formulario-escuela.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class FormularioEscuelaComponent implements OnInit {
    @Input() nombre: string = '';
    @Input() apellidos: string = '';
    @Input() edad: number = 0;

    public _formulario!: FormGroup;

    constructor( private fb: FormBuilder ){}



    ngOnInit(): void {
        this._formulario = this.fb.group({
            nombre: [this.nombre],
            apellidos: [this.apellidos],
            edad: [this.edad],
            escuela: [''],
            notas: [0],
        })
    }

    Registrar(){
        const nombre = this._formulario.value.nombre;
        const apellidos = this._formulario.value.apellidos;
        const edad = this._formulario.value.edad;
        const escuela = this._formulario.value.escuela;
        const notas = this._formulario.value.notas;

        const estudiante = {
            nombre,
            apellidos,
            edad,
            escuela,
            notas
        }
        const Students = localStorage.getItem('students');

        if( Students ){
            const students = JSON.parse(Students);
            students.push(estudiante);
            const estudiantes = [...students, estudiante]
            localStorage.removeItem('students');
            localStorage.setItem('students', JSON.stringify(estudiantes));
            alert('Estudiante registrado correctamente');
            return;
        }

        localStorage.setItem('students', JSON.stringify([estudiante]));

        alert('Estudiante registrado correctamente');
        // window.location.reload();
    }
}