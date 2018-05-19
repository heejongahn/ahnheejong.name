<template>
  <section class="container" :class="$style.resume" ref="container">
    <div :class="$style.head">
      <h1 :class="$style.title">Resume</h1>
      <a :class="$style.pdf" target="_blank" href="/ahnheejong_resume.pdf">PDF</a>
    </div>
    <section :class="$style.profile">
      <h1>Ahn Heejong</h1>
      <strong :class="$style.oneLiner">I fear little, challenge often, and learn fast.</strong>
      <div><a href="tel:+821066796756">+82 10-6679-6756</a></div>
      <div><a href="mailto:heejongahn@gmail.com">heejongahn@gmail.com</a></div>
      <div><a href="http://ahnheejong.name">http://ahnheejong.name</a></div>
      <p>I have two main focuses as an engineer:</p>
      <ul>
        <li :class="$style.focus">Smoothly bridging the gap between code and design</li>
        <li :class="$style.focus">Programming languages adopting practical and powerful type systems</li>
      </ul>
      <div :class="[$style.subsection, $style.education]">
        <h2>Education</h2>
          <div :class="$style.educationItem">
            <h3 :class="$style.educationTitle">KAIST <small :class="$style.educationDate">2013 March – Present</small></h3>
            <p>Pursuing <strong>B.A. at School Of Computing</strong><span :class="$style.gpa">(GPA Total 3.62/4.3, Major 3.79/4.3)</span></p>
            <small :class="$style.military">Currently on a break, doing an alternative military service</small>
          </div>
      </div>
    </section>
    <section :class="$style.experience">
      <h1>Experience</h1>
      <div :class="[$style.subsection, $style.experienceItem]">
        <h2 :class="$style.experienceTitle">UI Engineer, <mark>Viva Republica</mark> </h2>
        <p :class="$style.experienceDate">April 2018 - present</p>
        <div :class="$style.experienceDetail">
          <ul>
            <li>To Be Updated</li>
          </ul>
        </div>
      </div>
      <div :class="[$style.subsection, $style.experienceItem]">
        <h2 :class="$style.experienceTitle">Frontend Programmer, <mark>Hyperconnect</mark> </h2>
        <p :class="$style.experienceDate">October 2017 - April 2018</p>
        <div :class="$style.experienceDetail">
          <ul>
            <li><strong>Implemented &amp; refactored</strong> the web version of <i><a target="_blank" href="https://azarlive.com">Azar</a></i>. <small>Vue.js, TypeScript, and Webpack</small></li>
            <li><strong>Ported face-tracking sticker application feature</strong> from <i>Azar</i> app. <small>WebGL</small></li>
          </ul>
        </div>
      </div>
      <div :class="[$style.subsection, $style.experienceItem]">
        <h2 :class="$style.experienceTitle">Programmer, <mark>Spoqa</mark> </h2>
        <p :class="$style.experienceDate">January 2017 - September 2017</p>
        <div :class="$style.experienceDetail">
          <ul>
            <li><strong>Built initial version of Dodo Manager</strong>, the store management tool, from scratch. <small>React.js, Redux, and Webpack</small></li>
            <li><strong>Migrated entire codebase</strong> from <mark>Flow</mark> to <mark>TypeScript</mark> for higher productivity and stability.</li>
          </ul>
        </div>
      </div>
    </section>
    <section :class="$style.skills">
      <h1>Skill</h1>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Modern Web Frontend</h2>
        <p><strong>The borderline between code and design</strong> is my main playground. I enjoy implementing both performance-wise and aesthetic-wise solid product.</p>
        <div :class="$style.frontend">
          <h3>ECMAScript</h3>
          <ul>
            <li>Comfortable with the latest ECMAScript feature and proposals; solid understanding of the core language</li>
            <li>Static Type Checking <small>TypeScript, Flow</small></li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Functional approaches on UI</h3>
          <ul>
            <li>React.js <small>+ react-router, redux, redux-saga, …</small></li>
            <li>Vue.js <small>+ vuex, vue-rotuer, …</small></li>
            <li>Elm</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Styling</h3>
          <ul>
            <li>CSS <small>+ css-module, styled-components</small></li>
            <li>CSS Preprocessor <small>SASS, LESS, Stylus</small> and PostCSS</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Graphics and Interaction</h3>
          <ul>
            <li>CSS transition / animation</li>
            <li>SVG, HTML5 Canvas, Three.js</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Ecosystem</h3>
          <ul>
            <li>Build toolchain <small>Webpack, Babel</small></li>
            <li>Coding convention <small>Prettier, ESLint</small></li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Miscellaneous</h3>
          <ul>
            <li>Static Site Generation <small>Nuxt.js, Jekyll, Lektor</small></li>
            <li>Google Analytics, Google Tag Manager</li>
          </ul>
        </div>
      </div>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Programmers' Essentials</h2>
        <p>Though skills below are beyond my main interest, <br>I have basic understanding on them.</p>
        <ul>
          <li><strong>VCS</strong>: Using <mark>git</mark> since 2014. My first command for any project is <code class='code-inline'>git init</code>.</li>
          <li><strong>Theoretical background</strong>: Knowledge of widely used DS and basic algorithm.</li>
          <li><strong>Server-side programming</strong>: Python<small>(Flask + SQLAlchemy)</small>, Node<small>(express.js)</small>.</li>
          <li><strong>Server Administration</strong>: UNIX-like, CLI utils, AWS<small>(EC2, S3, CloudFront, Route53)</small>.</li>
          <li><strong>System programming</strong>: Have implemented minimal assembler, OS<small>(PintOS)</small> during undergraduate curriculum.</li>
        </ul>
      </div>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Functional Programming</h2>
        <p>I’ve learnt a lot from <strong>the principles of functional programming</strong>.<br>Whenever I confront interesting problems, this is my main toolbox to look at.</p>
        <ul>
          <li><strong>Favor composition over inheritance</strong>.</li>
          <li><strong>Utilize the power of simple functions</strong> like <code>map</code>, <code>reduce</code>, and <code>filter</code>.</li>
          <li><strong>Control side effects</strong>; Keep it referentially transparent whenever possible.</li>
          <li><strong>Use ADT</strong> to enable precise data encoding.</li>
        </ul>
      </div>
    </section>
    <section :class="$style.additional">
      <h1>Additional Information</h1>
      <div :class="[$style.subsection, $style.links]">
        <h2>Links</h2>
        <p>When I leave trails on the web, I try to do so with my identity revealed.<br>I believe this policy helps me stay responsible.</p>
        <ul>
          <li :class="$style.link"><div :class="$style.linkLabel">Personal blog</div><a target="_blank" href="https://hjlog.me">https://hjlog.me</a></li>
          <li :class="$style.link"><div :class="$style.linkLabel">Github</div><a target="_blank" href="https://github.com/heejongahn">https://github.com/heejongahn</a></li>
          <li :class="$style.link"><div :class="$style.linkLabel">Twitter</div><a target="_blank" href="https://twitter.com/heejongahn">https://twitter.com/heejongahn</a></li>
          <li :class="$style.link"><div :class="$style.linkLabel">LinkedIn</div><a target="_blank" href="https://linkedin.com/in/heejongahn">https://linkedin.com/in/heejongahn</a></li>
          <li :class="$style.link"><div :class="$style.linkLabel">Slideshare</div><a target="_blank" href="https://www.slideshare.net/HeejongAhn/">https://www.slideshare.net/HeejongAhn/</a></li>
          <li :class="$style.link"><div :class="$style.linkLabel">Medium</div><a target="_blank" href="https://medium.com/@heejongahn">https://medium.com/@heejongahn</a></li>
        </ul>
      </div>
      <div :class="[$style.subsection, $style.miscs]">
        <h2>Miscellaneous</h2>
        <p>Experiences which won't make me a superstar programmer yet I personally am proud of.</p>
        <ul>
          <li :class="$style.miscItem">In Fall 2016, I organized and led <strong>Haskell Programming Language Study</strong> in KAIST, using UPENN’s CIS194 class materials. A dozen of students participated throughout the semester.</li>
          <li :class="$style.miscItem">In June 2015, I participated in <mark>The Rust Programming Book</mark> Korean translation project. About that time, I also made <strong>my first open-source contribution</strong>: documentation link fix to <mark>Rust</mark> repository.</li>
          <li :class="$style.miscItem">In July 2014, I worked shortly at <strong>the very first stage of a media startup</strong>, <mark>Byline</mark>. Though I couldn’t contribute much and forgot almost everything I’ve learnt, it sure was fun and valuable startup experience.</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import { getHead } from '~/utils'

