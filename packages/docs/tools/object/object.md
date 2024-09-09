# 对象方法

## `isObject`

`isObject` 函数用于检查一个值是否是一个非 `null` 的对象，并且不是数组。它会返回 `true` 如果值是一个对象，并且不是数组；否则返回 `false`。

#### 参数

| **名称** | **类型** | **描述**   |
| -------- | -------- | ---------- |
| `value`  | `any`    | 传入的参数 |

#### 返回值

| **类型**  | **描述**                                                                        |
| --------- | ------------------------------------------------------------------------------- |
| `boolean` | 如果给定的值是一个非 `null` 的对象且不是数组，则返回 `true`；否则返回 `false`。 |

#### 示例

::: code-group

```js
import { isObject } from '@limonergy-ui/utils'

const isObj = isObject({}) // true
const isNotObj = isObject(1) // false
const isNotObj2 = isObject('1') // false
```

```typescript
import { isObject } from '@limonergy-ui/utils'

type ObjExampler = {
  [key: string]: any
}

const obj: ObjExampler = {
  a: 1,
  b: '2',
  c: true,
}

const isObj = isObject(obj) // true
const isNotObj = isObject(1) // false
const isNotObj2 = isObject('1') // false
```

:::

## isHasProperty

`isHasProperty` 函数用于检查一个对象中是否包含某个属性值。

#### 参数

| **名称** | **类型** | **描述**         |
| -------- | -------- | ---------------- |
| obj      | any      | 需要判断的对象   |
| key      | string   | 需要判断的属性名 |

#### 返回值

| **名称** | **类型** | **描述**                                            |
| -------- | -------- | --------------------------------------------------- |
| 返回值   | boolean  | 如果对象中存在该属性则返回 `true`，否则返回 `false` |

#### 示例代码

::: code-group

```js
import { isHasProperty } from '@limonergy-ui/utils'

const obj1 = { a: 1, b: 2 }
console.log(isHasProperty(obj1, 'a')) // true
console.log(isHasProperty(obj1, 'c')) // false

const obj2 = [1, 2, 3]
console.log(isHasProperty(obj2, 'length')) // true
console.log(isHasProperty(obj2, 'push')) // true
console.log(isHasProperty(obj2, 'nonexistent')) // false
```

```ts
import { isHasProperty } from '@limonergy-ui/utils'

const obj1: { a: number; b: number } = { a: 1, b: 2 }
console.log(isHasProperty(obj1, 'a')) // true
console.log(isHasProperty(obj1, 'c')) // false

const obj2: number[] = [1, 2, 3]
console.log(isHasProperty(obj2, 'length')) // true
console.log(isHasProperty(obj2, 'push')) // true
console.log(isHasProperty(obj2, 'nonexistent')) // false
```

:::
