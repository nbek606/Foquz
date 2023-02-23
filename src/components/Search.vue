<template>
  <transition>
    <div class="search">
      <div class="search_block">
        
        <div class="search_icon">
          <SearchIcon />
        </div>
        
        <div 
          class="search_clear"
          :class="{ 'search_clear-active': isClear }"
          @click="clearSearchText"
        >
          <ClearIcon />
        </div>

        <input 
          class="search_input"
          placeholder="Поиск"
          :value="searchText"
          @input="changeSearchText"
        />
      </div>  
    </div>
  </transition> 
</template>
<script>
  import SearchIcon from '@/assets/svg/search.svg'
  import ClearIcon from '@/assets/svg/close.svg'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Search',
    components: {
      SearchIcon,
      ClearIcon
    },

    computed: {
      ...mapGetters({
        searchText: 'getSearchText'
      }),

      isClear () {
        return this.searchText.length > 0
      },
    },

    methods: {
      changeSearchText (event) {
        this.$store.dispatch('searchText', event.target.value)
      },

      clearSearchText () {
        this.$store.dispatch('searchText', '')
      }
    }
  }
</script>
<style lang="scss">
  .search {
    display: flex;
    width: 100%;

    &_block {
      position: relative;
      width: 564px;
    }
    
    &_icon {
      position: absolute;
    }

    &_clear {
      position: absolute;
      right: 0;
      cursor: pointer;
      opacity: 0;
      transition: all 1s;

      &-active {
        opacity: 1;
      }
    }

    &_input {
      width: 100%;
      padding-bottom: 12px;
      padding-left: 25px;
      box-sizing: border-box;
      border: none;
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #000000;
      border-bottom: 1px solid #BFC9E0;

      &::placeholder {
        font-family: 'Fira Sans';
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
      }

      &:focus {
        border: none;
        border-bottom: 1px solid #0066FF;
        outline: 0;
      }
    }
  }
</style>