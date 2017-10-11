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
      <div :class="[$style.subsection, $style.interest]">
        <h2>Interests</h2>
        <ul>
          <li>Making beautiful and usable things with robust and readable code.</li>
          <li>Building a challenging, open team where good people get even better.</li>
          <li>Improving by cooperation, not competition; <strong>open source spirit!</strong></li>
        </ul>
      </div>
      <div :class="[$style.subsection, $style.education]">
        <h2>Education</h2>
          <div :class="$style.educationItem">
            <h3 :class="$style.educationTitle">KAIST</h3>
            <p :class="$style.educationDate">2013 March - Present</p>
            <p>Pursuing <strong>B.A. at School Of Computing</strong><span :class="$style.gpa">(GPA Total 3.62/4.3, Major 3.79/4.3)</span></p>
            <small :class="$style.military">Currently on a break to do a alternative military service</small>
          </div>
          <div :class="$style.educationItem">
            <h3 :class="$style.educationTitle">Gyeonggi Science High School</h3>
            <p :class="$style.educationDate">2010 March - 2013 February</p>
            <p>A student president</p>
          </div>
      </div>
    </section>
    <section :class="$style.experience">
      <h1>Experience</h1>
      <div :class="[$style.subsection, $style.experienceItem]">
        <h2 :class="$style.experienceTitle">Programmer, <mark>Spoqa</mark> </h2>
        <p :class="$style.experienceDate">January 2017 - Present</p>
        <p :class="$style.experienceIntro">Spoqa provides various B2B solutions to help local and brand stores’ customer management.</p>
        <div :class="$style.experienceDetail">
          <h3>Q1 (January 2017 - March 2017)</h3>
          <p>Being one of two programmers of the team, <strong>took charge of the frontend side</strong> of the latest product of Spoqa, <mark>Dodo Manager</mark>.</p>
          <ul>
            <li><strong>Implemented SPA from scratch</strong> modern web technologies such as <mark>React.js</mark>, <mark>Redux</mark> and <mark>the latest features of ECMAScript</mark>.</li>
            <li><strong>Weaved responsive layout</strong> with heavy use of <mark>flexbox</mark>, which works well in various environments including CEF, tablet, and web browser.</li>
          </ul>
        </div>
        <div :class="$style.experienceDetail">
          <h3>Q2 (April 2017 - June 2017)</h3>
          <p>For the second quarter, the team migrated an improved version of <mark>Dodo Message</mark>, a message based marketing platform into Dodo Manager.</p>
          <ul>
            <li>Implemented ‘Message’ part of the app, which includes <strong>multi-step message writing form</strong> and <strong>simple dashboard for marketing result analysis</strong>.</li>
            <li>Made <strong>challenging UI components</strong> like a small text editor with auto input button, slide-based range selector and so on.</li>
          </ul>
        </div>
        <div :class="$style.experienceDetail">
          <h3>Q3 (July 2017 - Present)</h3>
          <p>To officially launch the product, the team focuses on making the app more robust.</p>
          <ul>
            <li><strong>Replace entire codebase</strong> using Facebook’s <mark>Flow</mark> with MS’s <mark>Typescript</mark> for higher productivity and stability.</li>
            <li><strong>Adapt automated e2e and unit testing environment</strong> using <mark>Selenium</mark>, <mark>Mocha</mark>, and other testing libraries / frameworks.</li>
            <li>Implement ‘Analysis’ part of the app, by providing <strong>visualization of customer statistics</strong> for the stores.</li>
          </ul>
          <p>For Q3, I’m also <strong>in charge of organizing the project timeline</strong> of the team. </p>
        </div>
      </div>
    </section>
    <section :class="$style.skills">
      <h1>Skills</h1>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Modern Web Frontend</h2>
        <p>The borderline between code and design is my main playground. I enjoy implementing both performance-wise and aesthetic-wise solid product. </p>
        <div :class="$style.frontend">
          <h3>ECMAScript</h3>
          <ul>
            <li>Experience up to ES8; solid understanding of core language</li>
            <li>Static Type Checking <small>Typescript, Flow</small></li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Functional approaches on UI</h3>
          <ul>
            <li>React.js (+ redux, react-router, ...)</li>
            <li>Vue.js</li>
            <li>Elm</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Styling</h3>
          <ul>
            <li>CSS (+ css-module)</li>
            <li>CSS Preprocessor <small>SASS, Stylus</small></li>
            <li>PostCSS</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Graphics and Interaction</h3>
          <ul>
            <li>CSS transition / animation</li>
            <li>Three.js</li>
            <li>HTML5 Canvas</li>
            <li>SVG</li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Ecosystem</h3>
          <ul>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Package manager <small>npm, yarn</small></li>
            <li>Linter <small>eslint, tslint</small></li>
          </ul>
        </div>
        <div :class="$style.frontend">
          <h3>Miscellaneous</h3>
          <ul>
            <li>Static Site Generation <small>Nuxt.js, Jekyll, Lektor</small></li>
            <li>Google Analytics</li>
          </ul>
        </div>
      </div>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Programmers' Essentials</h2>
        <p>Though these skills are outside of my main interest, I have basic level of understanding on them as they're essential to any programmer.</p>
        <ul>
          <li><strong>VCS</strong>: Using <mark>git</mark> since 2014 on a daily basis. For any project, my first command is always  <code class='code-inline'>git init</code>.</li>
          <li><strong>Server-side programming</strong>: Python<small>(Flask + SQLAlchemy)</small>, Node<small>(express.js)</small>.</li>
          <li><strong>Theoretical CS background</strong>: Knowledge of widely used DS and basic algorithm.</li>
          <li><strong>System programming</strong>: Have implemented minimal assembler, OS<small>(PintOS)</small> during undergraduate curriculum.</li>
          <li><strong>Server Administration</strong>: UNIX-like environment, CLI utilities, AWS<small>(EC2, S3, CloudFront, Route53)</small>.</li>
        </ul>
      </div>
      <div :class="[$style.subsection, $style.skill]">
        <h2>Functional Programming</h2>
        <p>I’ve learnt a lot of nice practices from <strong>the principles of functional programming</strong>. Whenever I confront interesting problems, this is my main toolbox to look at.</p>
        <ul>
          <li><strong>Favor composition over inheritance</strong>.</li>
          <li>Utilize power of simple functions like <code>map</code>, <code>reduce</code>, and <code>filter</code>.</li>
          <li><strong>Control side effects</strong>; Keep it referentially transparent whenever possible.</li>
          <li><strong>Using ADT</strong> to enable precise data encoding.</li>
        </ul>
      </div>
    </section>
    <section :class="$style.additional">
      <h1>Additional Information</h1>
      <div :class="[$style.subsection, $style.links]">
        <h2>Links</h2>
        <p>When I leave trails on the web, I try to do so with my identity revealed.  I believe this policy helps me stay responsible.</p>
        <ul>
          <li>Personal blog: <a target="_blank" href="https://hjlog.me">https://hjlog.me</a></li>
          <li>Github: <a target="_blank" href="https://github.com/heejongahn">https://github.com/heejongahn</a></li>
          <li>Twitter: <a target="_blank" href="http://twitter.com/heejongahn">twitter.com/heejongahn</a></li>
          <li>LinkedIn: <a target="_blank" href="https://linkedin.com/in/heejongahn">https://linkedin.com/in/heejongahn</a></li>
          <li>Slideshare: <a target="_blank" href="https://www.slideshare.net/HeejongAhn/">https://www.slideshare.net/HeejongAhn/</a></li>
          <li>Medium: <a target="_blank" href="https://medium.com/@heejongahn">https://medium.com/@heejongahn</a></li>
        </ul>
      </div>
      <div :class="[$style.subsection, $style.miscs]">
        <h2>Miscellaneous</h2>
        <p>Some experiences which won't make me a superstar programmer yet I personally am proud of.</p>
        <ul>
          <li>In July 2014, I worked shortly at <strong>the very first stage of a media startup</strong>, <mark>Byline</mark>, in San Francisco. Though I couldn’t contribute much and forgot almost everything I’ve learnt, it sure was fun and valuable startup experience.</li>
          <li>In June 2015, I participated to <mark>The Rust Programming Book</mark> Korean translation project. About that time, I also made <strong>my first open-source contribution</strong>: broken documentation link fix to <mark>Rust</mark> repository.</li>
          <li>In Fall 2016, I organized and led <strong>Haskell Programming Language Study</strong> in KAIST, using UPENN’s CIS194 class materials. A dozen of students participated throughout the semester.</li>
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
  font-size: 1.5em;
  margin: 1em 0;
}

.focus {
  font-weight: bold;
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

.gpa {
  margin-left: 0.25em;
  font-size: 0.75em;
}
</style>
