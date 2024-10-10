import { Component, OnInit } from '@angular/core';
import { Exercice } from 'src/app/Classes/exercice';
import { ExerciceService } from 'src/app/Services/exercice.service';

@Component({
  selector: 'app-liste-exercices',
  templateUrl: './liste-exercices.component.html',
  styleUrls: ['./liste-exercices.component.css']
})
export class ListeExercicesComponent implements OnInit{

   lesexercices:Exercice[]=[]

  constructor(private exericeService: ExerciceService){}

  ngOnInit() {
    this.getAllExercices();
  }

  public getAllExercices(){
    this.exericeService.getAll().subscribe(
      (data)=>{
        this.lesexercices=data
      },
      (error) => {
        console.error('Error fetching exercises:', error);
      }
    )
  }

}
