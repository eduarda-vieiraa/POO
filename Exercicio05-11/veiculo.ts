
class Veiculo {
    private modelo: string;
    private ano: number;
    private potencia: string;
    private numeroMarchas: number;
    private velocidadeAtual: string;
    private marchaAtual: number;
 
         constructor(modelo:string, ano:number, potencia:string, numeroMarchas:number, velocidadeAtual:string, marchaAtual:number) {
         this.modelo = modelo;
         this.ano = ano;
         this.potencia = potencia;
         this.numeroMarchas = numeroMarchas;
         this.velocidadeAtual = velocidadeAtual;
         this.marchaAtual = marchaAtual;
     }
 
     public getModelo():string{
         return this.modelo;
     }
 
     public setModelo(modelo:string){
     this.modelo = modelo;
      
     }
     
     public getAno():number{
         return this.ano;
     
     }
 
     public setAno(ano:number){
     this.ano = ano;
    
     }
    
     public getPotencia():string{
         return this.potencia;
   
     }
 
     public setPotencia(podentia:string){
 
     }
 
 public exibirInformacoes(): void {
         console.log(`modelo: ${this.modelo}, ano: ${this.ano}, potencia: ${this.potencia}`);
 
 }
 }
 const veiculo = new Veiculo (
 "peugeot",
 2009,
 "158cv",
 6,
 "20km",
 3
 );
 veiculo.exibirInformacoes();
 
 