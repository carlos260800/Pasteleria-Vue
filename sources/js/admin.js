new Vue({
    el: "#admin",
    template: `
    <div class="contenedor">
        <div class="dividirPantalla">
            <div class="extras">
                <div>
                    <h2>Ingredientes</h2>
                    <ul>
                        <li>Cafe</li>
                        <li>Chocolate</li>
                        <li>Vainilla</li>
                        <li>Fresa</li>
                        <li>Unicornio</li>
                        <li>M&Ms</li>
                    </ul>
                </div>

                <div>
                    <h2>Adornos</h2>
                    <ul>
                        <li>Letrero</li>
                        <li>Fondant</li>
                        <li>Globos</li>
                        <li>Carta</li>
                        <li>Caricatura</li>
                        <li>Pequeña Figura</li>
                    </ul>
                </div>
                

            </div>
            
            <div class="pedidos">
                <h2>Pedidos</h2>
                <div>
                    <h3>Nombre: </h3>
                    <p>Email: </p>
                    <p>Telefone: </p>
                    <p>Direccion: </p>
                    <p>Sabores: </p>
                    <p>Adornos: </p>
                </div>
            </div>
        </div>
    </div>
    `
})