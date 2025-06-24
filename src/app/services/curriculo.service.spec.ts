// Importa o TestBed, ferramenta do Angular usada para configurar e inicializar o ambiente de teste
import { TestBed } from '@angular/core/testing';

// Importa o serviço que será testado
import { CurriculoService } from './curriculo.service';

// Bloco de teste para o serviço CurriculoService
describe('CurriculoServiceTsService', () => {
  let service: CurriculoService; // Declaração da variável que armazenará a instância do serviço

  // Antes de cada teste, configura o módulo de teste e injeta o serviço
  beforeEach(() => {
    // Configura o ambiente de teste com os módulos necessários (nesse caso, nenhum módulo extra foi necessário)
    TestBed.configureTestingModule({});

    // Injeta a instância do CurriculoService no teste
    service = TestBed.inject(CurriculoService);
  });

  // Teste que verifica se o serviço foi criado corretamente
  it('should be created', () => {
    // Espera que a instância do serviço seja verdadeira (ou seja, que tenha sido criada com sucesso)
    expect(service).toBeTruthy();
  });
});
