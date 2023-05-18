

# PostedStamp component


## Seal icon Fixed SVG margins

In the example, we need the following margins for the SVG element.

```css
    margin-left: 17px;
    margin-bottom: 10px;
```

```
margin: 0 0 17px 10px
```

  * Figure out where to put the css in the corresponding jsx element. 

```html
<div style="margin: 0 0 17px 10px"></div>
```

```jsx
<div style={{margin: "0 0 17px 10px"}}></div>
```
## Seal frame

```css
    left: -10px;
    bottom: -50px;
    transform: rotate(-45deg);
```

```html
<div style="left: -10px;
    bottom: -50px;
    transform: rotate(-45deg);" ></div>
```

```jsx
<div style={{left: '-10px', bottom: '-50px', transform: 'rotate(-45deg)'}} />

```

## JS knowledge

```js
sealVariant ? "a" : 2
```

   * If `sealVariant` is true, then return "a", otherwise return 2.
   * In js, if logical expression is an object, it it `false` if the object is undefined, null. Otherwise, it is `true`.
   * It is equivalent to the following code:
    ```js
    if(sealVariant){
      "a"
    } else {
      2
    }
    ```
It is similar to the following code in R:
```r
if(is.exist(sealVariant)){
    return "a"
} else {
    return 2
}
```
