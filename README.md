Create html elements easily using javascript only
================================


You can create HTML element easily with IDs, Class or both and define parent as well if already exist

## Getting Started

Include jQuery and the plugin on a page. Then select a form to validate and call the `validate` method.

```html
<script src="dist/create.element-1.1.js"></script>
<script>
    new createElement({
        element: 'div',
        id: 'parent',
        text: 'Div with ID'
    });
</script>
```

## You can use these properties

``` js
new createElement({
        element: 'div', // Create element tag || <div></div>
        id: 'parent', // Define ID name || <div id="parent"></div>
        class: 'parent', // Define class name || <div id="parent" class="parent"></div>
        text: 'Your text will be here' // Define text || <div id="parent" class="parent"> Your text will be here </div>
        parent: .parent // Define parent if it is exist and provide parent ID or Class with selector name
        attr: {
            title: 'Your title will be here' // Define attributes with key and value
        },
        events: {
            click: function(e) {
                // write you function here
            }
        }
    });
```

## License
Copyright &copy; Faudzif<br>

