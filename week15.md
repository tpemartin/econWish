# Get server data

## axios

We can use `axios` module. You can install `axios`:
```
npm install axios
```

  * [axios](https://axios-http.com/docs/intro)

## get data

`axios.get()` returns a promise. We can use `then` method to get the data.

```js
axios.get('server url')
  .then((response) => {
    // handle success
    console.log(response.data);
  })
```

  * When return is a promise, all consequencial code must be put in `then` method.
  * `then` method takes a function as parameter. The function is called when the promise is resolved. The parameter of the function is the resolved value of the promise.
  * Promise is part of asynchronous programming. We will learn more about asynchronous programming in the future.




# Autocomplete Search

  * reference: https://mui.com/material-ui/react-autocomplete/
  
  * UI
    * options: in `App.jsx` options is created through,
    ```js
    //create autocompleteOptions in global environment
    window.autocompleteOptions = []
    //push data into autocompleteOptions
    users.forEach(e=>
        {
            window.autocompleteOptions.push(
                {
                    label: e.name+' - '+e.grade,
                    id: e.id
                }
            )
        })
    ```

      * `window` means `in global environment`. 
  * User interaction:
    * Input change: `onChange`
    * change event handler
    ```js
    const handleOnChange = (event, newValue) => {
      scrollToSearchedCard(newValue.id)
    }
    ```
    * **change event** creates information `newValue` other than `event` object.
    * `scrollToSearchedCard` is a function that scroll to the searched card using `scrollIntoView` method of the target DOM element.

# React Component Functions

The creation of component functions has rules:
* The first letter of the function name must be capitalized.
* The function must return JSX.
* The function must be called in JSX.
* The function must be defined before it is called.
