import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import { makeInstall } from "@limonergy-ui/utils";
import components from "./components";
import "@limonergy-ui/theme/index.css"
import printLogo from "./printLogo.ts";

printLogo()
library.add(fas)
const installer = makeInstall(components);

export * from "@limonergy-ui/components";
export default installer;