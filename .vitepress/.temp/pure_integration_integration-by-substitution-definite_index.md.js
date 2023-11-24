import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Integration by substitution (definite)","description":"","frontmatter":{"title":"Integration by substitution (definite)","id":"BkqBmtKj","vimeo":111,"problems":null},"headers":[],"relativePath":"pure/integration/integration-by-substitution-definite/index.md","filePath":"pure/integration/integration-by-substitution-definite/index.md"}');
const _sfc_main = { name: "pure/integration/integration-by-substitution-definite/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>A</p><hr><p>B</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/integration/integration-by-substitution-definite/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
