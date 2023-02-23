<template>
  <div class="document_list">
    <Draggable
      :group="group"
      :list="list"
    > 
      <div 
        v-for="doc in list"
        :key="doc.id"
      >
        <Card
          :card="doc"
          @remove="remove"
        />
      </div> 
    </Draggable>
  </div>
</template>
<script>
  import Card from '@/components/Card.vue'
  import Draggable from '@/components/Draggable.vue';

  export default {
    name: 'DocumentList',
    components: {
      Card,
      Draggable
    },  

    props: {
      list: {
        type: Array,
        required: true
      },

      group: {
        type: Object,
        default: () => {
          return { name: 'document', pull: 'clone', put: false, page: 'document'}
        }
      },
    },

    methods: {
      remove (item) {
        console.log(this.group)
        if (this.group.page == 'typeDocument') {
          this.$store.dispatch('typeDocumentRemoveItem', item.id)
        } else {
          this.$store.dispatch('documentRemoveItem', item.id)
        }
      },
    }
  }
</script>
<style lang="scss">
  .flip-list-move {
    transition: transform 0.5s;
  }
  
</style>