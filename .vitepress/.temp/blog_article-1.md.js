import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Article 1","description":"","frontmatter":{},"headers":[],"relativePath":"blog/article-1.md","filePath":"blog/article-1.md"}');
const _sfc_main = { name: "blog/article-1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="article-1" tabindex="-1">Article 1 <a class="header-anchor" href="#article-1" aria-label="Permalink to &quot;Article 1&quot;">​</a></h1><h2 id="dolor—sit—amet" tabindex="-1">dolor—sit—amet <a class="header-anchor" href="#dolor—sit—amet" aria-label="Permalink to &quot;dolor—sit—amet&quot;">​</a></h2><h3 id="consectetur-adipisicing" tabindex="-1">consectetur &amp; adipisicing <a class="header-anchor" href="#consectetur-adipisicing" aria-label="Permalink to &quot;consectetur &amp;amp; adipisicing&quot;">​</a></h3><h4 id="elit" tabindex="-1">elit <a class="header-anchor" href="#elit" aria-label="Permalink to &quot;elit&quot;">​</a></h4><h5 id="elit-1" tabindex="-1">elit <a class="header-anchor" href="#elit-1" aria-label="Permalink to &quot;elit&quot;">​</a></h5></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/article-1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  article1 as default
};
