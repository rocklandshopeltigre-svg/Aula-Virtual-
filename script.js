// =====================================================
//  TMyC de Venezuela C.A. - Catálogo y cotización
// =====================================================

// ----- Base de datos de repuestos (referencial) -----
const repuestos = [
  // Caterpillar
  { np: "TMC-CAT-1001", desc: "Filtro de aceite", marca: "Caterpillar", modelo: "G3500 / G3600", precio: 48.50, stock: 40 },
  { np: "TMC-CAT-1002", desc: "Filtro de aire primario", marca: "Caterpillar", modelo: "G3400 / G3500", precio: 112.00, stock: 25 },
  { np: "TMC-CAT-1003", desc: "Bujía de encendido", marca: "Caterpillar", modelo: "G3500 / G3600", precio: 64.90, stock: 120 },
  { np: "TMC-CAT-1004", desc: "Kit de empaques de culata", marca: "Caterpillar", modelo: "3306 / G3306", precio: 389.00, stock: 8 },
  { np: "TMC-CAT-1005", desc: "Pistón completo con pasador", marca: "Caterpillar", modelo: "G3516", precio: 1250.00, stock: 6 },
  { np: "TMC-CAT-1006", desc: "Juego de anillos de pistón", marca: "Caterpillar", modelo: "G3516", precio: 215.00, stock: 14 },
  { np: "TMC-CAT-1007", desc: "Cojinete de bancada (juego)", marca: "Caterpillar", modelo: "3406 / G3406", precio: 340.00, stock: 0 },
  { np: "TMC-CAT-1008", desc: "Bomba de agua", marca: "Caterpillar", modelo: "G3304 / G3306", precio: 780.00, stock: 3 },
  { np: "TMC-CAT-1009", desc: "Turbocargador", marca: "Caterpillar", modelo: "G3508 / G3512", precio: 4850.00, stock: 2 },
  { np: "TMC-CAT-1010", desc: "Termostato", marca: "Caterpillar", modelo: "3306 / 3406", precio: 38.00, stock: 30 },

  // Waukesha
  { np: "TMC-WAU-2001", desc: "Bujía de encendido", marca: "Waukesha", modelo: "VHP L7042GSI / L7044GSI", precio: 58.00, stock: 90 },
  { np: "TMC-WAU-2002", desc: "Filtro de aceite", marca: "Waukesha", modelo: "VHP / VGF", precio: 52.00, stock: 45 },
  { np: "TMC-WAU-2003", desc: "Bobina de ignición", marca: "Waukesha", modelo: "VHP / F3521", precio: 295.00, stock: 12 },
  { np: "TMC-WAU-2004", desc: "Válvula de admisión", marca: "Waukesha", modelo: "L7042GSI", precio: 165.00, stock: 20 },
  { np: "TMC-WAU-2005", desc: "Empaque de tapa de válvulas", marca: "Waukesha", modelo: "VHP", precio: 27.50, stock: 60 },
  { np: "TMC-WAU-2006", desc: "Kit de overhaul mayor", marca: "Waukesha", modelo: "F18 / H24", precio: 6900.00, stock: 0 },
  { np: "TMC-WAU-2007", desc: "Camisa de cilindro", marca: "Waukesha", modelo: "L7044GSI", precio: 890.00, stock: 4 },

  // White Superior
  { np: "TMC-WSP-3001", desc: "Camisa de cilindro de potencia", marca: "White Superior", modelo: "8G825 / 16SGTB", precio: 1450.00, stock: 3 },
  { np: "TMC-WSP-3002", desc: "Pistón de potencia", marca: "White Superior", modelo: "16SGTB", precio: 1680.00, stock: 2 },
  { np: "TMC-WSP-3003", desc: "Juego de anillos de pistón", marca: "White Superior", modelo: "8G825", precio: 260.00, stock: 10 },
  { np: "TMC-WSP-3004", desc: "Cojinete de biela", marca: "White Superior", modelo: "12SGTB / 16SGTB", precio: 210.00, stock: 16 },
  { np: "TMC-WSP-3005", desc: "Válvula de escape", marca: "White Superior", modelo: "8G825", precio: 185.00, stock: 0 },
  { np: "TMC-WSP-3006", desc: "Válvula de compresor (cilindro)", marca: "White Superior", modelo: "W-74", precio: 640.00, stock: 5 },

  // Ariel
  { np: "TMC-ARL-4001", desc: "Kit de reparación de válvula de compresor", marca: "Ariel", modelo: "JGK / JGT", precio: 320.00, stock: 22 },
  { np: "TMC-ARL-4002", desc: "Anillos de pistón (compresor)", marca: "Ariel", modelo: "JGJ / JGA", precio: 145.00, stock: 35 },
  { np: "TMC-ARL-4003", desc: "Anillo rider (banda guía)", marca: "Ariel", modelo: "JGK / JGT", precio: 98.00, stock: 28 },
  { np: "TMC-ARL-4004", desc: "Empaquetadura de vástago (packing)", marca: "Ariel", modelo: "JGE / JGK", precio: 1150.00, stock: 6 },
  { np: "TMC-ARL-4005", desc: "Filtro de aceite de bastidor", marca: "Ariel", modelo: "JGJ / JGK / JGT", precio: 44.00, stock: 50 },
  { np: "TMC-ARL-4006", desc: "Bomba lubricadora de cilindros", marca: "Ariel", modelo: "JGT / JGE", precio: 1980.00, stock: 1 },
  { np: "TMC-ARL-4007", desc: "Cojinete de cruceta", marca: "Ariel", modelo: "JGK", precio: 275.00, stock: 9 },

  // Bombas multifásicas
  { np: "TMC-BMF-5001", desc: "Sello mecánico doble", marca: "Bombas Multifásicas", modelo: "Doble tornillo serie MPP", precio: 2350.00, stock: 4 },
  { np: "TMC-BMF-5002", desc: "Rodamiento radial", marca: "Bombas Multifásicas", modelo: "Doble tornillo serie MPP", precio: 410.00, stock: 12 },
  { np: "TMC-BMF-5003", desc: "Juego de tornillos (rotores)", marca: "Bombas Multifásicas", modelo: "Doble tornillo serie MPP", precio: 15800.00, stock: 0 },
  { np: "TMC-BMF-5004", desc: "Kit de empaques y o-rings", marca: "Bombas Multifásicas", modelo: "Todas las series", precio: 185.00, stock: 25 },
  { np: "TMC-BMF-5005", desc: "Acople flexible motor-bomba", marca: "Bombas Multifásicas", modelo: "Todas las series", precio: 690.00, stock: 7 },
  { np: "TMC-BMF-5006", desc: "Engranaje de sincronización", marca: "Bombas Multifásicas", modelo: "Doble tornillo serie MPP", precio: 2980.00, stock: 2 }
];

