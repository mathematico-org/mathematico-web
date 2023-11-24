import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
const data = JSON.parse("[]");
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Mathematico","text":"Learn and revise A Level Maths","tagline":"My great project tagline","actions":[{"theme":"brand","text":"Markdown Examples","link":"/markdown-examples"},{"theme":"alt","text":"API Examples","link":"/api-examples"}]},"features":[{"title":"Feature A","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature B","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{"title":"Feature C","details":"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    console.table(data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
