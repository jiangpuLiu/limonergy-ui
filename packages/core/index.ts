import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { makeInstall } from '@limonergy-ui/utils'
import components from './utils/components'
import '@limonergy-ui/theme/index.css'
import printLogo from './utils/printLogo.ts'

import VxeUI from 'vxe-pc-ui'
import VxeUITable from 'vxe-table'

printLogo()
library.add(fas)
components.push(VxeUITable)
components.push(VxeUI)
const installer = makeInstall(components)

export * from '@limonergy-ui/components'
export default installer
