import { expect, it, describe } from 'vitest'
import type { Plugin } from 'vue'
import {
  LmAlert,
  LmButton,
  LmButtonGroup,
  LmIcon,
  LmCollapse,
  LmCollapseItem,
} from '../index.ts'
import { get, map } from 'lodash-es'

const comps = [
  LmAlert,
  LmButton,
  LmButtonGroup,
  LmIcon,
  LmCollapse,
  LmCollapseItem,
] as Plugin[]

describe('components/index', () => {
  it.each(map(comps, (c) => [get(c, 'name') ?? '', c]))(
    '%s should be exported',
    (_, component) => {
      expect(component).toBeDefined()
      expect(component.install).toBeDefined()
    },
  )
})
