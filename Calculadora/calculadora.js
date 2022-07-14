function calc() {

    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));
    
    if (!operacao ||  operacao >= 7) {
        alert('Erro - entrada inválida!');
        calc();
    } else {
 
        let n1 = Number(prompt('Digite o primeiro número:'));
        let n2 = Number(prompt('Digite o segundo número:'));
        let result;

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos');
            calc();
        } else {
            function soma() {
                result = n1 + n2;
                // mostrando o resultado usando template strings
                alert(`${n1} + ${n2} = ${result}`);
                novaOperacao();
            }
            function subtracao() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                novaOperacao();
            }
            function multiplicacao() {
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`);
                novaOperacao();
            }
            function divisaoReal() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                novaOperacao();
            }
            function divisaoInteira() {
                result = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${result}`);
                novaOperacao();
            }
            function potenciacao() {
                result = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª potência é ${result}`);
                novaOperacao();
            }
            // nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calc();
                } else if (opcao == 2) {
                    alert('Obrigado por usar a Calc!');
                } else {
                    alert('Opção inválida!');
                    novaOperacao();
                }
            }
        }
    } 

    // escolhendo operação
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } 

}
calc(); 