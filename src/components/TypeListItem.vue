<template>
  <div>
    <Card
      :card="item"
      @change-show-childs="changeShowChilds"
      @remove="remove"
    />
    <!---Список документов типа--->
    <div 
      class="childs"
      :class="{ 'childs-active': showChilds }"
      v-if="isDocuments"
    >
      <DocumentList 
        :list="item.documents"
        :group="typeDocumentDraggableGroup"
      />
    </div> 
  </div>
</template>
<script>
  import DocumentList from '@/components/DocumentList.vue'
  import Card from '@/components/Card.vue'
import { mapGetters } from 'vuex'

  export default {
    name: 'TypeListItem',
    components: {
      DocumentList,
      Card
    },
    
    props: {
      item: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        showChilds: false
      }
    },

    computed: {
      ...mapGetters({
        typeDocumentDraggableGroup: 'getTypeDocumentDraggableGroup'
      }),

      isDocuments () {
        return this.item.documents && this.item.documents.length > 0
      }
    },

    methods: {
      changeShowChilds (showChilds) {
        this.showChilds = showChilds
      },

      remove (item) {
        this.$store.dispatch('typeRemoveItem', item.id)
      }
    }
  }
</script>
<style lang="scss">
  .childs {
    margin-left: 16px;
    overflow: hidden;
    transition: max-height 1s ease-out;
    max-height: 0;

    &-active {
      max-height: 1000px;
      transition: max-height 1s ease-out;
    }
  }  
</style>