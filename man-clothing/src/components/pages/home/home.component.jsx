import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SectionBanner from "./components/section-baner/section-banner.conponent";
import Hero from "./components/section-hero/section-hero.conponent";
import Products from "./components/section-product/section-product.component";

import { fetchCategoriesAsync } from "../../../util/store/categories/categories.action";
import { fetchProductsPreviewAsync } from "../../../util/store/products/product.action";
import { fetchBlogAsync } from "../../../util/store/blog/blog.action";
import Promotion from "./components/section-promotion/section-promotion.component";
import Preview from "./components/section-preview/section-preview.component";
import News from "./components/section-news/section-news.component";
import { selectIsProfile } from "../../../util/store/profile/profile.selector";
import { createProfileAsync } from "../../../util/store/profile/profile.action";
import { selectIsLoading } from "../../../util/store/categories/categories.selector";
import SkeletonHome from "../../skeleton/skeleton-home.component";


const Home = () => {
  
  const dispatch = useDispatch()
  const isProfile = useSelector(selectIsProfile)
  const isLoading = useSelector(selectIsLoading)
  console.log(isProfile)

  useEffect(() => {
    if (!isProfile) {
      dispatch(createProfileAsync())
    }
  }, [isProfile, dispatch])
  useEffect(() => {
    dispatch(fetchCategoriesAsync())
    dispatch(fetchBlogAsync())
    dispatch(fetchProductsPreviewAsync())
    // dispatch(fetchPromotionsAsync())
  }, [dispatch])

  return (
    
    <main>
      {
        isLoading ?  
        <SkeletonHome/> :
        <Fragment>
          <Hero/>
          <SectionBanner />
          <Products/>
          <Promotion/>
          <Preview/>
          <News/>
        </Fragment>      
      }
    </main>
  )
}

export default Home;