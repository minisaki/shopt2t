import { memo } from 'react';
import Button, { BUTTON_TYPE } from '../../button/button.conponent';
import FormInput from '../components/form-input.component';
import FormTextarea from '../components/form-textarea.component';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './form.styles.scss';
import LinearProgress from '../../linear-progress/linear-progress.component';
import { useSelector } from 'react-redux';
import { selectOredrIsLoading } from '../../../util/store/order/order.selector';
import { selectProfile } from '../../../util/store/profile/profile.selector';
import { useEffect } from 'react';
import { useMemo } from 'react';

const schema = yup.object({
  name: yup.string().required('nhap truong nay'),
  city: yup.string().required('nhap truong nay'),
  address: yup.string().required('nhap truong nay'),
  phone: yup.string().matches(/^[0-9]*$/, 'la so').required('nhap truong nay').length(10, 'nhap du 10 so'),
  note: yup.string(),
}).required();

const FormCheckOut = ({ onUpdateProfile}) => {
 
  const isLoading = useSelector(selectOredrIsLoading)
  const profile = useSelector(selectProfile)
  
  const [address, city] = profile.address ? profile.address.split("-") : [undefined, undefined]
  
  const defaultValues = useMemo(() => Object.keys(profile).length > 0 && profile.name !== 'anonymous' ? 
      { ...profile, city, address } : { name: '', city: '', address: '', phone: '', note: '' }, [profile, address, city])
  
  
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'all',
    defaultValues,
    resolver: yupResolver(schema)
  });
  
  const onSubmitForm = (data) => {
    onUpdateProfile(data, defaultValues)    
  }
  useEffect(() => {
    reset(defaultValues)
  }, [profile, reset, defaultValues])
  
  return (
    <form className="form" onSubmit={handleSubmit(onSubmitForm)}>
      {isLoading && <LinearProgress/>}
      <FormInput
        label='họ tên'
        register={register}
        error={errors}
        name='name'
        type='text'        
        placeholder='nhập họ tên'
      />
      <FormInput
        label='tỉnh - Thành phố'
        register={register}
        error={errors}
        name='city'
        type='text'
        placeholder='nhập thành phố tỉnh'
      />
      <FormInput
        label='địa chỉ'
        register={register}
        error={errors}
        type='text'
        name='address'
        placeholder='địa chỉ'
      />
      <FormInput
        label='số điện thoại'
        register={register}
        error={errors}
        type='text'
        name='phone'
        placeholder='số điện thoại'
      />
      <FormTextarea
        label='ghi chú'
        register={register}
        error={errors}
        type='text'
        name='note'
        placeholder='ghi chú'
        rows="4"
      />
      
      <div className="form__button" onSubmit={handleSubmit(onSubmitForm)}>
        <Button type={BUTTON_TYPE.PRIMARY}>Mua hàng</Button>
      </div>
    </form>)
}
export default memo(FormCheckOut);