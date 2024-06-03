import { useEffect } from 'react';

const Loading = () => {
    useEffect(() => {
        let timerInterval;
        window.Swal.fire({
            title: "Loading",
            html: "Espera <b></b> milisegundos",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                window.Swal.showLoading();
                const timer = window.Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${window.Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {

            if (result.dismiss === window.Swal.DismissReason.timer) {
            }
        });
    }, []); 

    return null;
}

export default Loading;