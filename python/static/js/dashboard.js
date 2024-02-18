 // Abri a seta pra baixo
  
    // Grafico média por mes 
    document.addEventListener("DOMContentLoaded", function () {
        // Grafico média por mes
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
        const precosMedios = [100, 120, 110, 130, 140, 150];
    
        // Configuração do gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Média de Preços',
                    data: precosMedios,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
                    borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
                    borderWidth: 1 // Largura da borda das barras
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    
        // Grafico de vendas mensais
        const ctxSales = document.getElementById('salesChart').getContext('2d');
        const salesData = [100, 200, 150, 180, 250, 300, 280, 320, 280, 350, 300, 400];
    
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Vendas Mensais',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };
    
        new Chart(ctxSales, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        //Graficos Linhas
     

        new Chart(document.getElementById("Chart-linhas"), {
            type: 'line',
            data: {
              labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
              datasets: [{ 
                  data: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050, 2100, 2150],
                  label: "Lucro",
                  borderColor: "#3e95cd",
                  fill: false
                }, { 
                  data: [1000, 1200, 1100, 1000, 1300, 1400, 1350, 1250, 1150, 1200, 1250, 1300],
                  label: "Perda",
                  borderColor: "#8e5ea2",
                  fill: false
                }, { 
                  data: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100],
                  label: "Vendas",
                  borderColor: "#3cba9f",
                  fill: false
                }, { 
                  data: [500, 550, 600, 550, 580, 620, 650, 700, 750, 800, 780, 760],
                  label: "Pedidos",
                  borderColor: "#e8c3b9",
                  fill: false
                }, { 
                  data: [700, 680, 650, 700, 720, 750, 770, 790, 810, 830, 860, 880],
                  label: "Solicitacao de Crédito",
                  borderColor: "#c45850",
                  fill: false
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: 'Dados por mês (em milhares)'
              },
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
      
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

        // Adicionando um ouvinte de evento ao botão de fechar
     
    })
       
       
   
    function moverFeedParaTopo() {
        const feedContents = document.querySelector('.feed-contents');
        const feeds = feedContents.querySelectorAll('.feed-unico');
    
        if (feeds.length > 1) {
            const ultimoFeed = feeds[feeds.length - 1];
            feedContents.insertBefore(ultimoFeed, feedContents.firstChild);
            feedContents.style.transform = `translateY(-${ultimoFeed.offsetHeight}px)`;
    
            setTimeout(() => {
                feedContents.style.transform = 'translateY(0)';
            }, 50);
        }
    }
    
    setInterval(moverFeedParaTopo, 5000);
 

 