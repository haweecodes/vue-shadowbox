<template>
    <div class="box_overlay" v-if="LVisibility" @click="exitOverlay($event)">
      <div class="box_content">
        <div class="arrow_content left">
          <LeftArrow @click="changeContent($event, 0)"/>
        </div>
        <transition name="fade">
          <img :src="currentImage.src" :alt="currentImage.description">
        </transition>
        <div class="arrow_content right">
          <RightArrow @click="changeContent($event, 1)"/>
        </div>
      </div>
    </div>
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
      this.LVisibility = false;
      event.stopPropagation();
      this.$emit('click', false);
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
  background-color: rgba(0,0,0,0.4)
  z-index: 5
  cursor: pointer
  -webkit-user-select: none /* Safari */
  -ms-user-select: none /* IE 10+ and Edge */
  user-select: none /* Standard syntax */
  .box_content
    display: flex
    justify-content: space-between
    align-items: center
    height: 100%

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
