import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-formulario-universitario',
    templateUrl: './formulario-universitario.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class FormularioUniversitarioComponent implements OnInit {

    @Input() nombre: string = '';
    @Input() apellidos: string = '';
    @Input() edad: number = 0;
    
    _form!: FormGroup;


    constructor( private fb: FormBuilder  ){}

    ngOnInit(): void {
        this._form = this.fb.group({
            nombre: [this.nombre],
            apellidos: [this.apellidos],
            edad: [this.edad],
            universidad: [''],
            notas: [0],
        })
    }

    registrar(){
        const nombre = this._form.value.nombre;
        const apellidos = this._form.value.apellidos;
        const edad = this._form.value.edad;
        const universidad = this._form.value.universidad;
        const notas = this._form.value.notas;

        const estudiante = {
            nombre,
            apellidos,
            edad,
            universidad,
            notas
        }
        const Students = localStorage.getItem('students-university');

        if( Students ){
            const students = JSON.parse(Students);
            students.push(estudiante);
            const estudiantes = [...students, estudiante]
            localStorage.removeItem('students-university');
            localStorage.setItem('students-university', JSON.stringify(estudiantes));
            alert('Estudiante Universitario registrado correctamente');
            return;
        }

        localStorage.setItem('students-university', JSON.stringify([estudiante]));

        alert('Estudiante Universitario registrado correctamente');
    }

}