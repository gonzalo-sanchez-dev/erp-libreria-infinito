# Infinito Libros - Demo ERP navegable

Demo frontend navegable para presentar un sistema de gestión simple para una librería.

## Cómo abrir la demo

1. Descomprimir el archivo ZIP.
2. Abrir `index.html` con doble clic en el navegador.
3. Ingresar con cualquier usuario de prueba.
4. La contraseña simulada es: `demo`.

## Usuarios de prueba

- Vero — Dueña / Administradora
- Agus — Vendedora
- Ari — Vendedora
- Ana — Vendedora

## Módulos incluidos

- Login simulado por perfil
- Dashboard general
- Ventas
- Nueva venta con carrito
- Detalle de venta
- Emisión simulada de factura
- Impresión de factura desde el navegador
- Caja actual
- Cierre de caja
- Historial de cajas
- Stock / Inventario
- Alta y edición simulada de libros
- Ingreso de stock
- Movimientos de stock
- Carga masiva por remito simulada
- Actualización masiva de precios por ISBN
- Top 10 Cúspide simulado
- Pedidos de clientes
- Tutoriales / instructivos
- Reportes básicos
- Usuarios / vendedoras
- Configuración básica
- Presupuesto integrado en menú de Vero

## Flujo de facturación de la demo

1. Entrar a `Nueva venta`.
2. Agregar productos al carrito.
3. Confirmar la venta.
4. En el detalle de venta, presionar `Emitir factura`.
5. Presionar `Imprimir factura`.

La impresión abre una vista imprimible con formato de factura C, número, punto de venta y CAE simulados.

## Alcance técnico

La demo no usa backend, base de datos ni conexión real con ARCA. El presupuesto se incluye como archivo HTML estático y se visualiza desde el menú `Presupuesto` al ingresar con Vero. Los datos se encuentran mockeados en `app.js` y se modifican solo durante la sesión actual del navegador.

La integración con ARCA se muestra únicamente como estado funcional simulado para una etapa posterior. La factura imprimible no tiene validez fiscal.

## Siguiente etapa sugerida

Migrar esta demo a React + Vite + Tailwind, separando:

- Datos mock en archivos JS/JSON
- Componentes reutilizables
- Rutas por módulo
- Contexto de autenticación simulado
- Servicios preparados para conectar backend real


## Presupuesto integrado

Para ver el presupuesto dentro de la demo:

1. Ingresar con `Vero` usando la contraseña `demo`.
2. Abrir el menú `Presupuesto`.
3. Usar `Abrir presupuesto en pestaña nueva` o `Imprimir / guardar PDF` si se desea exportarlo.

El archivo del presupuesto se encuentra en `presupuesto-erp-infinito-libros-final.html`.


## Corrección visual incluida

El menú lateral permite desplazamiento interno cuando el perfil de Dueña muestra más opciones, para que se puedan ver todos los módulos, incluido Presupuesto.


## Corrección de menú lateral

El menú lateral queda fijo en escritorio y la lista de opciones tiene scroll interno. La opción `Presupuesto` está ubicada arriba para facilitar la presentación comercial.