export default {
  head () {
    const title = "ahn heejong's resume"
    const url = 'http://ahnheejong.name/resume'
    return getHead(title, url)
  },
  mounted () {
    this.$refs.container.parentElement.scrollTop = 0
  }
}
</script>

<style>
@media print {
  #root {
    height: auto !important;
    overflow-y: visible !important;
  }

  header,
  footer {
    display: none !important;
  }

  .content {
    margin-top: 0;
  }
}
</style>

<style module lang="scss">
@import '~assets/variables';
@import '~assets/placeholders';
@import '~assets/media-query';

.resume {
  max-width: 600px;

  @media print {
    max-width: initial;
  }

  h1 {
    font-size: 2em;
    margin: 0 0 0.5em;
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 2em 0;
    border-bottom: 1px solid $divider-color;

    &:first-child {
      padding-top: 0;
    }

    @media print {
      padding: 0;

      &:not(:last-child) {
        page-break-after: always;
      }

      border: none;
    }
  }

  li {
    &:not(:last-child) {
      margin-bottom: 0.375em;
    }
  }

  li,
  p {
    line-height: 1.7;
  }

  mark {
    background: none;
    border-bottom: 1px solid #ff3030;
  }

  code {
    background-color: $bg-gray-dark;
    border-radius: 4px;
    padding: 2px;
  }

  small {
    color: $text-color-gray;
    margin-left: 4px;
  }

  .military {
    margin: 0;
  }
}

