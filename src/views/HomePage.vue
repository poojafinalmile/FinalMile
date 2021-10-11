<template>
<section class="homepage" :documentId="documentId">
  <!-- Vue tag to add header component -->
  <header-prismic/>
    <!-- Button to edit document in dashboard -->
      <div class="container-fluid homepage-banner">
        <div class="row">
          <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12 pt-md-5 mt-md-5 text-center">
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
              <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
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
import FooterPrismic from '../components/FooterPrismic.vue'

export default {
name: 'home-page',
components: {
  HeaderPrismic,
  SlicesBlock,
  FooterPrismic
},
data () {
  return {
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
  getContent () {
    //Query to get home content
    this.$prismic.client.getSingle('homepage')
      .then((document) => {
        if (document) {
          this.documentId = document.id;
          const HomepageBanner = document.data.homepage_banner[0];
          this.fields.title = HomepageBanner.home_page_title;
          this.fields.subtitle = HomepageBanner.home_page_subtitle;
          this.fields.button_link = HomepageBanner.button_link;
          this.fields.button_label = HomepageBanner.button_label;
          //Set slices as variable
          this.slices = document.data.page_content
        } else {
          //returns error page
          this.$router.push({ name: 'not-found' })
        }
      })
  },
},
created () {
  this.getContent()
}
}
</script>

<style scoped>
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

.wave {
max-height: 100px;
display: flex;
width: calc(100% + 24px);
margin-left: -12px;
}
.wave svg {
fill: #FFFFFF;
}
</style>