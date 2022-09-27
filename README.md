# EasyCopy

Copy text based on clipboard.js 2.0.11

![version](https://img.shields.io/npm/v/easycopyjs)
![npmDownloadTotal](https://img.shields.io/npm/dt/easycopyjs)
![githubIssues](https://img.shields.io/github/issues/liuarui/easycopy)

## Install

`npm install --save easycopyjs`

## Usage

```vue
<div id="app"></div>

<template>
    <section>
        <button @click="doCopy">do Copy</button>
    </section>
</template>

<script>
import { copyText } from 'easycopyjs'
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

# end

If you feel helpful, you can come to Github give me a star, your ✨ is the biggest encouragement to me ~
