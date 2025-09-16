import Conta from "./Conta.js";

class Corrente extends Conta{
     
    private taxaManutencao: number;

     constructor(
        _titular: string,
        _saldo: number ,
        _taxaManutencao: number
    ){
        super(_titular, _saldo); 
        this.taxaManutencao = _taxaManutencao;
    }

        public getTaxaManutencao(): number {
            return this.taxaManutencao;
        }

        public setTaxaManutencao(_taxaManutencao: number){
            this.taxaManutencao = _taxaManutencao;
        }
        public cobrarTaxaManutencao(): void {
            let saldoAtual = this.getSaldo()
          this.setSaldo(saldoAtual - (saldoAtual * this.taxaManutencao));
        }
}

export default Corrente;
