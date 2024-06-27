import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductDisplay_rp from '../../components/productDisplay_rp/ProductDisplay_rp'
import Benefits from '../../modules/benefits/Benefits'
import Details from '../../modules/details/Details'
import InShort from '../../modules/inShort/InShort'
import Ingredients from '../../modules/ingredients/Ingredients'
import ProductDetails from '../../modules/productDetails/ProductDetails'
import ReviewsModule from '../../modules/reviewsModule/ReviewsModule'
import './productPage.scss'


export default function ProductPage() {

    return (
        <div className='productsall'>
            <Navbar />
            <ProductDetails />
            <InShort />
            <Benefits />
            <Details />
            <Ingredients />
            <ReviewsModule />
            <ProductDisplay_rp />

            <Footer />
        </div>
    )
}