document.addEventListener("DOMContentLoaded", function() {
    
    // --- ROTEAR AS FUNÇÕES PELA PÁGINA ---
    if (document.getElementById("form-login")) {
        document.getElementById("form-login").addEventListener("submit", realizarLogin);
        if (estaLogado()) window.location.href = "index.html";
    }
    if (document.getElementById("form-cadastro")) {
        document.getElementById("form-cadastro").addEventListener("submit", realizarCadastro);
    }
    if (document.getElementById("cart-items")) {
        carregarCarrinho(); // Carrega o carrinho na página do carrinho
    }
    if (document.getElementById("visitor-count")) {
        atualizarContadorDeVisitas(document.getElementById("visitor-count"));
    }
    
    // Configura os botões em qualquer página que eles existam
    configurarBotoesProduto();
    
    // Atualiza os contadores de menu em todas as páginas
    atualizarContadorMenu();
    atualizarContadorLike(); // Atualiza o status dos botões "curtir"
});


// ===============================================
// FUNÇÕES DO CARRINHO E "CURTIR"
// ===============================================

/**
 * Adiciona ouvintes de clique aos botões de "Adicionar" e "Curtir"
 */
function configurarBotoesProduto() {
    // Botões "Adicionar ao Carrinho"
    document.querySelectorAll(".btn-add-cart").forEach(botao => {
        botao.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            const nome = this.getAttribute("data-nome");
            const preco = parseFloat(this.getAttribute("data-preco"));
            const img = this.getAttribute("data-img");
            
            adicionarAoCarrinho(id, nome, preco, img);
            alert("Produto adicionado ao carrinho!"); // Feedback
        });
    });

    // Botões "Curtir" (Like)
    document.querySelectorAll(".btn-like").forEach(botao => {
        botao.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            toggleLike(id, this); // 'this' é o próprio botão
        });
    });
}

/**
 * Adiciona um item ao carrinho (se ele não existir)
 */
