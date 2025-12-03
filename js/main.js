// ===============================================
// 1. BASE DE DADOS DOS PRODUTOS (SIMULAÇÃO) - FINAL
// ===============================================

const LISTA_PRODUTOS = [
    {
        id: "prod1", 
        nome: "Buquê de Rosas Vermelhas", 
        preco: 89.90, 
        vendidos: 150, 
        descricao: "Buquê elegante composto por rosas vermelhas frescas e selecionadas. Perfeito para expressar sentimentos de amor, paixão e admiração. Ideal para presentear em ocasiões especiais como aniversários, Dia dos Namorados ou simplesmente para surpreender alguém especial. As rosas são cuidadosamente arranjadas e entregues frescas, garantindo durabilidade e beleza.",
        img: "img/flores/tulipas.jpg",
        categoria: "buques",
        imagens_extras: ["img/flores/tulipa.jpg", "img/flores/tulipa2.jpg", "img/flores/tulipas.jpg"] 
    },
    {
        id: "prod2", 
        nome: "Orquídea Branca", 
        preco: 120.50, 
        vendidos: 80, 
        descricao: "Orquídea branca de rara beleza e elegância, cultivada com cuidado especial. Esta planta ornamental é conhecida por sua longa duração e flores delicadas que trazem sofisticação a qualquer ambiente. Ideal para decoração de interiores, escritórios ou como presente especial. Requer cuidados moderados e oferece floração prolongada, sendo uma excelente escolha para quem busca beleza duradoura.",
        img: "img/flores/astromelia.jpg", 
        categoria: "ornamentais",
        imagens_extras: ["img/flores/astromelia.jpg", "img/flores/astromelia2.jpg", "img/flores/astromelia3.jpg"] 
    },
    {
        id: "prod3", 
        nome: "Muda de Goiaba", 
        preco: 59.90, 
        vendidos: 40, 
        descricao: "Muda de goiaba de qualidade, selecionada para garantir bom desenvolvimento e produção de frutos saborosos. Ideal para cultivo em pomares domésticos, jardins ou até mesmo em vasos grandes. A goiabeira é uma árvore de fácil cultivo, adaptável a diferentes tipos de solo e clima. Começa a produzir frutos em aproximadamente 1 ano após o plantio, oferecendo goiabas doces e suculentas ricas em vitamina C.",
        img: "img/arvoresfruitiferas/goiba-no-pe.jpg",
        imagens_extras: ["img/arvoresfruitiferas/goiba-no-pe.jpg", "img/arvoresfruitiferas/goibacortada.jpg", "img/arvoresfruitiferas/pe-de-laranja.jpg"],
        categoria: "frutiferas"
    },
    {
        id: "prod4", 
        nome: "Ipê Amarelo",
        preco: 150.00, 
        vendidos: 10, 
        descricao: "Muda de Ipê Amarelo, árvore nativa brasileira conhecida por sua impressionante floração dourada que transforma qualquer paisagem. Esta espécie ornamental é perfeita para jardins, praças e áreas verdes, oferecendo sombra generosa e beleza incomparável durante a primavera. O Ipê Amarelo possui crescimento moderado a rápido, adapta-se bem a diferentes condições climáticas e é resistente a pragas. Uma escolha ideal para quem busca árvores de grande porte com valor paisagístico excepcional.",
        img: "img/arvores ornamentais/ipe.jpg",
        imagens_extras: ["img/arvores ornamentais/ipe.jpg", "img/arvores ornamentais/ipenaroça.jpg", "img/arvores ornamentais/fundoip.jpg"],
        categoria: "ornamentais"
    },
    {
        id: "prod5", 
        nome: "Antúrio Vermelho", 
        preco: 45.00, 
        vendidos: 120, 
        descricao: "Antúrio vermelho, planta tropical de fácil cultivo e manutenção, perfeita para decorar ambientes internos. Suas folhas brilhantes e flores em formato de coração trazem cor e vida a qualquer espaço. Além de sua beleza ornamental, o antúrio é conhecido por suas propriedades de purificação do ar, removendo toxinas do ambiente. Requer poucos cuidados, apenas regas moderadas e luz indireta, sendo ideal para iniciantes em jardinagem ou para quem busca plantas resistentes e duradouras.",
        img: "img/flores/anturio.jpg",
        imagens_extras: ["img/flores/anturio.jpg", "img/flores/anturio (2).jpg", "img/flores/lirioazul.jpg"],
        categoria: "flores"
    },
    {
        id: "prod6", 
        nome: "Buquê de Girassóis", 
        preco: 75.00, 
        vendidos: 95, 
        descricao: "Buquê composto por girassóis frescos e vibrantes, flores que simbolizam alegria, energia positiva e otimismo. Este arranjo colorido é perfeito para trazer luz e calor a qualquer ambiente, seja para decorar sua casa, presentear alguém especial ou celebrar momentos felizes. Os girassóis são cuidadosamente selecionados e arranjados, garantindo um visual impactante e duradouro. Ideal para quem busca transmitir sentimentos de felicidade e positividade através das flores.",
        img: "img/flores/astromelia.jpg",
        imagens_extras: ["img/flores/astromelia.jpg", "img/flores/astromelia2.jpg", "img/flores/astromelia3.jpg"],
        categoria: "buques"
    },
    {
        id: "prod7", 
        nome: "Muda de Laranjeira", 
        preco: 69.90, 
        vendidos: 65, 
        descricao: "Muda de laranjeira de excelente qualidade, desenvolvida para produção de laranjas doces, suculentas e ricas em vitamina C. Perfeita para cultivo em pomares domésticos, jardins ou até mesmo em vasos grandes para varandas e terraços. A laranjeira é uma árvore frutífera de fácil cultivo, adaptável a diferentes condições e que oferece não apenas frutos deliciosos, mas também belas flores perfumadas. Começa a produzir frutos em aproximadamente 2 anos após o plantio, proporcionando colheitas regulares e abundantes.",
        img: "img/arvoresfruitiferas/pe-de-laranja.jpg",
        imagens_extras: ["img/arvoresfruitiferas/pe-de-laranja.jpg", "img/arvoresfruitiferas/laranja-no-pe.jpg", "img/arvoresfruitiferas/laranjas.jpg"],
        categoria: "frutiferas"
    }
];

// Variáveis Globais de Controle de Frete
let criterioOrdenacaoAtual = 'mais_vendidos'; 
let freteCalculado = 0;
let fretePrazo = 0;
// NOVO: Variáveis Globais de Controle de Filtro
let filtroNomeAtual = '';
let filtroPrecoMaximoAtual = 200.00; // Deve corresponder ao valor inicial (max) do slider no HTML

