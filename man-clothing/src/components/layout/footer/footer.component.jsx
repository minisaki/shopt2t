import GridLayout from '../grid/grid.component';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
		<GridLayout>
				<div className="col col-3 footer-left-responsive">
					<figure className="footer__logo uti-margin-bottom">
						<img src="/image/logo/xfooter-logo.png" alt="" className="footer__img"/>
					</figure>
					<p className="footer__text">
						The customer is at the heart of our unique business model, which includes design
					</p>
					<div className="footer__payment uti-margin-top">
							<img src="/image/payment/xpayment.png" alt="" className="payment__img"/>
					</div>
				</div>
				<div className="col col-9 footer-right-responsive">
					<div className="footer__info">
						<div className="footer__shop footer__shop--60">
								{/* <div className="footer__widget">
									<h6 className="heading-sixth uti-margin-bottom-small">
										shopping
									</h6>
									<ul className="footer__list">
										<li className="footer__text">contact us</li>
										<li className="footer__text">pament method</li>
										<li className="footer__text">delivary</li>
										<li className="footer__text">return & exchange</li>
									</ul>
								</div> */}
								<div className="footer__widget">
									<h6 className="heading-sixth uti-margin-bottom-small">
										shopping
									</h6>
									<ul className="footer__list">
										<li className="footer__text">clothing store</li>
										<li className="footer__text">trending shoes</li>
										<li className="footer__text">sale</li>
										<li className="footer__text">accessories</li>
									</ul>
								</div>
						</div>
						<div className="footer__shop footer__shop--40">
							<div className="footer__customer">
								<h6 className="heading-sixth uti-margin-bottom-small">
									newletter
								</h6>
								<p className="footer__text">
									Be the first to know about new arrivals, look books, sales & promos!
								</p>
								<div className="customer">
									<input type="text" placeholder="your email" className="customer__input"/>
									<i className="customer__icon icon-basic-mail"></i>
								</div>
							</div>
						</div>
					</div>						
				</div>
			{/* </div> */}
			{/* <div className="row"> */}
				<div className="copyright">
					<p>Copyright © 2023  This template is made with  by T2TShop</p>
				</div>
			{/* </div> */}
		</GridLayout>
	</footer>
  )
}

export default Footer;