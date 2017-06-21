<template>
  <div id="root">
    <header>
      <div class="name">
        <span id="name-ko">안희종</span>
        <span id="name-en">ahn heejong</span>
      </div>
    </header>
    <div class="content">
      <nuxt class="page" />
      <footer class="footer">
        <div class="email">
          <a href="mailto:heejongahn@gmail.com">heejongahn@gmail.com</a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/heejongahn">twitter</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/media-query';

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

  &:hover {
    color: red;
  }
}

ul {
  margin: 0;
  padding: 0;
  padding-left: 18px;
}

li {
  list-style-type: none;

  &:before {
    content: '\BB';
    margin-left: -18px;
    padding-right: 10px;
  }
}

/* layout */
#root {
  box-sizing: border-box;
  padding: 1.5rem 3rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include not-phone {
    flex-direction: row;
    align-items: flex-start;

    padding: 5%;
    height: 100vh;
  }
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

  margin: 0 0 2rem;

  @include not-phone {
    flex: 1 0 0;
    justify-content: flex-end;
    padding: 0 1.5rem;
  }
}

.name {
  display: flex;
  flex-wrap: wrap;

  font-weight: bold;
  font-size: 3rem;

  @include not-phone {
    flex-direction: column;
    margin: 0;
    font-size: 1.5rem;
  }
}

#name-ko {
  margin-right: 1rem;
}

.content {
  @include not-phone {
    padding-left: 2rem;
    border-left: 1px solid #ced3d6;

    flex: 1 1 70%;
    max-height: 100%;

    overflow-y: auto;
  }
}

.page {
  margin-bottom: 3rem;
}
</style>
