# useFetch


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