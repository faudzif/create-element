/*!
 * Create Element Plugin v1.0.0
 * https://github.com/faudzif/create-element
 * Copyright (c) 2018 Faudzif
 */
(function () {
    this.createElement = function () {
        if (arguments[0] && typeof arguments[0] === 'object') {
            elementOptions(arguments[0]);
        } else {
            console.log('Please create element\'s property');
        }
    };

    function elementOptions(options) {
        if (options.hasOwnProperty('element') && options.element !== '') {
            var element = document.createElement(options.element),
            elemParentExist = true;
            if (options.hasOwnProperty('id')) {
                element.setAttribute('id', options.id);
            }
            if (options.hasOwnProperty('class')) {
                element.setAttribute('class', options.class);
            }
            if (options.hasOwnProperty('text')) {
                var textNode = document.createTextNode(options.text);
                element.appendChild(textNode);
            }
            if (options.hasOwnProperty('attr')) {
                setAttributes(element, options.attr);
            }
            if (options.hasOwnProperty('events')) {
                addEventsOnElement(element, options.events)
            }
            if (options.hasOwnProperty('parent') && elemParentExist) {
                addElementIntoParent(element, options);
            } else {
                document.body.appendChild(element);
            }
        } else {
            console.log('Create element tag it should not be empty');
        }
    }

    function addElementIntoParent(element, options) {
        var parentElem;
        if (parentCharacterCheck(options.parent)) {
            parentElem = document.getElementsByTagName(options.parent)[0];
            (parentElem !== undefined) ? parentElem.appendChild(element) : console.log((options.id === undefined ? options.class : options.id) + '\'s parent is not exist!');
        } else {
            var IdOrClassText = options.parent.substring(1, options.parent.length),
                IdOrClassCheck = options.parent[0];
            if (IdOrClassCheck === '#') {
                parentElem = document.getElementById(IdOrClassText);
                (parentElem !== null) ? parentElem.appendChild(element) : console.log((options.id === undefined ? options.class : options.id) + '\'s parent is not exist!');
            } else if (IdOrClassCheck === '.') {
                parentElem = document.getElementsByClassName(IdOrClassText)[0];
                (parentElem !== undefined) ? parentElem.appendChild(element) : console.log((options.id === undefined ? options.class : options.id) + '\'s parent is not exist!');
            }
        }
    }

    function parentCharacterCheck(string) {
        var re = new RegExp('^[a-zA-Z0-9]');
        return re.test(string)
    }

    function setAttributes(elem, attr) {
        for (var key in attr) {
            if (attr.hasOwnProperty(key))
            elem.setAttribute(key, attr[key]);
        }
    }

    function addEventsOnElement(elem, e) {
        for (var key in e) {
            if (e.hasOwnProperty(key)) {
                var functionValue = e[key];
                elem.addEventListener(key, functionValue, false);
            }
        }
    }
}());