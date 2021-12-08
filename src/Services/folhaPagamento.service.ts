import { FolhaPagamento } from './../models/folhaPagamento';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FolhaPagamentoService {
    private baseUrl = "http://localhost:5000/api/folhaPagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<FolhaPagamento[]> {
        return this.http.get<FolhaPagamento[]>(`${this.baseUrl}/list`);
    }
    create(folhaPagamento: FolhaPagamento): Observable<FolhaPagamento> {
        return this.http.post<FolhaPagamento>(`${this.baseUrl}/create`, folhaPagamento);
    }
}