import Loading from "../components/Loading";
import Message from "../components/Message";
import Product from "../components/Product";
import { CUSTOM_CATYGORY } from "../features/categoriesSlice";
import { useAppSelector } from "../hooks/useTypedSelector";

function FavoritesProducts() {

  const { loading, data } = useAppSelector((state) => state.favoritesSlice);
  const filter = useAppSelector((state) => state.productsSlice.filterBy);
  const filteredProducts = filter !== CUSTOM_CATYGORY.ALL.name ? data && data.filter(p => p.category === filter) : data

  return (
    <>
      {loading ? <Loading /> : !data?.length ? <Message>No favorite prodcuts.</Message> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          filteredProducts && filteredProducts.map(product => <Product key={product._id} product={product} />)
        }
      </div>}
    </>
  )
}

export default FavoritesProducts