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
                    <SessionScreen img={screen1} text={'Personalized Recommendations'} subtitle={'Receive personalized recommendations of the best clips with our Artificial Intelligence.'} />
                    <SessionScreenLeft img={screen3} text={'Transform into Shorts'} subtitle={'Transform clips into the most trending format on social media and go viral!'} />
                    <SessionScreen img={screen2} text={'Stylized Subtitles'} subtitle={'Have full autonomy to style fonts, animations, highlight boxes, and save your favorite subtitle settings!'} />
                    <SessionScreenLeft img={screen4} text={'Title and Copy Inspirations'} subtitle={'Receive title and copy inspirations from our Artificial Intelligence to save time on creative descriptions.'} />
                </section>
                <PrimaryButton Cta='I want to know more!' style={{ marginBottom: '20rem' }} />
            </Flex>
            </div>
        </>
    )
}

export default Sobre
