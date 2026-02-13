/* =========================
   PRODUCTOS
========================= */
const productos = {
    tortas: [
        { nombre: "Torta de Cochinita Pibil", precio: 39.5, img: "img/TortaCochina22.jpeg" },
        { nombre: "Torta de Pollo Pibil", precio: 39.5, img: "img/TortaCochina.jpeg" },
        { nombre: "Torta de Queso Panela", precio: 39.5, img: "img/TortaChoriqueso1.jpeg" },
        { nombre: "Torta de Jamón Envinado", precio: 39.5, img: "img/Torta_env.jpeg" },
        { nombre: "Torta de Huevo con Chorizo", precio: 39.5, img: "img/TortaChorizo2.jpeg" },
        { nombre: "Torta de Choriqueso", precio: 39.5, img: "img/TortaChoriqueso1.jpeg" },
        { nombre: "Torta de Chorizo", precio: 39.5, img: "img/TortaChorizo2.jpeg" },
        { nombre: "Torta de Choripapa", precio: 39.5, img: "img/TortaChoripapa.jpeg" },
        { nombre: "Torta de Chorizo Argentino", precio: 39.5, img: "img/TortaChArg.jpeg" },
        { nombre: "Torta de Pierna Enchilada", precio: 39.5, img: "img/TortaPierna.jpeg" }
    ],
    pambazos: [
        { nombre: "Pambazo de Cochinita Pibil", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Pollo Pibil", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Queso Panela", precio: 32, img: "img/PambazoChorizoArg2.jpeg" },
        { nombre: "Pambazo de Pierna Enchilada", precio: 32, img: "img/PambazoPierna2.jpeg" },
        { nombre: "Pambazo de Huevo con Chorizo", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Choriqueso", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Chorizo", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Jamon Envinado", precio: 32, img: "img/PambazoPierna.jpeg" },
        { nombre: "Pambazo de Chorizo Argentino", precio: 32, img: "img/PambazoChorizoArg.jpeg" },
        { nombre: "Pambazo de Choripapa", precio: 32, img: "img/PambazoChoripapa.jpeg" }
    ],
    bebidas: [
        { nombre: "Agua de Jamaica", precio: 25, img: "img/Aguajamaica.jpeg" },
        { nombre: "Agua de Horchata", precio: 25, img: "img/aguaHorchata.jpeg" },
        { nombre: "Agua de Tamarindo", precio: 25, img: "img/aguaHorchata.jpeg" },
        { nombre: "Agua de Piña Colada", precio: 25, img: "img/aguaHorchata.jpeg" },
        { nombre: "Agua Embotellado", precio: 15, img: "img/agua.jpeg" },
        { nombre: "Arizona", precio: 34, img: "img/Arizona.jpg" },
        { nombre: "Refresco(600 ml)", precio: 34, img: "img/Coca.jpeg" },
        { nombre: "Cerveza de Raíz", precio: 35, img: "img/refresco.jpg" },
        { nombre: "Cafe Americano", precio: 35, img: "img/cafe.jpg" },
        { nombre: "Licuado de Fresa", precio: 35, img: "img/Licuadofresa.jpeg" },
        { nombre: "Licuado de Platano", precio: 35, img: "img/Licuadoplatano.jpeg" },
        { nombre: "Licuado de Avena", precio: 35, img: "img/agua.jpg" },
        { nombre: "Chocomilk", precio: 30, img: "img/chocomilk.jpeg" },
        { nombre: "Capuchino", precio: 40, img: "img/capuchino.jpeg" },
        { nombre: "Jumex Vidrio", precio: 34, img: "img/jumex.jpeg" },
    ],
    postres: [
        { nombre: "Brownie", precio: 35, img: "img/brownie.jpg" },
        { nombre: "Carlota", precio: 25, img: "img/carlota.jpeg" },
        { nombre: "Cubito de Oreo", precio: 18, img: "img/cubitos.jpeg" },
        { nombre: "Cubito de Coco", precio: 18, img: "img/CubitoCacahuate.jpeg" },
        { nombre: "Cubito de Mango", precio: 18, img: "img/CubitoMango.jpeg" },
        { nombre: "Cubito de Cacahuate", precio: 18, img: "img/CubitoCacahuate.jpeg" },
        { nombre: "Chamoyada", precio: 18, img: "img/chamoyada.jpeg" },
    ],
    molletes: [
        { nombre: "Mollete de Cochinita Pibil", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Pollo Pibil", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Queso Panela", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Jamon Envinado", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Pierna Enchilada", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Huevo con Chorizo", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Choriqueso", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Chorizo", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Chorizo Argentino", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete de Choripapa", precio: 49, img: "img/Molletes.jpeg" },
        { nombre: "Mollete Sencillo", precio: 49, img: "img/Molletes.jpeg" },
    ],
    tacos: [
        { nombre: "Taco de Cochinita", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Chorizo Argentino", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Pollo Pibil", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Pierna Enchilada", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Chorizo", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Choriqueso", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Choripapa", precio: 15, img: "img/tacos.jpeg" },
        { nombre: "Taco de Huevo con Chorizo", precio: 15, img: "img/tacos.jpeg" },
    ],
};

/* =========================
   PROMOCIONES
========================= */
const PROMOS = {
    "paquete-toston": {
        nombre: "Paquete Tostón",
        descripcion: "1 Torta + agua",
        precio: 50,
        max: 1,
        sabores: ["Pierna Enchilada", "Cochinita Pibil"],
        incluyeagua: true,
        img: "img/promotoston.jpeg"
    },
    "paquete-taquero": {
        nombre: "Paquete Taquero",
        descripcion: "4 Tacos + agua",
        precio: 65,
        max: 4,
sabores: ["Cochinita Pibil", "Pollo Pibil", "Pierna Enchilada", "Chorizo","Choriqueso","Huevo con Chorizo", "Chorizo Argentino","Choripapa"],
        incluyeagua: true,
        img: "img/promotacos.jpeg"
    },
    "paquete-familiar": {
        nombre: "Paquete Familiar",
        descripcion: "6 Tortas",
        precio: 199,
        max: 6,
        sabores: ["Cochinita Pibil", "Pollo Pibil", "Pierna Enchilada", "Chorizo","Choriqueso","Huevo con Chorizo", "Chorizo Argentino","Choripapa","Jamon Envinado","Queso Panela"],
        incluyeagua: false,
        img: "img/promo1.jpg"
    },
    "martes-pambacero": {
        nombre: "Martes Pambacero",
        descripcion: "2 Pambazos + agua",
        precio: 65,
        max: 2,
sabores: ["Cochinita Pibil", "Pollo Pibil", "Pierna Enchilada", "Chorizo","Choriqueso","Huevo con Chorizo", "Chorizo Argentino","Choripapa","Jamon Envinado","Queso Panela"],
        incluyeagua: true,
        img: "img/promo-pambazo.jpg"
    },
    "lunes-jueves": {
        nombre: "Promo Lunes y Jueves",
        descripcion: "2 Tortas + agua",
        precio: 85,
        max: 2,
        sabores: ["Cochinita Pibil", "Pollo Pibil", "Pierna Enchilada", "Chorizo","Choriqueso","Huevo con Chorizo", "Chorizo Argentino","Choripapa","Jamon Envinado","Queso Panela"],
        incluyeagua: true,
        img: "img/promo-tortas.jpg"
    }
};

/* =========================
   LÓGICA DEL CARRITO
========================= */
let carrito = JSON.parse(localStorage.getItem("carrito_oso")) || [];

function guardarEnStorage() {
    localStorage.setItem("carrito_oso", JSON.stringify(carrito));
}

function agregarCarrito(nombre, precio, sabores = null, agua = null) {
    const item = carrito.find(p => 
        p.nombre === nombre && 
        JSON.stringify(p.sabores) === JSON.stringify(sabores) &&
        p.agua === agua
    );

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1, sabores, agua });
    }
    
    guardarEnStorage();
    actualizarCarrito();
}

