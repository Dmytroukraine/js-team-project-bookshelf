import { Loading } from 'notiflix/build/notiflix-loading-aio';
const options = {
     className: 'notiflix-loading',
            zindex: 4000,
            fontFamily: 'DM Sans',
            messageFontSize:'26px',
            svgColor:'rgba(79, 46, 232, 0.5)',
}


export function spinnerStart() {
    Loading.circle('Wait please', options);
}

export function spinnerStop() {
    Loading.remove();
}

export function spinnerStartForCategories() {
    Loading.circle('Wait please', options);
}

export function spinnerStopForCategories() {
    Loading.circle('Wait please', options);
}
