var _render = render;
function escC(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function certSVG() {
  var d = new Date(S.date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  var fs = S.name.length > 40 ? 26 : S.name.length > 28 ? 32 : 40;
  var f = 'font-family="Georgia,serif" text-anchor="middle"';
  return (
    '<svg id="certsvg" xmlns="http://www.w3.org/2000/svg" width="842" height="595" viewBox="0 0 842 595" role="img" aria-label="Certificado de conclusão de ' +
    escC(S.name) +
    '">' +
    '<rect width="842" height="595" fill="#FFF8E7"/>' +
    '<rect x="20" y="20" width="802" height="555" fill="none" stroke="#0F5E4D" stroke-width="6"/>' +
    '<rect x="34" y="34" width="774" height="527" fill="none" stroke="#FFC93C" stroke-width="2"/>' +
    '<text x="421" y="110" ' +
    f +
    ' font-size="34" font-weight="bold" letter-spacing="3" fill="#0F5E4D">CERTIFICADO DE CONCLUSÃO</text>' +
    '<text x="421" y="170" ' +
    f +
    ' font-size="18" fill="#52627a">Certificamos que</text>' +
    '<text x="421" y="240" ' +
    f +
    ' font-size="' +
    fs +
    '" font-weight="bold" fill="#13233A">' +
    escC(S.name) +
    "</text>" +
    '<line x1="151" y1="258" x2="691" y2="258" stroke="#FFC93C" stroke-width="2"/>' +
    '<text x="421" y="300" ' +
    f +
    ' font-size="18" fill="#52627a">concluiu com sucesso o curso</text>' +
    '<text x="421" y="340" ' +
    f +
    ' font-size="28" font-weight="bold" fill="#0F5E4D">Cripto com a Capi: aprenda do zero</text>' +
    '<text x="421" y="374" ' +
    f +
    ' font-size="16" fill="#52627a">' +
    L.length +
    " passos, do básico de cripto até segurança e imposto de renda</text>" +
    '<text x="421" y="440" ' +
    f +
    ' font-size="18" fill="#13233A">Concluído em ' +
    d +
    "</text>" +
    '<g transform="translate(75,415)"><rect x="26" y="78" width="9" height="16" rx="4" fill="#8B5E34"/><rect x="72" y="78" width="9" height="16" rx="4" fill="#8B5E34"/><ellipse cx="55" cy="66" rx="44" ry="26" fill="#B07A4A"/><ellipse cx="98" cy="50" rx="20" ry="17" fill="#B07A4A"/><ellipse cx="112" cy="55" rx="10" ry="9" fill="#9A6639"/><ellipse cx="118" cy="52" rx="3" ry="2.5" fill="#13233A"/><circle cx="99" cy="45" r="2.6" fill="#13233A"/><circle cx="89" cy="36" r="5" fill="#8B5E34"/><path d="M104 61q5 3 10 0" stroke="#13233A" stroke-width="1.6" fill="none" stroke-linecap="round"/></g>' +
    '<line x1="560" y1="495" x2="740" y2="495" stroke="#13233A" stroke-width="1.5"/>' +
    '<text x="650" y="518" ' +
    f +
    ' font-size="18" font-style="italic" fill="#13233A">Capi</text>' +
    '<text x="650" y="536" ' +
    f +
    ' font-size="12" fill="#52627a">Capivara guia do curso</text>' +
    '<text x="421" y="556" ' +
    f +
    ' font-size="11" fill="#52627a">Certificado informal de participação, sem valor oficial.</text>' +
    "</svg>"
  );
}
render = function () {
  _render();
  if (!(S.fin && S.i == L.length - 1)) return;
  if (!S.date) {
    S.date = new Date().toISOString();
    save();
  }
  var h =
    '<div class="card" id="certbox"><h2>Seu certificado 🎓</h2><p>Digite seu nome completo para gerar o certificado.</p><input id="nm" type="text" maxlength="60" placeholder="Nome completo" autocomplete="name" value="' +
    escC(S.name || "") +
    '"><p id="msg" class="warn" hidden></p><div class="nav"><button class="go" id="mk">Gerar certificado</button></div></div>';
  if (S.name)
    h +=
      '<div class="cert" id="cert">' +
      certSVG() +
      '</div><div class="nav"><button id="dl">Baixar imagem</button><button class="go" id="pr">Imprimir ou salvar PDF</button></div>';
  var box = document.createElement("div");
  box.innerHTML = h;
  document.getElementById("view").appendChild(box);
};
function baixar() {
  var xml = new XMLSerializer().serializeToString(
    document.getElementById("certsvg"),
  );
  var img = new Image();
  img.onload = function () {
    var c = document.createElement("canvas");
    c.width = 1684;
    c.height = 1190;
    c.getContext("2d").drawImage(img, 0, 0, 1684, 1190);
    c.toBlob(function (b) {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.download = "certificado-capi.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, "image/png");
  };
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
}
document.addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  if (b.id == "mk") {
    var v = document.getElementById("nm").value.trim().replace(/\s+/g, " ");
    if (v.length < 5 || v.indexOf(" ") < 0) {
      var m = document.getElementById("msg");
      m.textContent = "Digite seu nome completo, com nome e sobrenome.";
      m.hidden = false;
      return;
    }
    S.name = v;
    save();
    render();
    document.getElementById("cert").scrollIntoView({ behavior: "smooth" });
  } else if (b.id == "pr") {
    window.print();
  } else if (b.id == "dl") {
    baixar();
  }
});
render();
