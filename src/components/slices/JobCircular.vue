<template>
<div class="row py-2 py-sm-2 py-md-3 py-lg-5">
    <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-12 mx-auto text-center">
        <template v-if="$prismic.richTextAsPlain(slice.primary.band_name_key_word) !== ''">
            <prismic-rich-text class="heading-custom-color pb-md-2 mb-3 mb-md-4" :field="slice.primary.band_name_key_word"/>
        </template>
        <template v-if="$prismic.richTextAsPlain(slice.primary.title) !== ''">
            <prismic-rich-text class="title-custom-color mb-4 mb-md-5"  :field="slice.primary.title"/>
        </template>
        <template v-if="$prismic.richTextAsPlain(slice.primary.description_body) !== ''">
            <prismic-rich-text class="description mb-3 mb-md-4" :field="slice.primary.description_body"/>
        </template>
    </div>
    <div class="col-xxl-8 col-xl-10 col-lg-12 col-md-12 mx-auto mx-auto px-0 text-center gallery-item text-center">
        <template v-for="item in slice.items">
            <template v-if="$prismic.richTextAsPlain(item.title) !== ''">
                <prismic-rich-text :key="item.id" class="title-custom-color pb-md-2 mb-3 mb-md-4" :field="item.title"/>
            </template>
            <template v-if="$prismic.richTextAsPlain(item.description_body) !== ''">
                <prismic-rich-text :key="item.id" class="description mb-4 mb-md-5"  :field="item.description_body"/>
            </template>
            <template v-if="$prismic.richTextAsPlain(item.link_label) !== ''">
                <p class="pt-2 pt-md-3" :key="item.id">
                    <prismic-link  class="'btn btn-circle" :field="item.featured_link">{{ $prismic.richTextAsPlain(item.link_label) }}</prismic-link>
                </p>
            </template>
        </template>
    </div>
</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'case-study-slice'
}
</script>


<style scoped>
.btn-circle {
  text-decoration: none;
  color: #ff009c;
  border:2px solid #ff009c;
  border-radius: 48px;
  padding: 10px 20px;
}
.btn-circle:hover {
  color: #fff;
  border:2px solid#ff009c;
  background: #ff009c;
}
.heading-custom-color{
  color: #ff009c;
}
.title-custom-color{
  color:#5b146f;
}
.subtitle-custom-color{
  color:#333333;
}
.description {
  color: #464646;
}
</style>
