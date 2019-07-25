const element = () => document.getElementById('buttonNext');

const nextButton = {
  setDisable: state => {
    element().disabled = state;
  },
  attachListener: handler => {
    element().addEventListener('click', handler);
  },
  detachListener: handler => {
    element().removeEventListener('click', handler);
  }
};

export { nextButton };
