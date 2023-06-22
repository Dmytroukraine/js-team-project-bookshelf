import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const spinnerStart = () => {
  Loading.pulse('Wait please...', {
    svgColor: '#4f2ee8',
  });
};

export const spinnerStop = () => {
  Loading.remove();
};

export const spinnerStartForCategories = () => {
  Loading.pulse('Wait please...', {
    svgColor: '#4f2ee8',
  });
};

export const spinerStopForCategories = () => {
  Loading.remove();
};
