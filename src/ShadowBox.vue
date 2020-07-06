<template>
  <transition name="fade">
    <div class="box_overlay" v-if="LVisibility">
      <div class="box_content"  @click="exitOverlay($event)">
        <div class="arrow_content left">
          <LeftArrow @click="changeContent($event, 0)"  v-show="currentPosition > 0"/>
        </div>
        <transition name="fade">
          <div class="box_image_wrapper">
            <img class="box_image" :src="currentImage.src" :alt="currentImage.description">
            <span class="box_image_desc">{{currentImage.description}}</span>
            <span class="box_image_count">{{currentPosition+1}}/{{arrLength}}</span>
          </div>
        </transition>
        <div class="arrow_content right">
          <RightArrow @click="changeContent($event, 1)" v-show="currentPosition < arrLength-1"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import LeftArrow from './assets/arrow_left.svg';
import RightArrow from './assets/arrow_right.svg';

export default {
  name: 'Lightbox',
  components: {
    LeftArrow,
    RightArrow,
  },
  props: {
    visibility: {
      type: Boolean,
      required: true,
      default: true,
    },
    media: {
      type: Array,
      required: true,
    },
  },
  model: {
    prop: 'visibility',
    event: 'click',
  },
  data() {
    return {
      LVisibility: this.visibility,
      currentImage: '',
      currentPosition: 0,
      arrLength: this.media.length,
    };
  },
  beforeMount() {
    // set the first index of the media property to currentImage
    [this.currentImage] = this.media;
  },
  mounted() {
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 37) {
        this.changeContent(event, 0);
      } else if (event.keyCode === 39) {
        this.changeContent(event, 1);
      } else if (event.keyCode === 27) {
        this.exitOverlay(event);
      }
    });
  },
  watch: {
    visibility() {
      this.LVisibility = this.visibility;
    },
  },
  methods: {
    changeContent(event, dir) {
      event.stopPropagation();
      // dir == 0 = left
      // dir == 1 = right
      if (dir && (this.currentPosition < this.arrLength - 1)) {
        this.currentPosition++;
      } else if (!dir && (this.currentPosition > 0)) {
        this.currentPosition--;
      }
      this.currentImage = this.media[this.currentPosition];
    },
    exitOverlay(event) {
      this.reset();
      event.stopPropagation();
      this.$emit('click', false);
    },
    reset() {
      this.currentPosition = 0;
      this.LVisibility = false;
    },
  },
};
</script>

<style lang="sass">
.box_overlay
  position: fixed
  display: block
  width: 100%
  height: 100%
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(0,0,0,0.8)
  z-index: 5
  -webkit-user-select: none /* Safari */
  -ms-user-select: none /* IE 10+ and Edge */
  user-select: none /* Standard syntax */
  .box_content
    height: 100%
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    .arrow_content
      position: static
      cursor: pointer
    .box_image_wrapper
      max-width: 80vw
      max-height: 80vh
      .box_image
        max-width: 80vw
        max-height: 80vh
    .box_image_count
      color: white
      display: block
      text-align: right
    .box_image_desc
      color: white
      display: block
      text-align: center

.fade-enter-active
  &.fade-leave-active
    transition: opacity .5s

.fade-enter
  &.fade-leave-to
    opacity: 0

@media (max-width: 768px)
  .box_content
    justify-content: center !important
    .arrow_content
      position: absolute !important
      &.right
        right: 0
      &.left
        left: 0

@media (max-width: 576px)
    .box_image
      width: 100vw

</style>
