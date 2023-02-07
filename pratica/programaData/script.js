var hoje = new Date();
var amanha = new Date();

var dia = amanha.getDate();
amanha.setDate(dia + 1);

alert("hoje: " + hoje + "\nAmanhã: " + amanha);

/* Perceba que, para calcular a data de amanhã, primeiro criamos um objeto
que recebe a data atual. Depois extraímos o dia dessa data. Então,
modificamos o dia da data, atribuindo mais 1 ao valor da variável dia. É
possível realizar um processo semelhante para obter o próximo mês e o
próximo ano.
*/


alert("Dia: " + hoje.toDateString() + "\nHora: " + hoje.toTimeString());
