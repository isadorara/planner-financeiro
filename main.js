const tabela = document.getElementById('tableBody')

function cadastrarSaida() {
    const saida = document.getElementById('input_saida');
    const valor = document.getElementById('input_valor');
    const categoria = document.getElementById('input_categoria');
    const data = document.getElementById('input_data');

    const novaLinha = `
        <tr>
            <td>${saida.value}</td>
            <td>R$${valor.value}</td>
            <td>${categoria.value}</td>
            <td>${data.value}</td>
        </tr>
    `;


    console.log('Saída cadastrada!');

    tabela.insertAdjacentHTML('beforeend', novaLinha);
}