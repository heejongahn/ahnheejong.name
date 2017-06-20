<template>
  <section class="container">
    <div id="language-selectors">
      <a
        @click="setLang('ko')"
        :class="lang === 'ko' ? 'language-selector active' : 'language-selector'">
        KO
      </a>
      <a
        @click="setLang('en')"
        :class="lang === 'en' ? 'language-selector active' : 'language-selector'">
        EN
      </a>
    </div>
    <main id="main-ko" class="main" v-if="lang === 'ko'">
      <section class="bio">
        <h2>반갑습니다</h2>
        <div class="section-content">서울에 거주중인 안희종입니다.
          아름다운 것에 반하는 이들에게 반합니다.
          맥주, 책과 웹을 사랑합니다.
          페미니스트입니다.
        </div>
      </section>
      <section class="value">
        <h2>가치</h2>
        <div class="section-content">사랑하는 사람들과 보내는 시간을 가장 우선으로 둡니다.
          사회는 경쟁보다 연대를 통해 발전한다고 믿습니다.
          소수자와 사회적 약자를 비롯한 모든 사회 구성원이 동등하게 대우받는 세상을 바랍니다.
          쓸모 없어 보이는 일에 쏟는 시간의 중요성을 잊지 않으려 늘 노력합니다.
        </div>
      </section>
      <section class="work">
        <h2>일</h2>
        <div class="section-content"><a href="https://spoqa.com">스포카</a>에서 프론트엔드 프로그래머로 일하고 있습니다.
          ES6 환경에서 React를 비롯한 모던 웹 프레임워크를 이용해 매끄러운 유저 경험을 전달하는 제품을 만듭니다.
          함수형 프로그래밍에 적합하고 강력한 타입 시스템을 가진 언어를 선호합니다.
          요즘은 개발과 디자인, 두 세계를 잇는 데에 관심이 많습니다.
        </div>
      </section>
      <section class="interest">
        <h2>관심사</h2>
        <div class="section-content">일을 안 할 때는 술을 마시거나, 책을 읽거나, 글을 씁니다.
          술 중에서도 맥주, 맥주 중에서도 스타우트를 가장 좋아합니다.
          책은 가리지 않고 읽으려 노력하지만 읽는 책 열 권 중 아홉 권은 문학입니다.
          제 글은 <a href="https://hjlog.me">제 블로그</a>에서 읽어보실 수 있습니다.
        </div>
      </section>
    </main>
    <main id="main-en" class="main" v-if="lang === 'en'">
      <section class="bio">
        <h2>welcome</h2>
        <div class="section-content">i'm ahn heejong, based in seoul.
          i am:
          - admirer of those who admire beautiful things.
          - beer, book and triple double u enthusiast.
          - feminist.
        </div>
      </section>
      <section class="value">
        <h2>value</h2>
        <div class="section-content">i put the time spent with my beloved ones in my top priority.
          i believe the society can be improved by solidarity, not competition.
          i hope for the world where everyone, including minority and second-class citizens, is treated equally.
          i try to remember the importance of time spent on things that seems useless.
        </div>
      </section>
      <section class="work">
        <h2>work</h2>
        <div class="section-content">i'm working at <a href="https://spoqa.com">spoqa</a> as a frontend dev.
          i make a product delivering smooth ux, using modern web frameworks like React in ES6 environment.
          i prefer programming languages which support functional paradigm and has a powerful type system.
          nowadays, i'm deeply into bridging two worlds of programming and design.
        </div>
      </section>
      <section class="interest">
        <h2>interests</h2>
        <div class="section-content">i drink, read, listen to music or write during my free time.
          i prefer beer among all alcoholic drinks, and stout among all beers.
          i try not to be picky on book genres, but mostly end up with novels somehow.
          you can find my writings on <a href="https://hjlog.me">my blog</a>(mostly in Korean).
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  data () {
    return { lang: 'ko' }
  },
  methods: {
    setLang: function (lang) {
      this.lang = lang
    }
  }
}
</script>

<style>
.language-selector {
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.active {
  color: red;
}

section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.section-content {
  white-space: pre-line;
}

</style>
