# 使用方式

### 安装

::: code-group

```bash [npm]
npm install @limonergy-ui/utils -D
```

```bash [pnpm]
pnpm add @limonergy-ui/utils -D
```

```bash [yarn]
yarn add @limonergy-ui/utils -D
```

:::

### 使用

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

在我给出函数方法后根据以下 markdown 格式生成说明文档

函数方法：

```typescript
export function isHasProperty(obj: any, key: string): boolean {
  return isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key)
}
```

说明文档, 返回输出格式一定是以下这种格式：

```markdown
# <函数名>

#### 参数

| **名称** | **类型** | **描述**       |
| -------- | -------- | -------------- |
| obj      | any      | 需要判断的对象 |

#### 返回值

| **名称** | **类型** | **描述**         |
| -------- | -------- | ---------------- |
| key      | string   | 需要判断的属性名 |

#### 示例代码

#### js 代码

导入方式： import 函数名 from '@limonergy-ui/utils'
代码： 要求使用多种数据类型进行示例

##### ts 代码

导入方式： import 函数名 from '@limonergy-ui/utils'
代码： 要求使用多种数据类型进行示例， 并且变量必须有类型声明
```

请根据以上格式严格输出结果， 导入方式放入代码块中