// Funções de Suporte (getProduto, ordenarProdutos, etc.)
function getProduto(id) {
    return LISTA_PRODUTOS.find(p => p.id === id);
}

function getProdutosPorCategoria(categoria) {
    if (categoria === 'todos' || !categoria) {
        return LISTA_PRODUTOS;
    }
    return LISTA_PRODUTOS.filter(p => p.categoria === categoria);
}

function ordenarProdutos(produtos, criterio) {
    if (criterio === 'menor_preco') {
        return produtos.sort((a, b) => a.preco - b.preco);
    } else if (criterio === 'maior_preco') {
        return produtos.sort((a, b) => b.preco - a.preco);
    } else if (criterio === 'mais_vendidos') {
        return produtos.sort((a, b) => b.vendidos - a.vendidos);
    }
    return produtos;
}

function gerarNovoIdPedido() {
    return 'BR' + Date.now().toString().slice(-8) + Math.floor(Math.random() * 99);
}

/**
 * Simula a API de cálculo de Frete do Correios (Front-End)
 */
function simularFrete(cep) {
    if (!cep || cep.length < 8) {
        return { frete: 0, prazo: 0 };
    }
    
    const cepBase = cep.substring(0, 5);
    let frete = 15.00;
    let prazo = 5;

    if (cepBase >= '30000' && cepBase < '40000') { 
        frete = 18.50;
        prazo = 3;
    } else if (cepBase >= '50000' && cepBase < '70000') { 
        frete = 28.90;
        prazo = 7;
    } else if (cepBase >= '70000') { 
        frete = 40.00;
        prazo = 10;
    }

    return { frete, prazo };
}

// ===============================================
// 3. FUNÇÕES DE ROTEAMENTO E INICIALIZAÇÃO
// ===============================================

document.addEventListener("DOMContentLoaded", function() {
    
    // --- ROTEAMENTO PRINCIPAL ---
    if (document.getElementById("form-login")) {
        document.getElementById("form-login").addEventListener("submit", realizarLogin);
        if (estaLogado()) window.location.href = "index.html";
    }
    if (document.getElementById("form-cadastro")) {
        document.getElementById("form-cadastro").addEventListener("submit", realizarCadastro);
    }

    
    // Roteamento para Carrinho/Checkout
    if (document.getElementById("cart-items")) {
        const btnModal = document.querySelector('[data-bs-target="#checkoutModal"]');
        const btnConfirmar = document.getElementById("checkout-confirm");
        const btnCalcularFrete = document.getElementById("btn-calcular-frete");
        const inputCep = document.getElementById("input-cep");

        // NOVO: Adiciona listener para abrir o modal e carregar os dados
        if (btnModal) {
            btnModal.addEventListener('click', carregarModalCheckout);
        }

        if (btnConfirmar) {
            // *** CORREÇÃO: LIGA O BOTÃO À NOVA FUNÇÃO DE SALVAR O PEDIDO ***
            btnConfirmar.addEventListener('click', confirmarPedido);
        }
        
        if (btnCalcularFrete) {
            btnCalcularFrete.addEventListener('click', calcularFreteEAtualizarModal);
        }

        if (inputCep) {
            inputCep.addEventListener('input', function() {
                freteCalculado = 0; 
                if (btnConfirmar) btnConfirmar.disabled = true;
                const freteRes = document.getElementById('frete-resultado');
                if (freteRes) freteRes.innerHTML = 'Insira o CEP (8 dígitos) para calcular o valor e prazo de entrega.';
            });
        }
        
        carregarCarrinho(); 
    }

    // Roteamento para Histórico de Pedidos
    if (document.getElementById("lista-pedidos")) {
        carregarHistoricoPedidos();
    }
    
    // Roteamento para páginas de Produto
    if (document.getElementById("produto-nome")) {
        carregarDetalheProduto();
    }
    

    if (document.getElementById("lista-produtos")) {
        // NOVO: Configura e aplica filtros de busca antes de carregar a lista
        configurarFiltrosBusca(); 
        configurarOrdenacao(); 
        carregarListaProdutos(criterioOrdenacaoAtual); 
    }
// ...
    if (document.getElementById("visitor-count")) {
        atualizarContadorDeVisitas(document.getElementById("visitor-count"));
    }
    
    atualizarContadorMenu();
    // Adicione esta linha para o menu de login/logout
    atualizarMenuUsuario(); 
});

// ===============================================
// 4. FUNÇÕES DE CHECKOUT E MODAL
// ===============================================

function carregarModalCheckout() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const checkoutItemsEl = document.getElementById('checkout-items');
    const checkoutSubtotalEl = document.getElementById('checkout-subtotal');
    const btnConfirmar = document.getElementById("checkout-confirm");
    
    if (!checkoutItemsEl) return;
    checkoutItemsEl.innerHTML = '';
    
    let subtotal = 0;
    carrinho.forEach(item => {
        const itemTotal = item.preco * item.qtd;
        subtotal += itemTotal;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `<div><strong>${item.nome}</strong><div class="small text-muted">${item.qtd}x</div></div><div>${itemTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>`;
        checkoutItemsEl.appendChild(li);
    });
    
    if (checkoutSubtotalEl) checkoutSubtotalEl.textContent = subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    // Reseta Frete e Total ao abrir o modal
    freteCalculado = 0;
    const freteEl = document.getElementById('checkout-frete');
    const totalEl = document.getElementById('checkout-total');
    const freteResEl = document.getElementById('frete-resultado');
    
    if (freteEl) freteEl.textContent = 'R$ 0,00';
    if (totalEl) totalEl.textContent = subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    if (freteResEl) freteResEl.innerHTML = 'Insira o CEP (8 dígitos) para calcular o valor e prazo de entrega.';
    
    if (btnConfirmar) btnConfirmar.disabled = true;
}


function calcularFreteEAtualizarModal() {
    const inputCep = document.getElementById('input-cep');
    const freteRes = document.getElementById('frete-resultado');
    const btnConfirmar = document.getElementById('checkout-confirm');
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const subtotal = carrinho.reduce((sum, item) => sum + item.preco * item.qtd, 0);

    if (!inputCep || !freteRes) return;
    
    const cep = inputCep.value.replace(/\D/g, ''); 
    
    if (cep.length !== 8) {
        freteRes.innerHTML = '<span class="text-danger">CEP inválido. Insira 8 dígitos.</span>';
        if (btnConfirmar) btnConfirmar.disabled = true;
        return;
    }
    
    freteRes.innerHTML = '<span class="text-info"><i class="bi bi-arrow-clockwise spinner-border-sm me-1"></i> Calculando...</span>';
    
    // Simulação da chamada da API (Delay artificial para UX)
    setTimeout(() => {
        const { frete, prazo } = simularFrete(cep);
        
        freteCalculado = frete;
        fretePrazo = prazo;
        const totalFinal = subtotal + frete;
        
        freteRes.innerHTML = `<span class="text-success">Frete: ${frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} - Prazo: ${prazo} dias úteis</span>`;
        
        document.getElementById('checkout-frete').textContent = frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        document.getElementById('checkout-total').textContent = totalFinal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        
        if (btnConfirmar) btnConfirmar.disabled = false;

    }, 800); 
}

