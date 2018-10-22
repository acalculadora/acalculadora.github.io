---
title: Calculadora de Porcentagem
metatags: INDEX,FOLLOW
description: A Calculadora de porcentagem online ajuda pessoas reais a calcular porcentagem
  com uma experiência melhor.
keywords: calcular porcentagem, calculadora de porcentagem, porcentagem
script:
- porcentagem.js
cdn: https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML
layout: calculadoras
categories: mathematics
---

<section id="calculadora-de-porcentagem" class="section-calculadoras">
  <div class="section-content flex" id="content">
    <div class="col-9">
      <div class="section-headline">
        <h1 class="healine-small">
          {{page.title}}
        </h1>
      </div>

      <div class="card card-calculator">
        Quanto é
        <input class="calcOneA input-calculator" type="tel" pattern="\d*" name="" value="">
        % de
        <input class="calcOneB input-calculator" type="tel" pattern="[0-9]*" name="" value="">
         =
        <div class="resultOne card-result result-calc01"></div>
      </div>

      <div class="card card-calculator">
        O valor
        <input class="calcThreeA input-calculator" type="tel" pattern="\d*" name="" value=""> é qual porcentagem de <input class="calcThreeB input-calculator" type="tel" pattern="[0-9]*" name="" value="">
        = <div class="resultThree card-result result-calc01"></div> %
      </div>

      <div class="card card-calculator">
        <span class="m-row">
          Tenho o valor de
        </span>
        <span class="m-row">
          <input class="calcTwoA input-calculator" type="tel" pattern="\d*" name="" value="">
        </span>
        <span class="m-row">
          <select class="selectTwo" name="selectTwo">
            <option value="1">e quero AUMENTAR</option>
            <option value="2">e quero DIMINUIR</option>
          </select>
        </span>
        <span class="m-row">
          <input class="calcTwoB input-calculator" type="tel" pattern="[0-9]*" name="" value="">
        </span>
        <span class="m-row">
          <div class="calc-phrase"></div>
        </span>
        <span class="m-row">
          <div class="resultTwo card-result"></div>
        </span>
      </div>

      <div class="card card-calculator">
        <span class="m-row">
          O Valor
        </span>
        <span class="m-row">
          <input class="calcFourA input-calculator" type="tel" pattern="\d*" name="" value="">
        </span>
        <span class="m-row">
          <select class="selectFour" name="selectFour">
            <option value="3">AUMENTOU para</option>
            <option value="4">DIMINUIU para</option>
          </select>
        </span>
        <span class="m-row">
          <input class="calcFourB input-calculator" type="tel" pattern="[0-9]*" name="" value="">
        </span>
        <span class="m-row">
          <div class="calc-phrase calc-phrase--Four"></div>
        </span>
        <span class="m-row">
          <div class="resultFour card-result"></div> %
        </span>
      </div>


      <div class="card card-calculator">
        <span class="m-row">
          Tenho um valor inicial que
        </span>
        <span class="m-row">
          <select class="selectFive" name="selectFive">
            <option value="1">AUMENTOU em</option>
            <option value="2">DIMINUIU em</option>
          </select>
        </span>
        <span class="m-row">
          <input class="calcFiveA input-calculator" type="tel" pattern="\d*" name="" value="">
        </span>
        <span class="m-row">
          % e passou para
        </span>
        <span class="m-row">
          <input class="calcFiveB input-calculator" type="tel" pattern="[0-9]*" name="" value="">
        </span>
        <span class="m-row">
          Qual é o valor inicial?
        </span>
        <span class="m-row">
          <div class="resultFive card-result"></div>
        </span>
      </div>


    </div>
    <div class="col-1">

    </div>
    <aside class="aside-infos col-2">
      ...
    </aside>
  </div>
