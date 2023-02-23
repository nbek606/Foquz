<template>
  <div class="header main_content">
    <div class="header_logo">
      Документы
    </div>
    <div class="header_buttons">
      <div class="save">
        <Save />
      </div>
      <div 
        class="button"
        @click="addType"
      > 
        <Plus />
        <span>
          Новый тип
        </span>  
      </div>
      <div 
        class="button"
        @click="addDocument"
      >
        <Plus />
        <span>
          Новый документ
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import Plus from '@/assets/svg/plus.svg'
  import Save from '@/assets/svg/save.svg'
  
  export default {
    name: 'Header',
    components: {
      Plus,
      Save
    },

    methods: {
      addType () {
        this.$store.dispatch('addTypeItem')
      },

      addDocument () {
        this.$store.dispatch('documentNewItem')
      }
    }
  } 
</script>
<style lang="scss">
  .header {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 500;

    &_logo {
      font-size: 22px;
      line-height: 108%;
      color: #000000;
    }

    &_buttons {
      display: flex;

      .save {
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 35px;
        border: 1px solid #D3D8DF;
        border-radius: 50px;
      }

      .button {
        font-size: 12px;
        border: 1px solid #D3D8DF;
        border-radius: 50px;
        display:flex;
        align-items: center;
        padding: 8px 20px 8px 10px;
        margin-left: 10px;
        cursor: pointer;

        span {
          margin-left: 10px;
        }
      }
    }
  }
</style>