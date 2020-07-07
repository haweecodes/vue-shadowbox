# vue-shadowbox
Lightbox for vue with basic image viewer features with plans to add more features.

# How to use

## Setting up

To install, run the following command:
```
npm i vue-shadowbox
```
once installed, include the component to your project like this
```
import VueShadowBox from "vue-shadowbox";
// You need to import the CSS only once
import "vue-shadowbox/dist/vue-shadowbox.css";
```
register your component to the parent component and use it
```
<vue-shadow-box :media="data" v-model="visible"></vue-shadow-box>
```

## Available Properties
| Property | Default | Description |
| ------ | ------ | ------ | 
| media | null | This takes an `array` of objects with properties `{src, type, description}`|
| v-model | false |  To control the visibility of the lightbox |
