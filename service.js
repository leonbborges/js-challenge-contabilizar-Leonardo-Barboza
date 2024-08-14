
const validarEntradaDeDados = (lancamento) => {
   const ApenasNumero = /^\d+$/.test(lancamento.cpf);
   if (!ApenasNumero) {
      return 'O CPF inserido deve conter Apenas numeros';
   }

   else if (!validarCPF(lancamento.cpf)) {
      return 'Digite um valor de CPF valido';
   }

   else if (typeof lancamento.valor !== 'number') {
      return 'O Valor inserido deve conter Apenas numeros';
   }

   else if (lancamento.valor < -2000.00) {
      return 'O Valor não pode ser inferior a 2000,00';
   }

   else if (lancamento.valor > 15000.00) {
      return 'O Valor não pode ser superior a 15000,00';
   } else {
      return null;
   }
}

const recuperarSaldosPorConta = (lancamentos) => {
   if (lancamentos.length === 0) {
      return [];
   }
   const somatorio = new Map()
   lancamentos.forEach(({ cpf, valor }) => {
      if (somatorio.has(cpf)) {
         somatorio.set(cpf, somatorio.get(cpf) + valor)
      } else {
         somatorio.set(cpf, valor)
      }
   })
   return Array.from(somatorio.entries())
      .map(([cpf, sum]) => ({
         cpf,
         valor: sum
      }))
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   if (lancamentos.length === 0) {
      return [];
   }
   const mapaComMaiores = new Map();
   const mapaComMenores = new Map();
   lancamentos.forEach(({ cpf, valor }) => {
      if (mapaComMaiores.has(cpf) || mapaComMenores.has(cpf)) {
         if (valor > mapaComMaiores.get(cpf)) {
            mapaComMaiores.set(cpf, valor)
         }
         if (valor < mapaComMenores.get(cpf)) {
            mapaComMenores.set(cpf, valor)
         }
      } else {
         mapaComMaiores.set(cpf, valor);
         mapaComMenores.set(cpf, valor);
      }
   })
   const arrayMenor = Array.from(mapaComMenores.entries())
      .map(([cpf, sum]) => ({
         cpf,
         valor: sum
      }))
   const arrayMaior = Array.from(mapaComMaiores.entries())
      .map(([cpf, sum]) => ({
         cpf,
         valor: sum
      }))
   const combinado = arrayMenor.concat(arrayMaior);
   combinado.sort((a, b) => a - b);
   return combinado;
}

const recuperarMaioresSaldos = (lancamentos) => {
   if (lancamentos.length === 0) {
      return [];
   }
   const somatorio = new Map()
   lancamentos.forEach(({ cpf, valor }) => {
      if (somatorio.has(cpf)) {
         somatorio.set(cpf, somatorio.get(cpf) + valor)
      } else {
         somatorio.set(cpf, valor)
      }
   })
   const mapOrganizado = new Map([...somatorio.entries()].sort((a, b) => b[1] - a[1]));
   const arrayOrganizado = Array.from(mapOrganizado.entries())
      .map(([cpf, sum]) => ({
         cpf,
         valor: sum
      }))
   return arrayOrganizado.slice(0, 3);
}

const recuperarMaioresMedias = (lancamentos) => {
   if (lancamentos.length === 0) {
      return [];
   }
   const somatorio = new Map()
   const qtdDeOcorrencias = new Map()
   lancamentos.forEach(({ cpf, valor }) => {
      if (somatorio.has(cpf)) {
         somatorio.set(cpf, somatorio.get(cpf) + valor)
         qtdDeOcorrencias.set(cpf, qtdDeOcorrencias.get(cpf) + 1)
      } else {
         somatorio.set(cpf, valor)
         qtdDeOcorrencias.set(cpf, 1)
      }
   })
   const mapOrganizado = new Map([...somatorio.entries()].sort((a, b) => b[1] - a[1]));
   const arrayOrganizado = Array.from(mapOrganizado.entries())
      .map(([cpf, sum]) => ({
         cpf,
         valor: sum
      }))
   arrayOrganizado.forEach(elemento => {
      console.log(qtdDeOcorrencias.get(elemento.cpf))
      console.log(elemento)
      elemento.valor = (elemento.valor / qtdDeOcorrencias.get(elemento.cpf));
   })
   return arrayOrganizado.slice(0, 3);
}

function validarCPF(cpf) {
   let validacao = false;
   let somatorio = 0, resultado = 0;

   if (cpf.length !== 11) {
      return validacao;
   }
   for (let i = 1; i <= 9; ++i) {
      somatorio += (parseInt(cpf.substring(i - 1, i)) * (11 - i));
   }

   resultado = (somatorio * 10) % 11;

   if ((resultado == 10) || (resultado == 11)) {
      resultado = 0;
   }

   if (resultado != parseInt(cpf.substring(9, 10))) {
      return validacao;
   }

   validacao = true;
   return validacao;
}