<template>
  <div :class="$style.wrap">
    <div :class='$style.shimmer'>
      <div :class='[$style.blocker, $style._1st]'></div>
      <div :class='[$style.blocker, $style._2nd]'></div>
      <div :class='[$style.blocker, $style._3rd]'></div>
      <div :class='[$style.blocker, $style._4th]'></div>
      <div :class='[$style.blocker, $style._5th]'></div>
      <div :class='[$style.blocker, $style._6th]'></div>
      <div :class='[$style.blocker, $style._7th]'></div>
      <div :class='[$style.blocker, $style._8th]'></div>
      <div :class='[$style.blocker, $style._9th]'></div>
      <div :class='[$style.blocker, $style._10th]'></div>
      <div :class='[$style.blocker, $style._11th]'></div>
    </div>
  </div>
</template>

<<script>
export default {

}
</script>

<style lang="scss" module>
@import '~assets/variables';

.wrap {
  width: 100%;
  padding: 12px;
  border: 1px solid $divider-color;
  background-color: white;
}

.shimmer {
  position: relative;
  background-color: #f6f7f9;
  overflow-x: hidden;
  overflow-y: hidden;

  width: 100%;
  height: 150px;

  &:before {
    height: 200px;
    display: block;
    content: '';

    background-image: linear-gradient(to right, #f6f7f9 0%, #e9ebee 20%, #f6f7f9 40%, #f6f7f9 100%);
    background-repeat: no-repeat;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: shimmer;
    animation-timing-function: linear;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-400px);
  }

  100% {
    transform: translateX(400px);
  }
}

$profile-width: 40px;
$profile-height: 40px;

$content-top: 60px;

$blocker-width: 6px;
$blocker-left-end: $profile-width + 2 * $blocker-width;

.blocker {
  background-color: white;
  position: absolute;
}

._1st {
  top: 0;
  left: $profile-width;
  width: 2 * $blocker-width;
  height: $profile-height;
}

._2nd {
  top: 0;
  left: $blocker-left-end;
  right: 0;

  height: $blocker-width;
}

._3rd {
  left: 200px;
  right: 0px;
  top: $blocker-width;
  height: $blocker-width;
}

._4th {
  top: 2 * $blocker-width;
  left: $blocker-left-end;
  right: 0;

  height: 2 * $blocker-width;
}

._5th {
  top: 4 * $blocker-width;
  left: 250px;
  right: 0;
  height: $blocker-width;
}

._6th {
  top: 5 * $blocker-width;
  left: $blocker-left-end;
  right: 0;
  height: $profile-height - (5 * $blocker-width);
}

._7th {
  top: $profile-height;
  left: 0;
  right: 0;
  height: $content-top - $profile-height;
}

._8th {
  top: $content-top;
  left: 300px;
  right: 0;
  height: $blocker-width;
}

._9th {
  top: $content-top + $blocker-width;
  left: 0;
  right: 0;
  height: $blocker-width * 2;
}

._10th {
  top: $content-top + 3 * $blocker-width;
  left: 330px;
  right: 0;
  height: $blocker-width;
}

._11th {
  top: $content-top + 4 * $blocker-width;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
