// Arquivo responsável pela modelagem de dados para vagas
export class Vaga {
  // Atributos privados comentados (alternativa ao uso direto com `public` no construtor)
  // private _id: number;
  // private _nome: string;
  // private _foto: string;
  // private _descricao: string;
  // private _salario: number;

  // Construtor tradicional (comentado) onde os atributos são definidos dentro do corpo do construtor
  // constructor(id:number, nome: string, foto: string, descricao:string, salario: number){
  //   this._id = id,
  //   this._nome = nome,
  //   this._foto = foto,
  //   this._descricao = descricao,
  //   this._salario = salario
  // }

  // Observação: No JavaScript/TypeScript é possível declarar os atributos como `public` diretamente no construtor.
  // Isso cria e inicializa os atributos automaticamente, sem a necessidade de declarar e atribuir separadamente.

  // Construtor com declaração direta dos atributos (forma simplificada)
  constructor(
    public id: number, // Identificador único da vaga
    public nome: string, // Nome do cargo ou título da vaga
    public foto: string, // URL ou caminho da imagem relacionada à vaga
    public descricao: string, // Descrição das responsabilidades ou requisitos
    public salario: number // Faixa salarial ou valor oferecido
  ) {}

  // Método que converte o objeto Vaga em um mapa (objeto JSON) para facilitar envio para APIs ou armazenamento
  public toMap(): { [key: string]: any } {
    return {
      id: this.id, // Atribui o valor do id
      nome: this.nome, // Atribui o valor do nome
      foto: this.foto, // Atribui o valor da foto
      descricao: this.descricao, // Atribui a descrição
      salario: this.salario, // Atribui o salário
    };
  }

  // Método estático que cria uma instância da classe Vaga a partir de um objeto JSON (map)
  static fromMap(map: any): Vaga {
    return new Vaga(
      map.id, // Lê o id do objeto
      map.nome, // Lê o nome
      map.foto, // Lê a foto
      map.descricao, // Lê a descrição
      map.salario // Lê o salário
    );
  }
}
