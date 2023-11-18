class Banco {
  constructor(nome, saldo, numero_conta) {
    this.nome = nome;
    this.saldo = saldo;
    this.numero_conta = numero_conta;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente.");
    } else {
      this.saldo -= valor;
      console.log("Saque realizado com sucesso.");
    }
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Depósito realizado com sucesso.");
  }
  mostrarSaldo() {
    console.log(`O saldo atual da conta ${this.numero_conta} é de R$${this.saldo.toFixed(2)}.`);

  
}

}