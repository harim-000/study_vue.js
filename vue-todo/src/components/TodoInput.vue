<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what You have to do" v-on:keypress.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
         <font-awesome-icon :icon="['fas', 'plus']" class="addBtn" />
    </span>

    <todo-modal v-if="showModal" @close="showModal = false">
      <slot name="header" ></slot>
      <span @click="showModal = false">
        <slot :name="footer">
        </slot>
      </span>
    </todo-modal>
  </div>
</template>

<script>
import TodoModal from './common/TodoModal.vue';
export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
            
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
        'todo-modal': TodoModal
    }
}
</script>

<style>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>