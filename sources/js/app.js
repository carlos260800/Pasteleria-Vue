Vue.component("pastel-card", {
  props: ["image", "title"],
  template: `
  
    <div class="pastel">
      <a class="" href="">
        <img class="pastel-foto" v-bind:src="image" v-bind:alt="title"/>
        <h2 class="nombre-pastel">{{ title }}</h2>  
      </a>  
    </div>
    
  `,
});

new Vue({
  el: "#app",
  data: {
    pasteles: [
      {
        title: "Pastel de Cafe",
        image: 'https://www.petitchef.es/imgupl/recipe/pastel-de-cafe-con-leche--md-53511p68103.jpg'
      },
      {
        title: "Pastel de Chocolate",
        image:
          "https://elgourmet.s3.amazonaws.com/recetas/share/share_5tdy1cijhm_trufa.jpg",
      },
      {
        title: "Pastel de Vainilla",
        image:
          "https://www.gastrolabweb.com/u/fotografias/m/2021/5/13/f850x638-13189_90678_5050.jpg",
      },
      {
        title: "Pastel de Fresa",
        image:
          "https://cdn2.cocinadelirante.com/sites/default/files/images/2017/07/pasteldefresasconcrema.jpg",
      },
      {
        title: "Pastel de Unicornio",
        image:
          "https://cdn.shopify.com/s/files/1/0093/3465/2987/products/unicornio_feliz_2048x.jpg?v=1554831793",
      },
      {
        title: "Pastel de M&Ms",
        image:
          "https://www.casarex.net/wp-content/uploads/preview.jpg",
      },
    ],
  },
  template: `
    <div class="grid">
      <pastel-card v-for="(pastel, index) in pasteles"
        :key="index"
        :title="pastel.title"
        :image="pastel.image">
      </pastel-card>
    </div>
  `,
});