class Produto{
    private codigo: number;
    private nome: string;
    private valorCompra: number;
    private valorVenda: number;
    private estoque: number;
    private estoqueMin: number;


    constructor(codigo: number, nome: string, valorCompra: number, valorVenda: number,  estoque: number, estoqueMin: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoque =  estoque;
        this.estoqueMin = estoqueMin;
    }
   
       
        public getcodigo(): number {
            return this.codigo;
        }


        public setcodigo(codigo: number): void {
            this.codigo = codigo;
        }
        public getNome(): string {
            return this.nome;
        }


        public setNome(nome: string): void {
            this.nome = nome;
        }
       
        public getvalorCompra(): number {
            return this.valorCompra
        }
        public setvalorCompra(valorCompra: number): void{
            this.valorCompra = valorCompra;
        }
        public getvalorVenda(): number {
            return this.valorVenda
        }
        public setvalorVenda(valorVenda: number): void{
            this.valorVenda = valorVenda;
        }
        public getestoque(): number {
            return this.estoque
        }
        public setestoque(estoque: number): void{
            this.estoque = estoque;
        }
        public getestoqueMin(): number {
            return this.estoqueMin
        }
        public setestoqueMin(estoqueMin: number): void{
            this.estoqueMin = estoqueMin;
        }
        public exibirInformacoes(): void {
            console.log(`Nome: ${this.nome}`);
            console.log(`Codigo: ${this.codigo}`)
            console.log(`valor da Compra: ${this.valorCompra}`)
            console.log(`Valor da Venda: ${this.valorVenda}`)
            console.log(`Estoque: ${this.estoque}`)  
            console.log(`estoque Minimo: ${this.estoqueMin}`)              


}
}
const produto = new Produto(1, 'Produto A', 10, 20, 100, 20);
produto. exibirInformacoes();