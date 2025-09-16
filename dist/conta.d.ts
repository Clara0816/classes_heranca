declare class Conta {
    private titular;
    private saldo;
    constructor(_titular: string, _saldo: number);
    getTitular(): string;
    setTitular(_titular: string): void;
    getSaldo(): number;
    setSaldo(_saldo: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    recuperarSaldo(): number;
}
export default Conta;
//# sourceMappingURL=Conta.d.ts.map