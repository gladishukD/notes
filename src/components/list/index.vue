<template>
    <div class="list">
        <div class="notes-list" v-for="(temp, key) in note" :key="key">
            <h3><span>name:</span><br>{{temp.name}}</h3>
            <p><span>content:</span><br>{{temp.content}}</p>
            <div class="add-comment">
                <label>comment:</label>
                <input type="text" :value="author" @input="updateAutor($event.target.value)"  />
                <textarea placeholder="your comment" :value="content" @input="updateContent($event.target.value)" ></textarea>
                <button type="button" v-on:click="save(key)">post comment</button>
            </div>
            <div class="tool">
                <router-link :to="{ name: 'EditNotes', params: { id: key }}" class="btn edit">edit this note</router-link>
                <router-link :to="{ name: 'NotesMoreInfo', params: { id: key }}" class="btn more">more info</router-link>
                <button type="button" v-on:click="delItem(key)" class="btn del" >del this el</button>
            </div>
        </div>
        <button type="button" v-on:click="delAllNotes()" class="btn del">delete all notes</button>
        <message v-show="message"></message>
    </div>
</template>

<script src="./index.js">
</script>
