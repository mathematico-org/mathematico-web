import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Trigonometry","description":"","frontmatter":{"title":"Trigonometry","skills":["basic-trig","sin-cos-tan","trig-identities","using-identities","solve-transformed-equations","cos-rule","sin-rule","area-of-triangle","radians","arcs-and-sectors","addition-formulae","double-angle-formulae","harmonic-form","reciprocal-functions","small-angle-approximations"]},"headers":[],"relativePath":"pure/trigonometry/index.md","filePath":"pure/trigonometry/index.md"}');
const _sfc_main = { name: "pure/trigonometry/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/trigonometry/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