// NOVO: Função para confirmar o pedido, salvar no histórico e limpar o carrinho.
function confirmarPedido() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const btnConfirmar = document.getElementById("checkout-confirm");
    
    if (carrinho.length === 0) {
        if (typeof showToast === 'function') showToast('O carrinho está vazio.', 'Erro');
        if (btnConfirmar) btnConfirmar.disabled = true;
        return;
    }
    if (freteCalculado === 0) {
        if (typeof showToast === 'function') showToast('Calcule o frete antes de confirmar.', 'Erro');
        return;
    }

    const subtotal = carrinho.reduce((sum, item) => sum + item.preco * item.qtd, 0);
    const total = subtotal + freteCalculado;
    const idPedido = gerarNovoIdPedido();
    const dataAtual = new Date().toLocaleDateString('pt-br');

    const novoPedido = {
        id: idPedido,
        data: dataAtual,
        itens: carrinho.map(item => ({ nome: item.nome, qtd: item.qtd, preco: item.preco })),
        frete: freteCalculado,
        prazo: fretePrazo,
        total: total
    };

    // 1. Salva o pedido no histórico
    let historicoPedidos = JSON.parse(localStorage.getItem("pedidos_feitos")) || [];
    historicoPedidos.push(novoPedido);
    localStorage.setItem("pedidos_feitos", JSON.stringify(historicoPedidos));
    
    // 2. Limpa o carrinho
    localStorage.removeItem('carrinho');
    atualizarContadorMenu();

    // 3. Fecha o modal (Garantindo que o Bootstrap o feche)
    const modalEl = document.getElementById('checkoutModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if(modalInstance) modalInstance.hide();
    
    if (typeof showToast === 'function') showToast(`Pedido #${idPedido} confirmado! Redirecionando...`, 'Sucesso');

    // 4. Redireciona para pedidos.html com status de confirmação
    setTimeout(function(){ 
        window.location.href = `pedidos.html?status=confirmado&id=${idPedido}`;
    }, 1500);
}


// ===============================================
// 5. FUNÇÕES DE HISTÓRICO DE PEDIDOS
// ===============================================

