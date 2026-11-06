var L = [
    {
        e: "🪙", bg: "#FFC93C", t: "O que é cripto?", say: "Oi, eu sou a Capi! Vou te guiar.",
        lead: "Cripto é dinheiro digital que vive na internet. Você guarda e envia pelo celular, sem precisar de banco no meio.",
        steps: ["Bitcoin (BTC) é a mais famosa. Muita gente a vê como “ouro digital”.", "Ethereum (ETH) é uma rede onde também rodam aplicativos.", "Stablecoins (USDC, USDT) valem cerca de 1 dólar. São mais calmas, porque o preço não balança tanto.", "O preço das outras moedas sobe e desce muito. Isso é normal e é o risco."],
        words: ["Carteira: seu “bolso” digital", "Rede: a estrada por onde a moeda viaja", "Frase secreta: as 12 palavras que abrem sua carteira"],
        tip: "Ninguém garante lucro. Quem promete ganho fácil quer te enganar."
    },
    {
        e: "🛟", bg: "#BFE9F5", t: "Antes de começar", say: "Segurança primeiro!",
        lead: "Cripto é para quem já está com a vida em ordem. Veja se você tem estes itens:",
        steps: ["Tenho uma reserva para emergências (em renda fixa ou poupança).", "Vou usar só um valor que, se eu perder, não vai me fazer falta.", "Não vou pegar empréstimo nem usar dinheiro das contas para comprar.", "Entendi que ninguém pode me devolver o dinheiro se eu cair em golpe."],
        warn: "Começar com pouco é ótimo. R$ 30 por mês já ensina tudo o que você precisa saber."
    },
    {
        e: "🏦", bg: "#FFD6CC", t: "Abra conta numa corretora", say: "Corretora é a “casa de câmbio” das moedas digitais.",
        lead: "Para trocar reais por cripto, use uma corretora brasileira. Ela aceita Pix e mostra tudo em reais.",
        steps: ["Escolha uma corretora e baixe o app pela loja oficial ou pelo site dela.", "Faça o cadastro: CPF, e-mail, selfie e foto do documento.", "Crie uma senha forte que você não usa em mais nenhum lugar.", "Ative a verificação em duas etapas, com um app autenticador (melhor que SMS)."],
        links: [["Mercado Bitcoin", "https://www.mercadobitcoin.com.br", "Corretora brasileira"], ["Foxbit", "https://foxbit.com.br", "Corretora brasileira"]],
        tip: "Compare as taxas antes de escolher. Cada corretora cobra de um jeito."
    },
    {
        e: "💸", bg: "#D5F0C8", t: "Compre com Pix", say: "Igual a pagar uma conta.",
        lead: "Agora é só colocar reais na corretora e trocar por cripto.",
        steps: ["No app, vá em “Depositar” e escolha Pix. Use sempre uma conta no seu nome.", "Faça o Pix e espere o saldo aparecer em reais.", "Vá em “Comprar” e escolha a moeda. Para começar, USDC (dólar digital) ou ETH.", "Digite um valor pequeno e confira a taxa que vai ser cobrada.", "Confirme. Pronto, você comprou!"],
        tip: "Comprar um pouco todo mês, sempre no mesmo dia, evita o susto de “comprar tudo no pior momento”."
    },
    {
        e: "👛", bg: "#E6D9FF", t: "Crie sua carteira Rabby", say: "Aqui o dinheiro fica só com você.",
        lead: "A Rabby é uma carteira gratuita que você controla. Na corretora, a empresa guarda sua moeda. Na Rabby, só você guarda.",
        steps: ["Entre no site oficial rabby.io e escolha a versão do seu aparelho. Não baixe de links de anúncios.", "Clique em criar nova carteira e defina uma senha.", "Vão aparecer 12 palavras. Copie no papel, na ordem, e guarde em lugar seguro.", "Confira as palavras quando o app pedir. Pronto, a carteira existe!"],
        warn: "Nunca tire foto, nunca salve no celular ou na nuvem e nunca digite as 12 palavras em nenhum site. Quem tiver essas palavras fica com seu dinheiro. Ninguém de verdade vai te pedir isso, nem o suporte.",
        links: [["Rabby (site oficial)", "https://rabby.io", "Baixe só por aqui"]]
    },
    {
        e: "🚀", bg: "#FFE9A8", t: "Envie para sua carteira", say: "Com calma, vamos fazer um teste primeiro.",
        lead: "Hora de mover a moeda da corretora para a sua Rabby. O segredo é escolher a rede certa.",
        steps: ["Na Rabby, toque em “Receber” e copie o endereço (um código longo que começa com 0x).", "Na corretora, vá em “Retirar” ou “Sacar” e cole o endereço.", "Escolha uma rede com taxa baixa que a Rabby aceite, como Base, Arbitrum ou Polygon. A rede da Rabby e da corretora precisam ser a mesma.", "Mande primeiro um teste de R$ 20 a R$ 50 e espere chegar.", "Chegou? Aí envie o resto do mesmo jeito."],
        warn: "Rede errada ou endereço trocado pode perder o dinheiro para sempre. Por isso o teste vale a pena."
    },
    {
        e: "🛡️", bg: "#FFD6CC", t: "Fuja de golpes", say: "Eu já vi muita cilada. Olha só!",
        lead: "A maioria dos prejuízos vem de golpes, e não do preço da moeda.",
        steps: ["Ninguém dá “bônus”, “airdrop” ou “dobra seu saldo”. Isso é isca.", "Suporte de verdade nunca pede suas 12 palavras ou sua senha.", "Só entre em sites digitando o endereço certo ou usando seus favoritos.", "Antes de assinar algo na Rabby, leia o aviso que ela mostra. Se não entendeu, cancele.", "Desconfie de gente que chama você no WhatsApp ou Telegram para investir."],
        links: [["Revoke.cash", "https://revoke.cash", "Cancele permissões antigas dos seus apps"]],
        tip: "Quando o saldo crescer, vale ter uma carteira de hardware (Ledger ou Trezor). A Rabby funciona com elas."
    },
    {
        e: "🧾", bg: "#BFE9F5", t: "Imposto de renda", say: "Última parada: ficar em dia com o Leão.",
        lead: "Cripto é legal, mas precisa aparecer na declaração. As regras mudam, então confirme os valores no site da Receita.",
        steps: ["Guarde o histórico: data, valor em reais e onde comprou. Prints e extratos servem.", "Se você tinha R$ 5 mil ou mais em uma mesma moeda, declare em “Bens e Direitos”, mesmo na Rabby.", "Vendas de até R$ 35 mil por mês em corretora brasileira costumam ser isentas de imposto, mas ainda devem ser informadas.", "Corretoras no exterior não têm essa isenção. Se for usar uma, procure ajuda de um contador."],
        links: [["Receita Federal", "https://www.gov.br/receitafederal/pt-br", "Regras e programas oficiais"]],
        tip: "Foi bem até aqui? Marque “Concluir” e comemore. Você já sabe mais do que muita gente."
    }
];
var S = { i: 0, done: {}, chk: {}, fin: false };
try { var r = localStorage.getItem("capi"); if (r) S = Object.assign(S, JSON.parse(r)) } catch (e) { }
function save() { try { localStorage.setItem("capi", JSON.stringify(S)) } catch (e) { } }
function capi(l) { return '<svg viewBox="0 0 360 200" role="img" aria-label="A capivara Capi com um balão: ' + l.say + '"><rect width="360" height="200" fill="' + l.bg + '"/><circle cx="40" cy="40" r="18" fill="#fff" opacity=".5"/><circle cx="320" cy="150" r="26" fill="#fff" opacity=".4"/><ellipse cx="120" cy="170" rx="100" ry="14" fill="#13233A" opacity=".12"/><g transform="translate(10,40) scale(1.9)"><rect x="26" y="78" width="9" height="16" rx="4" fill="#8B5E34"/><rect x="72" y="78" width="9" height="16" rx="4" fill="#8B5E34"/><ellipse cx="55" cy="66" rx="44" ry="26" fill="#B07A4A"/><ellipse cx="98" cy="50" rx="20" ry="17" fill="#B07A4A"/><ellipse cx="112" cy="55" rx="10" ry="9" fill="#9A6639"/><ellipse cx="118" cy="52" rx="3" ry="2.5" fill="#13233A"/><circle cx="99" cy="45" r="2.6" fill="#13233A"/><circle cx="89" cy="36" r="5" fill="#8B5E34"/><path d="M104 61q5 3 10 0" stroke="#13233A" stroke-width="1.6" fill="none" stroke-linecap="round"/></g><g transform="translate(212,22)"><path d="M10 0h124a10 10 0 0 1 10 10v84a10 10 0 0 1-10 10H50l-22 20 4-20H10A10 10 0 0 1 0 94V10A10 10 0 0 1 10 0z" fill="#fff" stroke="#13233A" stroke-width="3"/><text x="72" y="64" font-size="52" text-anchor="middle">' + l.e + '</text></g><text x="180" y="190" font-size="14" font-family="Nunito,sans-serif" fill="#13233A" text-anchor="middle" font-weight="700">' + l.say + '</text></svg>' }
function render() {
    var l = L[S.i], n = L.length, d = Object.keys(S.done).length;
    document.getElementById("fill").style.width = Math.round(d / n * 100) + "%";
    var dots = ""; for (var k = 0; k < n; k++)dots += '<button class="' + (k == S.i ? "on " : "") + (S.done[k] ? "ok" : "") + '" data-k="' + k + '" aria-label="Passo ' + (k + 1) + '">' + (S.done[k] && k != S.i ? "✓" : k + 1) + '</button>';
    document.getElementById("dots").innerHTML = dots;
    var h = '<div class="art">' + capi(l) + '</div><h2>' + (S.i + 1) + '. ' + l.t + '</h2><p class="lead">' + l.lead + '</p><div class="card"><ul class="steps">';
    l.steps.forEach(function (s, j) { var id = "c" + S.i + "_" + j; h += '<li><input type="checkbox" id="' + id + '"' + (S.chk[id] ? " checked" : "") + ' data-id="' + id + '"><label for="' + id + '">' + s + '</label></li>' });
    h += '</ul></div>';
    if (l.words) { h += '<div class="words">'; l.words.forEach(function (w) { h += '<span>' + w + '</span>' }); h += '</div>' }
    if (l.warn) h += '<div class="warn">⚠️ ' + l.warn + '</div>';
    if (l.tip) h += '<div class="tip">💡 ' + l.tip + '</div>';
    if (l.links) { h += '<div class="links">'; l.links.forEach(function (k) { h += '<a href="' + k[1] + '" target="_blank" rel="noopener noreferrer">' + k[0] + '<small>' + k[2] + '</small></a>' }); h += '</div>' }
    var last = S.i == n - 1;
    h += '<div class="nav"><button id="pv"' + (S.i == 0 ? " disabled" : "") + '>Voltar</button><button class="go" id="nx">' + (last ? "Concluir 🎉" : "Próximo") + '</button></div>';
    if (S.fin && last) h += '<div class="party">🎉 Parabéns! Você completou o curso da Capi. Agora é praticar com valores pequenos e sempre com cuidado.</div>';
    document.getElementById("view").innerHTML = h
}
document.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.k !== undefined) { S.i = +b.dataset.k }
    else if (b.id == "pv") { S.i-- }
    else if (b.id == "nx") { S.done[S.i] = 1; if (S.i < L.length - 1) S.i++; else S.fin = true }
    else return;
    save(); render(); window.scrollTo({ top: 0 })
});
document.addEventListener("change", function (e) { var id = e.target.dataset && e.target.dataset.id; if (id) { if (e.target.checked) S.chk[id] = 1; else delete S.chk[id]; save() } });
render();