<template>
    <main class="container-fluid">
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index"  :class="'section_' + slice.slice_type +' index-'+ index">
            <!-- Text slice component -->
            <template v-if="slice.slice_type === 'text_section'">
                <text-slice :slice="slice"/>
            </template>
            <!-- Quote slice component -->
            <template v-else-if="slice.slice_type === 'quote'">
                <quote-slice :slice="slice"/>
            </template>
            <!-- Full Width Image slice component -->
            <template v-else-if="slice.slice_type === 'full_width_image'">
                <full-width-image :slice="slice"/>
            </template>
            <!-- Image Gallery slice component -->
            <template v-else-if="slice.slice_type === 'image_gallery'">
                <image-gallery :slice="slice"/>
            </template>
            <!-- Image Highlight slice component -->
            <template v-else-if="slice.slice_type === 'image_highlight'">
                <image-highlight :slice="slice"/>
            </template>
            <!-- About Slice slice component -->
            <template v-else-if="slice.slice_type === 'about_slice'">
                <about-slice :slice="slice"/>
            </template>
             <!-- Table Slice slice component -->
            <template v-else-if="slice.slice_type === 'table_slice'">
                <table-slice :slice="slice"/>
            </template>
             <!-- Table Figure slice component -->
            <template v-else-if="slice.slice_type === 'figure_slice'">
                <figure-slice :slice="slice"/>
            </template>
             <!-- Table Work slice component -->
            <template v-else-if="slice.slice_type === 'work_slice'">
                <work-slice :slice="slice"/>
            </template>
            <!-- Table Block Gallery component -->
            <template v-else-if="slice.slice_type === 'block_gallery'">
                <block-gallery :slice="slice"/>
            </template>
            <!-- Table Work Picture component -->
            <template v-else-if="slice.slice_type === 'work_picture'">
                <work-picture :slice="slice"/>
            </template>
             <!-- Table Brand Outlet Picture component -->
            <template v-else-if="slice.slice_type === 'brand_outlet'">
                <brand-outlet :slice="slice"/>
            </template>
             <!-- Description Slice slice component-->
            <template v-else-if="slice.slice_type === 'description_slice'">
                <description-slice :slice="slice"/>
            </template>
            <!-- Description Description without link slice component -->
            <template v-else-if="slice.slice_type === 'description_link'">
                <description-link :slice="slice"/>
            </template>
            <!-- Description Approach slice component -->
            <template v-else-if="slice.slice_type === 'app_slice'">
                <app-slice :slice="slice"/>
            </template>
            <!-- Description Number slice component -->
            <template v-else-if="slice.slice_type === 'num_slice'">
                <num-slice :slice="slice"/>
            </template>
            <!-- Description Story slice component -->
            <template v-else-if="slice.slice_type === 'story_slice'">
                <story-slice :slice="slice"/>
            </template>
            <!-- Description Form slice component -->
            <template v-else-if="slice.slice_type === 'form_slice'">
                <form-slice :slice="slice"/>
            </template>
            <!-- Description Images Slider component -->
            <template v-else-if="slice.slice_type === 'images_slider'">
                <images-slider :slice="slice"/>
            </template>
            <!-- Description Contact Slice component -->
            <template v-else-if="slice.slice_type === 'contact_slice'">
                <contact-slice :slice="slice"/>
            </template>
             <!-- Description Slideshow Slice component -->
            <template v-else-if="slice.slice_type === 'slideshow_slice'">
                <slideshow-slice :slice="slice"/>
            </template>
            <!-- Description Description without link slice component -->
            <template v-else-if="slice.slice_type === 'desc_slice'">
                <desc-slice :slice="slice"/>
            </template>
            <!-- Image  slice component -->
            <template v-else-if="slice.slice_type === 'image_slice'">
                <image-slice :slice="slice"/>
            </template>
            <!-- Case  slice component -->
            <template v-else-if="slice.slice_type === 'case_slice'">
                <case-slice :slice="slice"/>
            </template>
            <!-- Career  slice component -->
            <template v-else-if="slice.slice_type === 'career_slice'">
                <career-slice :slice="slice"/>
            </template>
            <!-- Square Image Gallery  slice component -->
            <template v-else-if="slice.slice_type === 'square_image_gallery'">
                <square-image-gallery :slice="slice"/>
            </template>
            <!-- Square Image Gallery component -->
            <template v-else-if="slice.slice_type === 'rectangular_image_gallery'">
                <rectangular-image-gallery :slice="slice"/>
            </template>
            <!-- Case Study Slice component -->
            <template v-else-if="slice.slice_type === 'case_study_slice'">
                <case-study-slice :slice="slice"/>
            </template>
            <!-- Profile Slice component -->
            <template v-else-if="slice.slice_type === 'profile_slice'">
                <profile-slice :slice="slice"/>
            </template>
            <!-- Blank Space component -->
            <template v-else-if="slice.slice_type === 'blank_space'">
                <blank-space :slice="slice"/>
            </template>
            <!-- ArrowSlice component -->
            <template v-else-if="slice.slice_type === 'arrow_slice'">
                <arrow-slice :slice="slice"/>
            </template>
            <!-- Icon Area component -->
            <template v-else-if="slice.slice_type === 'icon_area'">
                <icon-area :slice="slice"/>
            </template>
            <!-- Icon Area component -->
            <template v-else-if="slice.slice_type === 'job_circular'">
                <job-circular :slice="slice"/>
            </template>
        </section>
    </main>