const IVA = 0.16;
let cotizacion = []; // { np, cant }

// ----- Utilidades -----
const $ = id => document.getElementById(id);
const usd = n => "$ " + n.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
function aviso(texto) {
  const t = $("toast");
  t.textContent = texto;
  t.classList.add("ver");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("ver"), 2200);
}

// ----- Menú móvil -----
$("menuBtn").addEventListener("click", () => $("menu").classList.toggle("abierto"));
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => $("menu").classList.remove("abierto")));

// ----- Contadores animados -----
document.querySelectorAll(".contar").forEach(el => {
  const meta = +el.dataset.n;
  let actual = 0;
  const paso = Math.max(1, Math.ceil(meta / 60));
  const timer = setInterval(() => {
    actual = Math.min(meta, actual + paso);
    el.textContent = (meta >= 1000 ? "+" : "") + actual.toLocaleString("es-VE");
    if (actual === meta) clearInterval(timer);
  }, 25);
});

// ----- Animación al hacer scroll -----
const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
document.querySelectorAll(".titulo, .caja, .linea, .tabla-wrap").forEach(el => { el.classList.add("revelar"); obs.observe(el); });

// ----- Catálogo -----
function pintarCatalogo() {
  const texto = $("buscar").value.trim().toLowerCase();
  const marca = $("filtroMarca").value;
  const lista = repuestos.filter(r =>
    (marca === "" || r.marca === marca) &&
    (texto === "" || (r.np + " " + r.desc + " " + r.modelo).toLowerCase().includes(texto))
  );
  $("resultados").textContent = lista.length + " repuesto(s) encontrado(s)";
  if (lista.length === 0) {
    $("tablaRepuestos").innerHTML = "<tr><td colspan='8' class='vacio'>No se encontraron repuestos. Intenta con otro término o solicita el repuesto en Observaciones.</td></tr>";
    return;
  }
  $("tablaRepuestos").innerHTML = lista.map(r => `
    <tr>
      <td class="np">${r.np}</td>
      <td>${r.desc}</td>
      <td><span class="marca">${r.marca}</span></td>
      <td>${r.modelo}</td>
      <td>${usd(r.precio)}</td>
      <td>${r.stock > 0 ? `<span class="stock-si">✔ ${r.stock} und.</span>` : `<span class="stock-no">⏳ Por pedido</span>`}</td>
      <td><input type="number" class="cant" id="cant-${r.np}" value="1" min="1" max="999"></td>
      <td><button class="btn btn--sm" data-np="${r.np}">+ Cotizar</button></td>
    </tr>`).join("");
}
$("buscar").addEventListener("input", pintarCatalogo);
$("filtroMarca").addEventListener("change", pintarCatalogo);

