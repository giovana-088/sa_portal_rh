// Declaração da classe Curriculo
export class Curriculo {
  // Construtor da classe, que define os atributos obrigatórios ao criar um objeto Curriculo
  constructor(
    public id: number,           // Identificador único do currículo
    public nome: string,         // Nome da pessoa
    public idade: number,        // Idade da pessoa
    public linkedin: string,     // Link do perfil no LinkedIn
    public github: string,       // Link do perfil no GitHub
    public experiencia: string   // Texto com a experiência profissional
  ) {}

  // Método que converte o objeto Curriculo para um mapa (objeto JSON)
  public toMap(): { [key: string]: any } {
    return {
      id: this.id,                   // Atribui o valor de id
      nome: this.nome,               // Atribui o valor de nome
      idade: this.idade,             // Atribui o valor de idade
      linkedin: this.linkedin,       // Atribui o valor de linkedin
      github: this.github,           // Atribui o valor de github
      experiencia: this.experiencia  // Atribui o valor de experiência
    };
  }

  // Método estático que cria uma instância da classe Curriculo a partir de um objeto JSON (map)
  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,             // Lê o id do mapa
      map.nome,           // Lê o nome do mapa
      map.idade,          // Lê a idade do mapa
      map.linkedin,       // Lê o linkedin do mapa
      map.github,         // Lê o github do mapa
      map.experiencia     // Lê a experiência do mapa
    );
  }
}
