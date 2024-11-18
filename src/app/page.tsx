import Image from "next/image";
// import banner from "../app/banner.jpg"
import img from "../app/furni.jpg";
import imge from "../app/img4.jpg";
import pro1 from "../app/img.jpg";
import pro2 from "../app/img2.jpg";
import pro3 from "../app/img3.jpg";
import pro4 from "../app/img7.jpg";
import Link from "next/link"


export default function Home() {
  return (
   <div>
    <nav className ="flex flex-row justify-between bg-amber-100 p-4 font-serif sticky top-0">
      <p className ="font-serif text-slate-950 font-bold text-lg">Furi</p>
      <Link href={'#header'}>Home</Link>
      <Link href={'#about-us'}>About Us</Link>
      <Link href={'#products'}>Products</Link>
    </nav>
    <section id ="header">  
    <div className="bg-[url('../app/banner.jpg')] bg-cover w-[100%] h-[35rem] bg-center place-items-center flex justify-center flex-col">
    <p className="text-white font-serif text-3xl bg-slate-950 p-2 w-2/5 text-center">Get Your Best furnished furniture at your door steps</p>
    <p className="w-3/4 bg-slate-800 text-white p-4 mt-4 font-serif">Welcome to Furi, where timeless elegance meets quality craftsmanship. Our curated collection of furniture is designed to bring warmth, style, and sophistication to your home. From luxurious sofas to stunning dining sets, each piece is carefully selected to offer both beauty and functionality. Whether you&apos;re furnishing a cozy apartment or building your dream home, we have the perfect pieces to elevate your space.
    </p>
    <button className="bg-orange-200 mt-5 p-2 text-fuchsia-950 font-semibold font-serif w-1/4 text-lg"><a href="#products">Buy Now</a></button>
    </div>
    </section>
    <section id="about-us" className="bg-amber-100 p-10">
        <h1 className="text-3xl font-serif text-slate-950 font-bold border-b-2 border-t-2 border-fuchsia-900 text-center">About Us</h1>
      <div className="flex flex-row justify-between mt-5">
        <div className="flex flex-col mt-5">
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">
        Modern & Trendy Style
        </h2>
        <p className="text-base text-black font-serif w-3/4">Discover the latest in contemporary design at Furi. Our furniture collection is inspired by clean lines, minimalism, and bold colors, perfect for modern living. Whether you&apos;re updating your living room or reimagining your workspace, our stylish and functional furniture will help you create a space that&apos;s both trendy and comfortable. Come explore the future of furniture today!</p>
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Family Friendly & Cozy Vibe</h2>
        <p className="text-base text-black font-serif w-3/4">At Furi, we believe your home should be as comfortable as it is beautiful. That&apos;s why we offer a wide selection of durable, family-friendly furniture that suits every lifestyle. From cozy sofas to functional storage solutions, we&apos;re here to help you create a space where memories are made. Whether you&apos;re starting fresh or refreshing your existing pieces, we have what you need to make your home warm and inviting.</p>
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Affordable & Value-Focused</h2>
        <p className="text-base text-black font-serif w-3/4">Looking for quality furniture at great prices? Look no further than Furi! Our mission is to bring you stylish, durable furniture without breaking the bank. We believe everyone deserves a beautiful home, which is why we offer a wide range of affordable pieces that don&apos;t compromise on quality. From modern essentials to classic designs, you&apos;ll find everything you need to create the perfect space.</p>
        </div>
        <Image src={img} alt="img" height={320} width={320} className="rounded-md"/>
      </div>

      
      <div className="flex flex-row-reverse mt-20">
      <div className="flex flex-col ml-24">
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Sustainable & Eco-Friendly</h2>
        <p className="text-base text-black font-serif w-3/4">At Furi, we&apos;re committed to sustainability. Our eco-friendly furniture is crafted from responsibly sourced materials, ensuring that your home is as kind to the planet as it is to your style. Whether you&apos;re looking for reclaimed wood pieces, non-toxic finishes, or energy-efficient designs, we offer a variety of options to help you create an eco-conscious, beautiful living space.</p>
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Luxury & High-End</h2>
        <p className="text-base text-black font-serif w-3/4">Indulge in luxury with Furi, where exquisite craftsmanship and refined design meet. Our high-end furniture collection is made from the finest materials, ensuring that every piece is a true work of art. From handcrafted wood to luxurious fabrics, each item is designed to create a space that exudes sophistication and elegance. Let us help you create a home that reflects your exceptional taste.</p>
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Customizable & Personalized</h2>
        <p className="text-base text-black font-serif w-3/4">At Furi, we believe your furniture should be as unique as you are. That&apos;s why we offer customizable options for many of our pieces, so you can create the perfect design for your home. Choose from a variety of finishes, fabrics, and configurations to make each item truly your own. Whether you need a custom sofa, a personalized dining table, or custom shelving, we&apos;re here to bring your vision to life.</p>
        <h2 className="text-2xl text-fuchsia-950 font-serif font-semibold mt-4">Vintage And Retro Style</h2>
        <p className="text-base text-black font-serif w-3/4">Step back in time with Furi, where vintage charm meets modern-day comfort. Our collection of retro-inspired furniture brings classic design into your home, with a touch of nostalgia and style. From mid-century modern to vintage industrial, we offer one-of-a-kind pieces that add character and flair to any room. Explore our timeless collection and create a space that&apos;s both stylish and full of personality.</p>
      </div>
      <Image src={imge} alt="img" height={320} width={320} className="rounded-md"/>
      </div>
    </section>

    
    <section id="products" className="p-10">
      <h1 className="text-2xl text-center text-black font-serif font-bold mt-5">Products</h1>
      <h1 className="text-xl text-center text-black font-serif font-bold mt-5 mb-5 ">Premium collection</h1>
      <div className="flex flex-row justify-between">
      <div className="bg-slate-950 text-white w-1/5 h-auto place-items-center font-serif p-2">
        <Image src ={pro1} alt = "pro1" height={120} width={200}className="pt-4" />
        <p className="mt-5">Sofa Set</p>
        <p className="mt-5">$6000.00</p>
      </div>
      <div className="bg-slate-950 text-white w-1/5 h-auto place-items-center font-serif p-2">
        <Image src ={pro2} alt = "pro1" height={120} width={200}className="pt-4" />
        <p className="mt-5">Sofa cumbed</p>
        <p className="mt-5">$4000.00</p>
      </div>
      <div className="bg-slate-950 text-white w-1/5 h-auto place-items-center font-serif p-2">
        <Image src ={pro3} alt = "pro1" height={120} width={200}className="pt-4" />
        <p className="mt-5">chairs Set</p>
        <p className="mt-5">$1000.00</p>
      </div>
      <div className="bg-slate-950 text-white w-1/5 h-auto place-items-center font-serif p-2">
        <Image src ={pro4} alt = "pro1" height={120} width={200}className="pt-4" />
        <p className="mt-5">swing sofa</p>
        <p className="mt-5">$24000.00</p>
      </div>
      </div>
    </section>
    <p className="p-2 text-white font-serif text-center bg-slate-900">&copy; Furi. All Rights Reserved</p>
   </div>
  );
}
