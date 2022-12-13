import { useState } from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs';
import Button, { BUTTON_TYPE } from '../../../../button/button.conponent';
import HeroContent from '../hero-content/hero-content.conponent';

import './section-hero.styles.scss';

const Hero = () => {

	const [active, setActive] = useState(true)

	const handleShowHero = () => {
		setActive(!active)
	}
  
	return (
    <section className="section-hero">
			<div className="hero">
				<HeroContent type="1" active={active}/>
				<HeroContent type="2" active={!active}/>
				
				<div className="hero__btn-right" onClick={handleShowHero}>
					<Button type={BUTTON_TYPE.ARROW}>
						<BsArrowLeftShort className='icon-row'/>
					</Button>
				</div>
				<div className="hero__btn-left" onClick={handleShowHero}>
					<Button type={BUTTON_TYPE.ARROW}>
						<BsArrowRightShort className='icon-row'/>
					</Button>
				</div>
			</div>
		</section>
  )
}

export default Hero;