<template>
  <VueDraggableNext 
      v-bind="dragOptions"
      :list="list"
      :handle="`.${draggableHandle}`"
      :group="group"
  >
      <transition-group
        type="transition"  
        name="flip-list"
      >
        <slot /> 
      </transition-group>  
  </VueDraggableNext>
</template>
<script>
  import { VueDraggableNext } from 'vue-draggable-next'
  import { mapGetters } from 'vuex';

  export default {
    name: 'Draggable',
    components: {
      VueDraggableNext
    },

    props: {
      list: {
        type: Array,
        required: true
      },
      group: {
        type: Object,
        required: true
      }
    },
     
    data () {
      return {
        addElement: 1
      }
    },

    computed: {
      ...mapGetters({
        draggableHandle: 'getDraggableHandle'
      }),

      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    }
  }
</script>
<style lang="scss">
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }
</style>