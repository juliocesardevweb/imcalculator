// prevenir a ação do botão calcular.

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector('.peso');
  const inputAltura = e.target.querySelector('.altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu nível de IMC é de: ${imc} ${nivelImc}`;
  setResultado(msg, true);
  //verificar se peso e altura sao strings para poder retornar dados invalidos com background red
  if (peso == '' && altura == '') {
    setResultado('Dados inválidos', false);
    return;
  }
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }
});
//função para verificar os niveis de massa corporal e exibit a resposta
function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (imc > 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}
//funcao para calcular a massa corporal
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
function setResultado(msg, isValid) {
  const resultado = document.querySelector('.resultado');
  if (isValid) {
    resultado.classList.remove('red');
    resultado.classList.add('green');
  } else {
    resultado.classList.remove('green');
    resultado.classList.add('red');
  }
  resultado.innerHTML = msg;
}
