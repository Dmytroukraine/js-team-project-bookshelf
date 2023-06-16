import { Loading } from 'notiflix/build/notiflix-loading-aio';


export function spinLoader(response) {
    if (!response) {
        Loading.circle('Wait please', {
            className: 'notiflix-loading',
            zindex: 4000,
            fontFamily: 'DM Sans',
            messageFontSize:'26px',
            svgColor:'rgba(79, 46, 232, 0.5)',
            

        });
       
    } else {
        Loading.remove();
    }
    
}

