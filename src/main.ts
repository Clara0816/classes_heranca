import Conta from "./Conta.js";
import Corrente from "./Corrente.js";
import Poupanca from "./poupanca.js";

let contaCorrente : Corrente = new Corrente(" Felisberto Felis", 1000, 0.08);
 
contaCorrente.depositar(200);
contaCorrente.cobrarTaxaManutencao();
contaCorrente.sacar(2000);

let saldoAtual = contaCorrente.recuperarSaldo();

console.log(`O saldo do cliente ${contaCorrente.getTitular()} é de ${saldoAtual}.`);

let contaPoupanca : Poupanca = new Poupanca(" Joselito Rodrigues", 200, 0.06);
 
contaPoupanca.depositar(75.12);
contaPoupanca.renderJuros();
contaPoupanca.sacar(100);


console.log(`O saldo do cliente ${contaPoupanca.getTitular()} é de ${contaPoupanca.recuperarSaldo()}.`);




