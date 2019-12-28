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
  methods: {}
}
</script>

<template>
  <div>
    <div v-for="item in info" :key="item.name" class="generalsec1">
      <el-container>
        <el-container class="max-990">
          <el-row type="flex" class="row-bg-max">
            <el-col :xs="24" :sm="24" :md="8">
              <div v-if="item.type === 'social'" class="min10vh">
                <h4>SOCIAL</h4>
                <p>Kindof Active</p>
              </div>
              <div v-else-if="item.type === 'intro'" class="min10vh"></div>
              <div v-else-if="item.type === 'contacts'" class="min10vh">
                <h4>CONTACTS</h4>
                <p>Ways to reach me</p>
              </div>
              <div v-else class="min80vh">
                <h4>{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
              </div>
              <div></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16">
              <div v-if="item.type === 'social'">
                <el-row type="flex" class="row-bg-max">
                  <el-col
                    :xs="12"
                    :sm="12"
                    :md="6"
                    v-for="citem in item.values"
                    :key="citem.name"
                  >
                    <h4>{{ citem.name }}</h4>
                    <el-link
                      :underline="false"
                      v-bind:href="citem.elink"
                      type="primary"
                      >{{ citem.name }}</el-link
                    >
                  </el-col>
                </el-row>
              </div>
              <div v-else-if="item.type === 'intro'">
                <h1 class="uk-h1 tm-heading-fragment">
                  {{ item.name }}
                </h1>

                <div v-html="item.desc"></div>
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
            </el-col>
          </el-row>
        </el-container>
      </el-container>
    </div>
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
.generalsec1:nth-child(even) {
  background: rgba(0, 0, 0, 0.01);
}

.rightContainer {
  padding: 60px 30px 30px 30px;
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
.min80vh {
  min-height: 80vh;
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
