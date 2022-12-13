import {useState, useRef, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BiLoader} from 'react-icons/bi';
import Button, {BUTTON_TYPE} from '../../button/button.conponent';
import {fetchCouponAsync} from '../../../util/store/coupon/coupon.action';
import './form-coupon.styles.scss';
import { selectCouponIsLoading } from '../../../util/store/coupon/coupon.selector';

const FormCoupon = () => {
  const [couponInput, setCouponInput] = useState('')
  const dispatch = useDispatch()

  const isLoading = useSelector(selectCouponIsLoading)

  const inputRef = useRef()
  useEffect(() => {
    if (isLoading) {
      inputRef.current.disabled = true
    } else {
      inputRef.current.disabled = false
    }
  }, [isLoading]) 

  const handleChangeInput = (e) => {
    setCouponInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!couponInput) return
    dispatch(fetchCouponAsync(couponInput)).then( () => setCouponInput('') )
  }

  return (
    <form className="coupon" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" className="coupon__input" placeholder="nhập mã" value={couponInput} onChange={handleChangeInput}>
        </input>
      {isLoading && <BiLoader className='coupon__loader'/>}
      <Button type={BUTTON_TYPE.PRIMARY}>Áp dụng</Button>
    </form>
  )
}
export default FormCoupon;