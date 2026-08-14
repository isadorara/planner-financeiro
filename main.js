const tabela = document.getElementById('tableBody');
let total = 0.0;

// Lidar com arquivo csv
import Papa from 'papaparse';

document.getElementById('fileButton').addEventListener('click', preencherTabela);

function preencherTabela() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
            console.log(results.data);
            const dados = results.data;

            dados.forEach((row => {
                const novaLinha = `
                    <tr>
                        <td>${row.title}</td>
                        <td>${row.amount}</td>
                        <td>
                            <select id="input_categoria">
                                <option value="Alimentação">Alimentação</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Lazer">Lazer</option>
                                <option value="Moradia">Moradia</option>
                                <option value="Assinatura">Assinatura</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </td>
                        <td>${row.date}</td>
                    </tr>
                `;
                
                total = total + row.amount;

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
            <td>${valor.value}</td>
            <td>${categoria.value}</td>
            <td>${data.value}</td>
        </tr>
    `;

    console.log('Saída cadastrada!');
    tabela.insertAdjacentHTML('beforeend', novaLinha);
}