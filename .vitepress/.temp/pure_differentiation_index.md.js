import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Differentiation","description":"","frontmatter":{"title":"Differentiation","skills":["estimating-change","estimating-gradient","differentiate-first-principles","differentiate-polynomial","tangent-and-normal","turning-points","optimisation","differentiate-sin-cos","differentiate-e-to-kx","product-rule","chain-rule","quotient-rule","implicit-differentiation","parametric-curves","related-rates","convex-concave-inflection"]},"headers":[],"relativePath":"pure/differentiation/index.md","filePath":"pure/differentiation/index.md"}');
const _sfc_main = { name: "pure/differentiation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/differentiation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
