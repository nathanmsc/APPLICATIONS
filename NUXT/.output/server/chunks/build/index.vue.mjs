import { ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "jumbotron",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-3b54453d><img src="https://raw.githubusercontent.com/mindsetcloud/mindsetcloud/refs/heads/main/MINDSETCLOUD/IMG/avatar.svg" alt="Logo" width="18%" style="${ssrRenderStyle({ "margin-right": "1%" })}" data-v-3b54453d><img src="https://raw.githubusercontent.com/mindsetcloud/mindsetcloud/refs/heads/main/MINDSETCLOUD/IMG/logo.svg" alt="Brand" width="80%" style="${ssrRenderStyle({ "margin-left": "1%" })}" data-v-3b54453d></div><div data-v-3b54453d><h1 data-v-3b54453d>Transforming Data into Powerful Insights</h1></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/jumbotron.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3b54453d"]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Jumbotron = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Jumbotron, null, null, _parent));
  _push(`<div id="index"><h3>DATA ENGINEERING TOOLS AND INFRASTRUCTURE</h3></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
