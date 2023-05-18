
# MUI quick start

MUI components are component functions that return jsx elements. Their properties are not always as the jsx elements you used before (like `className`, `style` that you can use with `<div>` jsx element), but they are similar. Sometimes they are the same. Just read its documentation if you are not sure.

## Usage

Each MUI component has an usage example. To understand them, we better understand the following commonly used components in those examples.

1. ` <React.Fragment>`

This is the same as `<></>` in jsx. It is used to wrap multiple jsx elements.

2. `<CssBaseLine/>`

This is used to reset the default css of the browser. It is usually used in the root component of the app.

3. `<Box>`

This is used to create a box. It is usually used to create a margin or padding.

  * margin: `mt`,`mb`,`ml`,`mr`,`mx`,`my`,`m`
  * padding: `pt`,`pb`,`pl`,`pr`,`px`,`py`,`p`
  * sx: `sx={{}}` is used to set css style.

> css styles in conventional html tag is used as 
> ```html
> <div style="color: red; margin: 20px;"></div>
> ```
> In jsx, it is used as
> ```jsx
> <div style={{color:"red", margin: "20px"}}></div>
> ```
> The outer `{}` is used to tell jsx that the inner `{}` is a javascript expression. The inner `{}` is a javascript object. 
> In MUI components the `sx` property is used to set css style, instead of `style` such as
> ```jsx
> <Box sx={{color:"red", margin: "20px"}}></Box>
> // or better
> <Box sx={{color: "red}} m={4}/>
> ```
> However, sometimes when `sx` doesnot work you can use `style` instead.


4. `<Container/>`

This is used to create a container with the inner content centered.

  * maxWidth: `xs`,`sm`,`md`,`lg`,`xl`,`false`

```jsx
<Container maxWidth="sm">
  <Box my={4}>
    <Typography variant="h4" component="h1" gutterBottom>
      Create React App v4-beta example with TypeScript
    </Typography>
  </Box>
```

