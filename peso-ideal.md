---
title: Peso Ideal
metatags: INDEX,FOLLOW
description: A Calculadora de peso ideal online, ao calcular o peso ideal, você verifica
  entre quanto deve manter seu peso ideal.
keywords: calcular peso ideal, peso ideal, calculadora de peso ideal, imc
script:
- peso_ideal.js
modules:
- modules.js
cdn: https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js
layout: calculadoras
categories: health
---

<section id="calculadora-de-porcentagem" class="section-calculadoras">
  <div class="section-content flex" id="content">
    <div class="col-9">
      <div class="section-headline">
        <h1 class="healine-small">
          {{page.title}}
        </h1>
        <p>
          Calcule o seu {{page.title}} e veja qual o peso que você deveria manter.
        </p>
      </div>
      <div class="card card-calculator">
        Minha altura é de
        <input class="calcAltura input-calculator" type="tel" pattern="\d*" name="" value="" data-mask="0,00" data-mask-reverse="true"> metros.
        <br /><br />
        Seu peso ideal é:
        <input val="" id="copyResult" class="resultPesoIdeal card-result result-calc01">. <br /> Procure ficar entre: <div class="resultPesoA card-result result-calc01"></div> kg e <div class="resultPesoB card-result result-calc01"></div>kg.

        <div class="copy-result-container">
          <button id="copyButton" class="btn-flat" type="button" name="button">Copiar resultado</button>
          <div class="copyStatus"></div>
        </div>
      </div>

    </div>
    <div class="col-1">

    </div>
    <aside class="aside-infos col-2">
      <!-- ... -->
    </aside>
  </div>
</section>
