# React Js

## React Hooks

  * <https://coderpad.io/blog/development/rules-of-react-hooks/>

## States

What is state?

In React, state is a JavaScript object that stores a component's dynamic data and determines the component's behavior. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.

  * <https://www.w3schools.com/react/react_state.asp>
  
## Effects

In React, effect is a function that is **called after every render**. It is used to perform side effects in function components. Side effects are actions that don't directly relate to the component's rendering. For example, side effects can be API calls, manipulating the DOM, and setting up event listeners.

  * reference: [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

To understand it more, we need to know the structure of a React component function which consists of two parts:
```
function MyComponent() {
   // part 1: top level of the component
   // the collection of codes other than return 

   // part 2: not top level of the component
   return (
      // JSX
   )
}
```

Top level codes can be divided into further two parts:

  * Rendering code part: the codes that keep returning jsx from failing.
  * effect part: the part that, if removed, will not cause return jsx to fail.

## useEffect

  * <https://react.dev/reference/react/useEffect>

For effect part, we use `useEffect` hook to define it. The usage is:
```js
useEffect(() => {
   // effect part
}, dependencies)
```
  
  * `dependencies` is an array of variables that the effect part depends on.

There are several rules to follow when defining dependencies:

  * If your Effect’s code doesn’t use any reactive values (mean state variables and component function property arguments), its dependency list should be empty ([])

  * [Be aware if state variable is part of your effect dependencies](https://react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect)

  * Avoid using an object, a function created during rendering as a dependency.

### Examples

#### Fetch data from API

Consider the following code from week15 src/App.jsx:
<https://github.com/tpemartin/econWish/blob/af35a85ea520ceca3e0c625f35fa554d0baec8f0/src/App.jsx#L18-L24>

  * Remove the entire block will not cause the return jsx to fail. (only lock the jsx to its `<div>Loading...</div>` state)

Therefore, the entire block is the effect part.

#### Url hash triggered effect

When users visit the app using hash url (like `https://ntpuecon.github.io/econwish2023/#1b3J7OvB9FNMzRWEe2BGrIKkd6YGQjjE5`), the app will automatically have the card with the id in the hash url scrolled into view.

  * Nothing to do use UI rendering, so it is not part of the rendering code part. Should be effect.
  * It comes into effect only after `<AppContent/>` is rendered.



# Other Components

## SpeedDial
  
    * <https://material-ui.com/components/speed-dial/>

## ShareBar

    * Each card has its own sharelink as `https://tpemartin.github.io/econWish/#{cardId}`


# SEO 

Searching Engine Optimization (SEO) is about how to make your website more friendly to searching engines like Google, Bing, Yahoo, etc. The goal is to make your website appear in the top of the searching result. The keys are `<meta>` tags and `<title>` tag in your `index.html`'s `<head>` tag.

  * facebook testing site: <https://developers.facebook.com/tools/debug/>
  * LINE testing site: <https://poker.line.naver.jp/>


## `<meta>`

  * `og:image` should be at least 200x200 pixels, and less than 300KB.
  * image content should be an absolute url path, i.e. starting with `https://` or `http://`.
  * Place image files in `/public` folder will ensure the image be kept in the build folder after build.