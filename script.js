// Select all the timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item) => {
  const circle = item.querySelector('.circle');

  // Add click event listener to each circle
  circle.addEventListener('click', () => {
    // Remove active class from all timeline items
    timelineItems.forEach((itm) => {
      itm.classList.remove('active');
    });

    // Add active class to the clicked item
    item.classList.add('active');
  });
});
