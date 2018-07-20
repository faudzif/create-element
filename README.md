Form validation made easy Create html elements easily using javascript only
================================

# create-element
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
        element: 'div', // Create element tag
        id: 'parent', // Define ID name
        class: 'parent', // Define class name
        text: 'Div with ID' // Define text
        parent: .parent // Define parent if it is exist and provide parent ID or Class with selector name
    });
```

## License
Copyright &copy; Faudzif<br>

