import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EstudianteUniversidad } from "./models/estudiante-universidad.interface";
import { EstudianteEscuela } from "./models/estudiante-escuela.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit{

  isStudentUniversity: boolean = false;
  isStudentSchool: boolean = false;
  changeForm: boolean = false;
  
  studentsUniversity: EstudianteUniversidad[] = [];
  studentsSchool: EstudianteEscuela[] = [];


  LocalStorageStudents(){
    const Students = localStorage.getItem('students');
    const StudentsUniversity = localStorage.getItem('students-university');
    this.studentsSchool = Students ? JSON.parse(Students) : [];
    this.studentsUniversity = StudentsUniversity ? JSON.parse(StudentsUniversity) : [];
  }

  public formulario: FormGroup = this.fb.group({
    nombre: [''],
    apellidos: [''],
    edad: [''],
  })

  NgSubmit(){
    const edad = this.formulario.value.edad;

    if( edad >= 18 ){ 
      this.changeForm = true;
      this.isStudentUniversity = true;
      return;
    }

    this.changeForm = true;
    this.isStudentSchool = true;
    
  }


  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.LocalStorageStudents();
  }

}