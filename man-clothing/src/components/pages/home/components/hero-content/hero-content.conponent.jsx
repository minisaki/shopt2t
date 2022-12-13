import { Link } from 'react-router-dom';
import Button from '../../../../button/button.conponent';
import GridLayout from '../../../../layout/grid/grid.component';
import HeadingScondary from '../../../../text/heading-scondary/heading-secondary.component';
import HeadingTeriary from '../../../../text/heading-teriary/heading-teriary.component';
import Paragrapy from '../../../../text/paragrapy/paragrapy.conponent';
import './hero-content.styles.scss';


const HeroContent = ({type, active=true}) => {
  const showHero = active ? 'active' : ''
  return (
    <div className={`hero__content hero__content--${type} ${showHero}`}>
					<GridLayout>
							<div className="col col-o-2 col-4 col-responsive">
								<HeadingTeriary> bộ sưu tập mùa hè
                </HeadingTeriary>
								<HeadingScondary marginBottom>
									Chủ đề kết nối thiên nhiên
								</HeadingScondary>
								<Paragrapy>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, soluta mollitia?
										Perferendi
								</Paragrapy>
								<Link to='/shop' className="hero__content__button">
									<Button amination>
										Xem chi tiết
									</Button>
								</Link>
							</div>
					</GridLayout>
				</div>
  )
}

export default HeroContent;