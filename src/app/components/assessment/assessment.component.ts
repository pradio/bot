import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessments = [
    {
      id:1,
      name: "AWS Certified Cloud Practitioner"
    },
    {
      id:2,
      name: "AWS Certified Cloud Practitioner"
    }
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  start(assessment: {id: number, name: string}){
    this.router.navigate(['/quiz'], { queryParams: { id: assessment.id, name: assessment.name } });
  }

}
