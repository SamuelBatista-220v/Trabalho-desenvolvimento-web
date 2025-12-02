// Utilitários compartilhados para o projeto
(function(window){
    'use strict';

    // Formata número como moeda BRL
    function formatCurrency(value){
        try{
            return Number(value).toLocaleString('pt-br',{style:'currency',currency:'BRL'});
        }catch(e){
            return String(value);
        }
    }

    // Helpers para localStorage (JSON safe)
    function storageGet(key, fallback){
        try{
            const raw = localStorage.getItem(key);
            if (raw === null) return fallback === undefined ? null : fallback;
            return JSON.parse(raw);
        }catch(e){
            return fallback === undefined ? null : fallback;
        }
    }

    function storageSet(key, value){
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            console.warn('storageSet failed', e);
        }
    }

    // Exibe um toast simples (Bootstrap-like). Será usado por todo o projeto.
    function showToast(message, title){
        title = title || 'Notificação';
        try{
            let container = document.getElementById('toast-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'toast-container';
                container.style.position = 'fixed';
                container.style.right = '20px';
                container.style.bottom = '20px';
                container.style.zIndex = 1060;
                document.body.appendChild(container);
            }

            const el = document.createElement('div');
            el.className = 'toast align-items-center text-bg-light border-0 show mb-2';
            el.setAttribute('role','alert');
            el.setAttribute('aria-live','assertive');
            el.setAttribute('aria-atomic','true');
            el.style.minWidth = '220px';
            el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';

            el.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        <strong>${title}</strong><div style="font-size:0.9rem">${message}</div>
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" aria-label="Fechar"></button>
                </div>
            `;

            container.appendChild(el);

            // remover após 3s
            setTimeout(()=>{ try{ el.remove(); }catch(e){} }, 3000);

        }catch(e){
            console.log(title+': '+message);
        }
    }

    // Exporta funções para o escopo global (nome curto)
    window.formatCurrency = formatCurrency;
    window.storageGet = storageGet;
    window.storageSet = storageSet;
    // Define showToast somente se não existir (não sobrescreve)
    if (typeof window.showToast !== 'function') window.showToast = showToast;

})(window);
