import Papa from 'papaparse';

let gastos = [];

// Referências do DOM
const tabelaBody = document.getElementById('tableBody');
const valTotalEl = document.getElementById('val_total');

// Categorias no grafico
const CATEGORIA_PARA_ID = {
    'Alimentação': 'cat_alimentacao',
    'Transporte': 'cat_transporte',
    'Saúde': 'cat_saude',
    'Lazer': 'cat_lazer',
    'Moradia': 'cat_moradia',
    'Assinatura': 'cat_assinatura',
    'Outros': 'cat_outros'
};

document.getElementById('fileButton').addEventListener('click', handleFileUpload);
document.getElementById('inputButton').addEventListener('click', handleManualInput);

// Entrada por CSV
function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) return;

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
            results.data.forEach(processarLinhaCsv);
        }
    })
};

function processarLinhaCsv(row) {
    if (!row.amount || row.amount.startsWith('-')) return;
 
    adicionarGasto({
        nome: row.title,
        valor: parseValorBR(row.amount),
        categoria: row.categoria || 'Outros',
        data: row.date
    });
}

function parseValorBR(valorTexto) {
    const limpo = valorTexto
        .replace(/\s/g, '')
        .replace(/\./g, '')
        .replace(/,/g, '.');
    return Number.parseFloat(limpo);
}

// Input do usuário
function handleManualInput() {
    const saida = document.getElementById('input_saida');
    const valor = document.getElementById('input_valor');
    const categoria = document.getElementById('input_categoria');
    const data = document.getElementById('input_data');

    if (!saida.value || !valor.value || !categoria.value || !data.value) {
        alert('Preencha todos os campos antes de enviar.');
        return;
    }

    adicionarGasto({
        nome: saida.value,
        valor: Number.parseFloat(valor.value),
        categoria: categoria.value,
        data: data.value
    });

    limparFormulario(saida, valor, categoria, data);
}
 
function limparFormulario(...campos) {
    campos.forEach(campo => campo.value = '');
}

// Adicionar gasto
function adicionarGasto(gasto) {
    gastos.push(gasto);
    renderizarLinha(gasto);
    atualizarTotal();
    atualizarGrafico();
}

function renderizarLinha(gasto) {
    const linha = `
        <tr>
            <td>${gasto.nome}</td>
            <td>${gasto.valor.toFixed(2)}</td>
            <td>${gasto.categoria}</td>
            <td>${gasto.data}</td>
        </tr>
    `;
    tabelaBody.insertAdjacentHTML('beforeend', linha);
}

function calcularTotal() {
    return gastos.reduce((soma, gasto) => soma + gasto.valor, 0);
}

function calcularTotalPorCategoria() {
    return gastos.reduce((totais, gasto) => {
        totais[gasto.categoria] = (totais[gasto.categoria] || 0) + gasto.valor;
        return totais;
    }, {});
}
 
function atualizarTotal() {
    valTotalEl.textContent = `R$${calcularTotal().toFixed(2)}`;
}

function atualizarGrafico() {
    const total = calcularTotal();
    if (total == 0) return;

    const totais = calcularTotalPorCategoria();

    for(const categoria in CATEGORIA_PARA_ID) {
        const valorCategoria = totais[categoria] || 0;
        const porcentagem = (valorCategoria/total) * 100;

        const div = document.getElementById(CATEGORIA_PARA_ID[categoria]);
        div.style.width = `${porcentagem}%`;
    }
}