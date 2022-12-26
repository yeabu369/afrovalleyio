import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
// import Image from 'next/image';
import useStyles from './CropShowcase.styles';

const images = [
    "https://images.unsplash.com/photo-1530592126211-8294b41580ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
    "https://images.unsplash.com/photo-1611330556082-0ba06d2780d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1553954082-1376d6554209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1552346988-bf70b50d3c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80"
]

export default function CropShowcase() {
    const { cx, classes } = useStyles();

    const slides = images.map((image) => (
        <Carousel.Slide key={image}>
          <Image className={classes.image} radius="md" src={image} height={105} width={176} alt='Coffee Showcase' />
        </Carousel.Slide>
      ));

  return (
    <Carousel
      withIndicators
      slideSize="10%"
      slideGap="sm"
      loop
      align="start"
      slidesToScroll={3}
      styles={{
        indicator: {
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
          },
        },
      }}
    >
      {slides}
    </Carousel>
  );
}