// Botones de líneas -> filtran el catálogo
document.querySelectorAll(".linea").forEach(b => b.addEventListener("click", () => {
  $("filtroMarca").value = b.dataset.marca;
  $("buscar").value = "";
  pintarCatalogo();
  $("catalogo").scrollIntoView({ behavior: "smooth" });
}));

// Agregar a cotización (delegación de eventos)
$("tablaRepuestos").addEventListener("click", e => {
  const btn = e.target.closest("button[data-np]");
  if (!btn) return;
  const np = btn.dataset.np;
  const cant = parseInt($("cant-" + np).value, 10);
  if (isNaN(cant) || cant < 1 || cant > 999) {
    aviso("⚠️ La cantidad debe estar entre 1 y 999");
    $("cant-" + np).value = 1;
    return;
  }
  const existe = cotizacion.find(i => i.np === np);
  if (existe) existe.cant = Math.min(999, existe.cant + cant);
  else cotizacion.push({ np, cant });
  pintarCotizacion();
  aviso("✅ " + np + " agregado a la cotización");
  const badge = $("badge");
  badge.classList.remove("salto"); void badge.offsetWidth; badge.classList.add("salto");
});

// ----- Lista de cotización -----
function calcular() {
  const subtotal = cotizacion.reduce((s, i) => s + repuestos.find(r => r.np === i.np).precio * i.cant, 0);
  const iva = subtotal * IVA;
  return { subtotal, iva, total: subtotal + iva };
}

function pintarCotizacion() {
  $("badge").textContent = cotizacion.reduce((s, i) => s + i.cant, 0);
  if (cotizacion.length === 0) {
    $("listaCot").innerHTML = "<p class='vacio'>Aún no has agregado repuestos. Ve al catálogo y presiona “+ Cotizar”.</p>";
    $("totales").innerHTML = "";
    return;
  }
  $("listaCot").innerHTML = cotizacion.map(i => {
    const r = repuestos.find(x => x.np === i.np);
    return `<div class="item">
      <div><b>${r.desc}</b><small>${r.np} · ${r.marca} · ${usd(r.precio)} c/u</small></div>
      <input type="number" min="1" max="999" value="${i.cant}" data-cambiar="${i.np}" aria-label="Cantidad">
      <button class="quitar" data-quitar="${i.np}" aria-label="Quitar">✖</button>
    </div>`;
  }).join("");
  const t = calcular();
  $("totales").innerHTML = `
    <div><span>Subtotal</span><span>${usd(t.subtotal)}</span></div>
    <div><span>IVA (16%)</span><span>${usd(t.iva)}</span></div>
    <div class="total"><span>Total</span><span>${usd(t.total)}</span></div>`;
}

$("listaCot").addEventListener("click", e => {
  const np = e.target.dataset.quitar;
  if (!np) return;
  cotizacion = cotizacion.filter(i => i.np !== np);
  pintarCotizacion();
});
$("listaCot").addEventListener("change", e => {
  const np = e.target.dataset.cambiar;
  if (!np) return;
  const cant = parseInt(e.target.value, 10);
  const item = cotizacion.find(i => i.np === np);
  if (isNaN(cant) || cant < 1 || cant > 999) {
    aviso("⚠️ La cantidad debe estar entre 1 y 999");
    e.target.value = item.cant;
    return;
  }
  item.cant = cant;
  pintarCotizacion();
});
$("vaciar").addEventListener("click", () => {
  if (cotizacion.length === 0) return;
  cotizacion = [];
  pintarCotizacion();
  aviso("🗑️ Lista vaciada");
});

// ----- Validaciones del formulario -----
function marcar(id, err) {
  const campo = $(id).parentElement;
  campo.querySelector(".error").textContent = err;
  campo.classList.toggle("invalido", err !== "");
  campo.classList.toggle("valido", err === "");
  return err === "";
}
const validaciones = {
  empresa: v => v === "" ? "La razón social es obligatoria." : v.length < 4 ? "Mínimo 4 caracteres." : "",
  rif: v => v === "" ? "El RIF es obligatorio." : !/^[JGVEP]-\d{8}-\d$/i.test(v) ? "Formato válido: J-12345678-9 (J, G, V, E o P)." : "",
  contactoNombre: v => v === "" ? "El nombre es obligatorio." : !/^[a-záéíóúñü\s]+$/i.test(v) ? "Solo letras y espacios." : v.split(/\s+/).length < 2 ? "Escribe nombre y apellido." : "",
  email: v => v === "" ? "El correo es obligatorio." : !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v) ? "Correo inválido (ej.: compras@empresa.com)." : "",
  telefono: v => v === "" ? "El teléfono es obligatorio." : !/^0(2\d{2}|4(12|14|16|24|26))-\d{7}$/.test(v) ? "Formato: 0414-1234567 o 0291-1234567." : "",
  entrega: v => v === "" ? "Selecciona una forma de entrega." : ""
};
Object.keys(validaciones).forEach(id => {
  const ev = id === "entrega" ? "change" : "blur";
  $(id).addEventListener(ev, () => marcar(id, validaciones[id]($(id).value.trim())));
});

