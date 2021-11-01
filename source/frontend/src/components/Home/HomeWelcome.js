import React from 'react'
import './Home.css'

const HomeWelcome = () => {
    return (
        <>
            <div class="home-column">
                <p>
                    Witaj na stronie 'Eco App'. Jest to platforma przeznaczona
                    do realizowania kursów o różnej tematyce z wykorzystaniem
                    mechanizmów gamifikacji.
                </p>
                <p>
                    Jesteś nauczycielem, który szuka ciekawego sposobu by
                    zainteresować uczniów, wzbudzić w nich ciekawość, czy
                    zwiększyć motywację? W takim razie ta strona jest właśnie
                    dla Ciebie.
                </p>
                <p>
                    Pozwala ona na utworzenie kursu o dowolnej tematyce, w
                    którym uczestnicy nie będą rozwiązywać zadań, lecz
                    przykładowo walczyć z potworami by rozwijać swojego
                    bohatera.
                </p>
            </div>
        </>
    )
}

export default HomeWelcome
