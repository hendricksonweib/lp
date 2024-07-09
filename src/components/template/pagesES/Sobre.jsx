import React from 'react'
import SessionScreen from '../../Ui/SessionScreen/SessionScreen'
import SessionScreenLeft from '../../Ui/SessionScreen/SessionScreenLeft'
import screen1 from '../../../assets/screen1.png'
import screen2 from '../../../assets/screen2.png'
import screen3 from '../../../assets/screen3.png'
import screen4 from '../../../assets/screen4.png'
import PrimaryButton from '../../controls/PrimaryButton'
import Flex from '../../layout/Flex'
import '../../../style/global.css'

function Sobre() {
    return (
        <>
        <div className="conteiner-sessionsobre">
            <Flex item={'center'} gaps={'12px'}>
                <section >
                    <SessionScreen img={screen1} text={'Recomendaciones Personalizadas'} subtitle={'Recibe recomendaciones personalizadas de los mejores fragmentos con nuestra Inteligencia Artificial.'} />
                    <SessionScreenLeft img={screen3} text={'Transforma en Shorts'} subtitle={'¡Transforma clips al formato más popular en redes sociales y hazte viral!'} />
                    <SessionScreen img={screen2} text={'Subtítulos Estilizados'} subtitle={'¡Ten total autonomía para estilizar fuentes, animaciones, cajas de resaltado y guardar tus configuraciones favoritas de subtítulos!'} />
                    <SessionScreenLeft img={screen4} text={'Inspiraciones de Títulos y Copys'} subtitle={'Recibe inspiraciones de títulos y copys de nuestra Inteligencia Artificial para ahorrar tiempo en las descripciones creativas.'} />
                </section>
                <PrimaryButton Cta='¡Quiero saber más!' style={{ marginBottom: '20rem' }} />
            </Flex>
            </div>
        </>
    )
}

export default Sobre
