# EasyCopy

Copy text based on clipboard.js 2.0.11

## Install

`npm install --save easycopy clipboard`

Usage

## Usage

```vue
<div id="app"></div>

<template>
    <section>
        <button @click="doCopy">do Copy</button>
    </section>
</template>

<script>
import { copyText } from 'easycopy'
export default {
    methods: {
        async doCopy() {
            try {
                const copyEvent = await copyText('something')
                console.log('copy success', copyEvent)
            } catch (e) {
                console.log('copy fail', e)
            }
        },
    },
}
</script>
```
