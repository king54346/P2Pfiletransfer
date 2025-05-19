import * as wasm from "./frontend_bg.wasm";
export * from "./frontend_bg.js";
import { __wbg_set_wasm } from "./frontend_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