// ✅ FUNCIÓN CORREGIDA - AHORA SÍ ELIMINA PRODUCTOS
function quitarCarrito(nombre, sabores = null, agua = null) {
    const i = carrito.findIndex(p => 
        p.nombre === nombre && 
        JSON.stringify(p.sabores) === JSON.stringify(sabores) &&
        p.agua === agua
    );
    
    if (i >= 0) {
        carrito[i].cantidad--;
        if (carrito[i].cantidad === 0) {
            carrito.splice(i, 1);
        }
        guardarEnStorage();
        actualizarCarrito();
    }
}

function vaciarCarrito() {
    if(confirm("¿Estás seguro de vaciar tu pedido?")) {
        carrito = [];
        guardarEnStorage();
        actualizarCarrito();
        // ❌ ELIMINADO: location.reload(); - No es necesario
    }
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalEl = document.getElementById("total-carrito");
    const badge = document.getElementById('contador-badge');

    if (!lista || !totalEl) return;

    lista.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    carrito.forEach((p, index) => {
        const sub = p.precio * p.cantidad;
        total += sub;
        totalItems += p.cantidad;

        const itemDiv = document.createElement("li");
        itemDiv.className = "item-carrito";
        itemDiv.setAttribute('data-index', index);
        
        // Determinar si es una promo
        const esPromo = p.nombre.includes('🎁');
        
        // HTML del item
        let htmlInfo = `
            <div class="item-info">
                <strong>${p.nombre}</strong>
        `;
        
        // Sabores (con botón de editar si es promo)
        if (p.sabores && p.sabores.length > 0) {
            htmlInfo += `<br><small>Sabor: ${p.sabores.join(", ")}`;
            if (esPromo) {
                htmlInfo += ` <button class="badge-editar" onclick="editarPromo('${p.nombre.replace('🎁 ', '')}', ${index})">✏️ Editar</button>`;
            }
            htmlInfo += `</small>`;
        }
        
        // Agua
        if (p.agua) {
            htmlInfo += `<br><small>🥤 Agua: ${p.agua}</small>`;
        }
        
        htmlInfo += `<div class="precio-item">$${sub.toFixed(2)}</div>`;
        htmlInfo += `</div>`;
        
        // Acciones (botones +, -, eliminar)
        const htmlAcciones = `
            <div class="item-acciones">
                <div class="item-contador">
                    <button class="btn-contador-mini" onclick="disminuirCantidadCarrito(${index})" ${p.cantidad <= 1 ? 'disabled' : ''}>−</button>
                    <span class="cantidad-actual">${p.cantidad}</span>
                    <button class="btn-contador-mini" onclick="aumentarCantidadCarrito(${index})">+</button>
                </div>
                <button class="btn-eliminar-item" onclick="eliminarItemCarrito(${index})">
                    🗑️ Eliminar
                </button>
            </div>
        `;
        
        itemDiv.innerHTML = htmlInfo + htmlAcciones;
        lista.appendChild(itemDiv);
    });

    totalEl.textContent = `$${total.toFixed(2)}`;

    if (badge) {
        badge.innerText = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // También actualizar los contadores de los productos en la página
    sincronizarContadoresProductos();
}

/* =========================
   RENDERIZADO
========================= */
function renderProductos(cat, contenedorId) {
    const cont = document.getElementById(contenedorId);
    if (!cont) return;
    cont.innerHTML = "";

    productos[cat].forEach(p => {
        const itemEnCarrito = carrito.find(item => item.nombre === p.nombre && !item.sabores);
        const cantInicial = itemEnCarrito ? itemEnCarrito.cantidad : 0;

        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}">
            <h4>${p.nombre}</h4>
            <p>$${p.precio.toFixed(2)}</p>
            <div class="contador">
                <button class="btn-menos">-</button>
                <span class="cant-num">${cantInicial}</span>
                <button class="btn-mas">+</button>
            </div>
        `;

        const span = div.querySelector(".cant-num");
        div.querySelector(".btn-mas").onclick = () => {
            span.textContent = Number(span.textContent) + 1;
            agregarCarrito(p.nombre, p.precio);
        };
        div.querySelector(".btn-menos").onclick = () => {
            if (Number(span.textContent) > 0) {
                span.textContent = Number(span.textContent) - 1;
                quitarCarrito(p.nombre);
            }
        };
        cont.appendChild(div);
    });
}

function renderPromos() {
    const contenedor = document.getElementById("lista-paquetes");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    Object.keys(PROMOS).forEach(key => {
        const p = PROMOS[key];
        const div = document.createElement("div");
        div.className = "producto promo";
        div.innerHTML = `
            <img src="${p.img}" alt="${p.nombre}">
            <div class="info-promo">
                <h4>${p.nombre}</h4>
                <p>${p.descripcion}</p>
                <div class="precio-tag">$${p.precio}</div>
                <button class="btn-seleccionar" onclick="abrirPromo('${key}')">Elegir sabores</button>
            </div>
        `;
        contenedor.appendChild(div);
    });
}

/* =========================
   MODALES
========================= */
let promoActual = null;

function abrirPromo(key) {
    promoActual = PROMOS[key];
    if (!promoActual) return;

    const selectAgua = document.getElementById("sabor-agua");
    if (selectAgua) selectAgua.selectedIndex = 0;

    document.getElementById("modalSabores").style.display = "flex";
    document.getElementById("tituloPromo").innerText = promoActual.nombre;
    document.getElementById("textoLimite").innerText = `Elige un total de ${promoActual.max} tortas`;

    const cont = document.getElementById("listaSabores");
    cont.innerHTML = "";

    promoActual.sabores.forEach(s => {
        cont.innerHTML += `
            <div class="opcion-sabor-cantidad">
                <span>${s}</span>
                <div class="controles-promo">
                    <button type="button" class="btn-modal-menos" onclick="cambiarCantSabor(this, -1)">-</button>
                    <span class="cant-sabor" data-sabor="${s}">0</span>
                    <button type="button" class="btn-modal-mas" onclick="cambiarCantSabor(this, 1)">+</button>
                </div>
            </div>
        `;
    });

    document.getElementById("seccion-agua").style.display = promoActual.incluyeagua ? "block" : "none";
}

function cerrarModal() {
    document.getElementById("modalSabores").style.display = "none";
}

function cambiarCantSabor(btn, delta) {
    const contenedor = btn.parentElement;
    const span = contenedor.querySelector('.cant-sabor');
    let cantActual = parseInt(span.innerText);
    const totalSeleccionado = Array.from(document.querySelectorAll('.cant-sabor'))
                                   .reduce((acc, el) => acc + parseInt(el.innerText), 0);

    if (delta > 0 && totalSeleccionado >= promoActual.max) {
        alert(`Esta promoción solo incluye ${promoActual.max} tortas.`);
        return;
    }
    if (cantActual + delta >= 0) span.innerText = cantActual + delta;
}

function confirmarSabores() {
    const saboresElegidos = [];
    document.querySelectorAll('.cant-sabor').forEach(span => {
        const cantidad = parseInt(span.innerText);
        const nombreSabor = span.getAttribute('data-sabor');
        for (let i = 0; i < cantidad; i++) saboresElegidos.push(nombreSabor);
    });

    if (saboresElegidos.length !== promoActual.max) {
        alert(`Debes elegir exactamente ${promoActual.max} tortas.`);
        return;
    }

    let agua = null;
    if (promoActual.incluyeagua) {
        const selectAgua = document.getElementById("sabor-agua");
        if (!selectAgua.value) {
            alert("Elige el sabor de tu agua.");
            return;
        }
        agua = selectAgua.value;
    }

    agregarCarrito(`🎁 ${promoActual.nombre}`, promoActual.precio, saboresElegidos, agua);
    cerrarModal();
}

/* =========================
   FORMULARIO DE ENVÍO
========================= */
function prepararEnvio() {
    if (carrito.length === 0) {
        alert("🛒 Tu carrito está vacío.");
        return;
    }
    cerrarCarrito();
    document.getElementById('modal-formulario').style.display = 'flex';
}

function cerrarFormulario() {
    const modal = document.getElementById('modal-formulario');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ✅ FUNCIÓN PRINCIPAL DE WHATSAPP - CORREGIDA
function enviarWhatsApp(e) {
    // Prevenir envío del formulario
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Obtener valores
    const nombre = document.getElementById("nombre-cliente")?.value.trim();
    const telefono = document.getElementById("telefono-cliente")?.value.trim();
    const direccion = document.getElementById("direccion-cliente")?.value.trim();
    const notas = document.getElementById("observaciones")?.value.trim();

    // Validaciones
    if (!nombre) {
        alert("⚠️ Por favor ingresa tu nombre");
        return false;
    }
    if (!telefono) {
        alert("⚠️ Por favor ingresa tu teléfono");
        return false;
    }
    if (!direccion) {
        alert("⚠️ Por favor ingresa tu dirección");
        return false;
    }
    if (carrito.length === 0) {
        alert("🛒 Tu carrito está vacío");
        cerrarFormulario();
        return false;
    }

    // Construir mensaje
    let mensaje = "🐻 *NUEVO PEDIDO - TORTAS EL OSO*\n";
    mensaje += "----------------------------------\n";
    mensaje += `👤 *CLIENTE:* ${nombre}\n`;
    mensaje += `📱 *TEL:* ${telefono}\n`;
    mensaje += `📍 *ENTREGA:* ${direccion}\n`;
    if (notas) mensaje += `📝 *NOTAS:* ${notas}\n`;
    mensaje += "----------------------------------\n\n🛒 *PRODUCTOS:*\n";

    let total = 0;
    carrito.forEach(p => {
        const subtotal = p.precio * p.cantidad;
        total += subtotal;
        mensaje += `*${p.cantidad}x ${p.nombre}*\n`;
        if (p.sabores?.length) mensaje += `   └ Sabores: ${p.sabores.join(", ")}\n`;
        if (p.agua) mensaje += `   └ 🥤 Agua: ${p.agua}\n`;
    });

    mensaje += `\n💰 *TOTAL: $${total.toFixed(2)}*`;

    // Abrir WhatsApp
    window.open(`https://wa.me/5212721552380?text=${encodeURIComponent(mensaje)}`, "_blank");

    // Limpiar todo
    cerrarFormulario();
    carrito = [];
    guardarEnStorage();
    actualizarCarrito();
    
    const form = document.getElementById("formulario-pedido-pro");
    if (form) form.reset();
    
    return false;
}

/* =========================
   SIDEBAR CARRITO
========================= */
function cerrarCarrito() {
    const container = document.getElementById('carrito-container');
    if (container) container.classList.remove('active');
}

// ✅ INICIALIZACIÓN - SOLO UNA VEZ
document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Inicializando Tortas El Oso");
    
    // Renderizar todo
    renderProductos("tortas", "lista-tortas");
    renderProductos("pambazos", "lista-pambazos");
    renderProductos("bebidas", "lista-bebidas");
    renderProductos("molletes", "lista-molletes");
    renderProductos("tacos", "lista-tacos");
    renderProductos("postres", "lista-postres");
    renderPromos();
    
    // Actualizar carrito
    actualizarCarrito();
    
    // ✅ CONFIGURAR FORMULARIO - UNA SOLA VEZ
    const formulario = document.getElementById("formulario-pedido-pro");
    if (formulario) {
        // Remover cualquier evento anterior y agregar el nuevo
        formulario.onsubmit = enviarWhatsApp;
    }
    
    // ✅ CERRAR FORMULARIO AL INICIAR
    cerrarFormulario();
    
    // Botón del carrito
    const btnCarrito = document.getElementById('btn-carrito');
    if (btnCarrito) {
        btnCarrito.onclick = (e) => {
            e.stopPropagation();
            document.getElementById('carrito-container')?.classList.toggle('active');
        };
    }
    
    // Cerrar carrito al hacer click fuera
    document.addEventListener('click', (e) => {
        const cart = document.getElementById('carrito-container');
        const btnCart = document.getElementById('btn-carrito');
        if (cart && !cart.contains(e.target) && e.target !== btnCart && !btnCart?.contains(e.target)) {
            cerrarCarrito();
        }
    });
    
    // Promos desde URL
    const params = new URLSearchParams(window.location.search);
    const promoKey = params.get('promo');
    if (promoKey && PROMOS[promoKey]) {
        setTimeout(() => {
            abrirPromo(promoKey);
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 500);
    }
});
/* =========================
   EDITAR CARRITO - NUEVAS FUNCIONES
========================= */

// Aumentar cantidad desde el carrito
function aumentarCantidadCarrito(index) {
    if (carrito[index]) {
        carrito[index].cantidad++;
        guardarEnStorage();
        actualizarCarrito();
    }
}

// Disminuir cantidad desde el carrito
function disminuirCantidadCarrito(index) {
    if (carrito[index]) {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
            guardarEnStorage();
            actualizarCarrito();
        }
    }
}