function carregarHistoricoPedidos() {
    const historicoPedidos = JSON.parse(localStorage.getItem("pedidos_feitos")) || [];
    const listaPedidosDiv = document.getElementById("lista-pedidos");
    const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
    
    if (!listaPedidosDiv) return;

    listaPedidosDiv.innerHTML = '';
    
    // 1. Exibe a mensagem de confirmação (se for um redirecionamento de checkout)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'confirmado') {
        const idPedido = urlParams.get('id');
        const pedidoRecente = historicoPedidos.find(p => p.id === idPedido); 
        
        if (pedidoRecente) {
            // A data de entrega é a data de hoje + prazo de dias
            const dataEnvio = new Date();
            dataEnvio.setDate(dataEnvio.getDate() + pedidoRecente.prazo); 
            const dataFormatada = dataEnvio.toLocaleDateString('pt-br');

            mensagemConfirmacao.innerHTML = `
                <div class="alert alert-success p-4">
                    <h4 class="alert-heading">✅ Pedido #${idPedido} Confirmado!</h4>
                    <p>Prazo de entrega: **${pedidoRecente.prazo} dias úteis**.</p>
                    <p class="mb-0 fw-bold">Seu pedido será entregue até: ${dataFormatada}</p>
                    <hr>
                    <p class="mb-2">
                        <button class="btn btn-sm btn-primary" onclick="window.open('https://rastreamento.correios.com.br/app/index.php', '_blank')">
                            <i class="bi bi-truck me-1"></i> Rastrear Pedido (Simulação)
                        </button>
                        <a href="pedidos.html" class="btn btn-sm btn-outline-secondary">Ver Histórico Completo</a>
                    </p>
                </div>
            `;
        }
        window.history.replaceState({}, document.title, "pedidos.html");
    }
    
    // 2. Exibe o histórico completo
    if (historicoPedidos.length === 0) {
        listaPedidosDiv.innerHTML = '<div class="col-12"><p class="text-center text-muted">Você ainda não tem pedidos realizados.</p></div>';
        return;
    }
    
    // Mostra do mais recente para o mais antigo
    [...historicoPedidos].reverse().forEach(pedido => {
        const dataEnvio = new Date();
        dataEnvio.setDate(dataEnvio.getDate() + pedido.prazo);
        const dataFormatada = dataEnvio.toLocaleDateString('pt-br');

        // Note: Itens não são exibidos no resumo do card para simplificar, apenas o total.
        
        const cardPedido = `
            <div class="col-md-6">
                <div class="card shadow-sm mb-3 h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-success">Pedido #${pedido.id}</h5>
                        <p class="card-text mb-1">Data da Compra: ${pedido.data}</p>
                        <p class="card-text">Entrega Prevista: ${dataFormatada} (Prazo: ${pedido.prazo} dias)</p>
                        <p class="card-text">Frete: ${pedido.frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        <p class="card-text fw-bold fs-5 mt-auto">Total: ${pedido.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        
                        <div class="d-flex justify-content-between align-items-center">
                             <button class="btn btn-sm btn-outline-primary" onclick="window.open('https://rastreamento.correios.com.br/app/index.php', '_blank')">
                                <i class="bi bi-box-seam me-1"></i> Rastrear
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="excluirPedido('${pedido.id}')">
                                <i class="bi bi-trash me-1"></i> Excluir/Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        listaPedidosDiv.innerHTML += cardPedido;
    });
}

// NOVO: Função para excluir um pedido (Solicitado pelo usuário)
function excluirPedido(id) {
    let historicoPedidos = JSON.parse(localStorage.getItem("pedidos_feitos")) || [];
    // Filtra para remover o pedido com o ID correspondente
    historicoPedidos = historicoPedidos.filter(p => p.id !== id);
    
    localStorage.setItem("pedidos_feitos", JSON.stringify(historicoPedidos));
    carregarHistoricoPedidos(); // Recarrega a lista
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('id') === id) {
         window.history.replaceState({}, document.title, "pedidos.html");
         const mensagemEl = document.getElementById("mensagem-confirmacao");
         if(mensagemEl) mensagemEl.innerHTML = '';
    }
    if (typeof showToast === 'function') showToast(`Pedido #${id} excluído/cancelado.`, 'Histórico');
}
// // ===============================================
// // 5. FUNÇÕES DE HISTÓRICO DE PEDIDOS
// // ===============================================

// function carregarHistoricoPedidos() {
//     const historicoPedidos = JSON.parse(localStorage.getItem("pedidos_feitos")) || [];
//     const listaPedidosDiv = document.getElementById("lista-pedidos");
//     const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
    
//     if (!listaPedidosDiv) return;

//     listaPedidosDiv.innerHTML = '';
    
//     // 1. Exibe a mensagem de confirmação (se for um redirecionamento de checkout)
//     const urlParams = new URLSearchParams(window.location.search);
//     if (urlParams.get('status') === 'confirmado') {
//         const idPedido = urlParams.get('id');
//         const pedidoRecente = historicoPedidos.find(p => p.id === idPedido); 
        
//         if (pedidoRecente) {
//             const dataEnvio = new Date();
//             dataEnvio.setDate(dataEnvio.getDate() + pedidoRecente.prazo); 
//             const dataFormatada = dataEnvio.toLocaleDateString('pt-br');

//             mensagemConfirmacao.innerHTML = `
//                 <div class="alert alert-success p-4">
//                     <h4 class="alert-heading">✅ Pedido #${idPedido} Confirmado!</h4>
//                     <p>Prazo de entrega: **${pedidoRecente.prazo} dias úteis**.</p>
//                     <p class="mb-0 fw-bold">Seu pedido será entregue até: ${dataFormatada}</p>
//                     <hr>
//                     <p class="mb-2">
//                         <button class="btn btn-sm btn-primary" onclick="window.open('https://rastreamento.correios.com.br/app/index.php', '_blank')">
//                             <i class="bi bi-truck me-1"></i> Rastrear Pedido (Simulação)
//                         </button>
//                         <a href="pedidos.html" class="btn btn-sm btn-outline-secondary">Ver Histórico Completo</a>
//                     </p>
//                 </div>
//             `;
//         }
//         window.history.replaceState({}, document.title, "pedidos.html");
//     }
    
//     // 2. Exibe o histórico completo
//     if (historicoPedidos.length === 0) {
//         listaPedidosDiv.innerHTML = '<div class="col-12"><p class="text-center text-muted">Você ainda não tem pedidos realizados.</p></div>';
//         return;
//     }
    
//     [...historicoPedidos].reverse().forEach(pedido => {
//         const dataEnvio = new Date();
//         dataEnvio.setDate(dataEnvio.getDate() + pedido.prazo);
//         const dataFormatada = dataEnvio.toLocaleDateString('pt-br');

//         const itensHtml = pedido.itens.map(item => 
//             `<span class="badge bg-light text-secondary me-2">${item.nome} (${item.qtd}x)</span>`
//         ).join('');
        
//         const cardPedido = `
//             <div class="col-md-6">
//                 <div class="card shadow-sm mb-3 h-100">
//                     <div class="card-body d-flex flex-column">
//                         <h5 class="card-title text-success">Pedido #${pedido.id}</h5>
//                         <p class="card-text mb-1">Data da Compra: ${pedido.data}</p>
//                         <p class="card-text">Entrega Prevista: ${dataFormatada} (Prazo: ${pedido.prazo} dias)</p>
//                         <p class="card-text">Frete: ${pedido.frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
//                         <p class="card-text fw-bold fs-5 mt-auto">Total: ${pedido.total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        
//                         <div class="d-flex justify-content-between align-items-center">
//                              <button class="btn btn-sm btn-outline-primary" onclick="window.open('https://rastreamento.correios.com.br/app/index.php', '_blank')">
//                                 <i class="bi bi-box-seam me-1"></i> Rastrear
//                             </button>
//                             <button class="btn btn-sm btn-outline-danger" onclick="excluirPedido('${pedido.id}')">
//                                 <i class="bi bi-trash me-1"></i> Excluir
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         listaPedidosDiv.innerHTML += cardPedido;
//     });
// }

// ... (O restante das funções do main.js segue aqui, completando o arquivo)
// ... (O restante do código do main.js segue aqui, completando o arquivo)
// ===============================================
// NOVO: FUNÇÃO PARA CONFIGURAR FILTROS DE BUSCA (NOME E PREÇO)
// ===============================================

function configurarFiltrosBusca() {
    const inputBuscaNome = document.getElementById('input-busca-nome');
    const rangePreco = document.getElementById('rangePreco');
    const valorPrecoSpan = document.getElementById('valor-preco');
    const btnAplicarFiltros = document.getElementById('btn-aplicar-filtros');

    // 1. Inicializa o span de preço (formatado) e a variável global
    if(rangePreco && valorPrecoSpan) {
        const valorInicial = parseFloat(rangePreco.value) || 200.00;
        valorPrecoSpan.textContent = valorInicial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        filtroPrecoMaximoAtual = valorInicial;
    }
    
    // 2. Listener para o Range Slider (atualiza o texto em tempo real)
    if (rangePreco && valorPrecoSpan) {
        rangePreco.addEventListener('input', function() {
            const valor = parseFloat(this.value);
            valorPrecoSpan.textContent = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        });
        
        // Aplica o filtro automaticamente quando o slider é solto
        rangePreco.addEventListener('change', function() {
            const valor = parseFloat(this.value);
            filtroPrecoMaximoAtual = valor;
            // Atualiza o filtro de nome também se houver valor
            if (inputBuscaNome) {
                filtroNomeAtual = inputBuscaNome.value.trim();
            }
            // Aplica os filtros automaticamente
            carregarListaProdutos(criterioOrdenacaoAtual);
        });
    }

    // 3. Listener para o botão "Aplicar Filtros" (aplica nome e preço)
    if (btnAplicarFiltros) {
        btnAplicarFiltros.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Atualiza o filtro de nome global
            if (inputBuscaNome) {
                filtroNomeAtual = inputBuscaNome.value.trim();
            }
            // Garante que o filtro de preço está atualizado
            if (rangePreco) {
                filtroPrecoMaximoAtual = parseFloat(rangePreco.value);
            }
            // Chama a função principal de carregamento/filtragem
            carregarListaProdutos(criterioOrdenacaoAtual);
        });
    }

    // 4. Filtra ao digitar no campo de nome (melhor experiência)
    if (inputBuscaNome) {
        inputBuscaNome.addEventListener('keyup', function() {
            filtroNomeAtual = this.value.trim();
            // Garante que o filtro de preço está atualizado
            if (rangePreco) {
                filtroPrecoMaximoAtual = parseFloat(rangePreco.value);
            }
            // Debounce: espera 300ms antes de recarregar para não sobrecarregar
            clearTimeout(window.filtroTimer); 
            window.filtroTimer = setTimeout(() => {
                carregarListaProdutos(criterioOrdenacaoAtual);
            }, 300); 
        });
    }
}
// ===============================================
// 2. FUNÇÕES ESSENCIAIS DE NAVEGAÇÃO E LÓGICA
// ===============================================

