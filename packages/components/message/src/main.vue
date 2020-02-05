<template>
  <transition name="el-message-fade">
    <div
      class="el-message"
      :class="customClass"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <img class="el-message__img" :src="typeImg" alt="" v-if="!iconClass">
      <div class="el-message__group" :class="{ 'is-with-icon': iconClass }">
        <p><i class="el-message__icon" :class="iconClass" v-if="iconClass"></i>{{ message }}</p>
        <div v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null
      };
    },

    computed: {
      typeImg() {
        return require(`../assets/${ this.type }.svg`);
      }
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },

    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },

    mounted() {
      this.startTimer();
    }
  };
</script>
<style lang="less" scoped>
@message-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
@message-min-width: 300px;
@message-padding: 10px 12px;
@message-content-color: #333;
@message-close-color: #333;
@message-close-hover-color: #333;

@message-success-color: #13ce66);
@message-info-color: #50bfff;
@message-warning-color: #f7ba2a;
@message-danger-color: #ff4949;
.el-message {
  box-shadow: @message-shadow;
  min-width: @message-min-width;
  padding: @message-padding;
  box-sizing: border-box;
  border-radius: 4px;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #fff;
  transition: opacity 0.3s, transform .4s;
  overflow: hidden;
  .el-icon-circle-check {
    color: @message-success-color;
  }

  .el-icon-circle-cross {
    color: @message-danger-color;
  }

  .el-icon-information {
    color: @message-info-color;
  }

  .el-icon-warning {
    color: @message-warning-color;
  }
}
.el-message__group {
  margin-left: 38px;
  position: relative;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;

  &.with-icon {
    margin-left: 0;
  }

  p {
    // font-size: var(--font-size-base);
    margin: 0 34px 0 0;
    white-space: nowrap;
    color: #333;
    text-align: justify;
  }
}
.el-message__img {
  size: 40px;
  position: absolute;
  left: 0;
  top: 0;
}
.el-message__icon {
  vertical-align: middle;
  margin-right: 8px;
}
.el-message__closeBtn {
  position: absolute;
  top: 3px;
  right: 0;
  cursor: pointer;
  color: #333;
  // font-size: var(--font-size-base);

  &:hover {
    color: #333;
  }
}
.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>