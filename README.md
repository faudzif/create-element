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
        id: 'id-name',
        text: 'Your text will be here'
    });
</script>
```

## You can use these properties

``` js
new createElement({
        element: 'a', // Create a element tag || <a></a>
        id: 'id-name', // Define ID name || <a id="id-name"></a>
        class: 'class-name', // Define class name || <a class="class-name"></a>
        text: 'Your text will be here' // Define your text here || <a id="parent" class="parent"> Your text will be here </a>
        parent: #parent-name // Define parent if it is exist and provide parent ID or Class with the selector name
        attr: { // <a id="parent" class="parent" title="Your title will be here" target="_blank"> Your text will be here </a>
            href: 'http://www.google.com' // Define attributes with the keys and values
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

