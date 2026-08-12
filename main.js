const tabela = document.getElementById('tableBody');

// Lidar com arquivo csv
import Papa from 'papaparse';

document.getElementById('fileButton').addEventListener('click', preencherTabela);

function preencherTabela() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    Papa.parse(file, {
        header: true,
        complete: (results) => {
            console.log(results.data);
            const dados = results.data;

            dados.forEach((row => {
                const novaLinha = `
                    <tr>
                        <td>${row.title}</td>
                        <td>R$${row.amount}</td>
                        <td></td>
                        <td>${row.date}</td>
                    </tr>
                `;

            console.log('Saída cadastrada!');
            tabela.insertAdjacentHTML('beforeend', novaLinha);
            }));
        }
    });
}

document.getElementById('inputButton').addEventListener('click', cadastrarSaida);

// Lidar com input do usuário
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