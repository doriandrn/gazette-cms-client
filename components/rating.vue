<template lang="pug">
.rating
  span(data-icon="star" v-for="i in 5")
  .over
    span(data-icon="star" v-for="i in 5")
</template>

<style lang="stylus" scoped>
$rateWidth = 70px
$starWidth = 10px
// $starColor: rgb( 55, 203, 194 );
// $starColor: #e4e4e4;
$starColor = rgba( black, .15 );

.rating
  display: 			inline-block;
  vertical-align: bottom;
  width: 				$rateWidth;
  line-height: 	12px
  white-space: 	nowrap;
  position: 		relative;

  span
    display: 				inline-block;
    vertical-align: top;
    color: 					$starColor;
    width: 					$starWidth;

    &:not(:first-child)
      margin-left 4px

    &:before
      size 12px
      background-size 10px

  .over
    position: 		absolute;
    top: 					0;
    white-space: 	nowrap;
    overflow: 		hidden;
    left 0

    > span
      text-shadow: 	0px 0px 10px rgba( $starColor, .1 );

</style>
