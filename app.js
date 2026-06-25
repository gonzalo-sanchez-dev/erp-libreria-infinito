const TODAY_ISO = "2026-06-17";
const TODAY_LABEL = "Miércoles, 17 de junio de 2026";

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const formatNumber = (value) => new Intl.NumberFormat("es-AR").format(Number(value || 0));

const formatDateTime = (iso) => {
  const d = new Date(iso);
  return d.toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const users = [
  { id: "u1", name: "Vero", role: "Dueña", roleKey: "admin", active: true, password: "demo" },
  { id: "u2", name: "Agus", role: "Vendedora", roleKey: "seller", active: true, password: "demo" },
  { id: "u3", name: "Ari", role: "Vendedora", roleKey: "seller", active: true, password: "demo" },
  { id: "u4", name: "Ana", role: "Vendedora", roleKey: "seller", active: true, password: "demo" },
];

let books = [
  { id: "b1", title: "Cien años de soledad", author: "Gabriel García Márquez", isbn: "978-0307474728", editorial: "Sudamericana", category: "Novela", subcategory: "Realismo mágico", price: 28500, cost: 17000, stock: 6, minStock: 3, location: "Estantería A1", lastUpdate: "2026-06-15" },
  { id: "b2", title: "El principito", author: "Antoine de Saint-Exupéry", isbn: "978-0156012195", editorial: "Salamandra", category: "Infantil", subcategory: "Clásicos", price: 12900, cost: 7300, stock: 14, minStock: 5, location: "Sector infantil", lastUpdate: "2026-06-13" },
  { id: "b3", title: "Rayuela", author: "Julio Cortázar", isbn: "978-8437604572", editorial: "Alfaguara", category: "Literatura Argentina", subcategory: "Novela", price: 25300, cost: 15400, stock: 3, minStock: 4, location: "Estantería A2", lastUpdate: "2026-06-16" },
  { id: "b4", title: "1984", author: "George Orwell", isbn: "978-0451524935", editorial: "Debolsillo", category: "Novela", subcategory: "Distopía", price: 18700, cost: 11200, stock: 0, minStock: 4, location: "Estantería A1", lastUpdate: "2026-06-10" },
  { id: "b5", title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", isbn: "978-8478884452", editorial: "Salamandra", category: "Juvenil", subcategory: "Fantasía", price: 32000, cost: 19900, stock: 9, minStock: 4, location: "Vidriera", lastUpdate: "2026-06-14" },
  { id: "b6", title: "Hábitos Atómicos", author: "James Clear", isbn: "978-0735211292", editorial: "Paidós", category: "Autoayuda", subcategory: "Productividad", price: 26800, cost: 16000, stock: 2, minStock: 5, location: "Mesa central", lastUpdate: "2026-06-17" },
  { id: "b7", title: "Mafalda Selección", author: "Quino", isbn: "978-9505156321", editorial: "De la Flor", category: "Cómics / Manga", subcategory: "Humor gráfico", price: 15400, cost: 8800, stock: 5, minStock: 3, location: "Estantería B1", lastUpdate: "2026-06-12" },
  { id: "b8", title: "Historia argentina esencial", author: "Varios autores", isbn: "978-9870001234", editorial: "Kapelusz", category: "Historia", subcategory: "Argentina", price: 21900, cost: 13400, stock: 4, minStock: 3, location: "Estantería B1", lastUpdate: "2026-06-11" },
  { id: "b9", title: "Cuaderno universitario A4", author: "Genérico", isbn: "", editorial: "Rivadavia", category: "Agendas y papelería", subcategory: "Cuadernos", price: 3500, cost: 1900, stock: 25, minStock: 10, location: "Mostrador", lastUpdate: "2026-06-16" },
  { id: "b10", title: "Agenda semanal 2026", author: "Genérico", isbn: "", editorial: "Mooving", category: "Agendas y papelería", subcategory: "Agendas", price: 9800, cost: 5300, stock: 7, minStock: 5, location: "Mesa central", lastUpdate: "2026-06-17" },
  { id: "b11", title: "Psicología para principiantes", author: "Marina Castro", isbn: "978-9871053122", editorial: "Lectura Sur", category: "Psicología", subcategory: "Introducción", price: 17600, cost: 10100, stock: 1, minStock: 3, location: "Estantería B1", lastUpdate: "2026-06-09" },
  { id: "b12", title: "Manual de estudio universitario", author: "Equipo Aula", isbn: "978-9877788120", editorial: "Aula", category: "Universitarios", subcategory: "Técnicas de estudio", price: 14400, cost: 7900, stock: 11, minStock: 4, location: "Sector escolar", lastUpdate: "2026-06-08" },
  { id: "b13", title: "El intercambio", author: "John Grisham", isbn: "978-6316503024", editorial: "Plaza & Janés", category: "Novela", subcategory: "Thriller", price: 44999, cost: 27900, stock: 4, minStock: 2, location: "Mesa central", lastUpdate: "2026-06-17" },
  { id: "b14", title: "Murdoku: 80 acertijos de lógica y asesinatos", author: "Manuel Garand", isbn: "978-9504987063", editorial: "Sudoku Books", category: "Juegos y pasatiempos", subcategory: "Acertijos", price: 21900, cost: 12600, stock: 6, minStock: 2, location: "Vidriera", lastUpdate: "2026-06-17" },
  { id: "b15", title: "Los días de la Constitución", author: "Eduardo Sacheri", isbn: "978-9878221566", editorial: "Alfaguara", category: "Historia", subcategory: "Argentina", price: 44999, cost: 28200, stock: 3, minStock: 2, location: "Mesa central", lastUpdate: "2026-06-17" },
];

let sales = [
  { id: "s124", number: "V-000124", date: "2026-06-17T09:22:00", customer: "Consumidor final", employeeId: "u3", paymentMethod: "Efectivo", status: "Pagada", invoiceStatus: "Factura pendiente", discount: 0, items: [{ bookId: "b3", qty: 1, price: 25300 }, { bookId: "b9", qty: 2, price: 3500 }] },
  { id: "s125", number: "V-000125", date: "2026-06-17T10:18:00", customer: "Consumidor final", employeeId: "u2", paymentMethod: "Mercado Pago", status: "Pagada", invoiceStatus: "Factura emitida simulada", discount: 5, items: [{ bookId: "b6", qty: 1, price: 26800 }] },
  { id: "s126", number: "V-000126", date: "2026-06-17T11:41:00", customer: "Colegio San Martín", employeeId: "u4", paymentMethod: "Transferencia", status: "Pagada", invoiceStatus: "Factura pendiente", discount: 10, items: [{ bookId: "b2", qty: 4, price: 12900 }, { bookId: "b12", qty: 2, price: 14400 }] },
  { id: "s127", number: "V-000127", date: "2026-06-17T12:05:00", customer: "Consumidor final", employeeId: "u3", paymentMethod: "Tarjeta débito", status: "Pagada", invoiceStatus: "Consumidor final", discount: 0, items: [{ bookId: "b5", qty: 1, price: 32000 }] },
  { id: "s128", number: "V-000128", date: "2026-06-16T18:10:00", customer: "Consumidor final", employeeId: "u2", paymentMethod: "Tarjeta crédito", status: "Pagada", invoiceStatus: "Factura emitida simulada", discount: 0, items: [{ bookId: "b1", qty: 1, price: 28500 }] },
  { id: "s129", number: "V-000129", date: "2026-06-16T18:42:00", customer: "Consumidor final", employeeId: "u4", paymentMethod: "Efectivo", status: "Anulada", invoiceStatus: "No emitida", discount: 0, items: [{ bookId: "b4", qty: 1, price: 18700 }] },
];

let cashRegister = {
  id: "caja-20260617",
  date: TODAY_ISO,
  status: "Abierta",
  responsibleId: "u2",
  openedAt: "2026-06-17T09:05:00",
  initialBalance: 45000,
  declaredTotal: null,
  closedAt: null,
  difference: null,
};

let cashMovements = [
  { id: "cm1", date: "2026-06-17T09:05:00", type: "Apertura", description: "Saldo inicial de caja", userId: "u2", method: "Efectivo", amount: 45000 },
  { id: "cm2", date: "2026-06-17T11:10:00", type: "Egreso", description: "Compra de bolsas para entrega", userId: "u2", method: "Efectivo", amount: -4200 },
  { id: "cm3", date: "2026-06-17T13:15:00", type: "Retiro", description: "Retiro parcial de efectivo", userId: "u1", method: "Efectivo", amount: -30000 },
];

let cashHistory = [
  { id: "h1", date: "2026-06-16", responsibleId: "u2", openedAt: "2026-06-16T09:00:00", closedAt: "2026-06-16T19:02:00", initialBalance: 40000, salesTotal: 385600, declaredTotal: 385100, difference: -500, status: "Diferencia menor" },
  { id: "h2", date: "2026-06-15", responsibleId: "u3", openedAt: "2026-06-15T09:10:00", closedAt: "2026-06-15T18:54:00", initialBalance: 38000, salesTotal: 274800, declaredTotal: 274800, difference: 0, status: "Sin diferencia" },
  { id: "h3", date: "2026-06-14", responsibleId: "u4", openedAt: "2026-06-14T09:03:00", closedAt: "2026-06-14T18:40:00", initialBalance: 35000, salesTotal: 331900, declaredTotal: 329900, difference: -2000, status: "Diferencia a revisar" },
];

let stockMovements = [
  { id: "sm1", date: "2026-06-17T09:22:00", bookId: "b3", type: "Venta", qty: -1, previous: 4, next: 3, userId: "u3", reason: "Venta V-000124" },
  { id: "sm2", date: "2026-06-17T09:22:00", bookId: "b9", type: "Venta", qty: -2, previous: 27, next: 25, userId: "u3", reason: "Venta V-000124" },
  { id: "sm3", date: "2026-06-17T10:18:00", bookId: "b6", type: "Venta", qty: -1, previous: 3, next: 2, userId: "u2", reason: "Venta V-000125" },
  { id: "sm4", date: "2026-06-16T15:30:00", bookId: "b2", type: "Ingreso manual", qty: 10, previous: 4, next: 14, userId: "u1", reason: "Reposición semanal" },
  { id: "sm5", date: "2026-06-15T17:45:00", bookId: "b4", type: "Ajuste negativo", qty: -2, previous: 2, next: 0, userId: "u2", reason: "Corrección de inventario" },
];

const categories = [...new Set(books.map((b) => b.category))];
const locations = [...new Set(books.map((b) => b.location))];
const paymentMethods = ["Efectivo", "Transferencia", "Tarjeta débito", "Tarjeta crédito", "Mercado Pago"];

const top10DiscountRate = 10;
let cuspideTop10 = [
  { rank: 1, title: "El intercambio", author: "John Grisham", price: 44999, source: "Cúspide", matchIsbn: "978-6316503024" },
  { rank: 2, title: "Murdoku: 80 acertijos de lógica y asesinatos", author: "Manuel Garand", price: 21900, source: "Cúspide", matchIsbn: "978-9504987063" },
  { rank: 3, title: "Los días de la Constitución", author: "Eduardo Sacheri", price: 44999, source: "Cúspide", matchIsbn: "978-9878221566" },
  { rank: 4, title: "Montoneros", author: "María O'Donnell", price: 43900, source: "Cúspide", matchIsbn: "978-9877256915" },
  { rank: 5, title: "Arena no quiere dormir", author: "Jimena Le Bellot", price: 18900, source: "Cúspide", matchIsbn: "978-9500000005" },
  { rank: 6, title: "Romper el código", author: "Javier Carrizo", price: 23000, source: "Cúspide", matchIsbn: "978-9500000006" },
  { rank: 7, title: "El buen mal", author: "Samanta Schweblin", price: 29900, source: "Cúspide", matchIsbn: "978-9500000007" },
  { rank: 8, title: "76", author: "Felipe Pigna", price: 31900, source: "Cúspide", matchIsbn: "978-9500000008" },
  { rank: 9, title: "Las gratitudes", author: "Delphine de Vigan", price: 22900, source: "Cúspide", matchIsbn: "978-9500000009" },
  { rank: 10, title: "Podría quedarme acá", author: "Claudia Aboaf", price: 25900, source: "Cúspide", matchIsbn: "978-9500000010" },
];
let top10LastUpdate = "17/06/2026 10:30";

let bookRequests = [
  { id: "p1", date: "2026-06-17", title: "Antes de diciembre", link: "https://ejemplo.com/libro", agreedPrice: 24500, customerName: "Mariana López", phone: "351 555-0182", note: "Avisar por WhatsApp cuando ingrese. Seña pendiente.", status: "Pendiente" },
  { id: "p2", date: "2026-06-16", title: "El viento conoce mi nombre", link: "", agreedPrice: 0, customerName: "Pablo Gómez", phone: "351 555-7710", note: "Cliente consulta edición de bolsillo.", status: "Consultado" },
  { id: "p3", date: "2026-06-15", title: "Atlas de anatomía", link: "", agreedPrice: 62000, customerName: "Lucía Ferreyra", phone: "3525 555-430", note: "Necesita para universidad. Prioridad alta.", status: "Reservado" },
];

let tutorialVideos = [
  { id: "t1", title: "Cómo registrar una venta", category: "Ventas", duration: "03:20", description: "Paso a paso para buscar libros, agregarlos al carrito y confirmar el cobro.", url: "" },
  { id: "t2", title: "Cómo consultar stock por ISBN", category: "Stock", duration: "02:10", description: "Búsqueda rápida por código ISBN, título o autor.", url: "" },
  { id: "t3", title: "Cómo cerrar la caja", category: "Caja", duration: "04:05", description: "Revisión de efectivo esperado, dinero declarado y diferencias.", url: "" },
  { id: "t4", title: "Cómo cargar un pedido de cliente", category: "Pedidos", duration: "02:45", description: "Registro de pedidos, contacto del cliente y observaciones.", url: "" },
];

let detectedRemitoItems = [
  { title: "El intercambio", author: "John Grisham", isbn: "978-6316503024", editorial: "Plaza & Janés", category: "Novela", price: 44999, qty: 2, location: "Mesa central", confidence: 96 },
  { title: "Murdoku: 80 acertijos de lógica y asesinatos", author: "Manuel Garand", isbn: "978-9504987063", editorial: "Sudoku Books", category: "Juegos y pasatiempos", price: 21900, qty: 3, location: "Vidriera", confidence: 92 },
  { title: "Los días de la Constitución", author: "Eduardo Sacheri", isbn: "978-9878221566", editorial: "Alfaguara", category: "Historia", price: 44999, qty: 1, location: "Mesa central", confidence: 89 },
  { title: "Cuaderno universitario A4", author: "Genérico", isbn: "", editorial: "Rivadavia", category: "Agendas y papelería", price: 3500, qty: 12, location: "Mostrador", confidence: 74 },
];

let supplierPriceRows = [
  { isbn: "978-0307474728", title: "Cien años de soledad", supplierPrice: 31500 },
  { isbn: "978-0156012195", title: "El principito", supplierPrice: 14500 },
  { isbn: "978-6316503024", title: "El intercambio", supplierPrice: 48900 },
  { isbn: "978-9878221566", title: "Los días de la Constitución", supplierPrice: 46900 },
  { isbn: "978-0000000000", title: "Libro no existente en stock", supplierPrice: 19900 },
];

const state = {
  currentUserId: null,
  view: "dashboard",
  selectedSaleId: null,
  saleSearch: "",
  saleCustomer: "Consumidor final",
  salePayment: "Efectivo",
  saleDiscount: 0,
  cart: [],
  salesFilter: "",
  inventorySearch: "",
  inventoryCategory: "Todas",
  inventoryStatus: "Todos",
  inventoryLocation: "Todas",
  movementSearch: "",
  reportPeriod: "Mes",
  modal: null,
  mobileMenuOpen: false,
  orderSearch: "",
  remitoDetected: false,
  pricePreview: false,
  tutorialSearch: "",
};

const getUser = (id) => users.find((u) => u.id === id);
const currentUser = () => getUser(state.currentUserId);
const getBook = (id) => books.find((b) => b.id === id);
const getSaleTotal = (sale) => {
  const subtotal = sale.items.reduce((sum, item) => sum + item.qty * item.price, 0);
  return Math.round(subtotal * (1 - Number(sale.discount || 0) / 100));
};
const getSaleSubtotal = (sale) => sale.items.reduce((sum, item) => sum + item.qty * item.price, 0);

const businessInfo = {
  name: "Infinito Libros",
  cuit: "30-00000000-0",
  address: "Av. Principal 123, Córdoba",
  phone: "0351 000-0000",
  taxCondition: "Responsable Monotributo",
  startDate: "01/01/2026",
};

function makeInvoiceNumber(sale) {
  const numeric = String(sale.number || "").replace(/\D/g, "") || String(sales.length + 1);
  return `00003-${numeric.padStart(8, "0")}`;
}

function makeCae(sale) {
  const source = `${sale.id}-${sale.number}`;
  const seed = source.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return `746${String(seed).padStart(11, "0")}`.slice(0, 14);
}

function ensureInvoice(sale) {
  if (!sale) return null;
  if (!sale.invoice) {
    sale.invoice = {
      type: "Factura C",
      pointOfSale: "00003",
      number: makeInvoiceNumber(sale),
      cae: makeCae(sale),
      caeDueDate: "27/06/2026",
      issuedAt: `${TODAY_ISO}T16:55:00`,
      arcaStatus: "Emitida en modo demo",
    };
  }
  sale.invoiceStatus = "Factura emitida simulada";
  return sale.invoice;
}

function invoiceLabel(sale) {
  const invoice = sale?.invoice;
  return invoice ? `${invoice.type} ${invoice.number}` : "Factura pendiente";
}

function buildPrintableInvoiceHtml(sale) {
  const invoice = ensureInvoice(sale);
  const user = getUser(sale.employeeId);
  const subtotal = getSaleSubtotal(sale);
  const total = getSaleTotal(sale);
  const discountAmount = subtotal - total;
  const rows = sale.items
    .map((item) => {
      const book = getBook(item.bookId);
      return `<tr>
        <td><strong>${escapeHtml(book?.title || "Producto")}</strong><br><small>${escapeHtml(book?.author || "")} · ISBN: ${escapeHtml(book?.isbn || "Sin ISBN")}</small></td>
        <td class="num">${item.qty}</td>
        <td class="num">${formatCurrency(item.price)}</td>
        <td class="num">${formatCurrency(item.qty * item.price)}</td>
      </tr>`;
    })
    .join("");
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(invoiceLabel(sale))} - ${escapeHtml(sale.number)}</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; color: #1f1f1f; margin: 0; background: #f4f1eb; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; background: white; padding: 18mm; }
    .invoice-head { display: grid; grid-template-columns: 1fr 130px 1fr; gap: 16px; align-items: start; border-bottom: 2px solid #1F4D4A; padding-bottom: 18px; }
    .brand h1 { margin: 0 0 8px; color: #1F4D4A; font-size: 28px; }
    .brand p, .client p, .meta p { margin: 4px 0; font-size: 12px; }
    .letter { border: 2px solid #1F4D4A; text-align: center; padding: 10px 8px; color: #1F4D4A; }
    .letter strong { font-size: 42px; line-height: 1; display: block; }
    .letter span { font-size: 11px; }
    .meta { text-align: right; }
    .meta h2 { margin: 0 0 8px; font-size: 20px; }
    .section { margin-top: 18px; border: 1px solid #ddd; padding: 12px; }
    .section-title { margin: 0 0 8px; font-size: 13px; color: #1F4D4A; text-transform: uppercase; letter-spacing: .04em; }
    table { width: 100%; border-collapse: collapse; margin-top: 18px; }
    th { background: #F7F1E8; text-align: left; font-size: 12px; padding: 10px; border-bottom: 1px solid #ddd; }
    td { font-size: 12px; padding: 10px; border-bottom: 1px solid #eee; vertical-align: top; }
    small { color: #666; }
    .num { text-align: right; white-space: nowrap; }
    .totals { width: 45%; margin-left: auto; margin-top: 18px; }
    .totals div { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; font-size: 13px; }
    .totals .grand { font-size: 18px; font-weight: bold; color: #1F4D4A; border-bottom: 2px solid #1F4D4A; }
    .footer { margin-top: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .badge { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #EAF3F2; color: #1F4D4A; font-size: 12px; font-weight: bold; }
    .demo-note { margin-top: 18px; font-size: 11px; color: #777; border-top: 1px dashed #ccc; padding-top: 10px; }
    .print-actions { position: sticky; top: 0; padding: 10px; background: #1F4D4A; text-align: center; }
    .print-actions button { background: white; border: 0; border-radius: 8px; padding: 10px 16px; font-weight: bold; cursor: pointer; }
    @media print {
      body { background: white; }
      .page { width: auto; min-height: auto; padding: 0; margin: 0; }
      .print-actions { display: none; }
    }
  </style>
</head>
<body>
  <div class="print-actions"><button onclick="window.print()">Imprimir factura</button></div>
  <main class="page">
    <header class="invoice-head">
      <div class="brand">
        <h1>${escapeHtml(businessInfo.name)}</h1>
        <p><strong>Razón social:</strong> ${escapeHtml(businessInfo.name)}</p>
        <p><strong>CUIT:</strong> ${escapeHtml(businessInfo.cuit)}</p>
        <p><strong>Domicilio:</strong> ${escapeHtml(businessInfo.address)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(businessInfo.phone)}</p>
        <p><strong>Condición IVA:</strong> ${escapeHtml(businessInfo.taxCondition)}</p>
      </div>
      <div class="letter"><strong>C</strong><span>COD. 011</span></div>
      <div class="meta">
        <h2>${escapeHtml(invoice.type)}</h2>
        <p><strong>Punto de venta y número:</strong> ${escapeHtml(invoice.number)}</p>
        <p><strong>Fecha emisión:</strong> ${formatDateTime(invoice.issuedAt)}</p>
        <p><strong>Venta asociada:</strong> ${escapeHtml(sale.number)}</p>
        <p><strong>Inicio actividades:</strong> ${escapeHtml(businessInfo.startDate)}</p>
      </div>
    </header>

    <section class="section client">
      <h3 class="section-title">Datos del cliente</h3>
      <p><strong>Cliente:</strong> ${escapeHtml(sale.customer || "Consumidor final")}</p>
      <p><strong>Condición IVA:</strong> Consumidor Final</p>
      <p><strong>Medio de pago:</strong> ${escapeHtml(sale.paymentMethod)}</p>
      <p><strong>Atendió:</strong> ${escapeHtml(user?.name || "-")}</p>
    </section>

    <table>
      <thead><tr><th>Detalle</th><th class="num">Cantidad</th><th class="num">Precio unitario</th><th class="num">Subtotal</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <section class="totals">
      <div><span>Subtotal</span><strong>${formatCurrency(subtotal)}</strong></div>
      <div><span>Descuento</span><strong>-${formatCurrency(discountAmount)}</strong></div>
      <div class="grand"><span>Total</span><strong>${formatCurrency(total)}</strong></div>
    </section>

    <section class="footer">
      <div class="section">
        <h3 class="section-title">Autorización electrónica simulada</h3>
        <p><strong>CAE:</strong> ${escapeHtml(invoice.cae)}</p>
        <p><strong>Vencimiento CAE:</strong> ${escapeHtml(invoice.caeDueDate)}</p>
        <p><span class="badge">${escapeHtml(invoice.arcaStatus)}</span></p>
      </div>
      <div class="section">
        <h3 class="section-title">Observación</h3>
        <p>Comprobante generado desde la demo navegable de Infinito Libros.</p>
        <p>La integración real con ARCA queda prevista para una etapa posterior.</p>
      </div>
    </section>

    <p class="demo-note">Documento de demostración sin validez fiscal. No representa una factura real ni una conexión real con ARCA.</p>
  </main>
</body>
</html>`;
}

const isToday = (iso) => String(iso).startsWith(TODAY_ISO);
const isThisMonth = (iso) => String(iso).startsWith("2026-06");
const activeSales = () => sales.filter((sale) => sale.status !== "Anulada");
const todaySales = () => activeSales().filter((sale) => isToday(sale.date));
const monthSales = () => activeSales().filter((sale) => isThisMonth(sale.date));

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function isCuspideTop10(book) {
  if (!book) return false;
  const normalizedTitle = normalizeText(book.title);
  return cuspideTop10.some((item) => item.matchIsbn === book.isbn || normalizeText(item.title) === normalizedTitle);
}

function effectiveBookPrice(book) {
  if (!book) return 0;
  return isCuspideTop10(book) ? Math.round(Number(book.price) * (1 - top10DiscountRate / 100)) : Number(book.price || 0);
}

function top10BookIdsInInventory() {
  return books.filter((book) => isCuspideTop10(book)).map((book) => book.id);
}

function bookStatus(book) {
  if (book.discontinued) return "Discontinuado";
  if (Number(book.stock) <= 0) return "Sin stock";
  if (Number(book.stock) <= Number(book.minStock)) return "Bajo stock";
  return "Disponible";
}

function badgeClass(status) {
  const normalized = String(status).toLowerCase();
  if (normalized.includes("disponible") || normalized.includes("pagada") || normalized.includes("abierta") || normalized.includes("sin diferencia")) return "badge-success";
  if (normalized.includes("bajo") || normalized.includes("pendiente") || normalized.includes("menor")) return "badge-warning";
  if (normalized.includes("sin stock") || normalized.includes("anulada") || normalized.includes("revisar")) return "badge-danger";
  if (normalized.includes("emitida") || normalized.includes("arca") || normalized.includes("futura") || normalized.includes("top 10") || normalized.includes("procesado") || normalized.includes("tutorial")) return "badge-info";
  return "badge-gray";
}

function badge(status) {
  return `<span class="badge ${badgeClass(status)}">${escapeHtml(status)}</span>`;
}

function renderMetric(label, value, note = "") {
  return `<div class="card metric-card"><div><div class="metric-label">${label}</div><div class="metric-value">${value}</div></div><div class="metric-note">${note}</div></div>`;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", roles: ["admin", "seller"] },
  { id: "budget", label: "Presupuesto", roles: ["admin"] },
  { id: "sales", label: "Ventas", roles: ["admin", "seller"] },
  { id: "newSale", label: "Nueva venta", roles: ["admin", "seller"] },
  { id: "cash", label: "Caja actual", roles: ["admin", "seller"] },
  { id: "cashHistory", label: "Historial de cajas", roles: ["admin"] },
  { id: "inventory", label: "Stock / Inventario", roles: ["admin", "seller"] },
  { id: "stockMovements", label: "Movimientos de stock", roles: ["admin", "seller"] },
  { id: "requests", label: "Pedidos", roles: ["admin", "seller"] },
  { id: "bulkImport", label: "Carga masiva", roles: ["admin", "seller"] },
  { id: "priceUpdate", label: "Actualizar precios", roles: ["admin"] },
  { id: "top10", label: "Top 10 Cúspide", roles: ["admin", "seller"] },
  { id: "tutorials", label: "Tutoriales", roles: ["admin", "seller"] },
  { id: "reports", label: "Reportes", roles: ["admin", "seller"] },
  { id: "users", label: "Usuarios", roles: ["admin"] },
  { id: "settings", label: "Configuración", roles: ["admin"] },
];

function canAccess(view) {
  const user = currentUser();
  const item = menuItems.find((m) => m.id === view);
  if (!item || !user) return true;
  return item.roles.includes(user.roleKey);
}

function renderLogin() {
  return `
    <main class="login-page">
      <section class="login-card">
        <div class="login-logo">LG</div>
        <p class="eyebrow">Demo navegable</p>
        <h1 class="login-title">Infinito Libros</h1>
        <p class="login-subtitle">Sistema simple para ventas, caja, stock y reportes de una librería chica o mediana.</p>
        <div class="field">
          <label>Usuario de prueba</label>
          <select id="loginUser" class="select">
            ${users.map((user) => `<option value="${user.id}">${escapeHtml(user.name)} — ${escapeHtml(user.role)}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Contraseña simulada</label>
          <input id="loginPassword" class="input" type="password" value="demo" />
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="actions.login()">Ingresar al sistema</button>
        <div class="login-help">Para la demo, cualquier usuario ingresa con la contraseña <strong>demo</strong>. Los permisos y el menú cambian según el perfil seleccionado.</div>
      </section>
    </main>
  `;
}

function renderSidebar() {
  const user = currentUser();
  const availableItems = menuItems.filter((item) => item.roles.includes(user.roleKey));
  return `
    <aside class="sidebar ${state.mobileMenuOpen ? "open" : ""}">
      <div class="brand">
        <div class="brand-mark">LG</div>
        <div>
          <div class="brand-name">Infinito Libros</div>
          <div class="brand-subtitle">Ventas, caja y stock</div>
        </div>
      </div>
      <nav class="nav">
        ${availableItems
          .map(
            (item) => `<button class="nav-button ${state.view === item.id ? "active" : ""}" onclick="actions.setView('${item.id}')"><span class="nav-dot"></span>${item.label}</button>`
          )
          .join("")}
      </nav>
      <div class="sidebar-user">
        <strong>${escapeHtml(user.name)}</strong>
        <span>${escapeHtml(user.role)}</span>
        <button class="logout-btn" onclick="actions.logout()">Cerrar sesión</button>
      </div>
    </aside>
  `;
}

function pageHeader(title, subtitle, action = "") {
  const user = currentUser();
  return `
    <header class="topbar">
      <div>
        <p class="eyebrow">${TODAY_LABEL}</p>
        <h1 class="page-title">${title}</h1>
        ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ""}
      </div>
      <div class="topbar-actions">
        <span class="user-pill">${escapeHtml(user.name)} · ${escapeHtml(user.role)}</span>
        ${action}
      </div>
    </header>
  `;
}

function renderLayout(content) {
  return `
    <div class="mobile-topbar">
      <strong>Infinito Libros</strong>
      <button onclick="actions.toggleMenu()">Menú</button>
    </div>
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main">
        ${content}
      </main>
    </div>
    ${renderModal()}
  `;
}

function getDashboardStats() {
  const tSales = todaySales();
  const mSales = monthSales();
  const todayTotal = tSales.reduce((sum, s) => sum + getSaleTotal(s), 0);
  const monthTotal = mSales.reduce((sum, s) => sum + getSaleTotal(s), 0);
  const soldBooksToday = tSales.reduce((sum, sale) => sum + sale.items.reduce((itemSum, item) => itemSum + item.qty, 0), 0);
  const stockUnits = books.reduce((sum, book) => sum + Number(book.stock), 0);
  const lowStock = books.filter((book) => bookStatus(book) === "Bajo stock").length;
  const topBook = topBookByQty(mSales);
  const topCategory = topCategoryByQty(mSales);
  return { tSales, mSales, todayTotal, monthTotal, soldBooksToday, stockUnits, lowStock, topBook, topCategory };
}

function topBookByQty(sourceSales) {
  const qtyByBook = {};
  sourceSales.forEach((sale) => sale.items.forEach((item) => (qtyByBook[item.bookId] = (qtyByBook[item.bookId] || 0) + item.qty)));
  const topId = Object.entries(qtyByBook).sort((a, b) => b[1] - a[1])[0]?.[0];
  return topId ? getBook(topId)?.title : "Sin datos";
}

function topCategoryByQty(sourceSales) {
  const qtyByCategory = {};
  sourceSales.forEach((sale) =>
    sale.items.forEach((item) => {
      const book = getBook(item.bookId);
      if (book) qtyByCategory[book.category] = (qtyByCategory[book.category] || 0) + item.qty;
    })
  );
  return Object.entries(qtyByCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || "Sin datos";
}

function employeeSalesData(sourceSales = todaySales()) {
  return users
    .filter((user) => user.roleKey !== "admin")
    .map((user) => {
      const userSales = sourceSales.filter((sale) => sale.employeeId === user.id);
      const total = userSales.reduce((sum, sale) => sum + getSaleTotal(sale), 0);
      return { name: user.name, operations: userSales.length, total };
    })
    .sort((a, b) => b.total - a.total);
}

function categorySalesData(sourceSales = monthSales()) {
  const result = {};
  sourceSales.forEach((sale) =>
    sale.items.forEach((item) => {
      const book = getBook(item.bookId);
      if (!book) return;
      result[book.category] = (result[book.category] || 0) + item.qty * item.price;
    })
  );
  return Object.entries(result)
    .map(([category, total]) => ({ category, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);
}

function renderProgress(items, labelKey, valueKey, formatter = formatCurrency) {
  const max = Math.max(...items.map((item) => item[valueKey]), 1);
  return `<div class="progress-list">
    ${items
      .map(
        (item) => `<div>
          <div class="progress-item-head"><span>${escapeHtml(item[labelKey])}</span><span>${formatter(item[valueKey])}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${Math.round((item[valueKey] / max) * 100)}%"></div></div>
        </div>`
      )
      .join("")}
  </div>`;
}

function renderDashboard() {
  const stats = getDashboardStats();
  const cashExpected = calculateCashExpected();
  return `
    ${pageHeader("Dashboard", "Vista general del negocio, ventas del día, caja y alertas operativas.", `<button class="btn btn-primary" onclick="actions.setView('newSale')">Nueva venta</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Ventas del día", formatCurrency(stats.todayTotal), `${stats.tSales.length} operaciones registradas`)}
      ${renderMetric("Ventas del mes", formatCurrency(stats.monthTotal), "Junio 2026 · datos simulados")}
      ${renderMetric("Libros vendidos hoy", formatNumber(stats.soldBooksToday), "Unidades descontadas de stock")}
      ${renderMetric("Caja actual", formatCurrency(cashExpected), `${cashRegister.status} desde las 09:05`)}
    </section>
    <section class="grid grid-4" style="margin-top:16px">
      ${renderMetric("Libros en stock", formatNumber(stats.stockUnits), `${books.length} productos activos`)}
      ${renderMetric("Bajo stock", formatNumber(stats.lowStock), "Requieren reposición")}
      ${renderMetric("Libro más vendido", escapeHtml(stats.topBook), "Ranking mensual")}
      ${renderMetric("Categoría más vendida", escapeHtml(stats.topCategory), "Por unidades vendidas")}
    </section>
    <section class="grid grid-4" style="margin-top:16px">
      ${renderMetric("Pedidos pendientes", bookRequests.filter((request) => request.status !== "Entregado" && request.status !== "Cancelado").length, "Encargos de clientes")}
      ${renderMetric("Top 10 Cúspide", `${top10BookIdsInInventory().length} en stock`, `Descuento especial ${top10DiscountRate}%`)}
      ${renderMetric("Carga masiva", "PDF / Imagen", "Remitos con detección simulada")}
      ${renderMetric("Precios por ISBN", supplierPriceRows.length, "Registros de proveedor mock")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="toolbar" style="margin-bottom:0">
        <div>
          <h2 class="section-title" style="margin:0">Accesos rápidos operativos</h2>
          <p class="page-subtitle">Flujos incorporados según el trabajo diario de la librería.</p>
        </div>
        <div class="topbar-actions">
          <button class="btn btn-primary" onclick="actions.setView('bulkImport')">Cargar remito</button>
          <button class="btn btn-secondary" onclick="actions.setView('requests')">Nuevo pedido</button>
          <button class="btn btn-secondary" onclick="actions.setView('top10')">Ver Top 10</button>
          <button class="btn btn-secondary" onclick="actions.setView('tutorials')">Tutoriales</button>
        </div>
      </div>
    </section>
    <section class="grid grid-2" style="margin-top:16px">
      <div class="card">
        <h2 class="section-title">Ventas por vendedora</h2>
        ${renderProgress(employeeSalesData(), "name", "total")}
      </div>
      <div class="card">
        <h2 class="section-title">Ventas por categoría</h2>
        ${renderProgress(categorySalesData(), "category", "total")}
      </div>
    </section>
    <section class="grid grid-2" style="margin-top:16px">
      <div class="card">
        <div class="toolbar"><h2 class="section-title" style="margin:0">Últimas ventas</h2><button class="btn btn-secondary btn-small" onclick="actions.setView('sales')">Ver todas</button></div>
        ${renderSalesTable(todaySales().slice(0, 5), true)}
      </div>
      <div class="card">
        <h2 class="section-title">Alertas importantes</h2>
        ${renderAlerts()}
      </div>
    </section>
  `;
}

function renderAlerts() {
  const low = books.filter((book) => bookStatus(book) === "Bajo stock");
  const noIsbn = books.filter((book) => !book.isbn);
  const lastDiff = cashHistory.find((item) => item.difference !== 0);
  const alerts = [
    { title: `${low.length} productos con bajo stock`, text: low.slice(0, 3).map((b) => b.title).join(", ") || "Sin alertas de stock", status: "Bajo stock" },
    { title: "Caja pendiente de cierre", text: `Responsable: ${getUser(cashRegister.responsibleId).name}. Total esperado: ${formatCurrency(calculateCashExpected())}`, status: cashRegister.status },
    { title: `${noIsbn.length} productos sin ISBN`, text: "Conviene completar estos datos para mejorar búsquedas y reportes.", status: "Pendiente" },
    { title: "Diferencia de caja anterior", text: `${formatCurrency(lastDiff?.difference || 0)} en el cierre del ${lastDiff?.date || "día anterior"}.`, status: lastDiff?.status || "Sin diferencia" },
  ];
  return `<div class="alert-list">${alerts
    .map((alert) => `<div class="alert-item"><div><strong>${escapeHtml(alert.title)}</strong><span>${escapeHtml(alert.text)}</span></div>${badge(alert.status)}</div>`)
    .join("")}</div>`;
}

function renderSalesTable(sourceSales, compact = false) {
  if (!sourceSales.length) return `<div class="empty-state">No hay ventas para mostrar.</div>`;
  return `<div class="table-wrap"><table class="table">
    <thead><tr><th>Fecha</th><th>N° venta</th>${compact ? "" : "<th>Cliente</th>"}<th>Vendedora</th><th>Medio</th><th>Total</th><th>Estado</th><th>Factura</th><th>Acción</th></tr></thead>
    <tbody>
      ${sourceSales
        .map((sale) => {
          const user = getUser(sale.employeeId);
          return `<tr>
            <td>${formatDateTime(sale.date)}</td>
            <td><strong>${escapeHtml(sale.number)}</strong></td>
            ${compact ? "" : `<td>${escapeHtml(sale.customer)}</td>`}
            <td>${escapeHtml(user?.name || "-")}</td>
            <td>${escapeHtml(sale.paymentMethod)}</td>
            <td><strong>${formatCurrency(getSaleTotal(sale))}</strong></td>
            <td>${badge(sale.status)}</td>
            <td>${badge(sale.invoiceStatus)}</td>
            <td><button class="btn btn-secondary btn-small" onclick="actions.openSale('${sale.id}')">Ver detalle</button></td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table></div>`;
}

function renderSalesPage() {
  const query = state.salesFilter.trim().toLowerCase();
  const filtered = sales.filter((sale) => {
    const user = getUser(sale.employeeId);
    const haystack = `${sale.number} ${sale.customer} ${user?.name} ${sale.paymentMethod} ${sale.status} ${sale.invoiceStatus}`.toLowerCase();
    return haystack.includes(query);
  });
  const total = filtered.filter((s) => s.status !== "Anulada").reduce((sum, sale) => sum + getSaleTotal(sale), 0);
  const avg = filtered.length ? total / filtered.filter((s) => s.status !== "Anulada").length : 0;
  const pendingInvoices = filtered.filter((sale) => sale.invoiceStatus.includes("pendiente")).length;
  return `
    ${pageHeader("Ventas", "Listado de operaciones realizadas, comprobantes simulados y estado de facturación.", `<button class="btn btn-primary" onclick="actions.setView('newSale')">Nueva venta</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Ventas filtradas", formatCurrency(total), `${filtered.length} registros visibles`)}
      ${renderMetric("Ticket promedio", formatCurrency(avg), "Según ventas filtradas")}
      ${renderMetric("Facturas pendientes", pendingInvoices, "ARCA simulada")}
      ${renderMetric("Operaciones hoy", todaySales().length, "Ventas no anuladas")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="filters">
        <input class="input" style="max-width:420px" placeholder="Buscar por número, cliente, vendedora o medio de pago" value="${escapeHtml(state.salesFilter)}" oninput="actions.update('salesFilter', this.value)" />
        <button class="btn btn-secondary" onclick="actions.update('salesFilter','')">Limpiar filtros</button>
      </div>
      ${renderSalesTable(filtered)}
    </section>
  `;
}

function renderNewSalePage() {
  const results = getBookSearchResults();
  return `
    ${pageHeader("Nueva venta", "Punto de venta simple con carrito, descuentos, medio de pago e impacto simulado en caja y stock.")}
    <section class="sale-layout">
      <div class="card">
        <h2 class="section-title">Buscar libro o producto</h2>
        <input class="input" placeholder="Título, autor o ISBN" value="${escapeHtml(state.saleSearch)}" oninput="actions.update('saleSearch', this.value)" />
        <div style="margin-top:14px">
          ${results
            .map((book) => `<div class="book-result">
              <div>
                <div class="book-title">${escapeHtml(book.title)}</div>
                <div class="book-meta">${escapeHtml(book.author)} · ${escapeHtml(book.category)}<br>ISBN: ${escapeHtml(book.isbn || "Sin ISBN")} · Stock: ${book.stock}</div>
                <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap">${badge(bookStatus(book))}${isCuspideTop10(book) ? badge(`Top 10 Cúspide -${top10DiscountRate}%`) : ""}</div>
              </div>
              <div style="text-align:right">
                ${isCuspideTop10(book) ? `<span class="old-price">${formatCurrency(book.price)}</span><br>` : ""}
                <strong>${formatCurrency(effectiveBookPrice(book))}</strong><br>
                <button class="btn btn-soft btn-small" style="margin-top:10px" onclick="actions.addToCart('${book.id}')" ${book.stock <= 0 ? "disabled" : ""}>Agregar</button>
              </div>
            </div>`)
            .join("")}
        </div>
      </div>
      <div class="card">
        <div class="toolbar"><h2 class="section-title" style="margin:0">Carrito de venta</h2><button class="btn btn-secondary btn-small" onclick="actions.clearCart()">Vaciar</button></div>
        ${renderCartTable()}
      </div>
      <div class="card">
        <h2 class="section-title">Resumen</h2>
        <div class="field"><label>Cliente opcional</label><input class="input" value="${escapeHtml(state.saleCustomer)}" oninput="actions.update('saleCustomer', this.value)" /></div>
        <div class="field"><label>Descuento general (%)</label><input class="input" type="number" min="0" max="80" value="${Number(state.saleDiscount)}" oninput="actions.update('saleDiscount', this.value)" /></div>
        <div class="field"><label>Medio de pago</label><div class="payment-grid">
          ${paymentMethods.map((method) => `<button class="payment-option ${state.salePayment === method ? "active" : ""}" onclick="actions.update('salePayment','${method}')">${method}</button>`).join("")}
        </div></div>
        ${renderSaleSummary()}
        <button class="btn btn-primary" style="width:100%; margin-top:14px" onclick="actions.confirmSale()">Confirmar venta</button>
        <div class="login-help">La confirmación genera una venta simulada, descuenta stock y suma el ingreso a la caja actual.</div>
      </div>
    </section>
  `;
}

function getBookSearchResults() {
  const query = state.saleSearch.trim().toLowerCase();
  const list = query
    ? books.filter((book) => `${book.title} ${book.author} ${book.isbn} ${book.category}`.toLowerCase().includes(query))
    : books.slice(0, 6);
  return list.slice(0, 8);
}

function renderCartTable() {
  if (!state.cart.length) return `<div class="empty-state">Agregá libros desde el buscador para iniciar la venta.</div>`;
  return `<div class="table-wrap"><table class="table" style="min-width:620px">
    <thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Subtotal</th><th>Acción</th></tr></thead>
    <tbody>
      ${state.cart
        .map((item) => {
          const book = getBook(item.bookId);
          return `<tr>
            <td><strong>${escapeHtml(book.title)}</strong><br><span style="color:var(--muted)">${escapeHtml(book.author)}</span>${isCuspideTop10(book) ? `<br>${badge(`Top 10 -${top10DiscountRate}%`)}` : ""}</td>
            <td><button class="btn btn-secondary btn-small" onclick="actions.changeCartQty('${book.id}', -1)">-</button> <strong style="padding:0 8px">${item.qty}</strong> <button class="btn btn-secondary btn-small" onclick="actions.changeCartQty('${book.id}', 1)">+</button></td>
            <td>${formatCurrency(item.price)}</td>
            <td><strong>${formatCurrency(item.qty * item.price)}</strong></td>
            <td><button class="btn btn-danger btn-small" onclick="actions.removeFromCart('${book.id}')">Quitar</button></td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table></div>`;
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}
function cartDiscountAmount() {
  return Math.round(cartSubtotal() * (Number(state.saleDiscount || 0) / 100));
}
function cartTotal() {
  return cartSubtotal() - cartDiscountAmount();
}

function renderSaleSummary() {
  return `<div style="margin-top:14px">
    <div class="summary-line"><span>Subtotal</span><strong>${formatCurrency(cartSubtotal())}</strong></div>
    <div class="summary-line"><span>Descuento general</span><strong>-${formatCurrency(cartDiscountAmount())}</strong></div>
    <div class="summary-line"><span>Descuento Top 10</span><strong>${state.cart.some((item) => isCuspideTop10(getBook(item.bookId))) ? `Aplicado en precio unitario` : "No aplica"}</strong></div>
    <div class="summary-line total-line"><span>Total</span><strong>${formatCurrency(cartTotal())}</strong></div>
  </div>`;
}

function renderSaleDetailPage() {
  const sale = sales.find((s) => s.id === state.selectedSaleId) || sales[0];
  const user = getUser(sale.employeeId);
  if (String(sale.invoiceStatus || "").toLowerCase().includes("emitida")) ensureInvoice(sale);
  const invoice = sale.invoice;
  return `
    ${pageHeader(`Venta ${sale.number}`, "Detalle de operación, emisión simulada de factura e impresión.", `<button class="btn btn-secondary" onclick="actions.setView('sales')">Volver a ventas</button>`)}
    <section class="grid grid-2">
      <div class="card">
        <h2 class="section-title">Datos de la venta</h2>
        <div class="kpi-row" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
          <div class="small-stat"><span>Fecha</span><strong>${formatDateTime(sale.date)}</strong></div>
          <div class="small-stat"><span>Atendió</span><strong>${escapeHtml(user.name)}</strong></div>
          <div class="small-stat"><span>Cliente</span><strong>${escapeHtml(sale.customer)}</strong></div>
          <div class="small-stat"><span>Medio de pago</span><strong>${escapeHtml(sale.paymentMethod)}</strong></div>
        </div>
        <div style="margin:16px 0; display:flex; gap:8px; flex-wrap:wrap">${badge(sale.status)}${badge(sale.invoiceStatus)}${badge("Integración ARCA futura")}</div>
        <div class="table-wrap"><table class="table" style="min-width:620px">
          <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th></tr></thead>
          <tbody>${sale.items
            .map((item) => {
              const book = getBook(item.bookId);
              return `<tr><td><strong>${escapeHtml(book.title)}</strong><br><span style="color:var(--muted)">${escapeHtml(book.author)}</span></td><td>${item.qty}</td><td>${formatCurrency(item.price)}</td><td>${formatCurrency(item.qty * item.price)}</td></tr>`;
            })
            .join("")}</tbody>
        </table></div>
      </div>
      <div class="card">
        <div class="receipt">
          <h3>Infinito Libros</h3>
          <div class="receipt-row"><span>Venta</span><strong>${escapeHtml(sale.number)}</strong></div>
          <div class="receipt-row"><span>Fecha</span><strong>${formatDateTime(sale.date)}</strong></div>
          <div class="receipt-row"><span>Subtotal</span><strong>${formatCurrency(getSaleSubtotal(sale))}</strong></div>
          <div class="receipt-row"><span>Descuento</span><strong>${Number(sale.discount || 0)}%</strong></div>
          <div class="receipt-row"><span>Total</span><strong>${formatCurrency(getSaleTotal(sale))}</strong></div>
          <div class="receipt-row"><span>Medio de pago</span><strong>${escapeHtml(sale.paymentMethod)}</strong></div>
          <div class="receipt-row"><span>Atendió</span><strong>${escapeHtml(user.name)}</strong></div>
          <div style="margin-top:14px">${badge(sale.invoiceStatus)}</div>
        </div>
        <div class="card" style="margin-top:14px; padding:14px">
          <h2 class="section-title">Factura simulada</h2>
          ${invoice ? `
            <div class="summary-line"><span>Comprobante</span><strong>${escapeHtml(invoice.type)} ${escapeHtml(invoice.number)}</strong></div>
            <div class="summary-line"><span>CAE simulado</span><strong>${escapeHtml(invoice.cae)}</strong></div>
            <div class="summary-line"><span>Vencimiento CAE</span><strong>${escapeHtml(invoice.caeDueDate)}</strong></div>
            <div style="margin-top:10px">${badge(invoice.arcaStatus)}</div>
          ` : `
            <div class="empty-state" style="padding:16px">La venta está registrada, pero la factura todavía no fue emitida.</div>
          `}
        </div>
        <div class="login-help">En esta demo, la emisión genera una factura C con punto de venta, número y CAE simulados. La impresión abre una versión imprimible del comprobante.</div>
        <div class="modal-actions">
          ${invoice ? `<button class="btn btn-secondary" onclick="actions.issueInvoice('${sale.id}')">Reemitir simulada</button>` : `<button class="btn btn-primary" onclick="actions.issueInvoice('${sale.id}')">Emitir factura</button>`}
          <button class="btn btn-primary" onclick="actions.printInvoice('${sale.id}')">Imprimir factura</button>
        </div>
      </div>
    </section>
  `;
}

function todaySalesByPayment() {
  const totals = Object.fromEntries(paymentMethods.map((method) => [method, 0]));
  todaySales().forEach((sale) => (totals[sale.paymentMethod] = (totals[sale.paymentMethod] || 0) + getSaleTotal(sale)));
  return totals;
}

function calculateCashExpected() {
  const cashSales = todaySalesByPayment()["Efectivo"] || 0;
  const cashManual = cashMovements.filter((m) => isToday(m.date) && m.method === "Efectivo").reduce((sum, m) => sum + m.amount, 0);
  return cashSales + cashManual;
}

function renderCashPage() {
  const paymentTotals = todaySalesByPayment();
  const expected = calculateCashExpected();
  const income = todaySales().reduce((sum, sale) => sum + getSaleTotal(sale), 0);
  const expenses = cashMovements.filter((m) => m.amount < 0).reduce((sum, movement) => sum + Math.abs(movement.amount), 0);
  return `
    ${pageHeader("Caja actual", "Control diario de apertura, ingresos, egresos, retiros y cierre de caja.", `<button class="btn btn-primary" onclick="actions.openModal('closeCash')">Cerrar caja</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Estado", cashRegister.status, `Responsable: ${getUser(cashRegister.responsibleId).name}`)}
      ${renderMetric("Saldo inicial", formatCurrency(cashRegister.initialBalance), "Declarado al abrir caja")}
      ${renderMetric("Ingresos por ventas", formatCurrency(income), `${todaySales().length} operaciones del día`)}
      ${renderMetric("Total efectivo esperado", formatCurrency(expected), `Egresos y retiros incluidos`)}
    </section>
    <section class="grid grid-2" style="margin-top:16px">
      <div class="card">
        <div class="toolbar"><h2 class="section-title" style="margin:0">Ventas por medio de pago</h2><button class="btn btn-secondary btn-small" onclick="actions.openModal('manualMovement')">Registrar movimiento</button></div>
        <div class="kpi-row">
          ${paymentMethods.map((method) => `<div class="small-stat"><span>${method}</span><strong>${formatCurrency(paymentTotals[method] || 0)}</strong></div>`).join("")}
        </div>
      </div>
      <div class="card">
        <h2 class="section-title">Resumen de caja</h2>
        <div class="summary-line"><span>Saldo inicial</span><strong>${formatCurrency(cashRegister.initialBalance)}</strong></div>
        <div class="summary-line"><span>Ventas en efectivo</span><strong>${formatCurrency(paymentTotals["Efectivo"] || 0)}</strong></div>
        <div class="summary-line"><span>Egresos y retiros</span><strong>-${formatCurrency(expenses)}</strong></div>
        <div class="summary-line total-line"><span>Efectivo esperado</span><strong>${formatCurrency(expected)}</strong></div>
      </div>
    </section>
    <section class="card" style="margin-top:16px">
      <h2 class="section-title">Movimientos del día</h2>
      ${renderCashMovementsTable()}
    </section>
  `;
}

function renderCashMovementsTable() {
  const saleMovements = todaySales().map((sale) => ({
    id: `sale-${sale.id}`,
    date: sale.date,
    type: "Venta",
    description: `Venta ${sale.number}`,
    userId: sale.employeeId,
    method: sale.paymentMethod,
    amount: getSaleTotal(sale),
  }));
  const all = [...cashMovements.filter((m) => isToday(m.date)), ...saleMovements].sort((a, b) => new Date(b.date) - new Date(a.date));
  return `<div class="table-wrap"><table class="table">
    <thead><tr><th>Hora</th><th>Tipo</th><th>Descripción</th><th>Usuario</th><th>Medio</th><th>Importe</th></tr></thead>
    <tbody>${all
      .map((movement) => `<tr>
        <td>${formatDateTime(movement.date)}</td><td>${badge(movement.type)}</td><td>${escapeHtml(movement.description)}</td><td>${escapeHtml(getUser(movement.userId)?.name || "-")}</td><td>${escapeHtml(movement.method)}</td><td><strong>${formatCurrency(movement.amount)}</strong></td>
      </tr>`)
      .join("")}</tbody>
  </table></div>`;
}

function renderCashHistoryPage() {
  return `
    ${pageHeader("Historial de cajas", "Cierres anteriores, responsables, ventas declaradas y diferencias simuladas.")}
    <section class="card">
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Fecha</th><th>Responsable</th><th>Apertura</th><th>Cierre</th><th>Ventas</th><th>Declarado</th><th>Diferencia</th><th>Estado</th></tr></thead>
        <tbody>${cashHistory
          .map((item) => `<tr>
            <td><strong>${escapeHtml(item.date)}</strong></td>
            <td>${escapeHtml(getUser(item.responsibleId)?.name || "-")}</td>
            <td>${formatDateTime(item.openedAt)}</td>
            <td>${formatDateTime(item.closedAt)}</td>
            <td>${formatCurrency(item.salesTotal)}</td>
            <td>${formatCurrency(item.declaredTotal)}</td>
            <td><strong>${formatCurrency(item.difference)}</strong></td>
            <td>${badge(item.status)}</td>
          </tr>`)
          .join("")}</tbody>
      </table></div>
    </section>
  `;
}

function filteredBooks() {
  const query = state.inventorySearch.trim().toLowerCase();
  return books.filter((book) => {
    const matchesQuery = `${book.title} ${book.author} ${book.isbn}`.toLowerCase().includes(query);
    const matchesCategory = state.inventoryCategory === "Todas" || book.category === state.inventoryCategory;
    const matchesStatus = state.inventoryStatus === "Todos" || bookStatus(book) === state.inventoryStatus;
    const matchesLocation = state.inventoryLocation === "Todas" || book.location === state.inventoryLocation;
    return matchesQuery && matchesCategory && matchesStatus && matchesLocation;
  });
}

function renderInventoryPage() {
  const filtered = filteredBooks();
  const low = books.filter((book) => bookStatus(book) === "Bajo stock").length;
  const noIsbn = books.filter((book) => !book.isbn).length;
  return `
    ${pageHeader("Stock / Inventario", "Catálogo de libros y papelería con ubicación física, precios, stock mínimo y estados.", `<button class="btn btn-primary" onclick="actions.openModal('bookForm')">Agregar libro</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Productos activos", books.length, "Libros y artículos complementarios")}
      ${renderMetric("Unidades en stock", formatNumber(books.reduce((sum, b) => sum + b.stock, 0)), "Total físico simulado")}
      ${renderMetric("Bajo stock", low, "Requieren reposición")}
      ${renderMetric("Sin ISBN", noIsbn, "Datos pendientes")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="filters">
        <input class="input" style="max-width:360px" placeholder="Buscar por título, autor o ISBN" value="${escapeHtml(state.inventorySearch)}" oninput="actions.update('inventorySearch', this.value)" />
        <select class="select" style="max-width:220px" onchange="actions.update('inventoryCategory', this.value)">${["Todas", ...categories].map((c) => `<option ${state.inventoryCategory === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}</select>
        <select class="select" style="max-width:180px" onchange="actions.update('inventoryStatus', this.value)">${["Todos", "Disponible", "Bajo stock", "Sin stock", "Discontinuado"].map((s) => `<option ${state.inventoryStatus === s ? "selected" : ""}>${escapeHtml(s)}</option>`).join("")}</select>
        <select class="select" style="max-width:220px" onchange="actions.update('inventoryLocation', this.value)">${["Todas", ...locations].map((l) => `<option ${state.inventoryLocation === l ? "selected" : ""}>${escapeHtml(l)}</option>`).join("")}</select>
        <button class="btn btn-secondary" onclick="actions.clearInventoryFilters()">Limpiar</button>
      </div>
      ${renderInventoryTable(filtered)}
    </section>
  `;
}

function renderInventoryTable(sourceBooks) {
  if (!sourceBooks.length) return `<div class="empty-state">No hay productos para los filtros seleccionados.</div>`;
  return `<div class="table-wrap"><table class="table">
    <thead><tr><th>Título</th><th>Autor</th><th>ISBN</th><th>Categoría</th><th>Ubicación</th><th>Precio</th><th>Stock</th><th>Estado</th><th>Acción</th></tr></thead>
    <tbody>${sourceBooks
      .map((book) => `<tr>
        <td><strong>${escapeHtml(book.title)}</strong><br><span style="color:var(--muted)">${escapeHtml(book.editorial)}</span></td>
        <td>${escapeHtml(book.author)}</td>
        <td>${escapeHtml(book.isbn || "Sin ISBN")}</td>
        <td>${escapeHtml(book.category)}</td>
        <td>${escapeHtml(book.location)}</td>
        <td><strong>${formatCurrency(book.price)}</strong></td>
        <td>${book.stock} / mín. ${book.minStock}</td>
        <td>${badge(bookStatus(book))}</td>
        <td><div style="display:flex; gap:6px; flex-wrap:wrap"><button class="btn btn-secondary btn-small" onclick="actions.openModal('bookForm','${book.id}')">Editar</button><button class="btn btn-soft btn-small" onclick="actions.openModal('stockIn','${book.id}')">Ingreso</button><button class="btn btn-secondary btn-small" onclick="actions.showBookMovements('${book.id}')">Mov.</button></div></td>
      </tr>`)
      .join("")}</tbody>
  </table></div>`;
}

function renderStockMovementsPage() {
  const query = state.movementSearch.trim().toLowerCase();
  const filtered = stockMovements.filter((movement) => {
    const book = getBook(movement.bookId);
    const user = getUser(movement.userId);
    return `${book?.title} ${book?.author} ${movement.type} ${movement.reason} ${user?.name}`.toLowerCase().includes(query);
  });
  return `
    ${pageHeader("Movimientos de stock", "Trazabilidad de ventas, ingresos y ajustes manuales.")}
    <section class="card">
      <div class="filters">
        <input class="input" style="max-width:420px" placeholder="Buscar por libro, usuario, tipo o motivo" value="${escapeHtml(state.movementSearch)}" oninput="actions.update('movementSearch', this.value)" />
        <button class="btn btn-secondary" onclick="actions.update('movementSearch','')">Limpiar</button>
      </div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Fecha</th><th>Libro</th><th>Tipo</th><th>Cantidad</th><th>Stock anterior</th><th>Stock nuevo</th><th>Usuario</th><th>Motivo</th></tr></thead>
        <tbody>${filtered
          .map((movement) => {
            const book = getBook(movement.bookId);
            const qty = movement.qty > 0 ? `+${movement.qty}` : movement.qty;
            return `<tr>
              <td>${formatDateTime(movement.date)}</td><td><strong>${escapeHtml(book?.title || "-")}</strong></td><td>${badge(movement.type)}</td><td><strong>${qty}</strong></td><td>${movement.previous}</td><td>${movement.next}</td><td>${escapeHtml(getUser(movement.userId)?.name || "-")}</td><td>${escapeHtml(movement.reason)}</td>
            </tr>`;
          })
          .join("")}</tbody>
      </table></div>
    </section>
  `;
}

function renderReportsPage() {
  const source = state.reportPeriod === "Hoy" ? todaySales() : monthSales();
  const total = source.reduce((sum, sale) => sum + getSaleTotal(sale), 0);
  const qty = source.reduce((sum, sale) => sum + sale.items.reduce((itemSum, item) => itemSum + item.qty, 0), 0);
  const avg = source.length ? total / source.length : 0;
  const ranking = getBookRanking(source);
  return `
    ${pageHeader("Reportes", "Indicadores básicos para analizar ventas, categorías, vendedoras, caja y reposición.")}
    <section class="card" style="margin-bottom:16px">
      <div class="filters">
        ${["Hoy", "Mes"].map((period) => `<button class="btn ${state.reportPeriod === period ? "btn-primary" : "btn-secondary"}" onclick="actions.update('reportPeriod','${period}')">${period}</button>`).join("")}
      </div>
      <section class="grid grid-4">
        ${renderMetric("Ventas totales", formatCurrency(total), state.reportPeriod)}
        ${renderMetric("Operaciones", source.length, "Ventas no anuladas")}
        ${renderMetric("Ticket promedio", formatCurrency(avg), "Promedio por operación")}
        ${renderMetric("Unidades vendidas", qty, "Libros y papelería")}
      </section>
    </section>
    <section class="grid grid-2">
      <div class="card"><h2 class="section-title">Ventas por vendedora</h2>${renderProgress(employeeSalesData(source), "name", "total")}</div>
      <div class="card"><h2 class="section-title">Ventas por categoría</h2>${renderProgress(categorySalesData(source), "category", "total")}</div>
    </section>
    <section class="grid grid-2" style="margin-top:16px">
      <div class="card">
        <h2 class="section-title">Libros más vendidos</h2>
        <div class="table-wrap"><table class="table" style="min-width:560px"><thead><tr><th>Libro</th><th>Categoría</th><th>Unidades</th><th>Total</th></tr></thead><tbody>
          ${ranking.map((row) => `<tr><td><strong>${escapeHtml(row.title)}</strong></td><td>${escapeHtml(row.category)}</td><td>${row.qty}</td><td>${formatCurrency(row.total)}</td></tr>`).join("")}
        </tbody></table></div>
      </div>
      <div class="card">
        <h2 class="section-title">Stock bajo</h2>
        ${renderInventoryTable(books.filter((book) => bookStatus(book) === "Bajo stock" || bookStatus(book) === "Sin stock").slice(0, 6))}
      </div>
    </section>
  `;
}

function getBookRanking(sourceSales) {
  const rows = {};
  sourceSales.forEach((sale) =>
    sale.items.forEach((item) => {
      const book = getBook(item.bookId);
      if (!book) return;
      rows[item.bookId] ||= { title: book.title, category: book.category, qty: 0, total: 0 };
      rows[item.bookId].qty += item.qty;
      rows[item.bookId].total += item.qty * item.price;
    })
  );
  return Object.values(rows).sort((a, b) => b.qty - a.qty).slice(0, 8);
}


function renderRequestsPage() {
  const query = normalizeText(state.orderSearch);
  const filtered = bookRequests.filter((request) => normalizeText(`${request.title} ${request.customerName} ${request.phone} ${request.status}`).includes(query));
  const pending = bookRequests.filter((request) => !["Entregado", "Cancelado"].includes(request.status)).length;
  return `
    ${pageHeader("Pedidos", "Registro simple de encargos de clientes, datos de contacto, precio acordado y observaciones.", `<button class="btn btn-primary" onclick="actions.openModal('requestForm')">Nuevo pedido</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Pedidos activos", pending, "Pendientes, consultados o reservados")}
      ${renderMetric("Reservados", bookRequests.filter((r) => r.status === "Reservado").length, "Con precio o disponibilidad confirmada")}
      ${renderMetric("Contactos cargados", bookRequests.filter((r) => r.phone).length, "Teléfonos para aviso")}
      ${renderMetric("Valor acordado", formatCurrency(bookRequests.reduce((sum, r) => sum + Number(r.agreedPrice || 0), 0)), "Pedidos con precio informado")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="filters">
        <input class="input" style="max-width:420px" placeholder="Buscar por libro, cliente, teléfono o estado" value="${escapeHtml(state.orderSearch)}" oninput="actions.update('orderSearch', this.value)" />
        <button class="btn btn-secondary" onclick="actions.update('orderSearch','')">Limpiar</button>
      </div>
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Fecha</th><th>Libro pedido</th><th>Cliente</th><th>Teléfono</th><th>Precio acordado</th><th>Estado</th><th>Observación</th><th>Acción</th></tr></thead>
        <tbody>${filtered.map((request) => `<tr>
          <td>${escapeHtml(request.date)}</td>
          <td><strong>${escapeHtml(request.title)}</strong>${request.link ? `<br><a href="${escapeHtml(request.link)}" target="_blank" rel="noreferrer">Ver link</a>` : ""}</td>
          <td>${escapeHtml(request.customerName)}</td>
          <td>${escapeHtml(request.phone)}</td>
          <td>${request.agreedPrice ? formatCurrency(request.agreedPrice) : "Sin acordar"}</td>
          <td>${badge(request.status)}</td>
          <td>${escapeHtml(request.note || "-")}</td>
          <td><button class="btn btn-secondary btn-small" onclick="actions.cycleRequestStatus('${request.id}')">Cambiar estado</button></td>
        </tr>`).join("")}</tbody>
      </table></div>
    </section>
  `;
}

function renderBulkImportPage() {
  return `
    ${pageHeader("Carga masiva por remito", "Subida simulada de PDF o imagen para detectar libros, cantidades e ISBN antes de asignar ubicación.")}
    <section class="grid grid-2">
      <div class="card">
        <h2 class="section-title">1. Adjuntar remito</h2>
        <div class="upload-zone">
          <strong>PDF, JPG o PNG del remito del proveedor</strong>
          <span>En una versión real se usaría OCR/IA para leer título, ISBN, cantidad y precio. En esta demo se simula la detección.</span>
          <input class="input" type="file" accept="application/pdf,image/*" />
          <button class="btn btn-primary" onclick="actions.detectRemito()">Simular detección del remito</button>
        </div>
        <div class="login-help">Objetivo operativo: evitar cargar libro por libro. El sistema propone una plantilla y la usuaria solo confirma o corrige datos, especialmente la ubicación física.</div>
      </div>
      <div class="card">
        <h2 class="section-title">Flujo previsto</h2>
        <div class="alert-list">
          <div class="alert-item"><div><strong>Lectura automática</strong><span>El sistema extrae filas del remito, detecta ISBN, título, autor, precio y cantidad.</span></div>${badge("Simulado")}</div>
          <div class="alert-item"><div><strong>Plantilla editable</strong><span>La vendedora revisa la información y asigna ubicación.</span></div>${badge("Revisión")}</div>
          <div class="alert-item"><div><strong>Alta o actualización</strong><span>Si el ISBN ya existe, suma stock. Si no existe, crea el producto.</span></div>${badge("Stock")}</div>
        </div>
      </div>
    </section>
    <section class="card" style="margin-top:16px">
      <div class="toolbar"><h2 class="section-title" style="margin:0">2. Plantilla detectada</h2>${state.remitoDetected ? `<button class="btn btn-primary" onclick="actions.confirmMassImport()">Confirmar carga al stock</button>` : ""}</div>
      ${state.remitoDetected ? renderDetectedRemitoTable() : `<div class="empty-state">Todavía no se procesó ningún archivo. Adjuntá un remito y usá la detección simulada.</div>`}
    </section>
  `;
}

function renderDetectedRemitoTable() {
  return `<div class="table-wrap"><table class="table" style="min-width:1100px">
    <thead><tr><th>Conf.</th><th>Título</th><th>Autor</th><th>ISBN</th><th>Editorial</th><th>Categoría</th><th>Precio</th><th>Cantidad</th><th>Ubicación</th><th>Estado</th></tr></thead>
    <tbody>${detectedRemitoItems.map((item, index) => {
      const existing = books.find((book) => book.isbn && item.isbn && book.isbn === item.isbn);
      return `<tr data-remito-row="${index}">
        <td>${item.confidence}%</td>
        <td><input class="input" name="title" value="${escapeHtml(item.title)}" /></td>
        <td><input class="input" name="author" value="${escapeHtml(item.author)}" /></td>
        <td><input class="input" name="isbn" value="${escapeHtml(item.isbn)}" /></td>
        <td><input class="input" name="editorial" value="${escapeHtml(item.editorial)}" /></td>
        <td><input class="input" name="category" value="${escapeHtml(item.category)}" /></td>
        <td><input class="input" name="price" type="number" value="${Number(item.price || 0)}" /></td>
        <td><input class="input" name="qty" type="number" value="${Number(item.qty || 1)}" min="1" /></td>
        <td><select class="select" name="location">${locations.map((location) => `<option ${item.location === location ? "selected" : ""}>${escapeHtml(location)}</option>`).join("")}</select></td>
        <td>${badge(existing ? "Actualiza stock" : "Alta nueva")}</td>
      </tr>`;
    }).join("")}</tbody>
  </table></div>`;
}

function renderPriceUpdatePage() {
  const processedRows = supplierPriceRows.map((row) => {
    const book = books.find((item) => item.isbn && item.isbn === row.isbn);
    return { ...row, book, diff: book ? row.supplierPrice - Number(book.price || 0) : 0 };
  });
  const matches = processedRows.filter((row) => row.book).length;
  return `
    ${pageHeader("Actualización de precios por ISBN", "Carga simulada de lista del proveedor para actualizar precios sugeridos de forma masiva.")}
    <section class="grid grid-4">
      ${renderMetric("Registros proveedor", supplierPriceRows.length, "Archivo mock de precios")}
      ${renderMetric("Coincidencias ISBN", matches, "Libros encontrados en stock")}
      ${renderMetric("Sin coincidencia", supplierPriceRows.length - matches, "Requieren alta o revisión")}
      ${renderMetric("Clave de cruce", "ISBN", "Código único del libro")}
    </section>
    <section class="card" style="margin-top:16px">
      <div class="toolbar">
        <div><h2 class="section-title" style="margin:0">Archivo del proveedor</h2><p class="page-subtitle">La demo procesa una lista mock. En una versión real se aceptaría Excel/CSV.</p></div>
        <div class="topbar-actions"><input class="input" style="max-width:260px" type="file" accept=".csv,.xlsx,.xls" /><button class="btn btn-primary" onclick="actions.processPriceList()">Procesar lista</button></div>
      </div>
      ${state.pricePreview ? `<div class="table-wrap"><table class="table" style="min-width:980px">
        <thead><tr><th>ISBN</th><th>Libro proveedor</th><th>Libro en stock</th><th>Precio actual</th><th>Precio proveedor</th><th>Diferencia</th><th>Estado</th></tr></thead>
        <tbody>${processedRows.map((row) => `<tr>
          <td>${escapeHtml(row.isbn)}</td>
          <td><strong>${escapeHtml(row.title)}</strong></td>
          <td>${row.book ? escapeHtml(row.book.title) : "-"}</td>
          <td>${row.book ? formatCurrency(row.book.price) : "-"}</td>
          <td><strong>${formatCurrency(row.supplierPrice)}</strong></td>
          <td>${row.book ? formatCurrency(row.diff) : "-"}</td>
          <td>${badge(row.book ? "Listo para actualizar" : "ISBN no encontrado")}</td>
        </tr>`).join("")}</tbody>
      </table></div><div class="modal-actions"><button class="btn btn-secondary" onclick="actions.update('pricePreview', false)">Cancelar</button><button class="btn btn-primary" onclick="actions.confirmPriceUpdate()">Actualizar precios coincidentes</button></div>` : `<div class="empty-state">Subí o simulá la carga del archivo del proveedor para previsualizar los cambios antes de aplicarlos.</div>`}
    </section>
  `;
}

function renderTop10Page() {
  return `
    ${pageHeader("Top 10 Cúspide", "Ranking simulado para detectar libros con descuento especial en el punto de venta.", `<button class="btn btn-primary" onclick="actions.refreshTop10()">Actualizar ranking simulado</button>`)}
    <section class="grid grid-4">
      ${renderMetric("Última actualización", top10LastUpdate, "Fuente mock: Cúspide Top 100")}
      ${renderMetric("Descuento especial", `${top10DiscountRate}%`, "Aplicado automáticamente en venta")}
      ${renderMetric("Coinciden con stock", top10BookIdsInInventory().length, "ISBN o título encontrado")}
      ${renderMetric("Ranking visible", "10 libros", "Top 10 de la semana")}
    </section>
    <section class="top10-grid" style="margin-top:16px">
      ${cuspideTop10.map((item) => {
        const book = books.find((b) => b.isbn === item.matchIsbn || normalizeText(b.title) === normalizeText(item.title));
        return `<article class="card top10-card">
          <div class="rank-badge">#${item.rank}</div>
          <div class="book-cover-placeholder">${escapeHtml(item.title.slice(0, 2).toUpperCase())}</div>
          <h2>${escapeHtml(item.title)}</h2>
          <p>${escapeHtml(item.author)}</p>
          <strong>${formatCurrency(item.price)}</strong>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:12px">${badge(`Top 10 -${top10DiscountRate}%`)}${book ? badge("En stock") : badge("No cargado")}</div>
          ${book ? `<button class="btn btn-secondary btn-small" style="margin-top:12px" onclick="actions.showBookMovements('${book.id}')">Ver en stock</button>` : `<button class="btn btn-soft btn-small" style="margin-top:12px" onclick="actions.addTop10ToInventory(${item.rank})">Crear en stock</button>`}
        </article>`;
      }).join("")}
    </section>
  `;
}

function renderTutorialsPage() {
  const query = normalizeText(state.tutorialSearch);
  const filtered = tutorialVideos.filter((video) => normalizeText(`${video.title} ${video.category} ${video.description}`).includes(query));
  return `
    ${pageHeader("Tutoriales e instructivos", "Biblioteca interna para que las vendedoras consulten procesos cotidianos sin depender de anotaciones en papel.", currentUser().roleKey === "admin" ? `<button class="btn btn-primary" onclick="actions.openModal('tutorialForm')">Agregar tutorial</button>` : "")}
    <section class="card" style="margin-bottom:16px">
      <div class="filters">
        <input class="input" style="max-width:420px" placeholder="Buscar tutorial por proceso, módulo o palabra clave" value="${escapeHtml(state.tutorialSearch)}" oninput="actions.update('tutorialSearch', this.value)" />
        <button class="btn btn-secondary" onclick="actions.update('tutorialSearch','')">Limpiar</button>
      </div>
      <div class="alert-item"><div><strong>Uso pensado para capacitación</strong><span>Cada video puede representar una situación cotidiana: vender, cerrar caja, consultar ISBN, cargar pedidos o actualizar stock.</span></div>${badge("Tutoriales")}</div>
    </section>
    <section class="tutorial-grid">
      ${filtered.map((video) => `<article class="card tutorial-card">
        <div class="video-placeholder">▶</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px">${badge(video.category)}${badge(video.duration)}</div>
        <h2>${escapeHtml(video.title)}</h2>
        <p>${escapeHtml(video.description)}</p>
        <button class="btn btn-secondary" onclick="actions.fakeToast('En una versión real se abriría el video: ${escapeHtml(video.title)}')">Ver instructivo</button>
      </article>`).join("")}
    </section>
  `;
}

function renderUsersPage() {
  const month = monthSales();
  return `
    ${pageHeader("Usuarios / Vendedoras", "Control simulado de perfiles, roles y operaciones por persona.")}
    <section class="card">
      <div class="table-wrap"><table class="table">
        <thead><tr><th>Nombre</th><th>Rol</th><th>Estado</th><th>Ventas del mes</th><th>Operaciones</th><th>Último acceso</th></tr></thead>
        <tbody>${users
          .map((user, index) => {
            const userSales = month.filter((sale) => sale.employeeId === user.id);
            const total = userSales.reduce((sum, sale) => sum + getSaleTotal(sale), 0);
            return `<tr><td><strong>${escapeHtml(user.name)}</strong></td><td>${escapeHtml(user.role)}</td><td>${badge(user.active ? "Activa" : "Inactiva")}</td><td>${formatCurrency(total)}</td><td>${userSales.length}</td><td>17/06/2026 ${9 + index}:1${index}</td></tr>`;
          })
          .join("")}</tbody>
      </table></div>
    </section>
  `;
}

function renderSettingsPage() {
  return `
    ${pageHeader("Configuración", "Parámetros básicos de la librería, medios de pago, categorías e integración futura.")}
    <section class="grid grid-2">
      <div class="card">
        <h2 class="section-title">Datos de la librería</h2>
        <div class="field"><label>Nombre comercial</label><input class="input" value="Infinito Libros" /></div>
        <div class="field"><label>CUIT simulado</label><input class="input" value="30-00000000-0" /></div>
        <div class="field"><label>Dirección</label><input class="input" value="Av. Principal 123, Córdoba" /></div>
        <div class="field"><label>Teléfono</label><input class="input" value="0351 000-0000" /></div>
      </div>
      <div class="card">
        <h2 class="section-title">Medios de pago habilitados</h2>
        <div class="alert-list">${paymentMethods.map((method) => `<div class="alert-item"><div><strong>${method}</strong><span>Disponible para ventas de mostrador.</span></div>${badge("Activo")}</div>`).join("")}</div>
      </div>
      <div class="card">
        <h2 class="section-title">Categorías principales</h2>
        <div style="display:flex; flex-wrap:wrap; gap:8px">${categories.map((c) => badge(c)).join("")}</div>
      </div>
      <div class="card">
        <h2 class="section-title">Facturación electrónica</h2>
        <div class="alert-item"><div><strong>Integración ARCA</strong><span>No conectada en esta etapa. La demo solo muestra estados simulados de facturación.</span></div>${badge("Etapa posterior")}</div>
        <button class="btn btn-primary" style="margin-top:14px" onclick="actions.fakeToast('Configuración simulada guardada')">Guardar configuración simulada</button>
      </div>
    </section>
  `;
}


function renderBudgetPage() {
  return `
    ${pageHeader("Presupuesto", "Propuesta comercial integrada a la demo para revisar alcance, paquetes, adicionales y condiciones.", `<button class="btn btn-primary" onclick="actions.openBudgetWindow()">Abrir presupuesto en pestaña nueva</button>`)}
    <section class="card budget-card">
      <div class="toolbar">
        <div>
          <h2 class="section-title" style="margin:0">Presupuesto ERP Infinito Libros</h2>
          <p class="page-subtitle">Vista integrada del presupuesto final. Desde esta pantalla también se puede guardar o imprimir como PDF.</p>
        </div>
        <div class="topbar-actions">
          <button class="btn btn-secondary" onclick="actions.printBudget()">Imprimir / guardar PDF</button>
        </div>
      </div>
      <iframe
        id="budgetFrame"
        class="budget-frame"
        title="Presupuesto ERP Infinito Libros"
        src="presupuesto-erp-infinito-libros-final.html"
      ></iframe>
    </section>
  `;
}

function renderNoAccess() {
  return `
    ${pageHeader("Acceso restringido", "El perfil actual no tiene permisos para ver este módulo.")}
    <div class="card empty-state">Esta acción requiere permisos de administradora. Ingresá con Vero para ver la demo completa.</div>
  `;
}

function renderModal() {
  if (!state.modal) return "";
  const { type, data } = state.modal;
  if (type === "manualMovement") return renderManualMovementModal();
  if (type === "closeCash") return renderCloseCashModal();
  if (type === "bookForm") return renderBookFormModal(data);
  if (type === "stockIn") return renderStockInModal(data);
  if (type === "requestForm") return renderRequestFormModal();
  if (type === "tutorialForm") return renderTutorialFormModal();
  if (type === "toast") return renderToastModal(data);
  if (type === "invoicePreview") return renderInvoicePreviewModal(data);
  return "";
}

function modalShell(title, body, actions = "") {
  return `<div class="modal-backdrop" onclick="actions.closeModalOnBackdrop(event)"><section class="modal">
    <div class="modal-head"><div><p class="eyebrow">Demo</p><h2>${title}</h2></div><button class="btn btn-secondary btn-small" onclick="actions.closeModal()">Cerrar</button></div>
    ${body}
    ${actions ? `<div class="modal-actions">${actions}</div>` : ""}
  </section></div>`;
}

function renderManualMovementModal() {
  const body = `<form id="movementForm">
    <div class="form-grid">
      <div class="field"><label>Tipo</label><select class="select" name="type"><option>Egreso</option><option>Retiro</option><option>Ingreso manual</option></select></div>
      <div class="field"><label>Medio</label><select class="select" name="method"><option>Efectivo</option><option>Transferencia</option></select></div>
      <div class="field"><label>Importe</label><input class="input" name="amount" type="number" value="5000" /></div>
      <div class="field"><label>Usuario</label><input class="input" value="${escapeHtml(currentUser().name)}" disabled /></div>
    </div>
    <div class="field"><label>Descripción</label><textarea class="textarea" name="description">Movimiento manual de caja</textarea></div>
  </form>`;
  return modalShell("Registrar movimiento de caja", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.saveManualMovement()">Guardar movimiento</button>`);
}

function renderCloseCashModal() {
  const expected = calculateCashExpected();
  const body = `<form id="closeCashForm">
    <div class="summary-line"><span>Efectivo esperado</span><strong>${formatCurrency(expected)}</strong></div>
    <div class="field" style="margin-top:12px"><label>Efectivo declarado</label><input class="input" name="declared" type="number" value="${expected}" /></div>
    <div class="field"><label>Observación</label><textarea class="textarea" name="note">Cierre de caja simulado para presentación.</textarea></div>
  </form>`;
  return modalShell("Cerrar caja", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.closeCash()">Confirmar cierre</button>`);
}

function renderBookFormModal(bookId) {
  const book = getBook(bookId) || { id: "", title: "", author: "", isbn: "", editorial: "", category: categories[0], subcategory: "", price: 0, cost: 0, stock: 0, minStock: 1, location: locations[0], lastUpdate: TODAY_ISO };
  const body = `<form id="bookForm">
    <input type="hidden" name="id" value="${escapeHtml(book.id)}" />
    <div class="form-grid">
      <div class="field"><label>Título</label><input class="input" name="title" value="${escapeHtml(book.title)}" /></div>
      <div class="field"><label>Autor</label><input class="input" name="author" value="${escapeHtml(book.author)}" /></div>
      <div class="field"><label>ISBN</label><input class="input" name="isbn" value="${escapeHtml(book.isbn)}" /></div>
      <div class="field"><label>Editorial</label><input class="input" name="editorial" value="${escapeHtml(book.editorial)}" /></div>
      <div class="field"><label>Categoría</label><select class="select" name="category">${categories.map((c) => `<option ${book.category === c ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}</select></div>
      <div class="field"><label>Subcategoría</label><input class="input" name="subcategory" value="${escapeHtml(book.subcategory)}" /></div>
      <div class="field"><label>Precio de venta</label><input class="input" name="price" type="number" value="${Number(book.price)}" /></div>
      <div class="field"><label>Costo opcional</label><input class="input" name="cost" type="number" value="${Number(book.cost)}" /></div>
      <div class="field"><label>Stock actual</label><input class="input" name="stock" type="number" value="${Number(book.stock)}" /></div>
      <div class="field"><label>Stock mínimo</label><input class="input" name="minStock" type="number" value="${Number(book.minStock)}" /></div>
      <div class="field"><label>Ubicación</label><select class="select" name="location">${locations.map((l) => `<option ${book.location === l ? "selected" : ""}>${escapeHtml(l)}</option>`).join("")}</select></div>
      <div class="field"><label>Estado actual</label><input class="input" value="${book.id ? bookStatus(book) : "Nuevo"}" disabled /></div>
    </div>
  </form>`;
  return modalShell(bookId ? "Editar libro" : "Agregar libro", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.saveBook()">Guardar libro</button>`);
}

function renderStockInModal(bookId) {
  const book = getBook(bookId);
  const body = `<form id="stockInForm">
    <input type="hidden" name="bookId" value="${bookId}" />
    <div class="alert-item"><div><strong>${escapeHtml(book.title)}</strong><span>Stock actual: ${book.stock} unidades · Ubicación: ${escapeHtml(book.location)}</span></div>${badge(bookStatus(book))}</div>
    <div class="form-grid" style="margin-top:14px">
      <div class="field"><label>Cantidad a ingresar</label><input class="input" name="qty" type="number" value="5" min="1" /></div>
      <div class="field"><label>Usuario</label><input class="input" value="${escapeHtml(currentUser().name)}" disabled /></div>
    </div>
    <div class="field"><label>Motivo</label><textarea class="textarea" name="reason">Ingreso manual de stock</textarea></div>
  </form>`;
  return modalShell("Registrar ingreso de stock", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.saveStockIn()">Guardar ingreso</button>`);
}


function renderRequestFormModal() {
  const body = `<form id="requestForm">
    <div class="form-grid">
      <div class="field"><label>Fecha de pedido</label><input class="input" name="date" type="date" value="${TODAY_ISO}" /></div>
      <div class="field"><label>Nombre del libro</label><input class="input" name="title" value="" placeholder="Título solicitado" /></div>
      <div class="field"><label>Link opcional</label><input class="input" name="link" placeholder="https://..." /></div>
      <div class="field"><label>Precio acordado opcional</label><input class="input" name="agreedPrice" type="number" placeholder="0" /></div>
      <div class="field"><label>Nombre del cliente</label><input class="input" name="customerName" placeholder="Nombre y apellido" /></div>
      <div class="field"><label>Teléfono</label><input class="input" name="phone" placeholder="WhatsApp / teléfono" /></div>
      <div class="field"><label>Estado</label><select class="select" name="status"><option>Pendiente</option><option>Consultado</option><option>Reservado</option><option>Entregado</option><option>Cancelado</option></select></div>
    </div>
    <div class="field"><label>Observación</label><textarea class="textarea" name="note" placeholder="Ej.: avisar cuando llegue, edición específica, seña, proveedor consultado..."></textarea></div>
  </form>`;
  return modalShell("Nuevo pedido de cliente", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.saveRequest()">Guardar pedido</button>`);
}

function renderTutorialFormModal() {
  const body = `<form id="tutorialForm">
    <div class="form-grid">
      <div class="field"><label>Título del tutorial</label><input class="input" name="title" placeholder="Ej.: Cómo cargar un pedido" /></div>
      <div class="field"><label>Categoría</label><select class="select" name="category"><option>Ventas</option><option>Caja</option><option>Stock</option><option>Pedidos</option><option>Precios</option></select></div>
      <div class="field"><label>Duración</label><input class="input" name="duration" value="02:00" /></div>
      <div class="field"><label>Link del video opcional</label><input class="input" name="url" placeholder="URL interna o YouTube privado" /></div>
    </div>
    <div class="field"><label>Descripción</label><textarea class="textarea" name="description" placeholder="Qué problema resuelve este instructivo"></textarea></div>
  </form>`;
  return modalShell("Agregar tutorial", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cancelar</button><button class="btn btn-primary" onclick="actions.saveTutorial()">Guardar tutorial</button>`);
}

function renderToastModal(message) {
  return modalShell("Acción simulada", `<div class="empty-state">${escapeHtml(message)}</div>`, `<button class="btn btn-primary" onclick="actions.closeModal()">Entendido</button>`);
}

function renderInvoicePreviewModal(saleId) {
  const sale = sales.find((s) => s.id === saleId);
  if (!sale) return renderToastModal("No se encontró la venta para imprimir.");
  const invoice = ensureInvoice(sale);
  const body = `<div class="receipt">
    <h3>Infinito Libros</h3>
    <div class="receipt-row"><span>Comprobante</span><strong>${escapeHtml(invoice.type)} ${escapeHtml(invoice.number)}</strong></div>
    <div class="receipt-row"><span>Venta</span><strong>${escapeHtml(sale.number)}</strong></div>
    <div class="receipt-row"><span>Total</span><strong>${formatCurrency(getSaleTotal(sale))}</strong></div>
    <div class="receipt-row"><span>CAE simulado</span><strong>${escapeHtml(invoice.cae)}</strong></div>
  </div>
  <div class="login-help">El navegador bloqueó la ventana de impresión. Permití ventanas emergentes para esta demo y volvé a presionar imprimir.</div>`;
  return modalShell("Factura lista para imprimir", body, `<button class="btn btn-secondary" onclick="actions.closeModal()">Cerrar</button><button class="btn btn-primary" onclick="actions.printInvoice('${saleId}')">Intentar imprimir nuevamente</button>`);
}

function renderApp() {
  const app = document.getElementById("app");
  if (!state.currentUserId) {
    app.innerHTML = renderLogin();
    return;
  }
  if (!canAccess(state.view)) {
    app.innerHTML = renderLayout(renderNoAccess());
    return;
  }
  const views = {
    dashboard: renderDashboard,
    sales: renderSalesPage,
    newSale: renderNewSalePage,
    saleDetail: renderSaleDetailPage,
    cash: renderCashPage,
    cashHistory: renderCashHistoryPage,
    inventory: renderInventoryPage,
    stockMovements: renderStockMovementsPage,
    requests: renderRequestsPage,
    bulkImport: renderBulkImportPage,
    priceUpdate: renderPriceUpdatePage,
    top10: renderTop10Page,
    tutorials: renderTutorialsPage,
    reports: renderReportsPage,
    users: renderUsersPage,
    settings: renderSettingsPage,
    budget: renderBudgetPage,
  };
  app.innerHTML = renderLayout((views[state.view] || renderDashboard)());
}

window.actions = {
  login() {
    const userId = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPassword").value;
    if (password !== "demo") {
      alert("Contraseña simulada incorrecta. Usá: demo");
      return;
    }
    state.currentUserId = userId;
    state.view = "dashboard";
    renderApp();
  },
  logout() {
    state.currentUserId = null;
    state.view = "dashboard";
    state.cart = [];
    renderApp();
  },
  toggleMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    renderApp();
  },
  setView(view) {
    state.view = view;
    state.mobileMenuOpen = false;
    if (view !== "saleDetail") state.selectedSaleId = null;
    renderApp();
  },
  update(key, value) {
    state[key] = value;
    renderApp();
  },
  openSale(id) {
    state.selectedSaleId = id;
    state.view = "saleDetail";
    renderApp();
  },
  addToCart(bookId) {
    const book = getBook(bookId);
    if (!book || book.stock <= 0) return;
    const current = state.cart.find((item) => item.bookId === bookId);
    if (current) {
      if (current.qty + 1 > book.stock) {
        alert("No hay stock suficiente para agregar más unidades.");
        return;
      }
      current.qty += 1;
    } else {
      state.cart.push({ bookId, qty: 1, price: effectiveBookPrice(book) });
    }
    renderApp();
  },
  changeCartQty(bookId, delta) {
    const item = state.cart.find((cartItem) => cartItem.bookId === bookId);
    const book = getBook(bookId);
    if (!item || !book) return;
    const nextQty = item.qty + delta;
    if (nextQty <= 0) {
      state.cart = state.cart.filter((cartItem) => cartItem.bookId !== bookId);
    } else if (nextQty <= book.stock) {
      item.qty = nextQty;
    } else {
      alert("No hay stock suficiente para esa cantidad.");
    }
    renderApp();
  },
  removeFromCart(bookId) {
    state.cart = state.cart.filter((item) => item.bookId !== bookId);
    renderApp();
  },
  clearCart() {
    state.cart = [];
    renderApp();
  },
  confirmSale() {
    if (!state.cart.length) {
      alert("Agregá al menos un producto al carrito.");
      return;
    }
    for (const item of state.cart) {
      const book = getBook(item.bookId);
      if (!book || item.qty > book.stock) {
        alert(`Stock insuficiente para ${book?.title || "un producto"}.`);
        return;
      }
    }
    const nextNumber = `V-${String(124 + sales.length).padStart(6, "0")}`;
    const saleId = `s${Date.now()}`;
    const minutes = String(30 + sales.length).padStart(2, "0").slice(-2);
    const sale = {
      id: saleId,
      number: nextNumber,
      date: `${TODAY_ISO}T15:${minutes}:00`,
      customer: state.saleCustomer || "Consumidor final",
      employeeId: state.currentUserId,
      paymentMethod: state.salePayment,
      status: "Pagada",
      invoiceStatus: "Factura pendiente",
      discount: Number(state.saleDiscount || 0),
      items: state.cart.map((item) => ({ ...item })),
    };
    sale.items.forEach((item) => {
      const book = getBook(item.bookId);
      const previous = book.stock;
      book.stock -= item.qty;
      book.lastUpdate = TODAY_ISO;
      stockMovements.unshift({
        id: `sm${Date.now()}-${item.bookId}`,
        date: sale.date,
        bookId: item.bookId,
        type: "Venta",
        qty: -item.qty,
        previous,
        next: book.stock,
        userId: state.currentUserId,
        reason: `Venta ${nextNumber}`,
      });
    });
    sales.unshift(sale);
    state.cart = [];
    state.saleSearch = "";
    state.saleDiscount = 0;
    state.saleCustomer = "Consumidor final";
    state.selectedSaleId = saleId;
    state.view = "saleDetail";
    renderApp();
  },
  markInvoiceIssued(saleId) {
    this.issueInvoice(saleId);
  },
  issueInvoice(saleId) {
    const sale = sales.find((s) => s.id === saleId);
    if (sale) {
      ensureInvoice(sale);
      state.selectedSaleId = saleId;
      state.modal = { type: "toast", data: `Factura simulada emitida: ${invoiceLabel(sale)}. Ya se puede imprimir.` };
    }
    renderApp();
  },
  printInvoice(saleId) {
    const sale = sales.find((s) => s.id === saleId);
    if (!sale) return;
    ensureInvoice(sale);
    const html = buildPrintableInvoiceHtml(sale);
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) {
      state.modal = { type: "invoicePreview", data: saleId };
      renderApp();
      return;
    }
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 300);
    renderApp();
  },
  openModal(type, data = null) {
    state.modal = { type, data };
    renderApp();
  },
  closeModal() {
    state.modal = null;
    renderApp();
  },
  closeModalOnBackdrop(event) {
    if (event.target.classList.contains("modal-backdrop")) {
      state.modal = null;
      renderApp();
    }
  },
  saveManualMovement() {
    const form = document.getElementById("movementForm");
    const data = Object.fromEntries(new FormData(form).entries());
    const rawAmount = Math.abs(Number(data.amount || 0));
    const isNegative = data.type === "Egreso" || data.type === "Retiro";
    cashMovements.unshift({
      id: `cm${Date.now()}`,
      date: `${TODAY_ISO}T15:40:00`,
      type: data.type,
      description: data.description || "Movimiento manual",
      userId: state.currentUserId,
      method: data.method,
      amount: isNegative ? -rawAmount : rawAmount,
    });
    state.modal = null;
    renderApp();
  },
  closeCash() {
    const form = document.getElementById("closeCashForm");
    const data = Object.fromEntries(new FormData(form).entries());
    const expected = calculateCashExpected();
    const declared = Number(data.declared || 0);
    const difference = declared - expected;
    cashRegister.status = "Cerrada";
    cashRegister.closedAt = `${TODAY_ISO}T19:00:00`;
    cashRegister.declaredTotal = declared;
    cashRegister.difference = difference;
    const totalSales = todaySales().reduce((sum, sale) => sum + getSaleTotal(sale), 0);
    cashHistory.unshift({
      id: `h${Date.now()}`,
      date: TODAY_ISO,
      responsibleId: cashRegister.responsibleId,
      openedAt: cashRegister.openedAt,
      closedAt: cashRegister.closedAt,
      initialBalance: cashRegister.initialBalance,
      salesTotal: totalSales,
      declaredTotal: declared,
      difference,
      status: difference === 0 ? "Sin diferencia" : Math.abs(difference) <= 1000 ? "Diferencia menor" : "Diferencia a revisar",
    });
    state.modal = null;
    state.view = "cashHistory";
    renderApp();
  },
  saveBook() {
    const form = document.getElementById("bookForm");
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.title || !data.author) {
      alert("Completá título y autor.");
      return;
    }
    if (data.id) {
      const book = getBook(data.id);
      Object.assign(book, {
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        editorial: data.editorial,
        category: data.category,
        subcategory: data.subcategory,
        price: Number(data.price || 0),
        cost: Number(data.cost || 0),
        stock: Number(data.stock || 0),
        minStock: Number(data.minStock || 0),
        location: data.location,
        lastUpdate: TODAY_ISO,
      });
    } else {
      books.unshift({
        id: `b${Date.now()}`,
        title: data.title,
        author: data.author,
        isbn: data.isbn,
        editorial: data.editorial,
        category: data.category,
        subcategory: data.subcategory,
        price: Number(data.price || 0),
        cost: Number(data.cost || 0),
        stock: Number(data.stock || 0),
        minStock: Number(data.minStock || 0),
        location: data.location,
        lastUpdate: TODAY_ISO,
      });
    }
    state.modal = null;
    renderApp();
  },
  saveStockIn() {
    const form = document.getElementById("stockInForm");
    const data = Object.fromEntries(new FormData(form).entries());
    const book = getBook(data.bookId);
    const qty = Math.max(1, Number(data.qty || 1));
    const previous = book.stock;
    book.stock += qty;
    book.lastUpdate = TODAY_ISO;
    stockMovements.unshift({
      id: `sm${Date.now()}`,
      date: `${TODAY_ISO}T16:05:00`,
      bookId: book.id,
      type: "Ingreso manual",
      qty,
      previous,
      next: book.stock,
      userId: state.currentUserId,
      reason: data.reason || "Ingreso manual de stock",
    });
    state.modal = null;
    renderApp();
  },
  clearInventoryFilters() {
    state.inventorySearch = "";
    state.inventoryCategory = "Todas";
    state.inventoryStatus = "Todos";
    state.inventoryLocation = "Todas";
    renderApp();
  },
  showBookMovements(bookId) {
    const book = getBook(bookId);
    state.movementSearch = book?.title || "";
    state.view = "stockMovements";
    renderApp();
  },

  detectRemito() {
    state.remitoDetected = true;
    renderApp();
  },
  confirmMassImport() {
    const rows = [...document.querySelectorAll("[data-remito-row]")];
    rows.forEach((row) => {
      const data = Object.fromEntries([...row.querySelectorAll("input, select")].map((input) => [input.name, input.value]));
      const qty = Math.max(1, Number(data.qty || 1));
      let book = data.isbn ? books.find((item) => item.isbn && item.isbn === data.isbn) : null;
      if (book) {
        const previous = book.stock;
        book.stock += qty;
        book.price = Number(data.price || book.price);
        book.location = data.location || book.location;
        book.lastUpdate = TODAY_ISO;
        stockMovements.unshift({
          id: `sm${Date.now()}-${book.id}`,
          date: `${TODAY_ISO}T16:30:00`,
          bookId: book.id,
          type: "Ingreso por remito",
          qty,
          previous,
          next: book.stock,
          userId: state.currentUserId,
          reason: "Carga masiva desde remito simulado",
        });
      } else {
        book = {
          id: `b${Date.now()}-${Math.random().toString(16).slice(2)}`,
          title: data.title || "Libro sin título",
          author: data.author || "Sin autor",
          isbn: data.isbn || "",
          editorial: data.editorial || "Sin editorial",
          category: data.category || "Sin categoría",
          subcategory: "",
          price: Number(data.price || 0),
          cost: 0,
          stock: qty,
          minStock: 2,
          location: data.location || locations[0],
          lastUpdate: TODAY_ISO,
        };
        books.unshift(book);
        stockMovements.unshift({
          id: `sm${Date.now()}-${book.id}`,
          date: `${TODAY_ISO}T16:30:00`,
          bookId: book.id,
          type: "Alta por remito",
          qty,
          previous: 0,
          next: qty,
          userId: state.currentUserId,
          reason: "Alta masiva desde remito simulado",
        });
      }
    });
    state.remitoDetected = false;
    state.modal = { type: "toast", data: "Carga masiva aplicada: se actualizaron o crearon libros y movimientos de stock según ISBN." };
    renderApp();
  },
  processPriceList() {
    state.pricePreview = true;
    renderApp();
  },
  confirmPriceUpdate() {
    let updated = 0;
    supplierPriceRows.forEach((row) => {
      const book = books.find((item) => item.isbn && item.isbn === row.isbn);
      if (book) {
        book.price = Number(row.supplierPrice || book.price);
        book.lastUpdate = TODAY_ISO;
        updated += 1;
      }
    });
    state.pricePreview = false;
    state.modal = { type: "toast", data: `Precios actualizados por ISBN: ${updated} libros modificados.` };
    renderApp();
  },
  refreshTop10() {
    top10LastUpdate = "17/06/2026 16:45";
    state.modal = { type: "toast", data: "Ranking Top 10 actualizado de forma simulada. En producción se consultaría una API/backend propio." };
    renderApp();
  },
  addTop10ToInventory(rank) {
    const item = cuspideTop10.find((row) => row.rank === rank);
    if (!item) return;
    const existing = books.find((book) => book.isbn === item.matchIsbn || normalizeText(book.title) === normalizeText(item.title));
    if (existing) {
      state.view = "inventory";
      state.inventorySearch = existing.title;
      renderApp();
      return;
    }
    books.unshift({
      id: `b${Date.now()}`,
      title: item.title,
      author: item.author,
      isbn: item.matchIsbn,
      editorial: "Proveedor externo",
      category: "Novela",
      subcategory: "Top 10",
      price: item.price,
      cost: 0,
      stock: 0,
      minStock: 2,
      location: "Mesa central",
      lastUpdate: TODAY_ISO,
    });
    state.view = "inventory";
    state.inventorySearch = item.title;
    renderApp();
  },
  cycleRequestStatus(id) {
    const request = bookRequests.find((item) => item.id === id);
    if (!request) return;
    const statuses = ["Pendiente", "Consultado", "Reservado", "Entregado", "Cancelado"];
    const next = statuses[(statuses.indexOf(request.status) + 1) % statuses.length];
    request.status = next;
    renderApp();
  },
  saveRequest() {
    const form = document.getElementById("requestForm");
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.title || !data.customerName || !data.phone) {
      alert("Completá libro, nombre del cliente y teléfono.");
      return;
    }
    bookRequests.unshift({
      id: `p${Date.now()}`,
      date: data.date || TODAY_ISO,
      title: data.title,
      link: data.link,
      agreedPrice: Number(data.agreedPrice || 0),
      customerName: data.customerName,
      phone: data.phone,
      note: data.note,
      status: data.status || "Pendiente",
    });
    state.modal = null;
    state.view = "requests";
    renderApp();
  },
  saveTutorial() {
    const form = document.getElementById("tutorialForm");
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.title || !data.description) {
      alert("Completá título y descripción del tutorial.");
      return;
    }
    tutorialVideos.unshift({
      id: `t${Date.now()}`,
      title: data.title,
      category: data.category || "General",
      duration: data.duration || "02:00",
      description: data.description,
      url: data.url || "",
    });
    state.modal = null;
    state.view = "tutorials";
    renderApp();
  },
  openBudgetWindow() {
    window.open("presupuesto-erp-infinito-libros-final.html", "_blank");
  },
  printBudget() {
    const frame = document.getElementById("budgetFrame");
    if (frame?.contentWindow) {
      frame.contentWindow.focus();
      frame.contentWindow.print();
      return;
    }
    window.open("presupuesto-erp-infinito-libros-final.html", "_blank");
  },
  fakeToast(message) {
    state.modal = { type: "toast", data: message };
    renderApp();
  },
};

renderApp();
