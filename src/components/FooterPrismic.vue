<template>
  <footer class="main-footer">
    <div class="mt-5 pt-5 footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-5 col-sm-12">
            <div class="ms-md-3 ms-xl-5">
              <p class="h1 normal letter-spacing-1-8 text-lg-start text-md-start text-white m-0 p-0"><strong>{{ $prismic.richTextAsPlain(contactTitle) }}</strong>{{ $prismic.richTextAsPlain(contactTitleSplit) }}</p>
              <p class="text-lg-start text-md-start text-white m-0 p-0 zero-line-height v-small">{{ $prismic.richTextAsPlain(contactSubtitle) }}</p>
              <p class="col-lg-9 col-md-11 text-md-start text-lg-start text-white mt-4 mt-lg-5 p-0 small">{{ $prismic.richTextAsPlain(contactDes) }}</p>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <ul class="list-group list-group-flush ms-xl-5 mb-lg-0 mt-4 mt-sm-0 p-0">
              <li v-for="menuLink in menuLinks" :key="menuLink.id" class="text-lg-start text-md-start text-mb-start list-group-item bg-transparent border-bottom-0 m-0 p-1">
                <prismic-link @click.native="scrollToTop" :field="menuLink.url" class="text-white text-decoration-none text-capitalize">{{ menuLink.link_title }}</prismic-link>
              </li>
            </ul>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12">
            <ul class="list-group list-group-flush ms-xl-5 mb-lg-0 mt-4 mt-sm-0 p-0">
              <template v-for="Link in contactLinks" >
                <li v-if="Link.label !== 'Social icon'" class="text-lg-start text-md-start text-mb-start list-group-item bg-transparent border-bottom-0 m-0 p-1 fm-pink" :key="Link.id">
                    {{ Link.label }} <prismic-link :field="Link.url" class="text-white text-decoration-none"><em>{{ Link.title1 }}</em></prismic-link>
                </li>
              </template>
            </ul>
            <!-- <div class="street-address ms-xl-5 mb-lg-0 mt-4 mt-sm-0 pt-sm-1 pt-md-4">
              <p class="text-lg-start text-md-start text-mb-start m-0 p-1 text-white"></P>
            </div> -->
            <div class="social-media">
              <ul class="list-group list-group-horizontal ms-xl-5 mb-lg-0 mt-4 mt-sm-0 pt-sm-1 pt-md-4">
                <template v-for="Link in contactLinks" >
                  <li v-if="Link.label === 'Social icon'"  class="text-lg-start text-md-start text-mb-start list-group-item bg-transparent border-0 m-0 p-1" :key="Link.id">
                    <template v-if="Link.title1 === 'facebook'" >
                      <prismic-link :field="Link.url" class="fm-purple text-decoration-none btn-circle" :alt="Link.title1" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                        </prismic-link>
                    </template>
                    <template v-else-if="Link.title1 === 'instagram'" >
                      <prismic-link :field="Link.url" class="fm-purple text-decoration-none btn-circle" :alt="Link.title1" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </prismic-link>
                    </template>
                    <template v-else-if="Link.title1 === 'linkedin'" >
                      <prismic-link :field="Link.url" class="fm-purple text-decoration-none btn-circle" :alt="Link.title1" target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </prismic-link>
                    </template>
                  </li>
                </template>
              </ul>
            </div>
          </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-4">
              <template  v-if="contactCopyright !== null" >
                <p class="copyright text-center text-white">{{ contactCopyright }}</p>
               </template>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPrismic',
  data () {
    return {
      menuContent: [],
      menuLinks: [],
      contactLinks: [],
      contactTitle:[],
      contactTitleSplit:[],
      contactSubtitle:[],
      contactDes:[],
      contactCopyright:[]
    }
  },
  methods: {
    getMenu () {
      //Query to get menu content
      this.$prismic.client.getSingle('footer_menu')
        .then((menuContent) => {
          this.menuContent = menuContent
          this.menuLinks = menuContent.data.link_list
          this.contactLinks = menuContent.data.contact_list
          this.contactTitle = menuContent.data.title
          this.contactTitleSplit = menuContent.data.title_split
          this.contactSubtitle = menuContent.data.subtitle
          this.contactDes = menuContent.data.description
          this.contactCopyright = menuContent.data.copyright
        })
    },
     scrollToTop() {
        window.scrollTo(0,0);
    }
  },
  created () {
    this.getMenu()
  }
}
</script>

<style scoped> 
.main-footer {background: #5b146f;}
.street-address p {font-size:14px;}
.copyright {font-size: 10px;}
.btn-circle {
  background-color: #e10098;
  width: 40px;
  height: 40px;
  padding: 12px 12px;
  border-radius: 50px;
  font-size: 14px;
  line-height: 40px;
}
.btn-circle svg {
  margin-top: -3px;
}
</style>

