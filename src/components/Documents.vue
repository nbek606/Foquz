<template>
  <div class="documents main_content">
    <Search />
    <!---Список типов--->
    <TypeList
      :list="typeList"
      :group="typeDraggableGroup"
    />

    <!---Список документов--->
    <DocumentList 
      :list="documentList"
      :group="documentDraggableGroup"
    />
  </div>  
</template>
<script>
  import Search from '@/components/Search.vue'
  import { mapGetters } from 'vuex'
  import DocumentList from '@/components/DocumentList.vue'
  import TypeList from '@/components/TypeList.vue'

  export default {
    name: 'Document',

    components: {
      Search,
      DocumentList,
      TypeList
    },
   
    computed: {
      ...mapGetters({
        searchText: 'getSearchText',
        typeList: 'getTypeList',
        documentList: 'getDocumentList',
        typeDraggableGroup: 'getTypeDraggableGroup',
        documentDraggableGroup: 'getDocumentDraggableGroup'
      }),
    },
  }
</script>
<style>
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }
</style>