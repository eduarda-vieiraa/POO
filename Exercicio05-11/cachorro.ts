
class Cachorro {
    public raca: string = "";
    public nome: string = "";
    public porte: string = "";
    public pedigree: string = "";
    public peso: number = 0;
    public dataNascimento: Date;
    public temperamento: string = "";

    constructor(
        raca: string,
        nome: string,
        porte: string,
        pedigree: string,
        peso: number,
        dataNascimento: Date,
        temperamento: string
    ) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.pedigree = pedigree;
        this.peso = peso;
        this.dataNascimento = dataNascimento;
        this.temperamento = temperamento;
    }


    exibirInformacoes(): void {
        console.log(`Raça: ${this.raca}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Porte: ${this.porte}`);
        console.log(`Pedigree: ${this.pedigree}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Data de Nascimento: ${this.dataNascimento.toDateString()}`);
        console.log(`Temperamento: ${this.temperamento}`);
    }


    calcularTamanhoRoupinha(): string {
        if (this.peso <= 5) {
            return "Pequeno";
        } else if (this.peso <= 15) {
            return "Médio";
        } else if (this.peso <= 30) {
            return "Grande";
        } else {
            return "Extra Grande";
        }
    }
}

const cachorro = new Cachorro(
    "Labrador",
    "Buddy",
    "Grande",
    "Sim",
    30,
    new Date("2020-06-15"),
    "Amigável"
);


console.log(`Tamanho da roupinha: ${cachorro.calcularTamanhoRoupinha()}`);


cachorro.nome = "Max";
cachorro.peso = 32;

console.log("\nInformações atualizadas:");
cachorro.exibirInformacoes();
console.log(`Tamanho da roupinha: ${cachorro.calcularTamanhoRoupinha()}`);