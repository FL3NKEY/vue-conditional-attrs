# vue-conditional-attrs
A Vue.js component for conditional rendering attributes and directives.

## Install
**Via npm** `npm instal vue-conditional-attrs --save`

``` js
import VueConditionalAttrs from 'vue-conditional-attrs';
//OR
var VueConditionalAttrs = require('vue-conditional-attrs');

Vue.use(VueConditionalAttrs);
```

**Via script tag**
``` html
<script src="/node_modules/vue-conditional-attrs/dist/vue-conditional-attrs.min.js"></script>
```
## Usage
Once installed you have access to `cn-attrs` component.
``` html
<cn-attrs :tag="tag" :attrs="attrs" :directives="directives" :on="on"></cn-attrs>
```
### Tag name
Accept tag name or component name.
<br>
**Type:** `String`
<br>
**Attribute:** `tag`
<br>
**Default:** `div`
``` html
<cn-attrs tag="tag name or component name"></cn-attrs>
<!---->
<cn-attrs tag="h1"></cn-attrs>
<cn-attrs tag="my-awesome-component"></cn-attrs>
```

### Attributes
Accept object of attributes.
<br>
**Type:** `Object`
<br>
**Attribute:** `attrs`
``` html
<cn-attrs :attrs="attrs"></cn-attrs>
```
``` js
//Vue instance
data: function() {
  return {
    attrs: {
      'attribute-name': {
        value: /* value */,
        if: Boolean
      }
    }
  }
}
//Vue instance
```
OR
``` js
//Vue instance
data: function() {
  return {
    attrs: {
      'attribute-name': Boolean /* or value */
    }
  }
}
//Vue instance
```

### Directives
Accept object of directives.
<br>
**Type:** `Object`
<br>
**Attribute:** `directives`
``` html
<cn-attrs :directives="directives"></cn-attrs>
```
``` js
//Vue instance
data: function() {
  return {
    directives: {
      'directive-name': {
        value: /* value */,
        if: Boolean
      }
    }
  }
}
//Vue instance
```
OR
``` js
//Vue instance
data: function() {
  return {
    directives: {
      'directive-name': Boolean
    }
  }
}
//Vue instance
```

### Listeners
Accept object of listeners.
<br>
**Type:** `Object`
<br>
**Attribute:** `on`
``` html
<cn-attrs :on="listeners"></cn-attrs>
```
``` js
//Vue instance
data: function() {
  return {
    listeners: {
      'listener-name': { //example: click
        event: Function,
        if: Boolean
      }
    }
  }
}
//Vue instance
```
OR
``` js
//Vue instance
data: function() {
  return {
    listeners: {
      'listener-name': Function /* or false */
    }
  }
}
//Vue instance
```
