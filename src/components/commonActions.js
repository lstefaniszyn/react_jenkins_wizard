const element = () => document.getElementById('buttonNext');

const nextButton = {
  setDisable: state => {
    element().disabled = state;
    // element().style.opacity = state ? 0.3 : 1.0; //grey in/out button
  },
  attachListener: handler => {
    element().addEventListener('click', handler);
  },
  detachListener: handler => {
    element().removeEventListener('click', handler);
  }
};

export { nextButton };