// Atualiza o menu (Login → Olá, usuário / Logout) dinamicamente
function atualizarMenuUsuario() {
    const logado = estaLogado();
    const nome = sessionStorage.getItem('nomeUsuario') || localStorage.getItem('nomeUsuario');

    // Busca por links 'Login' ou href login.html e substitui
    document.querySelectorAll('a.nav-link').forEach(a => {
        const href = (a.getAttribute('href') || '').toLowerCase();
        const txt = (a.textContent || '').trim().toLowerCase();

        if (txt === 'login' || href.endsWith('login.html')) {
            const parent = a.parentElement;
            if (!logado) return; // não altera se não estiver logado

            // substitui por dropdown com nome e logout
            const dropdown = document.createElement('li');
            dropdown.className = 'nav-item dropdown';
            dropdown.innerHTML = `
                <a class="nav-link dropdown-toggle" href="#" id="navUsuarioDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Olá, ${nome ? nome.split(' ')[0] : 'Usuário'}
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navUsuarioDropdown">
                    <li><a class="dropdown-item" href="#" id="nav-logout">Sair</a></li>
                </ul>
            `;
            parent.replaceWith(dropdown);
            // attach logout listener
            dropdown.querySelector('#nav-logout').addEventListener('click', function(e){
                e.preventDefault(); logout();
            });
        }
    });
}

function logout(){
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuario');
    sessionStorage.removeItem('usuarioLogado');
    sessionStorage.removeItem('nomeUsuario');
    window.location.reload();
}

/* -----------------------------
   UI enhancements using jQuery
   - show/hide password
   - submit button loader
   - animations on login success/failure
   ----------------------------- */
$(function(){
    // Toggle password visibility
    $(document).on('click', '.toggle-password', function(){
        const $btn = $(this);
        const $input = $btn.siblings('input[type="password"], input[type="text"]');
        if (!$input.length) return;
        if ($input.attr('type') === 'password') {
            $input.attr('type','text');
            $btn.attr('aria-label','Ocultar senha').text('🙈');
        } else {
            $input.attr('type','password');
            $btn.attr('aria-label','Mostrar senha').text('👁');
        }
    });

    // When the login form is submitted, show a loader and disable button
    $('#form-login').on('submit', function(){
        const $btn = $('#btnEntrar');
        if ($btn.length) {
            $btn.prop('disabled', true);
            $btn.data('orig-text', $btn.html());
            $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Entrando...');
            $('.login-card').removeClass('card-shake show-success');
        }
    });

    // Cadastro visual: mostra loader no botão de cadastro
    $('#form-cadastro').on('submit', function(){
        const $btn = $('#btnCadastrar');
        if ($btn.length) {
            $btn.prop('disabled', true);
            $btn.data('orig-text', $btn.html());
            $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Cadastrando...');
            $('.login-card').removeClass('card-shake show-success');
        }
    });

    // React to the custom event emitted by realizarLogin
    document.addEventListener('login:result', function(e){
        const ok = e && e.detail && e.detail.success;
        const $card = $('.login-card');
        const $btn = $('#btnEntrar');
        if (ok) {
            $card.addClass('show-success');
            // restore button after tiny delay (redirect will happen shortly)
            setTimeout(function(){ if ($btn.length) { $btn.prop('disabled', false); const orig = $btn.data('orig-text'); if (orig) $btn.html(orig); } }, 900);
        } else {
            $card.addClass('card-shake');
            setTimeout(function(){ $card.removeClass('card-shake'); }, 600);
            if ($btn.length) {
                $btn.prop('disabled', false);
                const orig = $btn.data('orig-text'); if (orig) $btn.html(orig);
            }
            // mark inputs briefly
            $('#email, #senha').addClass('is-invalid');
            setTimeout(function(){ $('#email, #senha').removeClass('is-invalid'); }, 1200);
        }
    });

    // Handle cadastro event (restore button state / show small animation)
    document.addEventListener('cadastro:result', function(e){
        const ok = e && e.detail && e.detail.success;
        const $card = $('.login-card');
        const $btn = $('#btnCadastrar');
        if (ok) {
            $card.addClass('show-success');
            setTimeout(function(){ if ($btn.length) { $btn.prop('disabled', false); const orig = $btn.data('orig-text'); if (orig) $btn.html(orig); } }, 900);
        } else {
            $card.addClass('card-shake');
            setTimeout(function(){ $card.removeClass('card-shake'); }, 600);
            if ($btn.length) { $btn.prop('disabled', false); const orig = $btn.data('orig-text'); if (orig) $btn.html(orig); }
        }
    });

    // Clear feedback when typing
    $('#email, #senha').on('input focus', function(){
        $('#mensagem-feedback').fadeOut(120, function(){ $(this).html('').show(); });
    });

    // ... (código existente da função de login e cadastro)

    // Clear feedback when typing
    $('#email, #senha').on('input focus', function(){
        $('#mensagem-feedback').fadeOut(120, function(){ $(this).html('').show(); });
    });

    /* NOVO: CORREÇÃO PARA O PROBLEMA DE CLIQUE DUPLICADO NO CARRINHO */
    // Usa um listener delegado no 'document' para garantir que ele funcione 
    // em botões carregados dinamicamente e não seja duplicado, corrigindo o bug.
    $(document).on('click', '.btn-add-cart', function(){
        const $btn = $(this);
        const id = $btn.data('id');
        const nome = $btn.data('nome');
        const preco = $btn.data('preco');
        const img = $btn.data('img');
        
        adicionarAoCarrinho(id, nome, preco, img, 1); 
    });

}); // Fim do bloco jQuery $(function() { ...



// showToast centralizado em `js/utils.js` (carregado antes de main.js). Não sobrescrever aqui.


