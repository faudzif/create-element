Create HTML elements easily  with using javascript plugin
================================


You can create any HTML element easily with IDs, Class or both with the click events and place into parent as well if exist

## Getting Started

Include the script plugin on a page. Then call the `createElement` method.

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
        id: 'id-name', // Define ID name || <div id="id-name"></div>
        class: 'lass-name', // Define class name || <div class="class-name"></div>
        text: 'Your text will be here' // Define your text here || <div id="parent" class="parent"> Your text will be here </div>
        parent: #parent-name // Define parent if it is exist and provide parent ID or Class with the selector name
        attr: {
            title: 'Your title will be here' // Define attributes with the keys and values
            target: '_blank',
            title: 'This is link'
        },
        events: { // You can add your event here
            click: function(e) {
                // write you function here
            }
        }
    });
```

## License
Copyright &copy; Faudzif<br>

