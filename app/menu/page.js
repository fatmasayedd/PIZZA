import OurBestSellersProps from "../components/OurBestSellersprops/ourbestsellersprops";
import image1 from '../../public/images/15ddcf4479d8deb982b270b06d54a2ad-removebg-preview.png'
import image2 from '../../public/images/2c054769cdaf0ebb72761b1c5e9a0d3f-removebg-preview.png'
import image3 from '../../public/images/3736fd91ce58c7ea10ac449bf3cc7718-removebg-preview.png'
import image4 from '../../public/images/3736fd91ce58c7ea10ac449bf3cc7718-removebg-preview.png'
import image5 from '../../public/images/500a4983d3d45d39d9ecf5aa41aae8cf-removebg-preview.png'
import image6 from '../../public/images/84d9cf05125bbefd5b443ee772e476b1-removebg-preview.png'
import image7 from '../../public/images/a85b2a42f250f1ea3c81c6031abeb37f-removebg-preview.png'
import image8 from '../../public/images/2c054769cdaf0ebb72761b1c5e9a0d3f-removebg-preview.png'



export default function Menu() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-orange-600 text-4xl font-bold font-serif" >  Pizza  </h2>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <OurBestSellersProps image={image1} title="Pepperoni Pizza" paragraph="Pepperoni Pizza the pizzazz in pizza. Enjoy every bite our traditional crust brushed with garlic butter, topped..." price="$15" />
        <OurBestSellersProps image={image2} title="Cheese Pizza" paragraph="Cheese pizza is a favorite for a reason. Goory mozzaroia cheese in the star of our cheese pizza on a traditional crust... " price="$11" />
        <OurBestSellersProps image={image3} title="Beef Pizza" paragraph="Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with ..." price="$14" />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <OurBestSellersProps image={image4} title="Pepperoni Pizza" paragraph="Pepperoni Pizza the pizzazz in pizza. Enjoy every bite our traditional crust brushed with garlic butter, topped..." price="$15" />
        <OurBestSellersProps image={image5} title="Cheese Pizza" paragraph="Cheese pizza is a favorite for a reason. Goory mozzaroia cheese in the star of our cheese pizza on a traditional crust... " price="$11" />
        <OurBestSellersProps image={image6} title="Beef Pizza" paragraph="Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with ..." price="$14" />
      </div>


      <h2 className="text-orange-600 text-4xl font-bold font-serif  mt-20" >  Pasta  </h2>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <OurBestSellersProps image={image7} title="Pepperoni Pizza" paragraph="Pepperoni Pizza the pizzazz in pizza. Enjoy every bite our traditional crust brushed with garlic butter, topped..." price="$15" />
        <OurBestSellersProps image={image8} title="Cheese Pizza" paragraph="Cheese pizza is a favorite for a reason. Goory mozzaroia cheese in the star of our cheese pizza on a traditional crust... " price="$11" />
        <OurBestSellersProps image={image1} title="Beef Pizza" paragraph="Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with ..." price="$14" />
      </div>

      <h2 className="text-orange-600 text-4xl font-bold font-serif  mt-20" >  Dessert  </h2>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <OurBestSellersProps image={image1} title="Pepperoni Pizza" paragraph="Pepperoni Pizza the pizzazz in pizza. Enjoy every bite our traditional crust brushed with garlic butter, topped..." price="$15" />
        <OurBestSellersProps image={image1} title="Cheese Pizza" paragraph="Cheese pizza is a favorite for a reason. Goory mozzaroia cheese in the star of our cheese pizza on a traditional crust... " price="$11" />
        <OurBestSellersProps image={image1} title="Beef Pizza" paragraph="Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with ..." price="$14" />
      </div>

    </div>
  );
}