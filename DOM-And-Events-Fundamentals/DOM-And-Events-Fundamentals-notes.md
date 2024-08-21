# What's the DOM and DOM Manipulation

Dom stands for DOCUMENT OBJECT MODEL, it is, a structured representation of HTML documents. It allows us to use JavaScript to access HTML elements and styles in order to manipulate them. Is basically a connection point between HTML documents and JavaScript code.

The DOM is automatically created by the browser as soon as the HTML page loads. It is stored in a tree structure in which the rote is the DOCUMENT, followed by the HTML tag, then the head and body and so on. In the DOM the leaf of every edge is the content that is stored inside the deepest tag. Document (root of the DOM) is the entry point to the DOM.

The DOM tree has more than just element nodes, it also has nodes for all the text itself, comments, etc. The rule is that whatever is in the HTML document also has to be in the DOM. The DOM is not part of JavaScript, but we can use it in JavaScript to manipulate the DOM. The DOM and DOM methods are part of the Web APIs. Thanks to this, DOM manipulation works the same in all browsers.

## Selecting and Manipulating Elements

Using the document object we can access each of the elements in our html files, with that we can retrieve information of them and even set the information. In order to do that we can use the querySelector method which based on the same syntax as css rules will return the first element that matches the query. For input fields in order to access the actual value, we have to use the nodeValue property.