</section>
<section class="section-content flex section-content-calculator-infos">
  <div class="col-9">
    <h2>O que é Porcentagem</h2>
    <p>
      Porcentagem ou percentagem é uma palavra que tem origem na expressão em latim "per centum" e significa literalmente "por cento" ou "a cada cem". A porcentagem é uma maneira de expressar relações entre números ou valores. O símbolo de porcentagem significa literalmente dividido por 100 e é utilizado para expressar comparações entre um valor e o valor 100. Dizer, por exemplo, que algo é 50% do todo é o mesmo que dizer que de aquilo representa 50 elementos de um total de 100 elementos. Desta forma a porcentagem é muito utilizada quando queremos falar sobre a divisão de algo em diversas partes, sobre variações de valores, aumentos e diminuições de preços, quando queremos falar sobre a relevância de um grupo menor dentro de um grupo maior ou quando queremos entender a frequência com que um certo evento ocorre.
    </p>
    <p>
      Vamos aprender a calcular e entender melhor como usamos as porcentagens no dia a dia usando alguns exemplos práticos:
    </p>
    <ol>
      <li>
        <span class="text-bold">
          1. Uma sala de aula de 80 alunos é composta de 60% de mulheres e 40% de homens, qual o número de homens?
        </span>
        <p>
          O conceito de porcentagem é muito utilizado para falar sobre como é formada/composta algum tipo de situação, isto é, quando observamos um certo local, objeto, situação e podemos dividir ela em diversas partes de acordo com algumas categorias, queremos saber quâo representativas são cada uma delas dentro do todo.
        </p>
        <p>
          Quando utilizamos porcentagem estamos sempre fazendo uma comparação a uma situação hipotética em que o número total de elementos é 100 e daí usamos o entendimento dessa situação hipotética para nos ajudar a compreender a situação real. A parte mais importante que precisamos lembrar quando estamos falando sobre composição de alguma situação é que o número 100% representa todo o nosso universo de elementos, ou seja, se temos 30 cachorros no canil, 100% dos cachorros são 30 cachorros, se temos 500 livros em uma biblioteca, 100% dos livros são 500 livros.
        </p>
        <p>
          No exemplo acima temos uma sala de aula composta de homens e mulheres e temos informações sobre qual é representatividade de cada gênero dentro do todo. Sabemos que 60% são mulheres e 40% são homens. Qualquer que seja o tamanho da nossa sala de aula, 100% dos alunos será equivalente ao número total de alunos. Sabendo disso podemos usar uma regra de três nos ajudar a calcular a quantidade de homens e mulheres na sala de aula.
        </p>
        <p>
          Se nossa sala de aula tem 80 alunos e quisermos calcular o número de homens (X) e mulheres (Y) então usamos a seguinte regra de três:
          <br /><br />

          `80 --- 100%`
          <br />
          `X --- 40%`

          <br /><br />
          Multiplicando em cruz temos
          <br />
          `100% * X = 80 * 40%`
          <br /><br />
          `80/x = 100/40`

          <br /><br />
          Como falamos anteriormente podemos substituir os sinais de porcentagem por divisões pelo número 100
          <br />
          `100/100 * X = 80 * 40/100`
          <br /><br />
          `1 * X  = 3.200/100`
          <br /><br />
          `H = 32`
          <br /><br />
          Isto é, há 32 homens na sala de aula.
          <br />
          Para calcular esse tipo de porcentagem facilmente, <a href="#calculadora-de-porcentagem">use nossa calculadora on-line de porcentagem</a>.
        </p>
      </li>

      <li>
        <span class="text-bold">
          2. O preço do tomate subiu 5% em relação ao ano anterior, sabendo que no ano anterior o preço do tomate era de R$ 3,20/kg qual o preço do tomate hoje?
        </span>
        <p>
          Um dos usos mais comuns da porcentagem é para falar sobre mudanças em valores. Um certo número ou valor aumenta e diminui ao longo do tempo, ou seja, para mensurar a magnitude de mudanças de uma situação inicial para uma situação final. Quando vamos falar sobre algum tipo de mudança, como por exemplo o aumento ou diminuição de preços de uma mercadoria, o ganho ou perda de peso de uma pessoa, o aumento ou diminuição da população na quantidade de habitantes de uma cidade, em geral a melhor base de comparação para avaliarmos a situação final é a situação final e é justamente para isso que as porcentagens nos ajudam. Um aumento percentual nada mais é do que um aumento em que usamos como base para entender o valor final o próprio valor inicial.
        </p>
        <p>
          No nosso exemplo sabemos que o tomate custava R$3,20/kg no ano anterior e que o preço dele sofreu um aumento de 5%. Nesse caso sabemos que o valor aumentou um certo tanto em relação ao valor inicial, então o valor final será o valor inicial somado desse acréscimo. Ou seja:
          <br />
          Preço do tomate hoje = Preço do tomate no ano anterior + Aumento de preço
          <br />
          Sabemos que o aumento foi de 5% do preço no ano anterior, então:
          <br />
          Preço do tomate hoje = Preço do tomate no ano anterior + 5% do preço do tomate no ano anterior
          <br />
          Temos agora duas maneira de resolver o problema.
        </p>
        <div class="box-info">
          <span class="text-bold">
            1º método de resolução:
          </span>
          <p>
            O primeiro método de resolução é calculando o valor do aumento e somando ele ao valor inicial.
            <br /><br/>

            Para calcular o valor do aumento então podemos usar uma regra de três:
            <br/>
            `R$ 3,20 ---- 100%`
            <br/>
            `X      ----- 5%`
            <br/><br/>

            Multiplicando em cruz temos
            <br/>
            `100% * X = R$3,20 * 5%`
            <br/><br/>

            Substituindo os sinais de porcentagens por divisões por 100
            <br/><br/>

            `100/100 *  X = R$ 3,20 * 5/100`
            <br/>
            `1 * X = R$ 16/100`
            <br/>
            `X = R$ 0,16`

            <br/><br/>

            Isto é, o aumento no preço do tomate foi de R$0,16. Com isso podemos concluir que o preço final do tomate será:
            <br/><br/>
            Preço do tomate hoje = Preço do tomate no ano anterior + 5% do preço do tomate no ano anterior
            <br/>
            Preço do tomate hoje = R$ 3,20 + R$ 0,16
          </p>
        </div>
        <div class="box-info">
          <span class="text-bold">
            2º método de resolução:
          </span>
          <p>
            Outra maneira de calcular o preço do tomate hoje é utilizando a propriedade distributiva  da multiplicação para calcular o valor final diretamente sem calcular o valor do aumento separadamente antes.
            <br />
            Podemos notar que:
            Preço do tomate hoje = Preço do tomate no ano anterior + 5% do preço do tomate no ano anterior
          </p>
          <p>
            Nada mais é do que:
            <br />
            Preço do tomate hoje = Preço do tomate no ano anterior + 5% * (Preço do tomate no ano anterior)
          </p>
          <p>
            Sabemos que quando estamos falando sobre o todo de algum elemento estamos falando de 100% daquilo. Ou seja, falar "o preço do tomate" é o mesmo que falar "100% do preço do tomate"). Dessa forma então podemos substituir na equação anterior:
            <br />
           Preço do tomate hoje = 100% * Preço do tomate no ano anterior + 5% * (Preço do tomate no ano anterior)
          </p>
          <p class="text-content-indent">
            Colocando o preço do tomate no ano anterior em evidência temos:
            <br />
            Preço do tomate hoje = Preço do tomate no ano anterior * (100% + 5%)
            <br />
            Preço do tomate hoje = Preço do tomate no ano anterior * 105%

            <br /><br />

            Substituindo o sinal de porcentagem por uma divisão por 100, temos:
            <br />
            Preço do tomate hoje = Preço do tomate no ano anterior * 105/100
            <br /><br />

            Sabemos que o tomate no ano anterior custava R$ 3,20/kg, então:
            <br />
            Preço do tomate hoje = R$ 3,20 * 108/100
            <br />
            Preço do tomate hoje = R$ 336 / 100
            <br />
            Preço do tomate hoje = R$ 3,36
          </p>
        </div>
        <p class="text-no-indent">
          Para calcular aumentos percentuais facilmente, <a href="#calculadora-de-porcentagem">use nossa calculadora on-line de porcentagem</a>.
        </p>
      </li>
    </ol>
  </div>
  <div class="col-1">

  </div>
  <div class="col-2">
    ...
  </div>
</section>
