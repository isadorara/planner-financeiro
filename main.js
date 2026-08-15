const tabela = document.getElementById('tableBody');
let total = 0.0;

// Lidar com arquivo csv
import Papa from 'papaparse';

document.getElementById('fileButton').addEventListener('click', preencherTabela);

function preencherTabela() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    let total = parseFloat(0);

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
            console.log(results.data);
            const dados = results.data;

            dados.forEach((row => {
                if(!row.amount.startsWith('-')) {
                    //Transformar row.amount em número
                    row.amount = row.amount.replace(/\s/g, '');
                    row.amount = row.amount.replace(/\./g, '');
                    row.amount = row.amount.replace(/,/g, '.');
                    row.amount = Number.parseFloat(row.amount);
                    
                    //Somar total
                    total += row.amount;
                    console.log(total.toFixed(2));

                    const novaLinha = `
                        <tr>
                            <td>${row.title}</td>
                            <td>${row.amount.toFixed(2)}</td>
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
                    
                    console.log('Saída cadastrada!');
                    tabela.insertAdjacentHTML('beforeend', novaLinha);

                    document.getElementById("val_total").textContent = `R$${total}`;
                }
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