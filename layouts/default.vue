<template>
  <div id="root">
    <header>
      <h1 class="name">안희종 ahn heejong</h1>
    </header>
    <nuxt />
  </div>
</template>

<style>
/* general */
body {
  margin: 0;
  font-family: "Spoqa Han Sans", "spoqahansans", "Apple SD Gothic Neo", "Nanum Barun Gothic", "Nanum Gothic", Verdana, Arial, "Malgun Gothic", Dotum, sans-serif;
}

h2 {
  margin-bottom: 1rem;
}

a {
  color: black;
  transition: color 0.2s ease;
}

a:hover {
  color: red;
}

/* layout */
#root {
  box-sizing: border-box;
  padding: 1.5rem 3rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header,
footer {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}

/* header */
header {
  display: flex;
  align-items: center;
}

.name {
  margin: 0;
  margin-right: 1.5rem;
}
</style>
