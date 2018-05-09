<template>
    <div>
    <h2>more info note</h2>
        <div class="create-notes">
            <h3>{{currentEl.name}}</h3>
            <p>{{currentEl.content}}</p>
            <div class="wrap-coments">
                <div class="coments" v-if="currentEl.coments.length > 0">
                    <div class="coment" v-for="(temp, key) in currentEl.comment" :key="key">
                        <span>{{temp.author}}</span>
                    </div>
                </div>
                <div class="no-coments" v-else >
                    <i>на даний момент замітка не має коментів</i>
                </div>
            </div>
            <!--<label>name:</label>-->
            <!--<input type="text" :value="name" @input="updateInputValue($event.target.value)" placeholder="name"  class="create-note__input" required/>-->
            <!--<label>content:</label>-->
            <!--<textarea placeholder="content" :value="content" @input="updateAreaValue($event.target.value)" class="create-note__textarea"></textarea>-->
            <!--<button type="button" v-on:click="saveData()" >submit data</button>-->
        </div>
    </div>
</template>

<script src="./index.js">
</script>
