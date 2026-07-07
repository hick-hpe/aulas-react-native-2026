# Lista de Exercícios — React Native + TypeScript

**Entrega:** Link do repositório Git no Google Classrom + vídeo curto (até 2 min) demonstrando cada app rodando

# Exercício 01 — App "Álcool ou Gasolina?"

---

## 1. Contexto

Todo motorista de carro flex no Brasil já se fez a mesma pergunta no posto: *"vale mais a pena abastecer com álcool ou com gasolina?"*. A regra prática é simples, mas erramos muito de cabeça. Vocês vão transformar essa regra em um pequeno aplicativo móvel.

A imagem de referência (mockup) entregue junto com este enunciado mostra **como o app deve ficar** ao final. Ela é o nosso "requisito visual". O comportamento esperado está descrito mais abaixo.

---

## 2. A regra de negócio (lógica do cálculo)

A decisão segue a clássica **regra dos 70%**:

```
fator = preco_alcool / preco_gasolina

se fator < 0.7  -> recomendar ÁLCOOL
senão           -> recomendar GASOLINA
```

**Exemplo:** álcool a R$ 4,29 e gasolina a R$ 6,92.
`4,29 / 6,92 = 0,6199...` → menor que 0,7 → **compensa o álcool**.


---

## 3. Requisitos funcionais (RF)

| ID | Requisito |
|----|-----------|
| RF01 | O app deve apresentar uma tela com dois campos numéricos: **preço do álcool (por litro)** e **preço da gasolina (por litro)**. |
| RF02 | O app deve ter um botão **"Calcular"** que dispara o cálculo. |
| RF03 | Ao calcular, o app deve aplicar a regra dos 70% e exibir a recomendação: **"Compensa usar Álcool"** ou **"Compensa usar Gasolina"**. |
| RF04 | A tela de resultado deve exibir os dois preços informados pelo usuário (resumo: "Álcool: R$ X" e "Gasolina: R$ Y"). |
| RF05 | A tela de resultado deve ter um botão **"Calcular novamente"** que volta para a tela de entrada. |
| RF06 | O app deve validar a entrada: não calcular se algum campo estiver vazio, não numérico ou com valor ≤ 0. |

## 5. Requisitos não funcionais (RNF)

| ID | Requisito |
|----|-----------|
| RNF01 | O app deve ser implementado em **React Native com TypeScript** (arquivos `.tsx`). |
| RNF02 | Não é permitido usar `any` para tipar estado e props; use tipos explícitos. |
| RNF03 | O teclado dos campos de preço deve ser **numérico** (`keyboardType="numeric"`). |
| RNF04 | O layout deve ser fiel ao mockup (tema escuro, cartão central, botão de destaque). Não precisa ser pixel-perfect, mas a hierarquia visual deve ser respeitada. |
| RNF05 | O código deve estar organizado em funções/componentes com nomes claros e em português ou inglês consistente. |

---

## 4. Especificação das telas

O app trabalha com **dois momentos** (podem ser duas telas ou um único componente que troca o conteúdo conforme o estado):

**Tela 1 — Entrada**
- Ícone/título "Qual melhor opção?"
- Campo: *Álcool (preço por litro)*
- Campo: *Gasolina (preço por litro)*
- Botão: **Calcular**

**Tela 2 — Resultado**
- Título com a recomendação em destaque (verde para álcool / outra cor para gasolina, à escolha)
- Bloco "Com os preços:" listando álcool e gasolina informados
- Botão: **Calcular novamente**

> Vocês escolhem **como** alternar entre as telas. A forma mais simples para começar é usar uma variável de estado booleana (ex.: `mostrarResultado`) e renderização condicional, **sem** precisar de biblioteca de navegação.