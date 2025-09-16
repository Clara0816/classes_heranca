import Conta from "./Conta.js";

class Poupanca extends Conta{
     
    private taxaRendimento: number;

     constructor(
        _titular: string,
        _saldo: number ,
        _taxaRendimento: number
    ){
        super(_titular, _saldo); 
        this.taxaRendimento = _taxaRendimento;
    }

        public getTaxaRendimento(): number {
            return this.taxaRendimento;
        }

        public setTaxaRendimento(_taxaRendimento: number){
            this.taxaRendimento = _taxaRendimento;
        }
        public renderJuros(): void {
            let saldoAtual = this.getSaldo()
          this.setSaldo(saldoAtual + (saldoAtual * this.taxaRendimento));
        }
}

export default Poupanca;
