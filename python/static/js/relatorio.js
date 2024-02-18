function carregarDadosTabela() {
    var tableData = JSON.parse(getLocalStorageItem('tableData')) || [];
    var table = document.getElementById('relatorio').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
  
    tableData.forEach(function(row) {
      var newRow = table.insertRow(table.rows.length);
      var cell0 = newRow.insertCell(0)
      var cell1 = newRow.insertCell(1);
      var cell2 = newRow.insertCell(2);
      var cell3 = newRow.insertCell(3);
      cell0.innerHTML = row.id;
      cell1.innerHTML = row.data;
      cell2.innerHTML = row.descricao;
      cell3.innerHTML = row.valor;
    });
  }
  
  // Adicione isso para carregar os dados da tabela quando a página é carregada inicialmente
  window.onload = function() {
    carregarDadosTabela();
  };
  
          function mostrarRelatorio(templateId) {
  
              var template = document.getElementById(templateId);
              var mainContainer = document.querySelector('.ctn-principal');
              mainContainer.innerHTML = ''; // Limpa o conteúdo atual do main
  
              var clonedContent = template.content.cloneNode(true);
              mainContainer.appendChild(clonedContent);
              mainContainer.style.display = 'block';
  
              
              carregarDadosTabela();
  
          }
          function fecharRelatorio() {
              var mainContainer = document.querySelector('.ctn-principal');
              mainContainer.innerHTML = ''; // Limpa o conteúdo do main
              mainContainer.style.display = 'none';
          }
          function mostrarForm() {
              var formContainer = document.getElementById('formContainer');
              formContainer.style.display = 'flex';
    }
  
    function LimparTudo() {
    localStorage.clear();
  
    // Aguarda 100 milissegundos antes de recarregar a página
    setTimeout(function() {
      location.reload(true); // true força o carregamento do cache do servidor
    }, 100);
  }
  function mostrarinput(){
      var idmostrar = document.getElementById('div-droplinha')
      idmostrar.style.display = 'flex'
  }
  function fechardivremoverlinha (){
      var idmostrar = document.getElementById('div-droplinha')
      idmostrar.style.display = 'none'
  }
  function atualizarTabela() {
    var table = document.getElementById('relatorio').getElementsByTagName('tbody')[0];
    table.innerHTML = ''; // Limpa o conteúdo atual da tabela
  
    var tableData = JSON.parse(getLocalStorageItem('tableData')) || [];
  
    // Atualiza a tabela com os dados atualizados no localStorage
    tableData.forEach(function(row) {
      var newRow = table.insertRow(table.rows.length);
      var cell0 = newRow.insertCell(0);
      var cell1 = newRow.insertCell(1);
      var cell2 = newRow.insertCell(2);
      var cell3 = newRow.insertCell(3);
  
      cell0.innerHTML = row.id;
      cell1.innerHTML = row.data;
      cell2.innerHTML = row.descricao;
      cell3.innerHTML = row.valor;
    });
  }
  function removerLinhaPorId() {
    
    var idParaRemover = document.getElementById('id-input').value; // Obtém o valor do input
  
    if (!idParaRemover) {
      alert('Por favor, insira um ID para remover.');
      return;
    }
  
    var tableData = JSON.parse(getLocalStorageItem('tableData')) || [];
    
    // Filtrar os dados, mantendo apenas as linhas que não correspondem ao ID fornecido
    var newData = tableData.filter(function(row) {
      return row.id !== parseInt(idParaRemover); // Comparando IDs como números inteiros
    });
    newData = newData.map(function(row, index) {
      row.id = index + 1;
      return row;
    });
  
    // Atualizar os dados no localStorage
    setLocalStorageItem('tableData', JSON.stringify(newData));
  
  
  
    // Notificar o usuário sobre a remoção
    alert('Linha removida com sucesso!');
  
    atualizarTabela();
  
    
  }
  
  function getLastAddedId() {
    var tableData = JSON.parse(getLocalStorageItem('tableData')) || [];
  
    // Verifica se há dados salvos no localStorage
    if (tableData.length > 0) {
      return tableData[tableData.length - 1].id || 0; // Obtém o último ID da tabela
    }
  
    // Se não houver dados, retorna 0
    return 0;
  }
  
  // Inicialização de currentId com o último 
  
  // Inicialização de currentId com o último ID adicionado
  var currentId = getLastAddedId() || 0;
  
    function FecharDivlinha() {
      
    
      // Ocultando o formulário após adicionar a linha
      var formContainer = document.getElementById('formContainer');
      formContainer.style.display = 'none';
    }
    function adicionarLinha() {
      var table = document.getElementById('relatorio').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
    
      currentId++;
    
      var cell0 = newRow.insertCell(0);
      var cell1 = newRow.insertCell(1);
      var cell2 = newRow.insertCell(2);
      var cell3 = newRow.insertCell(3);
    
      // Obtendo os valores dos inputs
      var data = document.getElementById('date-input').value;
      var descricao = document.getElementById('descricion-input').value;
      var valor = document.getElementById('value-input').value;

      
    
      if (new Date(data) > new Date('01-01-2024')) {
        alert('A data não pode ser posterior a 2024.');
        return; // Evita adicionar a linha se a data for posterior a 2024
      }

      // Adicionando os valores às células da nova linha
      cell0.innerHTML = currentId;
      cell1.innerHTML = data;
      cell2.innerHTML = descricao;
      cell3.innerHTML = valor;
    
      // Salvando os valores no localStorage
      var rowData = { id: currentId, data: data, descricao: descricao, valor: valor };
      var tableData = JSON.parse(getLocalStorageItem('tableData')) || [];
      tableData.push(rowData);
      setLocalStorageItem('tableData', JSON.stringify(tableData));
    }
  // Função para definir no localStorage
  function setLocalStorageItem(name, value) {
    localStorage.setItem(name, value);
  }
  
  // Função para obter do localStorage
  function getLocalStorageItem(name) {
    return localStorage.getItem(name);
  }

document.addEventListener("DOMContentLoaded", function() {
  const showBarsLink = document.getElementById("showbars");
  const mainBars = document.getElementById("main-bars");
  const templateBars = document.getElementById("bars");


// Adicionando um ouvinte de evento ao ícone de seta para baixo

    showBarsLink.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        // Verifica se o templateBars existe
        if (templateBars) {
            mainBars.innerHTML = templateBars.innerHTML;
            mainBars.style.display = 'block';
        }
    });


})  