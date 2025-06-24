// Importa TestBed, a ferramenta de teste do Angular para configuração de ambientes de teste
import { TestBed } from '@angular/core/testing';

// Importa o serviço que será testado
import { VagasService } from './vagas.service';

// Bloco de teste para o serviço VagasService
describe('VagasService', () => {
  // Declaração de uma variável para armazenar a instância do serviço
  let service: VagasService;

  // Antes de cada teste, configura o módulo de teste e injeta o serviço
  beforeEach(() => {
    // Configura o ambiente de teste sem dependências extras
    TestBed.configureTestingModule({});

    // Injeta o serviço usando o mecanismo de injeção de dependência do Angular
    service = TestBed.inject(VagasService);
  });

  // Caso de teste básico: verifica se o serviço foi criado corretamente
  it('should be created', () => {
    // Espera que a instância do serviço seja verdadeira (existente)
    expect(service).toBeTruthy();
  });
});
