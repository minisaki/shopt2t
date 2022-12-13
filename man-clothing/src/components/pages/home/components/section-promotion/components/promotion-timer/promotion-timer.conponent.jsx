import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

import HeadingTeriary from '../../../../../../text/heading-teriary/heading-teriary.component';
import HeadingScondary from '../../../../../../text/heading-scondary/heading-secondary.component';
import CountDown from '../count-down/count-down.conponent';
import Button from '../../../../../../button/button.conponent';

import './promotion-timer.styles.scss';
import { Link } from 'react-router-dom';



const PromotionTimer = ({timeExpirated, price, priceDiscount, productName, productSlug}) => {
  const expiration = new Date(timeExpirated).getTime()
  const [timer, setTimer] = useState({days: '00', hours: '00', minutes: '00', seconds: '00'})
  useEffect(()=> {
    const countInterval = setInterval(function() {
      const now = new Date().getTime();    
      const distance = expiration - now;    
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimer({days, hours, minutes, seconds})
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(countInterval);
      }
    }, 1000);
    return () => {
      clearInterval(countInterval);
    }
  }, [expiration])
  return (
    <div className="promotion__timers">
      <HeadingTeriary marginBottom>
        Ưu đãi hôm nay
      </HeadingTeriary>
      <div className="promotion__price">
      <span className="price-root">
        <NumericFormat value={price} displayType={'text'} thousandSeparator={true}  suffix='₫' />
      </span>
      <span className="price-discount">
        <NumericFormat value={priceDiscount} displayType={'text'} thousandSeparator={true}  suffix='₫' />
        </span>
      </div>
      <HeadingScondary marginBottom>
        {productName}
      </HeadingScondary>
      <CountDown timer={timer} />
      <Link to={`/shop/${productSlug}`}>
        <Button>
          Nhận ưu đãi
        </Button>
      </Link>
    </div>
  )
}

export default PromotionTimer;