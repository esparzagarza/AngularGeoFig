import { Component, OnInit } from "@angular/core";
import { Figure } from "src/app/models/figure";
import { Response } from "src/app/models/response";
import { RepositoryService } from "src/app/repository.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements OnInit {

  permittedFigures = [
    { "name": "triangle", "formula": "Base x Altura / 2" },
    { "name": "square", "formula": "Base x Base" },
    { "name": "rectangle", "formula": "Base x Altura" }
  ];

  figure: Figure = new Figure();

  apiResponse: any = new Response();

  constructor(private repo: RepositoryService) { }

  ngOnInit() { this.calculate(); }

  calculate() {
    if (!this.figure.base || this.figure.base < 0) this.figure.base = 0;
    if (!this.figure.height || this.figure.height < 0) this.figure.height = 0;
    this.repo.calculate(this.figure).subscribe(i => { this.apiResponse = i; });
  }

  resetForm() {
    this.figure = new Figure();
    this.apiResponse = new Response();
  }

}