// /**
//  * Adiciona ouvintes de clique aos botões de "Adicionar"
//  */
// function configurarBotoesProduto() {
//     // Botões "Adicionar ao Carrinho"
//     document.querySelectorAll(".btn-add-cart").forEach(botao => {
//         botao.addEventListener("click", function() {
//             const id = this.getAttribute("data-id");
//             const nome = this.getAttribute("data-nome");
//             const preco = parseFloat(this.getAttribute("data-preco"));
//             const img = this.getAttribute("data-img");
            
//             adicionarAoCarrinho(id, nome, preco, img, 1); 
//             if (typeof showToast === 'function') showToast(`${nome} adicionado ao carrinho`, 'Carrinho');
//         });
//     });
//     // O código de Curtidas (Likes) foi removido.
// }

/**
 * Adiciona um item ao carrinho
 */
function adicionarAoCarrinho(id, nome, preco, img, quantidade = 1) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.qtd += quantidade;
    } else {
        carrinho.push({ id, nome, preco, img, qtd: quantidade });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorMenu();
    // feedback visual moderno
    if (typeof showToast === 'function') showToast(`${quantidade}x ${nome} adicionado ao carrinho`, 'Carrinho');
}


// ===============================================
// 3. FUNÇÕES DE PRODUTOS (detalhe.html e produtos.html)
// ===============================================

function configurarOrdenacao() {
    // É necessário que você adicione o ID 'dropdown-ordenacao' e data-criterio nos seus links.
    document.querySelectorAll('#dropdown-ordenacao a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const novoCriterio = this.getAttribute('data-criterio');
            const textoBotao = this.textContent;

            criterioOrdenacaoAtual = novoCriterio;

            // Atualiza o texto do botão dropdown
            const btnDropdown = document.querySelector('[data-bs-toggle="dropdown"]');
            if (btnDropdown) {
                btnDropdown.textContent = `Ordenar por: ${textoBotao}`;
            }

            carregarListaProdutos(criterioOrdenacaoAtual);
        });
    });
}


// function carregarListaProdutos(criterio = 'mais_vendidos') {
//     // 1. Pega a categoria da URL e filtra
//     const urlParams = new URLSearchParams(window.location.search);
//     const categoria = urlParams.get('categoria') || 'todos'; 
//     let produtosFiltrados = getProdutosPorCategoria(categoria);
    
//     // 2. APLICA A ORDENAÇÃO
//     produtosFiltrados = ordenarProdutos(produtosFiltrados, criterio);
    
//     const listaProdutosDiv = document.getElementById("lista-produtos");
//     const totalEncontrado = document.getElementById("total-encontrado");
//     const categoriaTitulo = document.getElementById("categoria-titulo");

//     if(listaProdutosDiv) listaProdutosDiv.innerHTML = "";
    
//     if(categoriaTitulo) categoriaTitulo.textContent = `Categoria: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
//     if(totalEncontrado) totalEncontrado.textContent = produtosFiltrados.length;

//     if (produtosFiltrados.length === 0) {
//         if(listaProdutosDiv) listaProdutosDiv.innerHTML = '<div class="col-12"><p class="alert alert-warning">Nenhum produto encontrado nesta categoria.</p></div>';
//         return;
//     }

//     // 3. Cria os cards de produto dinamicamente
//     produtosFiltrados.forEach(produto => {
//         const cardHtml = `
//             <div class="col-md-4">
//                 <div class="card product-card shadow-sm h-100 border-0">
//                     <a href="detalhe.html?id=${produto.id}" class="text-decoration-none product-link">
//                         <div class="card-img-wrap position-relative overflow-hidden">
//                             <img src="${produto.img}" class="card-img-top primary-img" alt="${produto.nome}">
//                             ${produto.imagens_extras && produto.imagens_extras[1] ? `<img src="${produto.imagens_extras[1]}" class="card-img-top alt-img position-absolute top-0 start-0" alt="${produto.nome} - alternativa">` : ''}
//                         </div>
//                     </a>
//                     <div class="card-body d-flex flex-column">
//                         <h5 class="card-title fw-bold">${produto.nome}</h5>
//                         <p class="card-text text-muted small">${produto.descricao.substring(0, 50)}...</p>
//                         <h6 class="card-price mb-3 mt-auto">${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6> 
                        
//                         <div class="d-grid">
//                             <button class="btn btn-success w-100 btn-add-cart" 
//                                     data-id="${produto.id}" 
//                                     data-nome="${produto.nome}" 
//                                     data-preco="${produto.preco}" 
//                                     data-img="${produto.img}">
//                                 Adicionar ao Carrinho
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//         if(listaProdutosDiv) listaProdutosDiv.innerHTML += cardHtml;
//     });

//     configurarBotoesProduto(); 
// }

// ... (após a função configurarOrdenacao)

function carregarListaProdutos(criterio = 'mais_vendidos') {
    // 1. Pega a categoria da URL e filtra
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria') || 'todos'; 
    let produtosFiltrados = getProdutosPorCategoria(categoria);
    
    // 2. APLICA A ORDENAÇÃO
    produtosFiltrados = ordenarProdutos(produtosFiltrados, criterio);
    
    // ===================================
    // NOVO: APLICAÇÃO DOS FILTROS POR NOME E PREÇO
    // ===================================
    
    // Garante que as variáveis de filtro estão inicializadas
    if (typeof filtroNomeAtual === 'undefined') {
        filtroNomeAtual = '';
    }
    if (typeof filtroPrecoMaximoAtual === 'undefined' || filtroPrecoMaximoAtual === null) {
        filtroPrecoMaximoAtual = 200.00;
    }
    
    produtosFiltrados = produtosFiltrados.filter(produto => {
        // Filtro por Nome (insensível a maiúsculas/minúsculas)
        // Se o filtro de nome estiver vazio, mostra todos os produtos
        const passaNoFiltroNome = !filtroNomeAtual || filtroNomeAtual.trim() === '' || 
                                   produto.nome.toLowerCase().includes(filtroNomeAtual.toLowerCase());
        
        // Filtro por Preço (garante que o preço seja um número válido)
        const passaNoFiltroPreco = produto.preco <= filtroPrecoMaximoAtual;

        return passaNoFiltroNome && passaNoFiltroPreco;
    });
    // ===================================

    const listaProdutosDiv = document.getElementById("lista-produtos");
    const totalEncontrado = document.getElementById("total-encontrado");
    const categoriaTitulo = document.getElementById("categoria-titulo");

    if(listaProdutosDiv) listaProdutosDiv.innerHTML = "";
    
    if(categoriaTitulo) categoriaTitulo.textContent = `Categoria: ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
    if(totalEncontrado) totalEncontrado.textContent = produtosFiltrados.length; // Atualiza a contagem

    if (produtosFiltrados.length === 0) {
        if(listaProdutosDiv) listaProdutosDiv.innerHTML = '<div class="col-12"><p class="alert alert-warning">Nenhum produto encontrado nesta categoria.</p></div>';
        return;
    }

    // 3. Cria os cards de produto dinamicamente
    produtosFiltrados.forEach(produto => {
        const cardHtml = `
            <div class="col-md-4">
                <div class="card product-card shadow-sm h-100 border-0">
                    <a href="detalhe.html?id=${produto.id}" class="text-decoration-none product-link">
                        <div class="card-img-wrap position-relative overflow-hidden">
                            <img src="${produto.img}" class="card-img-top primary-img" alt="${produto.nome}">
                            ${produto.imagens_extras && produto.imagens_extras[1] ? `<img src="${produto.imagens_extras[1]}" class="card-img-top alt-img position-absolute top-0 start-0" alt="${produto.nome} - alternativa">` : ''}
                        </div>
                    </a>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${produto.nome}</h5>
                        <p class="card-text text-muted small">${produto.descricao.substring(0, 50)}...</p>
                        <h6 class="card-price mb-3 mt-auto">${produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h6> 
                        
                        <div class="d-grid">
                            <button class="btn btn-success w-100 btn-add-cart" 
                                    data-id="${produto.id}" 
                                    data-nome="${produto.nome}" 
                                    data-preco="${produto.preco}" 
                                    data-img="${produto.img}">
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        if(listaProdutosDiv) listaProdutosDiv.innerHTML += cardHtml;
    });
}

