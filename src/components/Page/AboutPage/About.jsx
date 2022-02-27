import { Page } from '../../common/Page';

import './about.css';

export default function About() {

    const img = "https://ik.imagekit.io/mbts/about_OMoVwhcIf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645937449707";

    return (
        <Page img={img} alt={img} info="No Time To Die, Cary Joji Fukunaga">
            <h1 className="about-title">Name’s Bhatt. Saumya Bhatt</h1>
            <div className="about-text">
                <p>Cue gun barrel theme... Not really. I’m just an avid movie fan and like every other guy, felt the need to share my opinion on them to the masses. Coupled with a weak spot for artistic film posters and behold! MBtS was born!</p>
                <p>My Dad, an avid movie lover himself has a cabinate full of DVDs. It had all the classics. Maybe that's what got me started into movies. I’m by no means a film critic. But then again, what does a cinephile with time on his hand do?</p>
            </div>
        </Page>
    )
}
