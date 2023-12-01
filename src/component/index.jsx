import ProductImage from "./product-img ";
import ProductPrice from "./product-price";
import ProductTitle from "./product-title";

export default function ProductItems() {
  return (
   <><div className="row m-3 justify-content-evenly">
      <div className="col-md-3">
        <ProductImage image='https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70'imageAlt={"logo"}/>
       </div>
      <div className="col-md-6">
        <ProductTitle />
      </div>
      <div className="col-md-2">
        <ProductPrice/>
      </div>
    </div>
    </> 
  );
}