</template>

<script>
// Imports for all slices
const TextSlice = () => import("./slices/TextSlice.vue");
const QuoteSlice = () => import("./slices/QuoteSlice.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const ImageGallery = () => import("./slices/ImageGallery.vue");
const ImageHighlight = () => import("./slices/ImageHighlight.vue");
const AboutSlice = () => import("./slices/AboutSlice.vue");
const TableSlice = () => import("./slices/TableSlice.vue");
const FigureSlice = () => import("./slices/FigureSlice.vue");
const WorkSlice = () => import("./slices/WorkSlice.vue");
const BlockGallery = () => import("./slices/BlockGallery.vue");
const WorkPicture = () => import("./slices/WorkPicture.vue");
const BrandOutlet = () => import("./slices/BrandOutlet.vue");
const DescriptionSlice = () => import("./slices/DescriptionSlice.vue");
const DescriptionLink = () => import("./slices/DescriptionLink.vue");
const AppSlice = () => import("./slices/AppSlice.vue");
const NumSlice = () => import("./slices/NumSlice.vue");
const StorySlice = () => import("./slices/StorySlice.vue");
const FormSlice = () => import("./slices/FormSlice.vue");
const ImagesSlider = () => import("./slices/ImagesSlider.vue");
const ContactSlice = () => import("./slices/ContactSlice.vue");
const SlideshowSlice = () => import("./slices/SlideshowSlice.vue");
const DescSlice = () => import("./slices/DescSlice.vue");
const ImageSlice = () => import("./slices/ImageSlice.vue");
const CaseSlice = () => import("./slices/CaseSlice.vue");
const CareerSlice = () => import("./slices/CareerSlice.vue");
const SquareImageGallery = () => import("./slices/SquareImageGallery.vue");
const RectangularImageGallery = () => import("./slices/RectangularImageGallery.vue");
const CaseStudySlice = () => import("./slices/CaseStudySlice.vue");
const ProfileSlice = () => import("./slices/ProfileSlice.vue");
const BlankSpace = () => import("./slices/BlankSpace.vue");
const ArrowSlice = () => import("./slices/ArrowSlice.vue");
const IconArea = () => import("./slices/IconArea.vue");
const JobCircular = () => import("./slices/JobCircular.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    TextSlice,
    QuoteSlice,
    FullWidthImage,
    ImageGallery,
    ImageHighlight,
    AboutSlice,
    TableSlice,
    FigureSlice,
    WorkSlice,
    BlockGallery,
    WorkPicture,
    BrandOutlet,
    DescriptionSlice,
    DescriptionLink,
    AppSlice,
    NumSlice,
    StorySlice,
    FormSlice,
    ImagesSlider,
    ContactSlice,
    SlideshowSlice,
    DescSlice,
    ImageSlice,
    CaseSlice,
    CareerSlice,
    SquareImageGallery,
    RectangularImageGallery,
    CaseStudySlice,
    ProfileSlice,
    BlankSpace,
    ArrowSlice,
    IconArea,
    JobCircular
  },
}
</script>
