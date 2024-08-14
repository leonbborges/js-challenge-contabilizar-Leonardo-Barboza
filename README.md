# Contabilizar

##### Teste técnico de programação

#### Regras de Negócio

Obs.: Para validações e outros cálculos, o(a) candidato(a) poderá criar funções auxiliares (até mesmo capturar funções na internet para usar no código), mas **não deve modificar as assinaturas das funções existentes**.

1. Função **validarEntradaDeDados**

- Tipo do parâmetro de entrada: lancamento
- Tipos de retorno: string (mensagens de validação) ou null (se todos os valores estiverem em conformidade com as validações)
  Esta função recebe um objeto (lancamento) contendo os valores digitados pelo usuário. Esses valores deverão ser analisados conforme as regras abaixo. Caso uma ou mais regras não sejam atendidas, uma mensagem de validação informando quais regras não foram atendidas deverá ser retornada na função. Se todas as regras forem atendidas a função deverá retornar null.

  - CPF deve conter apenas caracteres numéricos.
  - Os dígitos verificadores do CPF devem ser válido.
  - Valor deve ser numérico.
  - Valor não pode ser superior a 15000,00.
  - Valor não pode ser inferior a -2000,00.

Obs.: Para realizar o cálculo do dígito verificador do CPF e saber se o valor informado é válido, poderá o(a) candidato(a) utilizar uma função obtida por meio de pesquisa na Internet, desde que se certifique que essa função esteja funcionando corretamente. A habilidade para realizar a pesquisa e adição de código obtido externamente faz parte dos critérios de avaliação, pois representa uma rotina comum no dia-a-dia dos desenvolvedores.

2. Função **recuperarSaldosPorConta**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (Em cada linha um CPF diferente e o respectivo saldo)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo em cada linha um CPF e o valor do respectivo saldo, ordenados na sequência em foram adicionados pelo usuário. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

3. Função **recuperarMaiorMenorLancamentos**

- Tipo do parâmetro de entrada:
  - lancamentos (todos os lançamentos registrados)
  - string (CPF já validado, somente com números)
- Tipo de retorno: lancamentos (somente dois registros, conforme solicitado na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, dois registros, sendo um deles com o maior e outro com o menor valor lançado para o CPF recebido como parâmetro, ordenados do menor para o maior valor. Havendo menos de dois lançamentos registrados para o respectivo CPF, os dois registros (maior e menor) contidos no array de retorno deverão ser idênticos. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

4. Função **recuperarMaioresSaldos**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (somente três registros, conforme solicitado na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos, ordenados do maior para o menor valor. Para cada lançamento deverá ser exibido o saldo do respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possíveis. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

5. Função: **recuperarMaioresMedias**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (somente os três registros identificados na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos médios, ordenados do maior para o menor valor. O saldo médio deve corresponder à "MÉDIA" dos valores registros para o respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possível. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.
