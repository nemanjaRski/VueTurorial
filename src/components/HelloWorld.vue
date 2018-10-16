<template>
  <button @click="throttledMethod()">Click me as fast as you can!</button>
</template>

<script>
import _ from 'lodash'

export default {
  methods: {
    throttledMethod: _.debounce(() => {
      console.log('I only get fired once every two seconds, max!')
    }, 2000)
  }
}
</script>
