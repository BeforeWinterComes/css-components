## your own React component library using Rollup, TypeScript, Less and Storybook

### 收录并维护一系列 css 特效，支持页面编辑，实时查看效果。展示页面：https://beforewintercomes.github.io/css-components/

### 目前包含 loading, 打字机特效， 标题弹出效果，悬浮展开文本

# 安装使用说明

```
npm i css-special-ui-components
```

```
import { TypeWriter } from 'css-special-ui-components'

function App () {
  return (
    <TypeWriter content = "Before winter comes", delay = 0.05, backgroundColor = "#222", height = "100vh" />
  );
}

export default App;
```
