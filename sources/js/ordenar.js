new Vue({
    el:"#ordenar",
    template:`
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
        <div class="form-group">
            <label><h2>Adornos para el Pastel</h2></label>
            <input id="adornos" type="text" class="form-control entrada" placeholder="Adornos">
        </div>

        <button onClick="ordenar" type="submit" class="btn btn-primary boton"><h3>Enviar</h3></button>
    </form>
    `
})