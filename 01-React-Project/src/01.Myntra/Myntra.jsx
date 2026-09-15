import  style from './Myntra.module.css'

const Myntra = () => {
  return (

    <div className={style.container}>

    <nav id={style.navbar}>
        <a href='#'>MEN</a>
        <a href='#'>WOMEN</a>
        <a href='#'>KIDS</a>
        <a href='#'>HOME</a>
        <a href='#'>BEAUTY</a>
        <a href='#'>GENZ</a>
        <a href='#'>STUDIO <sup>NEW</sup></a>

       <input type='text' placeholder='Search for products, brands and more'/>
        <a href='#'>Profile</a>
        <a href='#'>Wishlist</a>
        <a href='#'>Bag</a>
       
    </nav>

    </div>
  )
}

export default Myntra