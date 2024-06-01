import type { WathqnyConfig as WathqnyConfigType } from "wtqtypes";
// @ts-expect-error Cannot find module '/wathqny.config' or its corresponding type declarations.
import untypedWathqnyConfig from "/wathqny.config"

let untypedWathqnyConfig: WathqnyConfigType

export default untypedWathqnyConfig