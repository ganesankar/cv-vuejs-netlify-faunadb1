<script>
import axios from 'axios'
import Intro from '@/components/Intro'
import ListLinks from '@/components/ListLinks'
import Expertise from '@/components/Expertise'
import Skills from '@/components/Skills'
import ExtLinks from '@/components/ExtLinks'
import Education from '@/components/Education'
import Experience from '@/components/Experience'

export default {
  components: {
    Intro,
    Expertise,
    ExtLinks,
    Education,
    Experience,
    Skills,
    ListLinks
  },
  data() {
    return {
      info: null,
      showMoreExp: false,
      moreExp: {},
      showMoreProj: false,
      moreProj: {},
      loading: true,
      errored: false,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  computed: {},
  mounted() {
    axios
      .get('https://ganesan-cv-reactjs.netlify.com/.netlify/functions/cv-all')
      .then(response => {
        if (response.data.length > 0) {
          const list = []
          response.data.forEach(function(item, index) {
            list.push(item.data)
          })
          this.info = list.sort((a, b) =>
            a.id > b.id ? 1 : b.id > a.id ? -1 : 0
          )
        }
        this.loading = false
        this.errored = false
      })
      .finally(() => (this.loading = false))
  },
  methods: {
    classObject(type) {
      switch (type) {
        case 'social':
          return 'min10vh'
        case 'contacts':
          return 'min10vh'
        case 'profile':
          return 'min10vh'
        case 'awards':
          return 'min10vh'
        default:
          return 'min60vh'
      }
    }
  }
}
</script>

<template>
  <div>
    <el-container v-for="item in info" :key="item.name" class="generalsec1">
      <el-container class="max-990">
        <el-row class="row-bg-max">
          <el-col :xs="24" :sm="24" :md="8" class="titleLeft">
            <div v-if="item.type === 'social'">
              <strong class="upperCase">SOCIAL</strong>
              <p>Kindof Active</p>
            </div>
            <div v-else-if="item.type === 'intro'"></div>
            <div v-else-if="item.type === 'contacts'">
              <strong class="upperCase">CONTACTS</strong>
              <p>Ways to reach me</p>
            </div>
            <div v-else class="">
              <strong class="upperCase">{{ item.name }}</strong>
              <p>{{ item.desc }}</p>
            </div>
          </el-col>
          <!--Right Container-->
          <el-col :xs="24" :sm="24" :md="16">
            <div v-bind:class="[classObject(item.type), 'rightContainer']">
              <div v-if="item.type === 'social'">
                <ExtLinks v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'intro'">
                <Intro v-bind:data="item" />
              </div>
              <div v-else-if="item.type === 'contacts'">
                <ExtLinks v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'expertise'">
                <Expertise v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'skills'">
                <Skills v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'experience'">
                <Experience v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'projects'">
                <Experience v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'education'">
                <Education v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'awards'">
                <Education v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'profile'">
                <ExtLinks v-bind:data="item.values" />
              </div>
              <div v-else-if="item.type === 'otherprojects'">
                <ListLinks v-bind:data="item.values" />
              </div>

              <div v-else>
                <Intro v-bind:data="item.values" />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
.row-bg-max {
  width: 100%;
}
.max-990 {
  max-width: 990px;
  margin: 0 auto;
}
.titleLeft {
  background: rgba(0, 0, 0, 0.01);
  display: flex;
  min-height: 100%;
}

.titleLeft > div {
  display: block;
  width: 100%;
  padding: 30px;
  text-align: right;
}
.titleLeft p {
  margin: 0;
  opacity: 0.6;
}
.generalsec1:nth-child(even) {
  background: rgba(0, 0, 0, 0.01);
}
.rightContainer > div {
  display: flex;
  width: 100%;
  align-items: center;
}
.rightContainer {
  padding: 30px;
  display: flex;
  min-height: 100%;
}
@media (max-width: 768px) {
  .rightContainer {
    padding: 30px 0;
  }
}
.rightContent strong {
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
.rightContent address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: normal;
}
.min60vh {
  min-height: 60vh;
}
.min10vh {
  min-height: 10vh;
}
.separator {
  margin: 3em 0;
  border-color: lightgray;
  border-width: 0.5px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