function adicionarAoCarrinho(id, nome, preco, img) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        // Se já existe, apenas avisa o usuário
        alert("Este item já está no seu carrinho. Você pode ajustar a quantidade na página do carrinho.");
    } else {
        // Se não existe, adiciona com qtd 1
        carrinho.push({ id, nome, preco, img, qtd: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorMenu();
}

/**
 * Carrega e exibe os itens na página carrinho.html
 */
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; 

    if (carrinho.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="4" class.="text-center">Seu carrinho está vazio.</td></tr>';
        calcularTotal(carrinho); 
        return;
    }

    carrinho.forEach(item => {
        const tr = document.createElement("tr");
        const precoFormatado = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        const subtotal = (item.preco * item.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

        tr.innerHTML = `
            <td>
                <img src="${item.img}" width="50" class="me-2" alt="${item.nome}">
                ${item.nome}
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
        `;
        cartItems.appendChild(tr);
    });
    calcularTotal(carrinho);
}

/**
 * Aumenta a quantidade de um item no carrinho
 */
function aumentarQtd(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho.find(i => i.id === id);
    if (item) {
        item.qtd++;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        carregarCarrinho(); // Recarrega a tabela e o total
        atualizarContadorMenu();
    }
}

/**
 * Diminui a quantidade de um item. Se chegar a 0, remove.
 */
function diminuirQtd(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const item = carrinho.find(i => i.id === id);

    if (item && item.qtd > 1) {
        item.qtd--;
    } else {
        // Se a quantidade é 1, remove o item do carrinho
        carrinho = carrinho.filter(i => i.id !== id);
    }
    
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    carregarCarrinho(); // Recarrega a tabela e o total
    atualizarContadorMenu();
}

/**
 * Soma os produtos e exibe o total na tela
 */
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

/**
 * Atualiza o número no ícone do carrinho no menu
 */
function atualizarContadorMenu() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let totalItens = 0;
    carrinho.forEach(item => { totalItens += item.qtd; });

    const contadorElemento = document.getElementById("cart-count");
    if (contadorElemento) {
        contadorElemento.textContent = totalItens;
    }
}


// --- Funções de "Curtir" (Lista de Desejos) ---

function toggleLike(id, botao) {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    
    if (likes.includes(id)) {
        // Já curtiu, então descurtir
        likes = likes.filter(likeId => likeId !== id);
        botao.innerHTML = "&#9825;"; // Coração Vazio
    } else {
        // Não curtiu, então curtir
        likes.push(id);
        botao.innerHTML = "&#10084;"; // Coração Cheio
    }
    
    localStorage.setItem("likes", JSON.stringify(likes));
    atualizarContadorLike();
}

function atualizarContadorLike() {
    let likes = JSON.parse(localStorage.getItem("likes")) || [];
    console.log("Total de Itens Curtidos:", likes.length);
    
    // Atualiza os botões na página para refletir o estado "curtido"
    document.querySelectorAll(".btn-like").forEach(botao => {
        const id = botao.getAttribute("data-id");
        if (likes.includes(id)) {
            botao.innerHTML = "&#10084;"; // Coração Cheio
        }
    });
}


// ===============================================
// FUNÇÕES DE LOGIN/CADASTRO (Sem alterações)
// ===============================================
function realizarLogin(event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar").checked;
    const feedback = document.getElementById("mensagem-feedback");
    feedback.innerHTML = "";
    const senhaSalva = localStorage.getItem(email);
    if ((email === "admin@teste.com" && senha === "123456") || (senhaSalva !== null && senha === senhaSalva)) {
        feedback.innerHTML = '<div class="alert alert-success">Login realizado! Redirecionando...</div>';
        const storage = lembrar ? localStorage : sessionStorage;
        storage.setItem("usuarioLogado", "Sim");
        storage.setItem("nomeUsuario", email);
        setTimeout(() => { window.location.href = "index.html"; }, 1500);
    } else {
        feedback.innerHTML = '<div class="alert alert-danger">E-mail ou senha incorretos!</div>';
    }
}
function realizarCadastro(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const feedback = document.getElementById("mensagem-feedback");
    feedback.innerHTML = "";
    if (nome === "" || email === "" || senha === "") {
        feedback.innerHTML = '<div class="alert alert-warning">Preencha todos os campos.</div>';
        return;
    }
    if (senha !== confirmarSenha) {
        feedback.innerHTML = '<div class="alert alert-danger">As senhas não conferem!</div>';
        return; 
    }
    if (localStorage.getItem(email) !== null) {
        feedback.innerHTML = '<div class="alert alert-warning">Este e-mail já está cadastrado.</div>';
        return;
    }
    localStorage.setItem(email, senha);
    feedback.innerHTML = '<div class="alert alert-success">Cadastro realizado! Redirecionando...</div>';
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


// // document.addEventListener("DOMContentLoaded", function() {
    
// //     // --- ROTEAR AS FUNÇÕES PELA PÁGINA ---

// //     // 1. Se for a página de LOGIN
// //     const formLogin = document.getElementById("form-login");
// //     if (formLogin) {
// //         formLogin.addEventListener("submit", realizarLogin);
// //         if (estaLogado()) {
// //             window.location.href = "index.html";
// //         }
// //     }

// //     // 2. Se for a página de CADASTRO
// //     const formCadastro = document.getElementById("form-cadastro");
// //     if (formCadastro) {
// //         formCadastro.addEventListener("submit", realizarCadastro);
// //     }

// //     // 3. Se for a página do CARRINHO
// //     const cartItems = document.getElementById("cart-items");
// //     if (cartItems) {
// //         carregarCarrinho();
// //     }

// //     // 4. Se for a HOME (ou qualquer página com contador de visita)
// //     const elementoContador = document.getElementById("visitor-count");
// //     if (elementoContador) {
// //         atualizarContadorDeVisitas(elementoContador);
// //     }
    
// //     // 5. Configurar os botões "Adicionar ao Carrinho" (em qualquer página que existam)
// //     configurarBotoesCarrinho();
    
// //     // 6. Atualizar o contador do ícone do carrinho (em todas as páginas)
// //     atualizarContadorMenu();
// // });

// /**
//  * Adiciona ouvintes de clique aos botões de "Adicionar" e "Curtir"
//  */
// function configurarBotoesProduto() {
//     // Botões "Adicionar ao Carrinho"
//     document.querySelectorAll(".btn-add-cart").forEach(botao => {
//         botao.addEventListener("click", function() {
//             const id = this.getAttribute("data-id");
//             const nome = this.getAttribute("data-nome");
//             const preco = parseFloat(this.getAttribute("data-preco"));
//             const img = this.getAttribute("data-img");
            
//             adicionarAoCarrinho(id, nome, preco, img);
//             alert("Produto adicionado ao carrinho!"); // Feedback
//         });
//     });

//     // Botões "Curtir" (Like)
//     document.querySelectorAll(".btn-like").forEach(botao => {
//         botao.addEventListener("click", function() {
//             const id = this.getAttribute("data-id");
//             toggleLike(id, this); // 'this' é o próprio botão
//         });
//     });
// }

// /**
//  * Adiciona um item ao carrinho (se ele não existir)
//  */
// function adicionarAoCarrinho(id, nome, preco, img) {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const itemExistente = carrinho.find(item => item.id === id);

//     if (itemExistente) {
//         // Se já existe, apenas avisa o usuário
//         alert("Este item já está no seu carrinho. Você pode ajustar a quantidade na página do carrinho.");
//     } else {
//         // Se não existe, adiciona com qtd 1
//         carrinho.push({ id, nome, preco, img, qtd: 1 });
//     }

//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//     atualizarContadorMenu();
// }

// /**
//  * Carrega e exibe os itens na página carrinho.html
//  */
// function carregarCarrinho() {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const cartItems = document.getElementById("cart-items");
//     cartItems.innerHTML = ""; 

//     if (carrinho.length === 0) {
//         cartItems.innerHTML = '<tr><td colspan="4" class="text-center">Seu carrinho está vazio.</td></tr>';
//         calcularTotal(carrinho); 
//         return;
//     }

//     carrinho.forEach(item => {
//         const tr = document.createElement("tr");
//         const precoFormatado = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
//         const subtotal = (item.preco * item.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

//         tr.innerHTML = `
//             <td>
//                 <img src="${item.img}" width="50" class="me-2" alt="${item.nome}">
//                 ${item.nome}
//             </td>
//             <td>${precoFormatado}</td>
//             <td>
//                 <div class="input-group input-group-sm" style="width: 100px;">
//                     <button class="btn btn-outline-secondary" onclick="diminuirQtd('${item.id}')">-</button>
//                     <input type="text" class="form-control text-center" value="${item.qtd}" readonly>
//                     <button class="btn btn-outline-secondary" onclick="aumentarQtd('${item.id}')">+</button>
//                 </div>
//             </td>
//             <td><strong>${subtotal}</strong></td>
//         `;
//         cartItems.appendChild(tr);
//     });
//     calcularTotal(carrinho);
// }


// // ===============================================
// // FUNÇÕES DO CARRINHO (NOVAS)
// // ===============================================
// /**
//  * Adiciona ouvintes de clique aos botões de "Adicionar" e "Curtir"
//  */
// function configurarBotoesProduto() {
//     // Botões "Adicionar ao Carrinho"
//     document.querySelectorAll(".btn-add-cart").forEach(botao => {
//         botao.addEventListener("click", function() {
//             const id = this.getAttribute("data-id");
//             const nome = this.getAttribute("data-nome");
//             const preco = parseFloat(this.getAttribute("data-preco"));
//             const img = this.getAttribute("data-img");
            
//             adicionarAoCarrinho(id, nome, preco, img);
//             alert("Produto adicionado ao carrinho!"); // Feedback
//         });
//     });

//     // Botões "Curtir" (Like)
//     document.querySelectorAll(".btn-like").forEach(botao => {
//         botao.addEventListener("click", function() {
//             const id = this.getAttribute("data-id");
//             toggleLike(id, this); // 'this' é o próprio botão
//         });
//     });
// }

// /**
//  * Adiciona um item ao carrinho (se ele não existir)
//  */
// function adicionarAoCarrinho(id, nome, preco, img) {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const itemExistente = carrinho.find(item => item.id === id);

//     if (itemExistente) {
//         // Se já existe, apenas avisa o usuário
//         alert("Este item já está no seu carrinho. Você pode ajustar a quantidade na página do carrinho.");
//     } else {
//         // Se não existe, adiciona com qtd 1
//         carrinho.push({ id, nome, preco, img, qtd: 1 });
//     }

//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//     atualizarContadorMenu();
// }

// /**
//  * Carrega e exibe os itens na página carrinho.html
//  */
// function carregarCarrinho() {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const cartItems = document.getElementById("cart-items");
//     cartItems.innerHTML = ""; 

//     if (carrinho.length === 0) {
//         cartItems.innerHTML = '<tr><td colspan="4" class="text-center">Seu carrinho está vazio.</td></tr>';
//         calcularTotal(carrinho); 
//         return;
//     }

//     carrinho.forEach(item => {
//         const tr = document.createElement("tr");
//         const precoFormatado = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
//         const subtotal = (item.preco * item.qtd).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

//         tr.innerHTML = `
//             <td>
//                 <img src="${item.img}" width="50" class="me-2" alt="${item.nome}">
//                 ${item.nome}
//             </td>
//             <td>${precoFormatado}</td>
//             <td>
//                 <div class="input-group input-group-sm" style="width: 100px;">
//                     <button class="btn btn-outline-secondary" onclick="diminuirQtd('${item.id}')">-</button>
//                     <input type="text" class="form-control text-center" value="${item.qtd}" readonly>
//                     <button class="btn btn-outline-secondary" onclick="aumentarQtd('${item.id}')">+</button>
//                 </div>
//             </td>
//             <td><strong>${subtotal}</strong></td>
//         `;
//         cartItems.appendChild(tr);
//     });
//     calcularTotal(carrinho);
// }
// /**
//  * Adiciona ouvintes de clique a todos os botões com a classe .btn-add-cart
//  */
// // function configurarBotoesCarrinho() {
// //     const botoes = document.querySelectorAll(".btn-add-cart");
// //     botoes.forEach(botao => {
// //         botao.addEventListener("click", function() {
// //             // Pega os dados do HTML
// //             const id = this.getAttribute("data-id");
// //             const nome = this.getAttribute("data-nome");
// //             const preco = parseFloat(this.getAttribute("data-preco"));
// //             const img = this.getAttribute("data-img");
            
// //             adicionarAoCarrinho(id, nome, preco, img);
            
// //             // Feedback para o usuário (Requisito)
// //             alert("Produto adicionado ao carrinho!");
// //         });
// //     });
// // }

// // /**
// //  * Adiciona um item ao carrinho no localStorage
// //  */
// // function adicionarAoCarrinho(id, nome, preco, img) {
// //     // Puxa o carrinho do localStorage ou cria um array vazio
// //     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// //     // Verifica se o item JÁ ESTÁ no carrinho
// //     const itemExistente = carrinho.find(item => item.id === id);

// //     if (itemExistente) {
// //         // Se existe, só aumenta a quantidade
// //         itemExistente.qtd++;
// //     } else {
// //         // Se não existe, adiciona o novo item com qtd 1
// //         carrinho.push({ id, nome, preco, img, qtd: 1 });
// //     }

// //     // Salva o carrinho atualizado de volta no localStorage
// //     localStorage.setItem("carrinho", JSON.stringify(carrinho));

// //     // Atualiza o contador no menu
// //     atualizarContadorMenu();
// // }

// /**
//  * Atualiza o número no ícone do carrinho no menu
//  */
// function atualizarContadorMenu() {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     let totalItens = 0;
    
//     // Soma a QUANTIDADE de cada item (não apenas o número de produtos)
//     carrinho.forEach(item => {
//         totalItens += item.qtd;
//     });

//     const contadorElemento = document.getElementById("cart-count");
//     if (contadorElemento) {
//         contadorElemento.textContent = totalItens;
//     }
// }

// // /**
// //  * Carrega e exibe os itens na página carrinho.html
// //  */
// // function carregarCarrinho() {
// //     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
// //     const cartItems = document.getElementById("cart-items");
// //     cartItems.innerHTML = ""; // Limpa a tabela antes de preencher

// //     if (carrinho.length === 0) {
// //         cartItems.innerHTML = '<tr><td colspan="4" class="text-center">Seu carrinho está vazio.</td></tr>';
// //         calcularTotal(carrinho); // Calcula o total (que será zero)
// //         return;
// //     }

// //     carrinho.forEach(item => {
// //         // Cria uma nova linha (tr) na tabela para cada item
// //         const tr = document.createElement("tr");
        
// //         // Formata o preço para R$
// //         const precoFormatado = item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

// //         tr.innerHTML = `
// //             <td>
// //                 <img src="${item.img}" width="50" class="me-2">
// //                 ${item.nome}
// //             </td>
// //             <td>${precoFormatado}</td>
// //             <td>${item.qtd}</td>
// //             <td>
// //                 <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho('${item.id}')">
// //                     Remover
// //                 </button>
// //             </td>
// //         `;
// //         cartItems.appendChild(tr);
// //     });

// //     // Calcula o total
// //     calcularTotal(carrinho);
// // }

// // /**     nao e mais util ////////////////////////////////////////////
// //  * Remove um item do carrinho (pelo ID)
// //  */
// // function removerDoCarrinho(id) {
// //     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// //     // Filtra o array, mantendo todos os itens MENOS o que tem o id para remover
// //     carrinho = carrinho.filter(item => item.id !== id);

// //     // Salva o novo carrinho (sem o item)
// //     localStorage.setItem("carrinho", JSON.stringify(carrinho));

// //     // Recarrega a tabela e o total
// //     carregarCarrinho();
// //     atualizarContadorMenu();
// // }

// /**
//  * Soma os produtos e exibe o total na tela
//  */
// function calcularTotal(carrinho) {
//     let total = 0;
//     carrinho.forEach(item => {
//         total += item.preco * item.qtd;
//     });

//     const totalElemento = document.getElementById("cart-total");
//     totalElemento.textContent = "Total: " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
// }
// //novo////////////////////
// /**
//  * Aumenta a quantidade de um item no carrinho
//  */
// function aumentarQtd(id) {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const item = carrinho.find(i => i.id === id);
//     if (item) {
//         item.qtd++;
//         localStorage.setItem("carrinho", JSON.stringify(carrinho));
//         carregarCarrinho(); // Recarrega a tabela e o total
//         atualizarContadorMenu();
//     }
// }

// /**
//  * Diminui a quantidade de um item. Se chegar a 0, remove.
//  */
// function diminuirQtd(id) {
//     let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
//     const item = carrinho.find(i => i.id === id);

//     if (item && item.qtd > 1) {
//         item.qtd--;
//     } else {
//         // Se a quantidade é 1, remove o item do carrinho
//         carrinho = carrinho.filter(i => i.id !== id);
//     }
    
//     localStorage.setItem("carrinho", JSON.stringify(carrinho));
//     carregarCarrinho(); // Recarrega a tabela e o total
//     atualizarContadorMenu();
// }

// // --- Funções de "Curtir" (Lista de Desejos) ---

// function toggleLike(id, botao) {
//     let likes = JSON.parse(localStorage.getItem("likes")) || [];
    
//     if (likes.includes(id)) {
//         // Já curtiu, então descurtir
//         likes = likes.filter(likeId => likeId !== id);
//         botao.innerHTML = "&#9825;"; // Coração Vazio
//     } else {
//         // Não curtiu, então curtir
//         likes.push(id);
//         botao.innerHTML = "&#10084;"; // Coração Cheio
//     }
    
//     localStorage.setItem("likes", JSON.stringify(likes));
//     atualizarContadorLike();
// }

// function atualizarContadorLike() {
//     // Esta função é só um exemplo, você precisaria de um lugar no HTML para mostrar isso
//     let likes = JSON.parse(localStorage.getItem("likes")) || [];
//     console.log("Total de Itens Curtidos:", likes.length);
    
//     // Atualiza os botões na página para refletir o estado "curtido"
//     document.querySelectorAll(".btn-like").forEach(botao => {
//         const id = botao.getAttribute("data-id");
//         if (likes.includes(id)) {
//             botao.innerHTML = "&#10084;"; // Coração Cheio
//         }
//     });
// }


// // ===============================================
// // FUNÇÕES DE LOGIN/CADASTRO (Antigas)
// // ===============================================

// function realizarLogin(event) {
//     event.preventDefault(); 
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
//     const lembrar = document.getElementById("lembrar").checked;
//     const feedback = document.getElementById("mensagem-feedback");
//     feedback.innerHTML = "";

//     const senhaSalva = localStorage.getItem(email);

//     if ((email === "admin@teste.com" && senha === "123456") || (senhaSalva !== null && senha === senhaSalva)) {
//         feedback.innerHTML = '<div class="alert alert-success">Login realizado! Redirecionando...</div>';
//         const storage = lembrar ? localStorage : sessionStorage;
//         storage.setItem("usuarioLogado", "Sim");
//         storage.setItem("nomeUsuario", email);
//         setTimeout(() => { window.location.href = "index.html"; }, 1500);
//     } else {
//         feedback.innerHTML = '<div class="alert alert-danger">E-mail ou senha incorretos!</div>';
//     }
// }

// function realizarCadastro(event) {
//     event.preventDefault();
//     const nome = document.getElementById("nome").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
//     const confirmarSenha = document.getElementById("confirmar-senha").value;
//     const feedback = document.getElementById("mensagem-feedback");
//     feedback.innerHTML = "";

//     if (nome === "" || email === "" || senha === "") {
//         feedback.innerHTML = '<div class="alert alert-warning">Preencha todos os campos.</div>';
//         return;
//     }
//     if (senha !== confirmarSenha) {
//         feedback.innerHTML = '<div class="alert alert-danger">As senhas não conferem!</div>';
//         return; 
//     }
//     if (localStorage.getItem(email) !== null) {
//         feedback.innerHTML = '<div class="alert alert-warning">Este e-mail já está cadastrado.</div>';
//         return;
//     }

//     localStorage.setItem(email, senha);
//     feedback.innerHTML = '<div class="alert alert-success">Cadastro realizado! Redirecionando...</div>';
//     setTimeout(() => { window.location.href = "login.html"; }, 2000);
// }

// function estaLogado() {
//     const logadoLocal = localStorage.getItem("usuarioLogado");
//     const logadoSession = sessionStorage.getItem("usuarioLogado");
//     return logadoLocal === "Sim" || logadoSession === "Sim";
// }

// function atualizarContadorDeVisitas(elemento) {
//     let contador = localStorage.getItem("contadorVisitas");
//     if (contador === null) contador = 0;
//     contador = parseInt(contador) + 1;
//     localStorage.setItem("contadorVisitas", contador);
//     elemento.textContent = contador;
// }