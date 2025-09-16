import Conta from "./Conta.js";
declare class Poupanca extends Conta {
    private taxaRendimento;
    constructor(_titular: string, _saldo: number, _taxaRendimento: number);
    getTaxaRendimento(): number;
    setTaxaRendimento(_taxaRendimento: number): void;
    renderJuros(): void;
}
export default Poupanca;
//# sourceMappingURL=poupanca.d.ts.map