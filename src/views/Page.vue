<template>
  <section class="page" :documentId="documentId">
  <!-- Vue tag to add header component -->
  <header-prismic/>
    <!-- Button to edit document in dashboard -->
      <div class="container-fluid homepage-banner mb-4 mb-lg-0">
        <div class="row">
          <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12 py-4 mb-2 py-lg-5 m-lg-0 text-center">
            <template  v-if="$prismic.richTextAsPlain(fields.title) !== '' || $prismic.richTextAsPlain(fields.subtitle) !== '' || $prismic.richTextAsPlain(fields.button_label) !== ''">
              <div class="py-5 my-5 text-center">
                <template  v-if="$prismic.richTextAsPlain(fields.title) !== ''">
                  <prismic-rich-text :field="fields.title" :class="'text-white pb-5 px-3 mt-5'"/>
                </template>
                <template  v-if="$prismic.richTextAsPlain(fields.subtitle) !== ''">
                  <prismic-rich-text :field="fields.subtitle" :class="'text-white px-2 mb-4'"/>
                </template> 
                <template  v-if="$prismic.richTextAsPlain(fields.button_label) !== ''">
                  <prismic-link class="btn-homepage-circle" :field="fields.button_link">{{ $prismic.richTextAsPlain(fields.button_label) }}</prismic-link>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
  <footer-prismic/>
</section>
</template>

<script>
// imports for all components
import HeaderPrismic from '../components/HeaderPrismic.vue'
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'page',
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },
  data () {
    return {
      filed:[],
      documentId: '',
      fields: {
        title: null,
        subtitle: null,
        button_link: null,
        button_label: null
      },
      slices: []
    }
  },
  methods: {
    getContent (uid) {
      //Query to get post content
      this.$prismic.client.getByUID('page', uid)
        .then((document) => {
          const width  = window.innerWidth || document.documentElement.clientWidth || 
          document.body.clientWidth;
          const height = window.innerHeight || document.documentElement.clientHeight|| 
          document.body.clientHeight;

          if (document) {
            this.documentId = document.id
            const PageBanner = document.data.homepage_banner[0];
            this.fields.title = PageBanner.page_title;
            this.fields.subtitle = PageBanner.page_subtitle;
            this.fields.button_link = PageBanner.button_link;
            this.fields.button_label = PageBanner.button_label;
          //Set slices as variable
           this.slices = document.data.page_content
          } 
          else {
            //returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid)
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}

import FooterPrismic from '../components/FooterPrismic.vue'
</script>

<style scoped>
.page {
  background-position: center;
  background-size: 100vw;
  background-repeat: no-repeat;
}
.btn-homepage-circle {
  text-decoration: none;
  color: #fff;
  border:2px solid #ff009c;
  background:#ff009c;
  border-radius: 48px;
  padding: 10px 40px;
}
.btn-homepage-circle:hover {
  color: #fff;
  border:2px solid #ff009c;
  background: transparent;
}


.homepage-banner {
    background: linear-gradient(115deg, #2a5ba8, #b70f76);
    background-size: 175% 100%;

    -webkit-animation: AnimationName 6s ease infinite;
    -moz-animation: AnimationName 6s ease infinite;
    animation: AnimationName 6s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
@keyframes AnimationName {
    0%{background-position:0% 15%}
    50%{background-position:100% 86%}
    100%{background-position:0% 15%}
}
</style>