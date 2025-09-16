import Conta from "./Conta.js";
class Poupanca extends Conta {
    taxaRendimento;
    constructor(_titular, _saldo, _taxaRendimento) {
        super(_titular, _saldo);
        this.taxaRendimento = _taxaRendimento;
    }
    getTaxaRendimento() {
        return this.taxaRendimento;
    }
    setTaxaRendimento(_taxaRendimento) {
        this.taxaRendimento = _taxaRendimento;
    }
    renderJuros() {
        let saldoAtual = this.getSaldo();
        this.setSaldo(saldoAtual + (saldoAtual * this.taxaRendimento));
    }
}
export default Poupanca;
//# sourceMappingURL=poupanca.js.map