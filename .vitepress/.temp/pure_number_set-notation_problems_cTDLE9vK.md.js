import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"id":"cTDLE9vK","vimeo":111},"headers":[],"relativePath":"pure/number/set-notation/problems/cTDLE9vK.md","filePath":"pure/number/set-notation/problems/cTDLE9vK.md"}');
const _sfc_main = { name: "pure/number/set-notation/problems/cTDLE9vK.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_activity_match_cards = resolveComponent("activity-match-cards");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_activity_match_cards, { cards: [
    "$\\mathbb{N} \\cap \\mathbb{Z}$",
    "$\\mathbb{N}$",
    "$\\mathbb{Z} \\cup \\mathbb{N}_{0}$",
    "$\\mathbb{Z}$",
    "$\\{ 2n + 1 \\in \\mathbb{Z} : n \\in \\mathbb{Z} \\}$",
    "$\\{ \\pm 1, \\pm 3, \\pm 5, \\ldots \\}$",
    "$\\{ n \\in \\mathbb{N}_{0} : 3 \\vert n \\}$",
    "$\\{ 0, 3, 6, 9, \\ldots \\}$",
    "$\\{ n \\in \\mathbb{N} : n leq 5 \\}$",
    "$\\{ 1, 2, 3, 4, 5 \\}$",
    "$\\{ n \\in \\mathbb{N} : \\, \\underline{\\hspace{1.5cm}} \\, \\} = \\{ 2, 4, 6, \\ldots \\}$",
    "$2 \\vert n$",
    "$\\{ n^2 : n \\in \\mathbb{Z} \\}$",
    "$\\{ n^2 : n \\in \\mathbb{N}_{0} \\}$",
    "$\\{ n^2 : n \\in \\mathbb{N} \\}$",
    "$\\{1, 4, 9, \\ldots \\}$"
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/number/set-notation/problems/cTDLE9vK.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cTDLE9vK = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cTDLE9vK as default
};
