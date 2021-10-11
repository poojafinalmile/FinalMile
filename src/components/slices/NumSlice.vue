<template>
 <div class="row py-4 py-md-3 py-lg-5 mt-4 mt-sm-5 mb-4 mb-md-3 custom-bg-color">
    <template  v-if="$prismic.richTextAsPlain(slice.primary.number_slice_title) !== ''">
      <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-12 mx-auto text-center">
        <prismic-rich-text :field="slice.primary.number_slice_title" :class="'pb-3 pb-lg-5 text-white'"/>
      </div>
    </template>
    <div class="col-xxl-8 col-xl-8 col-lg-10 col-md-12 mx-auto text-center">
      <div class="row">
          <div v-for="item in slice.items" :key="item.id" class="col-xl-4 col-lg-4 col-md-4 text-center">
             <div class="number">
               <number
                :from="0"
                :to="item.number"
                :format="theFormat"
                :duration="20"
                :delay="1"
                 easing="Power0.easeNone"/>
             </div>
             <P class="text-white pt-2">{{ item.title }}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'num-slice',
   methods: {
        theFormat(number) {
            return number.toLocaleString("en", {minimumFractionDigits: 0,maximumFractionDigits: 0,});
        }
    }
}
</script>

<style scoped>
.custom-bg-color {
  background:#5b146f;
}
.number span {
  font: 700 50px system-ui;
  padding: 0rem;
  color:#ffffff;
}
@media (min-width: 1200px) { 
  .number span {
    font: 700 60px system-ui;
  }
 }
@media (min-width: 1400px) { 
  .number span {
    font: 700 70px system-ui;
  }
 }
</style>




