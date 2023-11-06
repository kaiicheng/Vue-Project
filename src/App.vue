<script setup>
  // JavaScript code

  // import {ref} for reactivity state
  import {ref} from "vue";
  
  // import component from files
  import NavComp from "./NavTitle.vue"
  import NavMain from "./NavMain.vue"

  console.log("My first component");

  let hello="Hello Vue!";
  let name="content";
  let nickname="Kai";

  // underline
  let message="<u>Hello Vue!</u>";
  // boolean
  let checked_true=true;
  let checked_false=false;

  let level=3;
  let level2=2;

  let topics=["HTML", "CSS", "JavaScript", "Vue.js"];

  let topics2={
    html: "HTML", css: "CSS", js: "JavaScript", vue: "Vue.js"
  };

  let handler=function(){
    console.log("Click!")
  }

  let mouseoverHandler=function(){
    console.log("Mouse over.")
  }

  // reactivity state
  // let title="Reactivity state";
  let title=ref("Reactivity state");
  let handler2=function(){
    console.log("Clicked!");
    title.value="Reactivity state activated!"
  }

  let state=ref({
    title2: "Reactivity state 2",
    className: "title2"
  });
  let handler3=function(){
    console.log("Clicked!");
    state.value.title2="Reactivity state 2 activated!";
    state.value.className="title highlight";
  }

  // drop-down list
  let content=ref("");
  let clearContent=function(){
    content.value="";
  };
  let universities=([]);
  let cities=ref(null);
  let duration=ref(null);
</script>



<template>
<!-- HTML template-->

  <NavComp></NavComp>
  <NavMain></NavMain>

  <main>
  <nav>Kai</nav>
  <nav>MS CIS@Cornell</nav>
  <nav>{{ hello }}</nav>
  <br>

  <!-- underline -->
  <!-- toUpperCase() to turn string into upper case -->
  <div v-html="message.toUpperCase()"></div>
  <div>{{ nickname.toUpperCase() }}</div>
  <br>

  <!-- v-bind:... can be abbreviated as :... -->
  <div v-bind:class="name">Attribute of label</div>
  <div :class="nickname">Nickname</div>
  <br>

  <div :class="checked_true?'dark':'light'">Dark</div>
  <div :class="checked_false?'dark':'light'">Light</div>
  <br>

  <!-- if -->
  <div v-if="level===3">3</div>
  <div v-if="level===2">2</div>

  <!-- if-else condition -->
  <div v-if="level2===3">Senior</div>
  <div v-else-if="level2==2">Middle</div>
  <div v-else>Beginner</div>
  <br>

  <!-- for loop -->
  <div>Basic</div>
    <ul>
      <li v-for="name in topics">{{ name }}</li>
    </ul>
    <br>

  <div>Basic</div>
    <ul>
      <li v-for="(name, index) in topics">
        {{ index }} - {{ name }}
      </li>
    </ul>
    <br>

  <div>Basic</div>
    <ul>
      <li v-for="(value, key) in topics2">
        {{ key }} - {{ value }}
      </li>
    </ul>
    <br>

    <main>
      <!-- <button v-on:click="handler">Button</button> -->
      <!-- <button @click.once="handler" @mouseover="mouseoverHandler">Button</button> -->
      <button @click="handler" @mouseover="mouseoverHandler">Button</button><br>
      <!-- <a href="https://kaiicheng.github.io/">Kai's website</a> -->
      <a @click.prevent="handler" href="https://kaiicheng.github.io/">Kai's website</a><br>
      <a @click.prevent href="https://kaiicheng.github.io/">Kai's website</a>
    </main>
    <br>

    <!-- reactivity state -->
    <nav>Reactivity 1</nav>
    <main>
      <div>{{ title }}</div>
      <button @click="handler2">Button</button>
    </main>
    <br>

    <nav>Reactivity 2</nav>
    <main>
      <div :class="state.className">{{ state.title2 }}</div>
      <button @click="handler3">Button</button>
    </main>
    <br>

    <!-- Drop-down list -->
    <nav>Navigation bar</nav>
    <main>

      <h3>Single-Line input</h3>
      <input type="text" v-model="content" />
      <div>Input: {{ content }}</div>
      <button @click="clearContent">Clear input</button>
      <br>

      <h3>Multiple choice</h3>
      NTU <input type="checkbox" value="NTU" v-model="universities" />
      PKU <input type="checkbox" value="PKU" v-model="universities" />
      THU <input type="checkbox" value="THU" v-model="universities" />
      Cornell <input type="checkbox"  value="Cornell" v-model="universities" />
      <!-- <div>Favorite university: {{ universities }}</div> -->
      <ul>
        <li v-for="university, index in universities"> Ranking {{ index + 1 }} of Universities: {{university}}</li>
      </ul>
      <br>

      <h3>Single choice</h3>
      NYC <input type="radio" value="NYC" v-model="cities"/>
      Boston <input type="radio" value="Boston" v-model="cities"/>
      SF <input type="radio" value="SF" v-model="cities"/>
      <div :class="cities">Favorite City: {{ cities }}</div>
      <br>

      <h3>Drop-down list</h3>
      <select v-model="duration">
        <option value="">Please select duration</option>
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
      </select>
      <div :class="duration">Length: {{ duration }}</div>
      <br>

    </main>

  <!-- <nav></nav>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</main>
</template>



<style scoped>
main{background-color: #dddddd;}

.content{color:blue}
.dark{color:#333333}
.light{color:#888888}

/* reactivity state */
.title2{font-weight:bold}
.highlight{color: red}

/* single choice */
.SF{color: blue}
.Boston{color: green}
.NYC{color:orange}

/* drop-down list */
.one{color: blue}
.two{color: green}
.three{color:orange}

/* CSS code */
/* header {
  line-height: 1.5;s
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
