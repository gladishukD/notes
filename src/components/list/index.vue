<template>
    <div class="list">
        <div class="notes-list" v-for="(temp, key) in note" :key="key">
            <!--<span>{{key}}</span>-->
            <h3><span>name:</span><br>{{temp.name}}</h3>
            <p><span>content:</span><br>{{temp.content}}</p>
            <div class="add-comment">
                <label>comment:</label>
                <input type="text" placeholder="author"/>
                <textarea placeholder="tour comment"></textarea>
                <button type="button">post comment</button>
            </div>
            <div class="tool">
                <router-link :to="{ name: 'EditNotes', params: { id: key }}" class="btn edit">edit this note</router-link>
                <router-link :to="{ name: 'NotesMoreInfo', params: { id: key }}" class="btn more">more info</router-link>
                <button type="button" v-on:click="delItem(key)" class="btn del" >del this el</button>
            </div>
        </div>
        <button type="button" v-on:click="delAllNotes()" class="btn del">delete all notes</button>
    </div>
</template>

<script src="./index.js">
</script>
