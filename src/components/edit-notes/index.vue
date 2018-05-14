<template>
    <div>
    <h2>edit note</h2>
        <div class="create-notes">
            <label>name:</label>
            <input type="text" :value="name" @input="updateInputValue($event.target.value)" placeholder="name"  class="create-note__input" required/>
            <label>content:</label>
            <textarea placeholder="content" :value="content" @input="updateAreaValue($event.target.value)" class="create-note__textarea"></textarea>
            <button type="button" v-on:click="saveData()" >submit data</button>

        </div>
        <message v-show="message"></message>
    </div>
</template>

<script src="./index.js">
</script>
