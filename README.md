# Planner Financeiro

> **Projeto em desenvolvimento (Work in Progress)**
> Este projeto está sendo construído aos poucos e será refinado ao longo do tempo. Funcionalidades, estrutura e documentação ainda vão passar por várias mudanças.

## Sobre o projeto

O **Planner Financeiro** é uma aplicação criada para ajudar no planejamento financeiro pessoal. A ideia é reunir, em um só lugar, o controle de gastos, o histórico de meses anteriores e uma análise inteligente sobre se vale a pena (ou não) fazer determinada compra.

## Páginas planejadas

### Relatório (*em desenvolvimento no momento*)
Página principal, onde os dados financeiros são inseridos e visualizados:
- Upload de arquivo CSV **ou** inserção manual dos dados pelo usuário
- Tabela de gastos com: **nome**, **data**, **valor** e **categoria**
- Soma total dos gastos exibida acima da tabela
- Gráfico mostrando quanto foi gasto em cada categoria

### Meses anteriores
Página para consultar tabelas e estatísticas de meses já registrados, permitindo comparar o histórico financeiro ao longo do tempo.

### Analisar gasto
Com base nas informações fornecidas pelo usuário (custo de vida, gastos médios mensais, salário, etc.), essa página vai analisar uma compra escolhida pelo usuário e ajudar a responder perguntas como:
- É uma compra razoável no momento?
- Seria melhor esperar e comprar mais tarde?
- Vale mais a pena pagar à vista ou parcelar?

## Status atual

Atualmente em desenvolvimento a página de **Relatório**. As demais páginas ainda serão implementadas.

## Tecnologias

- Node.js
- [csv-parser](https://www.npmjs.com/package/csv-parser) — leitura e processamento dos arquivos CSV

## Instalação

```bash
git clone https://github.com/isadorara/Planner_Financeiro.git
cd Planner_Financeiro
npm install
```

## Autoria

Desenvolvido por **Isadora Conceição Araújo**.

## Licença

Este projeto está sob a licença ISC.
