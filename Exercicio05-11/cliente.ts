
class Cliente {
    private nome: string;
    private cpf: string;
    private dataNasc: Date;
    private qtdDin: number;

    constructor(nome: string, cpf: string, dataNasc: Date, qtdDin: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.qtdDin = qtdDin;
    }

    // Getters e Setters
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCPF(): string {
        return this.cpf;
    }

    public setCPF(cpf: string): void {
        this.cpf = cpf;
    }

    public getDataNasc(): Date {
        return this.dataNasc;
    }

    public getQtdDin(): number {
        return this.qtdDin;
    }

    public setQtdDin(qtdDin: number): void {
        this.qtdDin = qtdDin;
    }

    // Método para exibir as informações do cliente
    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cpf: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNasc.toLocaleDateString()});
        console.log(Quantia em dinheiro: R$ ${this.qtdDin}`);
    }

    // Método para verificar se o cliente tem dinheiro suficiente para uma compra
    public temDinheiroSuficiente(valorCompra: number): boolean {
        return this.qtdDin >= valorCompra;
    }
}

// Criando uma instância de Cliente
const cliente = new Cliente("Erick", "123456789-0", new Date(2000, 9, 6), 100);

// Exibindo informações do cliente
cliente.exibirInformacoes();

// Verificando se o cliente tem dinheiro suficiente para uma compra
const valorCompra = 75;
if (cliente.temDinheiroSuficiente(valorCompra)) {
    console.log(`O cliente pode realizar a compra de R$ ${valorCompra}.`);
} else {
    console.log(`O cliente não tem dinheiro suficiente para a compra de R$ ${valorCompra}.`);
}