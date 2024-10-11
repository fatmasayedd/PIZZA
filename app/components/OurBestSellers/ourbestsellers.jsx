import image1 from '../../../public/images/500a4983d3d45d39d9ecf5aa41aae8cf-removebg-preview.png'
import OurBestSellersProps from "../OurBestSellersprops/ourbestsellersprops";


export default function OurBestSellers() {
  return (
    <div className="text-center mt-20">
      <h3 className="text-gray-600 font-semibold ">CHECK OUT</h3>
      <h2 className="text-orange-600 text-4xl font-bold font-serif">Our Best Sellers</h2>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <OurBestSellersProps image={image1} title="Pepperoni Pizza" paragraph="Pepperoni Pizza the pizzazz in pizza. Enjoy every bite our traditional crust brushed with garlic butter, topped..." price="$15" />
        <OurBestSellersProps image={image1} title="Cheese Pizza" paragraph="Cheese pizza is a favorite for a reason. Goory mozzaroia cheese in the star of our cheese pizza on a traditional crust... " price="$11"  />
        <OurBestSellersProps image={image1} title="Beef Pizza" paragraph="Beef pizza is made for the meat lovers. Enjoy on our traditional crust brushed with garlic butter and finished with ..." price="$14" />
      </div>
    </div>
  );
}