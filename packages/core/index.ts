import { makeInstall } from "@limonergy-ui/utils";
import components from "./components";
import "@limonergy-ui/theme/index.css"

const installer = makeInstall(components);

export * from "@limonergy-ui/components";
export default installer;