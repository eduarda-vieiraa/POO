class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}


const pessoa = new Pessoa("Renata", 48);
pessoa.exibirInformacoes();


