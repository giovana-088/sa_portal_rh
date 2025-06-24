// Torna o serviço disponível para injeção em qualquer parte da aplicação
import { Injectable } from '@angular/core';
// Importa o HttpClient para fazer requisições HTTP
import { HttpClient } from '@angular/common/http';
// Importa Observable, que é usado para lidar com dados assíncronos
import { Observable } from 'rxjs';
// Importa o modelo Vaga, que define a estrutura dos dados manipulados
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root', // Faz com que o serviço seja singleton e disponível em toda a aplicação
})
export class VagasService {
  // URL base da API que será utilizada para acessar os dados de vagas
  private apiUrl = 'http://localhost:3005/vagas';

  // Injeta o HttpClient no construtor para uso em métodos de requisição
  constructor(private http: HttpClient) {}

  // Método GET: obtém todas as vagas da API
  getVagas(): Observable<Vaga[]> {
    // Realiza requisição HTTP GET e retorna os dados como um array de objetos Vaga
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  // Método POST: adiciona uma nova vaga
  postVagas(vaga: Vaga): Observable<Vaga[]> {
    // Envia os dados da nova vaga para a API usando POST
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  // Método PUT: atualiza uma vaga existente com base no ID
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    // Monta a URL da vaga específica a ser atualizada
    const url = `${this.apiUrl}/${id}`;
    // Envia os dados atualizados usando PUT
    return this.http.put<Vaga[]>(url, vaga);
  }

  // Método DELETE: exclui uma vaga pelo ID
  deleteVaga(id: any): Observable<Vaga[]> {
    // Monta a URL da vaga a ser deletada
    const url = `${this.apiUrl}/${id}`;
    // Realiza a requisição DELETE
    return this.http.delete<Vaga[]>(url);
  }
}
