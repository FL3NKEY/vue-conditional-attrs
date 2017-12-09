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
<cn-attrs tag="{tag name or component name}"></cn-attrs>
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
        value: {value},
        if: {true or false}
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
      'attribute-name': {true, false or value}
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
        value: {value},
        if: {true or false}
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
      'directive-name': {true or false}
    }
  }
}
//Vue instance
```

### Events
Accept object of events.
<br>
**Type:** `Object`
<br>
**Attribute:** `on`
``` html
<cn-attrs :on="events"></cn-attrs>
```
``` js
//Vue instance
data: function() {
  return {
    events: {
      'event-name': { //example: click
        event: {function},
        if: {true or false}
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
    events: {
      'event-name': {function or false}
    }
  }
}
//Vue instance
```
