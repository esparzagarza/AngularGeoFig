import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Figure } from "./models/figure";

@Injectable({ providedIn: 'root' })

export class RepositoryService {

    readonly baseUri = 'https://apigeofigcalculation.herokuapp.com/';

    constructor(private http: HttpClient) { }

    calculate(figure: Figure) { return this.http.post(this.baseUri, figure); }
}