// Eliminar item específico del carrito
function eliminarItemCarrito(index) {
    if (confirm("¿Eliminar este producto del pedido?")) {
        carrito.splice(index, 1);
        guardarEnStorage();
        actualizarCarrito();
    }
}

// Editar promoción (reabrir modal con los sabores seleccionados)
function editarPromo(nombrePromo, index) {
    const item = carrito[index];
    
    // Buscar la promo por nombre
    let promoKey = null;
    for (let key in PROMOS) {
        if (PROMOS[key].nombre === nombrePromo) {
            promoKey = key;
            break;
        }
    }
    
    if (promoKey) {
        // Abrir el modal de la promo
        abrirPromo(promoKey);
        
        // Precargar los sabores que ya tenía seleccionados
        setTimeout(() => {
            const saboresActuales = item.sabores || [];
            
            // Contar frecuencia de cada sabor
            const conteoSabores = {};
            saboresActuales.forEach(sabor => {
                conteoSabores[sabor] = (conteoSabores[sabor] || 0) + 1;
            });
            
            // Establecer cantidades en el modal
            document.querySelectorAll('.cant-sabor').forEach(span => {
                const sabor = span.getAttribute('data-sabor');
                if (conteoSabores[sabor]) {
                    span.innerText = conteoSabores[sabor];
                }
            });
            
            // Precargar agua si aplica
            if (item.agua) {
                const selectAgua = document.getElementById("sabor-agua");
                if (selectAgua) {
                    selectAgua.value = item.agua;
                }
            }
            
            // Eliminar el item original (se reemplazará con el editado)
            carrito.splice(index, 1);
            guardarEnStorage();
            
        }, 100);
    }
}

// Sincronizar contadores de productos con el carrito
function sincronizarContadoresProductos() {
    // Actualizar contadores de productos normales
    document.querySelectorAll('.producto').forEach(productoDiv => {
        const nombreProducto = productoDiv.querySelector('h4')?.textContent;
        if (nombreProducto) {
            const itemEnCarrito = carrito.find(item => 
                item.nombre === nombreProducto && !item.sabores
            );
            
            const spanContador = productoDiv.querySelector('.cant-num');
            if (spanContador) {
                spanContador.textContent = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            }
        }
    });
}

// Sobrescribir la función agregarCarrito para que actualice contadores
const originalAgregarCarrito = agregarCarrito;
agregarCarrito = function(nombre, precio, sabores = null, agua = null) {
    originalAgregarCarrito.call(this, nombre, precio, sabores, agua);
    sincronizarContadoresProductos();
}

// Sobrescribir la función quitarCarrito para que actualice contadores
const originalQuitarCarrito = quitarCarrito;
quitarCarrito = function(nombre, sabores = null, agua = null) {
    originalQuitarCarrito.call(this, nombre, sabores, agua);
    sincronizarContadoresProductos();
}