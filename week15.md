# useFetch


# scrollIntoView

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

      * `window` means in global environment. 
  * User interaction:
    * Input change: `onChange`
    * change event handler
    ```js
    function(event) {
      const value = event.target.value;
      // fetch data
      // update state
    }
    ```


      * Get input name 
      * Get id
      * Get DOM element
      * scrollIntoView    