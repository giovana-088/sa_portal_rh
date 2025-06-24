// Importa o módulo HttpClient para realizar requisições HTTP
import { HttpClient } from '@angular/common/http';
// Importa o decorator Injectable, que permite a injeção de dependência no Angular
import { Injectable } from '@angular/core';
// Importa o tipo Observable, usado para lidar com dados assíncronos (como respostas HTTP)
import { Observable } from 'rxjs';
// Importa o modelo Curriculo, que representa a estrutura dos dados
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root', // Torna o serviço disponível globalmente na aplicação
})
export class CurriculoService {
  // URL base da API para currículos
  private apiUrl = 'http://localhost:3005/curriculos';

  // Injeta o HttpClient no construtor para uso interno no serviço
  constructor(private http: HttpClient) {}

  // Método GET: busca todos os currículos da API
  getCurriculos(): Observable<Curriculo[]> {
    // Realiza uma requisição HTTP GET e retorna um Observable de Curriculo[]
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // Método POST: envia um novo currículo para a API
  postCurriculos(curriculo: Curriculo): Observable<Curriculo[]> {
    // Envia um objeto Curriculo via POST para a API
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }

  // Método PUT: atualiza um currículo existente com base no ID
  putCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]> {
    // Monta a URL com o ID (ex: http://localhost:3001/curriculos/3)
    const url = `${this.apiUrl}/${id}`;
    // Envia uma requisição PUT para atualizar os dados do currículo
    return this.http.put<Curriculo[]>(url, curriculo);
  }

  // Método DELETE: exclui um currículo da API com base no ID
  deleteCurriculo(id: any): Observable<Curriculo[]> {
    // Concatena o ID à URL base para identificar o currículo a ser deletado
    const url = this.apiUrl + '/' + id;
    // Envia uma requisição DELETE para a API
    return this.http.delete<Curriculo[]>(url);
  }
}
