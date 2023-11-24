import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/trig-25.0bdd27bc.svg";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"id":"xmqaM32B","vimeo":111},"headers":[],"relativePath":"pure/trigonometry/arcs-and-sectors/problems/xmqaM32B.md","filePath":"pure/trigonometry/arcs-and-sectors/problems/xmqaM32B.md"}');
const _sfc_main = { name: "pure/trigonometry/arcs-and-sectors/problems/xmqaM32B.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>In the image below, a chord connects the end-points of a circular arc.</p><p><img${ssrRenderAttr("src", _imports_0)} alt="Chord in arc"></p><ol><li><p>Find the shaded area.</p></li><li><p>Find the perimeter of the shaded area.</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/trigonometry/arcs-and-sectors/problems/xmqaM32B.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xmqaM32B = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  xmqaM32B as default
};