function carregarDetalheProduto() {
    // 1. Pega o ID da URL (?id=prod1)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const produto = getProduto(id);

    const imgPrincipal = document.getElementById("produto-imagem-principal");
    const galeriaDiv = document.getElementById("produto-galeria");

    if (!produto) {
        if(document.getElementById("produto-nome")) document.getElementById("produto-nome").textContent = "Produto não encontrado";
        if(document.getElementById("produto-descricao")) document.getElementById("produto-descricao").textContent = "Desculpe, o produto solicitado não está disponível.";
        return;
    }

    // 2. Preenche os campos do HTML
    if(document.getElementById("detalhe-titulo")) document.getElementById("detalhe-titulo").textContent = produto.nome + " - Belas Flores";
    if(document.getElementById("produto-nome")) document.getElementById("produto-nome").textContent = produto.nome;
    if(document.getElementById("produto-preco")) document.getElementById("produto-preco").textContent = produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    if(document.getElementById("produto-id")) document.getElementById("produto-id").textContent = produto.id;
    if(document.getElementById("produto-descricao")) document.getElementById("produto-descricao").textContent = produto.descricao;
    if(imgPrincipal) imgPrincipal.src = produto.img;
    
    // 3. CRIAÇÃO DA GALERIA DE MINIATURAS
    if(galeriaDiv) galeriaDiv.innerHTML = ""; 

    const miniaturas = produto.imagens_extras && produto.imagens_extras.length > 0
                        ? produto.imagens_extras 
                        : [produto.img];

    miniaturas.forEach(imgSrc => {
        const miniatura = document.createElement('img');
        miniatura.src = imgSrc;
        miniatura.className = 'img-thumbnail me-2 shadow-sm';
        miniatura.width = 80;
        miniatura.alt = `Miniatura de ${produto.nome}`;
        
        miniatura.addEventListener('click', function() {
            if(imgPrincipal) imgPrincipal.src = this.src; 
            // marca a miniatura ativa
            if(galeriaDiv) {
                galeriaDiv.querySelectorAll('.img-thumbnail').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            }
        });

        if(galeriaDiv) galeriaDiv.appendChild(miniatura);
    });
    // marca a primeira miniatura como ativa
    if (galeriaDiv) {
        const first = galeriaDiv.querySelector('.img-thumbnail');
        if (first) first.classList.add('active');
    }
    
    // 4. Configura o botão de Adicionar ao Carrinho e Quantidade
    const btnComprar = document.getElementById("btn-comprar-detalhe");
    
    if(btnComprar){
        btnComprar.setAttribute("data-id", produto.id);
        btnComprar.setAttribute("data-nome", produto.nome);
        btnComprar.setAttribute("data-preco", produto.preco);
        btnComprar.setAttribute("data-img", produto.img);
        
        btnComprar.addEventListener('click', function() {
            const inputQtd = document.getElementById("input-quantidade");
            const quantidade = inputQtd ? parseInt(inputQtd.value) : 1; // Garante que a quantidade existe
            adicionarAoCarrinho(produto.id, produto.nome, produto.preco, produto.img, quantidade);
            if (typeof showToast === 'function') showToast(`${quantidade}x ${produto.nome} adicionado ao carrinho`, 'Carrinho');
        });

        const btnAumentar = document.getElementById("btn-aumentar");
        const btnDiminuir = document.getElementById("btn-diminuir");
        const inputQtd = document.getElementById("input-quantidade");

        if(btnAumentar) btnAumentar.addEventListener('click', () => {
            if(inputQtd) inputQtd.value = parseInt(inputQtd.value) + 1;
        });

        if(btnDiminuir) btnDiminuir.addEventListener('click', () => {
            if(inputQtd && parseInt(inputQtd.value) > 1) {
                inputQtd.value = parseInt(inputQtd.value) - 1;
            }
        });
    }
}


// ===============================================
// 4. FUNÇÕES DE CARRINHO (Controle de Estoque/Sessão)
// ===============================================

/**
 * Carrega e exibe os itens na página carrinho.html (Versão final)
 */
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return; // Evita erro se o elemento não existe

    cartItems.innerHTML = ""; 

    if (carrinho.length === 0) {
        // Corrigido para 5 colunas
        cartItems.innerHTML = '<tr><td colspan="5" class="text-center py-5 text-muted">Seu carrinho está vazio. Adicione flores lindas para continuar!</td></tr>'; 
        calcularTotal(carrinho); 
        return;
    }

    carrinho.forEach(item => {
        const tr = document.createElement("tr");
        const precoFormatado = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const subtotal = (item.preco * item.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        tr.innerHTML = `
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.img}" width="50" class="me-3 rounded shadow-sm" alt="${item.nome}">
                    ${item.nome}
                </div>
            </td>
            <td>${precoFormatado}</td>
            <td>
                <div class="input-group input-group-sm" style="width: 100px;">
                    <button class="btn btn-outline-secondary" onclick="diminuirQtd('${item.id}')">-</button>
                    <input type="text" class="form-control text-center" value="${item.qtd}" readonly>
                    <button class="btn btn-outline-secondary" onclick="aumentarQtd('${item.id}')">+</button>
                </div>
            </td>
            <td><strong>${subtotal}</strong></td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="removerItemDoCarrinho('${item.id}')" title="Remover item">
                    &times; </button>
            </td>
        `;
        cartItems.appendChild(tr);
    });
    calcularTotal(carrinho);
}

