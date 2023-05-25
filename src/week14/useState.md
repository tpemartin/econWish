# State variable

A variable that holds the state of the component. 

  * How many time does the user click a button?
    * A state variable whose value shows the number of times.
    * A click event handler that updates the state variable.

When you have some UI effect that will change UI when some situation happend but the happening time is not fixed, you need to use state variable to control the UI effect.

### useState

In React, a state variable is created using the `useState` hook.

```js
import React, { useState } from 'react';

const [state, setState] = useState(initialState);
```

  * `state` is the state variable.
  * `setState` is a function that updates the state variable.
  * `initialState` is the initial value of the state variable.

> In React, functions named as `useXXX` are called hooks. They are special functions that can **only be used in React components**.

> In most cases hooks `useXXX` are used as a standalone function call. However, they can also be used in other hooks. For example, `useState` can be used in `useEffect`. But never use hooks:
>  * in a loop
>  ```js
>  // Wrong
>  for (let i = 0; i < 10; i++) {
>    const [count, setCount] = useState(0);
>  }
>  ```
>  * in a conditional statement
>  ```js
>  // Wrong
>  if (true) {
>    const [count, setCount] = >  useState(0);
>  }
>  ```
>  * in a nested function
> ```js
> // Wrong
> function App() {
>   function nested() {
>     const [count, setCount] = useState(0);
>   }
>   return <div>...</div>
> }


In the example below, the state variable is `count` and the initial value is `0`.

```js
import React, { useState } from 'react';

const [count, setCount] = useState(0);
```
   
  * This creates a state variable `count` whose value is `0`.
  * If we want the `count` to be other value, say `10`, we can use  `setCount(10)` to update the value of `count`.

> State variables are immutable. We cannot change the value of a state variable directly. `count = 10` will not work. 
> We can only use the `setState` function to update the value of a state variable.

### Warning

State variables only live within a component. They are not shared between components. 

The following is wrong:
```js
import React, { useState } from 'react';

const [count, setCount] = useState(0);
```

The following is correct:
```js
import React, { useState } from 'react';

function App(){
  const [count, setCount] = useState(0);
  //.... other code
}
```

### An event handler 

**A function** that is related to an event, **usually related to a user action**. In the above example, the click event handler is a function that updates the state variable, such as

```js
function clickHandler() {
  setCount(count + 1);
}
```

   * For the handler to work, it must be able to see `setCount` function and `count` state variable when executed.
   * A function can access variable only if 
     * the variable is global, or
     * the variable is created at the birthplace of the function, or
     * the variable is passed to the function as a parameter

```js
var globalVariable = 3;
function mother() {
  var motherVariable = 23;
  function child() {
    var childVariable = -4;
    // child can access globalVariable, motherVariable, and childVariable
    // so the following works:
    return globalVariable + motherVariable + childVariable;
  }
  // mother can access globalVariable and motherVariable, and child function but not childVariable
  return globalVariable + motherVariable + child()
}

```

  * Functions that use state variables and state updating functions must be created at the birthplace of the state variables.

Therefore, if you have an event handler for a component to deal with state variables, the handler needs to be created within the component function.

## Example

  * <https://www.figma.com/file/lMbFHBKni09R2YdpZMNR2T/week8?type=design&node-id=304%3A37&t=gz3l3G25JQjcASXk-1>

### Conditional rendering

  * <https://react.dev/learn#conditional-rendering>
