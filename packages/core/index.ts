import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import { makeInstall } from "@limonergy-ui/utils";
import components from "./components";
import "@limonergy-ui/theme/index.css"

library.add(fas)
const installer = makeInstall(components);

export * from "./components.ts";
export default installer;