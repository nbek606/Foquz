<template>
  <div class="type_list">
    <Draggable
      :group="group"
      :list="list"
    >
      <div
        v-for="item in list"
        :key="item.id"
      >
        <TypeListItem
          :item="item"
        />
      </div>
    </Draggable>
  </div>
</template>
<script>
  import TypeListItem from '@/components/TypeListItem.vue'
  import Draggable from '@/components/Draggable.vue';

  export default {
    name: 'TypeList',
    components: {
      TypeListItem,
      Draggable
    },  
    props: {
      list: {
        type: Array,
        required: true
      },
      group: {
        type: Object,
        default: () => { return { name: 'type', put: true, page: 'type'} }
      }
    },
  }
</script>
<style lang="scss">
  .type_list {
    margin-bottom: 14px;
    margin-top: 20px;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }
</style>