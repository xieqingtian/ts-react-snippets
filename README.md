# VS Code React Snippets

This extension contains code snippets for React with Typescript and Generate React Component.

# Code generation

## Usage

![usage](https://github.com/xieqingtian/ts-react-snippets/raw/master/images/generate.jpg)

## Configuration

![usage](https://github.com/xieqingtian/ts-react-snippets/raw/master/images/configuration.jpg)

# Snippets

## Supported extensions

-   TypeScript (.ts)
-   TypeScript React (.tsx)

| Trigger | Content                           |
| ------- | --------------------------------- |
| isc     | import styled-components          |
| sc      | define a styled component         |
| scc     | extends a styled component        |
| scp     | Use props inside styled-component |
| icm     | import a css module               |
| ss      | use css module                    |
| icn     | import classnames                 |

### `isc`

```typescript
import styled from 'styled-components';
```

### `sc`

```typescript
const $1 = styled.$2`
    $3
`;
```

### `scc`

```typescript
const $1 = styled($2)`
    $3
`;
```

### `scp`

```typescript
${props => props.$1};
```

### `icm`

```typescript
import styles from './index.less';
```

### `ss`

```typescript
className = { styles };
```

### `icn`

```typescript
import classNames from 'classnames';
```

| Trigger | Content                            |
| ------- | ---------------------------------- |
| ust     | React useState() hook              |
| uef     | React useEffect() hook             |
| urf     | React useRef() hook                |
| sl      | define a selector                  |
| usl     | use selector                       |
| udp     | useDispatch                        |
| rcc     | define a class component           |
| rfc     | define a function component        |
| cwm     | componentWillMount                 |
| cdm     | componentDidMount                  |
| cwr     | componentWillReceiveProps          |
| scu     | shouldComponentUpdate              |
| cwup    | componentWillUpdate                |
| cdup    | componentDidUpdate                 |
| cwun    | componentWillUnmount               |
| sst     | setState use object                |
| ssf     | setState use function              |
| slice   | Create a slice by @reduxjs/toolkit |

### `ust`

```typescript
const [$1, set$1] = useState($2);
```

### `uef`

```typescript
useEffect(() => {
    $1;
});
```

### `urf`

```typescript
const $1 = useRef($2);
```

### `sl`

```typescript
export const select$2 = (state: RootState) => state$1;
```

### `usl`

```typescript
const $1 = useSelector((state: RootState) => state.$1);
```

### `udp`

```typescript
const dispatch = useDispatch();
```

### `rcc`

```tsx
import React, { PureComponent } from 'react';

type Props = {};

type State = Readonly<{}>;

class Demo extends PureComponent<Props, State> {
    readonly state: State = {};

    render() {
        return <div>I am Demo</div>;
    }
}

export default Demo;
```

### `rfc`

```tsx
import React, { FC } from 'react';

type Props = {};

const Demo: FC<Props> = (props) => {
    return <div>I am Demo</div>;
};

export default Demo;
```

### `cwm`

```tsx
componentWillMount() {
    $1
}
```

### `cdm`

```tsx
componentDidMount() {
    $1
}
```

### `cwr`

```tsx
componentWillReceiveProps(nextProps: Props) {
    $1
}
```

### `scu`

```tsx
shouldComponentUpdate(nextProps: Props, nextState: State) {
    $1
}
```

### `cwup`

```tsx
componentWillUpdate(nextProps: Props, nextState: State) {
    $1
}
```

### `cwun`

```tsx
componentWillUnmount() {
    $1
}
```

### `sst`

```tsx
this.setState({ $1 });
```

### `ssf`

```tsx
this.setState((state, props) => {
    return { $1 };
});
```

### `slice`

```typescript
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { RootState } from './rootReducer';

export const initialState = {
    value: 0,
};

export const changeCountAsync = createAsyncThunk('counter/changeCountAsync', async (count: number) => {
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    return count;
});

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCount(state, action: PayloadAction<number>) {
            switch (true) {
                case action.payload > 0:
                    state.value++;
                    break;
                case action.payload < 0:
                    state.value--;
                    break;
                default:
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(changeCountAsync.fulfilled, (state, action) => {
            state.value += action.payload;
        });
    },
});

export const { changeCount } = counter.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counter.reducer;
```

| Trigger | Content                                                      |
| ------- | ------------------------------------------------------------ |
| req     | Require a package to const                                   |
| mde     | Module exports from Common JS, node syntax at ES6            |
| sti     | setInterval                                                  |
| sto     | setTimeout                                                   |
| prom    | Creates and returns a new Promise in the standard ES6 syntax |
| thenc   | Add the .then and .catch methods to handle promises          |
| cer     | console.error()                                              |
| clg     | console.log()                                                |
| cwa     | console.warn()                                               |
| cin     | console.info()                                               |
| cti     | console.time()                                               |
| cte     | console.timeEnd()                                            |

### `req`

```javascript
const packageName = require('packageName');
```

### `mde`

```javascript
module.exports = {
    $1,
};
```

### `sti`

```javascript
setInterval(() => {
    $1;
}, intervalInms);
```

### `sto`

```javascript
setTimeout(() => {
    $1;
}, delayInms);
```

### `prom`

```javascript
return new Promise((resolve, reject) => {
    $1;
});
```

### `thenc`

```javascript
.then((result) => {
    $1
}).catch((err) => {
    $2
});
```

### `cer`

```javascript
console.error(object);
```

### `clg`

```javascript
console.log(object);
```

### `cwa`

```javascript
console.warn(object);
```

### `cin`

```javascript
console.info(object);
```

### `cti`

```javascript
console.time(object);
```

### `cte`

```javascript
console.timeEnd(object);
```