/**
 * Funçao acionada ao clicar em "Finalizar Compra" (AVISO E RESUMO)
 */
function finalizarCompra() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length === 0) {
        if (typeof showToast === 'function') showToast('Seu carrinho está vazio. Adicione produtos para finalizar a compra.', 'Carrinho');
        return;
    }

    // Prepara o conteúdo do modal de checkout
    const checkoutItemsEl = document.getElementById('checkout-items');
    const checkoutTotalEl = document.getElementById('checkout-total');
    const checkoutSummaryEl = document.getElementById('checkout-summary');

    if (checkoutItemsEl) checkoutItemsEl.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.qtd;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `<div><strong>${item.nome}</strong><div class="small text-muted">${item.qtd}x</div></div><div>${(item.preco * item.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>`;
        if (checkoutItemsEl) checkoutItemsEl.appendChild(li);
    });

    const totalFormatado = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    if (checkoutTotalEl) checkoutTotalEl.textContent = totalFormatado;
    if (checkoutSummaryEl) checkoutSummaryEl.textContent = `${carrinho.length} itens — revisão antes de confirmar`;

    // O modal será mostrado automaticamente pelo data-bs-toggle; apenas prepara o resumo.
}

// NOVO: Função para remover um item da lista do carrinho
function removerItemDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho = carrinho.filter(i => i.id !== id);
    
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho(); 
    atualizarContadorMenu();
}


function aumentarQtd(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho.find(i => i.id === id);
    if (item) {
        item.qtd++;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        carregarCarrinho(); 
        atualizarContadorMenu();
    }
}

function diminuirQtd(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho.find(i => i.id === id);

    if (item && item.qtd > 1) {
        item.qtd--;
    } else {
        carrinho = carrinho.filter(i => i.id !== id);
    }
    
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho(); 
    atualizarContadorMenu();
}

function calcularTotal(carrinho) {
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.qtd;
    });
    
    const totalElemento = document.getElementById("cart-total");
    if(totalElemento){
      totalElemento.textContent = "Total: " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}

function atualizarContadorMenu() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let totalItens = 0;
    carrinho.forEach(item => { totalItens += item.qtd; });

    const contadorElemento = document.getElementById("cart-count");
    if (contadorElemento) {
        contadorElemento.textContent = totalItens;
    }
}


// ===============================================
// 5. GOOGLE MAPS (INTEGRAÇÃO DE API)
// ===============================================

function initMap() {
    const floricultura = { lat: -20.0000, lng: -44.0000 }; 
    const map = new google.maps.Map(document.getElementById("mapa-loja"), {
        zoom: 15,
        center: floricultura,
    });
    new google.maps.Marker({
        position: floricultura,
        map: map,
        title: "Belas Flores",
    });
}


// ===============================================
// 6. FUNÇÕES DE LOGIN/CADASTRO E UTILIDADE
// ===============================================
function realizarLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar") ? document.getElementById("lembrar").checked : false;
    const feedback = document.getElementById("mensagem-feedback");
    feedback.innerHTML = "";

    // suporte tanto para o formato antigo (senha gravada com a chave = email)
    // quanto para o novo formato: { users: { email: { name, password } } }
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userObj = users[email];
    const senhaSalva = userObj ? userObj.password : localStorage.getItem(email);

    if ((email === "admin@teste.com" && senha === "123456") || (senhaSalva !== null && senha === senhaSalva)) {
        feedback.innerHTML = '<div class="alert alert-success">Login realizado! Redirecionando...</div>';
        const storage = lembrar ? localStorage : sessionStorage;
        storage.setItem("usuarioLogado", "Sim");
        storage.setItem("nomeUsuario", userObj ? userObj.name : email);
        setTimeout(() => { window.location.href = "index.html"; }, 1500);
        // disparar evento para permitir animações de UI (jQuery) saberem do sucesso
        try { document.dispatchEvent(new CustomEvent('login:result', { detail: { success: true } })); } catch(e){}
    } else {
        feedback.innerHTML = '<div class="alert alert-danger">E-mail ou senha incorretos!</div>';
        try { document.dispatchEvent(new CustomEvent('login:result', { detail: { success: false } })); } catch(e){}
    }
}
function realizarCadastro(event) {
    event.preventDefault();
    const nome = (document.getElementById("nome") || {}).value || '';
    const email = (document.getElementById("email") || {}).value || '';
    const senha = (document.getElementById("senha") || {}).value || '';
    const confirmarSenha = (document.getElementById("confirmar-senha") || {}).value || '';
    const feedback = document.getElementById("mensagem-feedback");
    feedback.innerHTML = "";
    if (nome.trim() === "" || email.trim() === "" || senha === "") {
        feedback.innerHTML = '<div class="alert alert-warning">Preencha todos os campos.</div>';
        return;
    }
    if (senha !== confirmarSenha) {
        feedback.innerHTML = '<div class="alert alert-danger">As senhas não conferem!</div>';
        return; 
    }

    // Carrega a coleção de usuários
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[email] || localStorage.getItem(email) !== null) {
        feedback.innerHTML = '<div class="alert alert-warning">Este e-mail já está cadastrado.</div>';
        try { document.dispatchEvent(new CustomEvent('cadastro:result', { detail: { success: false, reason: 'exists' } })); } catch(e){}
        return;
    }

    // Salva no formato consolidado 'users'
    users[email] = { name: nome.trim(), password: senha };
    localStorage.setItem('users', JSON.stringify(users));
    feedback.innerHTML = '<div class="alert alert-success">Cadastro realizado! Redirecionando...</div>';
    try { document.dispatchEvent(new CustomEvent('cadastro:result', { detail: { success: true } })); } catch(e){}
    setTimeout(() => { window.location.href = "login.html"; }, 2000);
}
function estaLogado() {
    const logadoLocal = localStorage.getItem("usuarioLogado");
    const logadoSession = sessionStorage.getItem("usuarioLogado");
    return logadoLocal === "Sim" || logadoSession === "Sim";
}
function atualizarContadorDeVisitas(elemento) {
    let contador = localStorage.getItem("contadorVisitas");
    if (contador === null) contador = 0;
    contador = parseInt(contador) + 1;
    localStorage.setItem("contadorVisitas", contador);
    elemento.textContent = contador;
}