.head {
  display: flex;
  flex-direction: column;

  @media print {
    display: none;
  }

  @include wide-screen {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 3em;
    margin-bottom: 0;
  }

  .pdf {
    text-decoration: underline;
  }

}

.profile a {
  font-size: 0.75em;
  line-height: 2;
}

.oneLiner {
  font-size: 1em;
  margin: 0 0 0.5em;
}

.frontend {
  h3 {
    margin-bottom: 0.5em;
  }
}

.subsection {
  @media print {
    page-break-inside: avoid;
  }

  &:not(:nth-child(2)) {
    margin-top: 2em;
  }

  > h2:first-child {
    margin-top: 0;
  }
}

.educationItem {
  &:not(:nth-child(2)) {
    margin-top: 2em;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 0;
  }
}

.experienceDetail {
  @media print {
    page-break-inside: avoid;
  }

  &:not(:last-child) {
    padding-bottom: 1em;
  }

  > h3 {
    margin-bottom: 0.5em;

    & + p {
      margin-top: 0;
    }
  }
}

.experienceDate,
.educationDate {
  font-size: 0.875em;
  color: $text-color-gray;
  margin-top: 0;
}

.experienceTitle,
.educationTitle {
  margin-bottom: 0.25em;
}

.educationDate {
  font-weight: normal;
  font-size: 0.625em;
}

.gpa {
  margin-left: 0.25em;
  font-size: 0.75em;
}

.link {
  display: flex;
}

.linkLabel {
  width: 150px;
  font-weight: 500;
}

.miscs {
  .miscItem:not(:last-child) {
    margin-bottom: 0.75em;
  }
}
</style>
