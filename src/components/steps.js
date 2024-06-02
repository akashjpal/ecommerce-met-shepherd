// steps.js
const steps = [
    {
      id: 'header',
      text: 'This is the header section.',
      attachTo: {
        element: '.header-section',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: tour => tour.next()
        }
      ]
    },
    {
      id: 'offer',
      text: 'Here you can see the latest offers.',
      attachTo: {
        element: '.main-section',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour => tour.back()
        },
        {
          text: 'Next',
          action: tour => tour.next()
        }
      ]
    },
    {
      id: 'categories',
      text: 'These are the available categories.',
      attachTo: {
        element: '.brand-section',
        on: 'top'
      },
      buttons: [
        {
          text: 'Back',
          action: tour => tour.back()
        },
        {
          text: 'Next',
          action: tour => tour.next()
        }
      ]
    },
    {
      id: 'features',
      text: 'Here are some features of our service.',
      attachTo: {
        element: '.testimonial-section',
        on: 'top'
      },
      buttons: [
        {
          text: 'Back',
          action: tour => tour.back()
        },
        {
          text: 'Finish',
          action: tour => tour.complete()
        }
      ]
    }
  ];
  
  export default steps;
  