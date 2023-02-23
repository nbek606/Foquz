<template>
   <div 
    class="card"
   > 
    <div class="card_block">
      <div
        class="card_dropdown"
        :class="{ 'card_dropdown-active': showChilds }"
        v-if="isDocuments"
        @click="changeShowChilds"
      >
        <DropdownIcon />
      </div>

      <div class="card_title">
        {{ card.title }}
      </div>

      <div 
        class="card_required"
        v-if="card.required"
      >
        Обязательный
      </div>

      <div class="card_description">
        {{ card.description  }}
      </div>
    </div>  

    <div class="card_buttons">
      <div 
        class="button"
        :class="{'button_disabled' : showChilds }"
      >
        <EditIcon />
      </div>
      <div 
        class="button"
        :class="{'button_disabled' : showChilds }"
        @click="remove(card)"
      >
        <RemoveIcon />
      </div>
      <div 
        class="move button"
        :class="moveClasses"
      >
        <MovingIcon />
      </div>
    </div>
  </div>
</template>
<script>
  import DropdownIcon from '@/assets/svg/dropdown.svg'
  import EditIcon from '@/assets/svg/edit.svg'
  import RemoveIcon from '@/assets/svg/remove.svg'
  import MovingIcon from '@/assets/svg/moving.svg'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Card',

    components: {
      DropdownIcon,
      EditIcon,
      RemoveIcon,
      MovingIcon,
    },

    props: {
      card: {
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
        draggableHandle: 'getDraggableHandle',
        searchText: 'getSearchText'
      }),

      moveClasses () {
        return this.searchText || this.showChilds ? 'move_disabled' : this.draggableHandle 
      },

      isDocuments () {
        if (this.card.documents == null) {
          return false
        }

        return this.card.documents.length > 0
      }
    },

    methods: {
      changeShowChilds () {
        this.showChilds = !this.showChilds
        this.$emit('change-show-childs', this.showChilds)
      },

      remove (card) {
        this.$emit('remove', card)
      }
    }

  }
</script>
<style lang="scss">
  .card {
    font-family: 'Fira Sans';
    font-style: normal;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #DFE4EF;
    display: flex;
    align-items: center;
    padding-left: 16px;
    justify-content: space-between;
    transition: all 2s ease-out;

    &_buttons {
      display: flex;
      
      .button {
        padding: 0 11px;
        cursor: pointer;

        &_disabled {
          cursor: default;
          opacity: 0.5;
          pointer-events: none;
        }
      }

      .move {
        cursor: move;

        &_disabled {
          cursor: default;
          opacity: 0.5;
        }
      }
    }


    &_block {
      display: flex;
      align-items: center;
    }

    &_title {
      font-weight: 500;
      font-size: 15px;
      color: #000000;
      margin-right: 14px;
    }

    &_description {
      font-weight: 400;
      font-size: 11px;
      color: #8E9CBB;
    }

    &_required {
      font-weight: 400;
      font-size: 11px;
      margin-right: 16px;
      color: #FF238D;
    }

    &_dropdown {
      width: 22px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #D3D8DF;
      border-radius: 20px;
      transform: rotate(180deg);
      margin-right: 14px;
      cursor: pointer;
      transition: all 0.5s ease 0s;

      &-active {
        transform: rotate(360deg);
      }
    }
  }

  
</style>