// Formato automático del RIF y teléfono mientras se escribe
$("rif").addEventListener("input", e => {
  let v = e.target.value.toUpperCase().replace(/[^JGVEP0-9]/g, "");
  if (v.length > 1) v = v[0] + "-" + v.slice(1);
  if (v.length > 10) v = v.slice(0, 10) + "-" + v.slice(10, 11);
  e.target.value = v;
});
$("telefono").addEventListener("input", e => {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length > 4) v = v.slice(0, 4) + "-" + v.slice(4, 11);
  e.target.value = v;
});

// ----- Generar cotización -----
$("formCot").addEventListener("submit", e => {
  e.preventDefault();
  const ok = Object.keys(validaciones).map(id => marcar(id, validaciones[id]($(id).value.trim()))).every(Boolean);
  $("errLista").textContent = cotizacion.length === 0 ? "⚠️ Agrega al menos un repuesto del catálogo." : "";
  if (!ok || cotizacion.length === 0) {
    aviso("⚠️ Revisa los campos marcados en rojo");
    return;
  }
  const hoy = new Date();
  const vence = new Date(hoy.getTime() + 15 * 86400000);
  const numero = "COT-" + hoy.getFullYear() + "-" + String(Math.floor(Math.random() * 9000) + 1000);
  const t = calcular();
  const filas = cotizacion.map((i, n) => {
    const r = repuestos.find(x => x.np === i.np);
    return `<tr><td>${n + 1}</td><td class="np">${r.np}</td><td>${r.desc}<br><small>${r.marca} – ${r.modelo}</small></td>
      <td>${i.cant}</td><td>${usd(r.precio)}</td><td>${usd(r.precio * i.cant)}</td></tr>`;
  }).join("");
  const obsTxt = $("obs").value.trim();

  $("modalContenido").innerHTML = `
    <div class="doc">
      <div class="doc__cab">
        <div><h2>⚙️ TMyC de Venezuela C.A.</h2><p>RIF J-00000000-0 · Maturín, Monagas<br>ventas@tmycvenezuela.com · 0291-555-0000</p></div>
        <div><h2>COTIZACIÓN</h2><p><b>N°:</b> ${numero}<br><b>Fecha:</b> ${hoy.toLocaleDateString("es-VE")}<br><b>Válida hasta:</b> ${vence.toLocaleDateString("es-VE")}</p></div>
      </div>
      <p><b>Cliente:</b> ${$("empresa").value.trim()} · <b>RIF:</b> ${$("rif").value.toUpperCase()}<br>
      <b>Contacto:</b> ${$("contactoNombre").value.trim()} · ${$("email").value.trim()} · ${$("telefono").value}<br>
      <b>Entrega:</b> ${$("entrega").value}</p>
      <div class="tabla-wrap"><table>
        <thead><tr><th>#</th><th>N° parte</th><th>Descripción</th><th>Cant.</th><th>P. unit.</th><th>Importe</th></tr></thead>
        <tbody>${filas}</tbody>
      </table></div>
      <div class="totales">
        <div><span>Subtotal</span><span>${usd(t.subtotal)}</span></div>
        <div><span>IVA (16%)</span><span>${usd(t.iva)}</span></div>
        <div class="total"><span>Total</span><span>${usd(t.total)}</span></div>
      </div>
      ${obsTxt ? `<p><b>Observaciones:</b> ${obsTxt.replace(/</g, "&lt;")}</p>` : ""}
      <p class="doc__pie">Precios en dólares (USD), referenciales y sujetos a disponibilidad. Los repuestos “por pedido” tienen un tiempo de entrega de 15 a 30 días.</p>
      <div class="modal__btns">
        <button class="btn btn--gris" id="cerrarModal">Cerrar</button>
        <button class="btn" id="imprimir">🖨️ Imprimir / PDF</button>
      </div>
    </div>`;
  $("modal").classList.add("abierto");
  $("cerrarModal").addEventListener("click", () => $("modal").classList.remove("abierto"));
  $("imprimir").addEventListener("click", () => window.print());
});
$("modal").addEventListener("click", e => { if (e.target.id === "modal") $("modal").classList.remove("abierto"); });

// ----- Inicio -----
pintarCatalogo();
pintarCotizacion();
