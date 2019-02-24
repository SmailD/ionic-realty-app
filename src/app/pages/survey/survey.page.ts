import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/api/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  survey = {}
  constructor(private surveyService: SurveyService) { }
  
  ngOnInit() {
  }

  logForm() {
    console.log(this.survey)
    this.surveyService.addSurvey(this.survey).subscribe(
      data => {
        if (data.rowCount == 1) {
          alert('Thanks for your time!')
        }
      }
    );
  }

}
