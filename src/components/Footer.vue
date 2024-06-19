<template>
  <div id="footer" class="">
    <div class="content-footer wrapper">
      <div class="row">
        <div class="history col-12 col-md-3">
          <Logo />
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <Social />
        </div>
        <div class="contact col-12 col-md-3">
          <div class="content">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="">Telefone: (11) 3333-3333</a>
              </li>
              <li>
                <a href="">WhatsApp: (11) 9999-9999</a>
              </li>
              <li>
                <a href="">E-mail: ralau@closet.com</a>
              </li>
              <li>
                <span>HORÁRIO DE ATENDIMENTO</span>
                <p>Seg a Sab das 10h às 22h</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="institutional col-12 col-md-3">
          <div class="content">
            <h3>Institutional</h3>
            <ul>
              <li>
                <a href="">Quem somos</a>
              </li>
              <li>
                <a href="">Seja um franqueado</a>
              </li>
              <li>
                <a href="">Política de privacidade</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="account col-12 col-md-3">
          <div class="content">
            <h3>Minha conta</h3>
            <ul>
              <li>
                <a href="">Minha conta</a>
              </li>
              <li>
                <a href="">Pedidos</a>
              </li>
              <li>
                <a href="">Endereço</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row copyright">
        <div class="copy col-md-12">
          <p>
            ©Copyright 2024 Todos os direitos reservados. RALAU CLOSET DE ROUPAS
            E ACESSORIOS LTDA | CNPJ 00.000.000/0001-00-
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "@/components/header/logo.vue";
import Social from "@/components/geral/social.vue";

export default {
  name: "Footer",
  components: {
    Logo,
    Social,
  },
  data() {},
  methods: {},
};
</script>
<style lang="css" scoped>
#footer {
  background-color: var(--gray2);
}
h3 {
  display: flex;
  height: 80px;
  align-items: center;
}
p,
span,
li a {
  font-size: var(--size1);
}

li {
  padding: 5px 0;
}
.content-footer .row .col-md-3 {
  height: 300px;
}
.copyright {
  border-top: 1px solid #ccc;
  padding-top: 15px;
}
.copyright p {
  text-align: center;
}
@media (max-width: 1023px) {
  h3 {
    justify-content: center;
    height: 50px;
  }
  p {
    text-align: center;
  }
  li {
    text-align: center;
  }
  #footer {
    padding: 0 15px;
  }
  .content-footer .row .col-12 {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto !important;
  }
  .history {
    margin-bottom: 50px;
  }
  .copyright{
    margin-top: 30px;
  }
}
</style>
