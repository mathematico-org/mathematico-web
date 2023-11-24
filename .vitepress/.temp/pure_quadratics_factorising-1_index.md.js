import { resolveComponent, withCtx, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Factorising I","description":"","frontmatter":{"title":"Factorising I","id":"UlQsJRQQ","vimeo":568463272,"problems":["FTL0zjWo","KOMlX1LC","fiHAyGvg","NiZD63hg","eQ7q0FtS","x6JLZF5x","ZgdzwQsF","hkxJ6WI4","vfaMK3hS","XwVqpggn"]},"headers":[],"relativePath":"pure/quadratics/factorising-1/index.md","filePath":"pure/quadratics/factorising-1/index.md"}');
const _sfc_main = { name: "pure/quadratics/factorising-1/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Example = resolveComponent("Example");
  const _component_Exercise = resolveComponent("Exercise");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontmatter-title" tabindex="-1">${ssrInterpolate(_ctx.$frontmatter.title)} <a class="header-anchor" href="#frontmatter-title" aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;">​</a></h1><p>Suppose we want to find the values of <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.294ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 572 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi></math></mjx-assistive-mml></mjx-container> which satisfy the quadratic equation</p><mjx-container class="MathJax" jax="SVG" display="true" style="${ssrRenderStyle({ "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" })}" xmlns="http://www.w3.org/2000/svg" width="17.781ex" height="2.185ex" role="img" focusable="false" viewBox="0 -883.9 7859 965.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(605,413) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g><g data-mml-node="mo" transform="translate(1230.8,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(2231,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(3231,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(4025.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(5025.4,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(6303.2,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(7359,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="block" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" })}"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>12</mn><mi>x</mi><mo>+</mo><mn>35</mn><mo>=</mo><mn>0</mn></math></mjx-assistive-mml></mjx-container><p>These values of <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.294ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 572 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi></math></mjx-assistive-mml></mjx-container> are called the <strong>roots</strong> of the quadratic, and one way to find them is by <strong>factorising</strong> into brackets:</p><mjx-container class="MathJax" jax="SVG" display="true" style="${ssrRenderStyle({ "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="18.051ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 7978.4 1000" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(1183.2,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(2183.4,0)"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(2683.4,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(3072.4,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(3461.4,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(4255.7,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(5255.9,0)"><path data-c="37" d="M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(5755.9,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(6422.7,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(7478.4,0)"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="block" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" })}"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mn>7</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></math></mjx-assistive-mml></mjx-container><p>In the examples, we&#39;ll learn how and why this works - once you&#39;ve watched the example, test your understanding by having a go at the exercise below.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Example, {
    id: _ctx.$frontmatter.vimeo
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>By first factorising, solve the following equations:</p><ol${_scopeId}><li${_scopeId}><p${_scopeId}><mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"${_scopeId}><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" })}" xmlns="http://www.w3.org/2000/svg" width="17.781ex" height="2.072ex" role="img" focusable="false" viewBox="0 -833.9 7859 915.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msup"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(605,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1230.8,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2231,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(3231,0)"${_scopeId}><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4025.2,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(5025.4,0)"${_scopeId}><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6303.2,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(7359,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"${_scopeId}><math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId}><msup${_scopeId}><mi${_scopeId}>x</mi><mn${_scopeId}>2</mn></msup><mo${_scopeId}>+</mo><mn${_scopeId}>12</mn><mi${_scopeId}>x</mi><mo${_scopeId}>+</mo><mn${_scopeId}>35</mn><mo${_scopeId}>=</mo><mn${_scopeId}>0</mn></math></mjx-assistive-mml></mjx-container></p></li><li${_scopeId}><p${_scopeId}><mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"${_scopeId}><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" })}" xmlns="http://www.w3.org/2000/svg" width="17.781ex" height="2.072ex" role="img" focusable="false" viewBox="0 -833.9 7859 915.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mn"${_scopeId}><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msup" transform="translate(500,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(605,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(1730.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2731,0)"${_scopeId}><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(3231,0)"${_scopeId}><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4025.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(5025.4,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6303.2,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(7359,0)"${_scopeId}><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"${_scopeId}><math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId}><mn${_scopeId}>3</mn><msup${_scopeId}><mi${_scopeId}>x</mi><mn${_scopeId}>2</mn></msup><mo${_scopeId}>−</mo><mn${_scopeId}>3</mn><mi${_scopeId}>x</mi><mo${_scopeId}>−</mo><mn${_scopeId}>18</mn><mo${_scopeId}>=</mo><mn${_scopeId}>0</mn></math></mjx-assistive-mml></mjx-container></p></li><li${_scopeId}><p${_scopeId}><mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"${_scopeId}><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" })}" xmlns="http://www.w3.org/2000/svg" width="17.957ex" height="2.072ex" role="img" focusable="false" viewBox="0 -833.9 7937 915.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mn"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1222.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msup" transform="translate(2222.4,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(394,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(3297.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(4353.6,0)"${_scopeId}><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5575.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(6576,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(7576,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"${_scopeId}><math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId}><mn${_scopeId}>10</mn><mo${_scopeId}>−</mo><msup${_scopeId}><mi${_scopeId}>t</mi><mn${_scopeId}>2</mn></msup><mo${_scopeId}>=</mo><mn${_scopeId}>50</mn><mo${_scopeId}>−</mo><mn${_scopeId}>14</mn><mi${_scopeId}>t</mi></math></mjx-assistive-mml></mjx-container></p></li></ol>`);
      } else {
        return [
          createVNode("p", null, "By first factorising, solve the following equations:"),
          createVNode("ol", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("mjx-container", {
                  class: "MathJax",
                  jax: "SVG",
                  style: { "direction": "ltr", "position": "relative" }
                }, [
                  (openBlock(), createBlock("svg", {
                    style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "17.781ex",
                    height: "2.072ex",
                    role: "img",
                    focusable: "false",
                    viewBox: "0 -833.9 7859 915.9",
                    "aria-hidden": "true"
                  }, [
                    createVNode("g", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      "stroke-width": "0",
                      transform: "scale(1,-1)"
                    }, [
                      createVNode("g", { "data-mml-node": "math" }, [
                        createVNode("g", { "data-mml-node": "msup" }, [
                          createVNode("g", { "data-mml-node": "mi" }, [
                            createVNode("path", {
                              "data-c": "1D465",
                              d: "M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",
                              style: { "stroke-width": "3" }
                            })
                          ]),
                          createVNode("g", {
                            "data-mml-node": "mn",
                            transform: "translate(605,363) scale(0.707)"
                          }, [
                            createVNode("path", {
                              "data-c": "32",
                              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                              style: { "stroke-width": "3" }
                            })
                          ])
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(1230.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2B",
                            d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(2231,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "32",
                            d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(3231,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D465",
                            d: "M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(4025.2,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2B",
                            d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(5025.4,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "33",
                            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "35",
                            d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(6303.2,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "3D",
                            d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(7359,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ])
                  ])),
                  createVNode("mjx-assistive-mml", {
                    unselectable: "on",
                    display: "inline",
                    style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                  }, [
                    createVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createVNode("msup", null, [
                        createVNode("mi", null, "x"),
                        createVNode("mn", null, "2")
                      ]),
                      createVNode("mo", null, "+"),
                      createVNode("mn", null, "12"),
                      createVNode("mi", null, "x"),
                      createVNode("mo", null, "+"),
                      createVNode("mn", null, "35"),
                      createVNode("mo", null, "="),
                      createVNode("mn", null, "0")
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("mjx-container", {
                  class: "MathJax",
                  jax: "SVG",
                  style: { "direction": "ltr", "position": "relative" }
                }, [
                  (openBlock(), createBlock("svg", {
                    style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "17.781ex",
                    height: "2.072ex",
                    role: "img",
                    focusable: "false",
                    viewBox: "0 -833.9 7859 915.9",
                    "aria-hidden": "true"
                  }, [
                    createVNode("g", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      "stroke-width": "0",
                      transform: "scale(1,-1)"
                    }, [
                      createVNode("g", { "data-mml-node": "math" }, [
                        createVNode("g", { "data-mml-node": "mn" }, [
                          createVNode("path", {
                            "data-c": "33",
                            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "msup",
                          transform: "translate(500,0)"
                        }, [
                          createVNode("g", { "data-mml-node": "mi" }, [
                            createVNode("path", {
                              "data-c": "1D465",
                              d: "M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",
                              style: { "stroke-width": "3" }
                            })
                          ]),
                          createVNode("g", {
                            "data-mml-node": "mn",
                            transform: "translate(605,363) scale(0.707)"
                          }, [
                            createVNode("path", {
                              "data-c": "32",
                              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                              style: { "stroke-width": "3" }
                            })
                          ])
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(1730.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(2731,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "33",
                            d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(3231,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D465",
                            d: "M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(4025.2,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(5025.4,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "38",
                            d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(6303.2,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "3D",
                            d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(7359,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ])
                  ])),
                  createVNode("mjx-assistive-mml", {
                    unselectable: "on",
                    display: "inline",
                    style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                  }, [
                    createVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createVNode("mn", null, "3"),
                      createVNode("msup", null, [
                        createVNode("mi", null, "x"),
                        createVNode("mn", null, "2")
                      ]),
                      createVNode("mo", null, "−"),
                      createVNode("mn", null, "3"),
                      createVNode("mi", null, "x"),
                      createVNode("mo", null, "−"),
                      createVNode("mn", null, "18"),
                      createVNode("mo", null, "="),
                      createVNode("mn", null, "0")
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("mjx-container", {
                  class: "MathJax",
                  jax: "SVG",
                  style: { "direction": "ltr", "position": "relative" }
                }, [
                  (openBlock(), createBlock("svg", {
                    style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "17.957ex",
                    height: "2.072ex",
                    role: "img",
                    focusable: "false",
                    viewBox: "0 -833.9 7937 915.9",
                    "aria-hidden": "true"
                  }, [
                    createVNode("g", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      "stroke-width": "0",
                      transform: "scale(1,-1)"
                    }, [
                      createVNode("g", { "data-mml-node": "math" }, [
                        createVNode("g", { "data-mml-node": "mn" }, [
                          createVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(1222.2,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "msup",
                          transform: "translate(2222.4,0)"
                        }, [
                          createVNode("g", { "data-mml-node": "mi" }, [
                            createVNode("path", {
                              "data-c": "1D461",
                              d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                              style: { "stroke-width": "3" }
                            })
                          ]),
                          createVNode("g", {
                            "data-mml-node": "mn",
                            transform: "translate(394,363) scale(0.707)"
                          }, [
                            createVNode("path", {
                              "data-c": "32",
                              d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                              style: { "stroke-width": "3" }
                            })
                          ])
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(3297.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "3D",
                            d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(4353.6,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "35",
                            d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(5575.8,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(6576,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          }),
                          createVNode("path", {
                            "data-c": "34",
                            d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(7576,0)"
                        }, [
                          createVNode("path", {
                            "data-c": "1D461",
                            d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ])
                  ])),
                  createVNode("mjx-assistive-mml", {
                    unselectable: "on",
                    display: "inline",
                    style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                  }, [
                    createVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createVNode("mn", null, "10"),
                      createVNode("mo", null, "−"),
                      createVNode("msup", null, [
                        createVNode("mi", null, "t"),
                        createVNode("mn", null, "2")
                      ]),
                      createVNode("mo", null, "="),
                      createVNode("mn", null, "50"),
                      createVNode("mo", null, "−"),
                      createVNode("mn", null, "14"),
                      createVNode("mi", null, "t")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="exercise" tabindex="-1">Exercise <a class="header-anchor" href="#exercise" aria-label="Permalink to &quot;Exercise&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Exercise, {
    id: _ctx.$frontmatter.id
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/quadratics/factorising-1/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
