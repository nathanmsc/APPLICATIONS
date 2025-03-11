import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, e as useSeoMeta, f as __nuxt_component_1 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import '@iconify/utils';
import 'ipx';
import 'vue-router';
import '@iconify/utils/lib/css/icon';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import 'shiki';
import 'lodash-es';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg navbar-light bg-light" }, _attrs))}><div class="container-fluid"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Features</a></li><li class="nav-item"><a class="nav-link" href="#">Pricing</a></li><li class="nav-item"><a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar-component.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main$1 = {
  data() {
    const now = /* @__PURE__ */ new Date();
    return {
      year: now.getFullYear()
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "page-footer font-small bg-dark pt-4" }, _attrs))} data-v-78f715ab><div class="container-fluid lead text-center muted text-md-left" data-v-78f715ab><div class="row" data-v-78f715ab><div class="col-md-6 mt-md-0 mt-3" data-v-78f715ab><div class="module" data-v-78f715ab><h5 class="text-uppercase text-white" data-v-78f715ab>Endereço</h5><ul class="list-unstyled text-white" data-v-78f715ab><li data-v-78f715ab><span data-v-78f715ab>Edf. Galeria Larissa, Sala 02</span></li><li data-v-78f715ab><span data-v-78f715ab>Rua Boulevard América, nº 34</span></li><li data-v-78f715ab><span data-v-78f715ab>Nazaré - Salvador - BA</span></li></ul></div></div><hr class="clearfix w-100 d-md-none pb-3" data-v-78f715ab><div class="col-md-3 mb-md-0 mb-3" data-v-78f715ab><h5 class="text-uppercase text-white" data-v-78f715ab>Social</h5><ul class="list-unstyled text-white" data-v-78f715ab><li data-v-78f715ab><i class="fab fa-linkedin-in fa-2x" data-v-78f715ab></i><span data-v-78f715ab> LinkedIn</span></li><li data-v-78f715ab><i class="fab fa-instagram fa-2x" data-v-78f715ab></i><span data-v-78f715ab> Instagram</span></li></ul></div><hr class="clearfix w-100 d-md-none pb-3" data-v-78f715ab><div class="col-md-3 mb-md-0 mb-3" data-v-78f715ab><h5 class="text-uppercase text-white" data-v-78f715ab>Contato</h5><ul class="list-unstyled text-white" data-v-78f715ab><li data-v-78f715ab><i class="fab fa-whatsapp" data-v-78f715ab></i><b data-v-78f715ab> Whatsapp:</b><span data-v-78f715ab> (71) 9935-0102</span></li><li data-v-78f715ab><i class="far fa-envelope" data-v-78f715ab></i><b data-v-78f715ab> E-mail:</b><span data-v-78f715ab> contato@mindsetcloud.net</span></li><li data-v-78f715ab><i class="fa fa-phone" data-v-78f715ab></i><b data-v-78f715ab> Telefone:</b><span data-v-78f715ab> (71) 3371-7013</span></li></ul></div></div></div><div class="footer-copyright text-center text-white py-3" data-v-78f715ab> Copyright © mindsetcloud.net - ${ssrInterpolate($data.year)}</div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer-component.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78f715ab"]]);

/* empty css              */
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "MINDSETCLOUD",
      description: "IoT and Data Services."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_navbar_component = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_footer_component = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_navbar_component, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_footer_component, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
