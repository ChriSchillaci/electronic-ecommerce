const handleHorizScroll = (e: WheelEvent, carouselElement: HTMLDivElement) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    carouselElement.scrollLeft += e.deltaY - 220;
    return;
  }
  carouselElement.scrollLeft += e.deltaY + 220;
};

export default handleHorizScroll;
