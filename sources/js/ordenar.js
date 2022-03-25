new Vue({
    el: "#ordenar",
    template: `
    <form>
        <div class="form-group">
            <label><h2>Nombre</h2></label>
            <input id="nombre" type="text" class="form-control entrada" placeholder="Nombre">
        </div>
        <div class="form-group">
            <label><h2>Email</h2></label>
            <input id="email" type="email" class="form-control entrada" placeholder="Email">
        </div>
        <div class="form-group">
            <label><h2>Numero de Telefono</h2></label>
            <input id="telefono" type="text" class="form-control entrada" placeholder="Numero de Telefono">
        </div>
        <div class="form-group">
            <label><h2>Direccion</h2></label>
            <input id="direccion" type="text" class="form-control entrada" placeholder="Direccion">
        </div>
        <div class="form-group">
            <label><h2>Pasteles a Comprar</h2></label>
            <input id="sabores" type="text" class="form-control entrada" placeholder="Sabores">
        </div>

        <div class="">
            <h2 class="">Adornos</h2>
            <div class="">
                <div>
                    <input type="checkbox" id="letrero" value="letrero"> <label for="letrero"><h2>Letrero</h2></label>
                </div>
                <div>
                    <input type="checkbox" id="fondant" value="fondant"> <label for="fondant"><h2>Fondant</h2></label>
                </div>
                <div>
                    <input type="checkbox" id="globos" value="globos"> <label for="globos"><h2>Globos</h2></label>
                </div>
                <div>
                    <input type="checkbox" id="carta" value="carta"> <label for="carta"><h2>Carta</h2></label>
                </div>
                <div>
                    <input type="checkbox" id="caricatura" value="caricatura"> <label for="caricatura"><h2>Caricatura</h2></label>
                </div>
                <div>
                    <input type="checkbox" id="figura" value="figura"> <label for="figura"><h2>Figura</h2></label>
                </div>
            </div>
        </div>

        <div class="centrar">
            <button onClick="ordenar" type="submit" class="btn btn-primary boton "><h3>Enviar</h3></button>
        </div>
    </form>
    `
})