import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import './Home.scss'

// Import images
import Round from '../../Assets/Images/Oval1.png'
import Food from '../../Assets/Images/Oval2.png'
import Top1 from '../../Assets/Images/top(1).png'
import Top2 from '../../Assets/Images/top(2).png'
import Top3 from '../../Assets/Images/top(3).png'
import Top4 from '../../Assets/Images/top(4).png'

// Import photos for render list
import Cover from '../../Assets/Images/Cover.png'
import Cover2 from '../../Assets/Images/Cover2.png'
import Cover3 from '../../Assets/Images/Cover3.png'

function Home() {
    const [photos, setPhotos] = React.useState([])
    React.useEffect(() => {
        ;(async function () {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/photos'
                )
                const data = await response.json()

                const minidata = data.slice(0, 10)

                if (minidata?.length > 0) {
                    setPhotos([...minidata])
                }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero-face">
                        <div className="hero-top">
                            <Navbar />
                        </div>

                        <div className="hero-main">
                            <div className="hero-main-top">
                                <input
                                    className="hero-main-top__input"
                                    type=" text"
                                    placeholder="Search"
                                />

                                <div className="hero-main-top__images">
                                    <img
                                        className="hero-main-top__image"
                                        src={Top1}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="hero-main-top__image"
                                        src={Top4}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="hero-main-top__image"
                                        src={Top3}
                                        alt="Logo"
                                        width={25}
                                        height={20}
                                    />

                                    <img
                                        className="hero-main-top__image"
                                        src={Top2}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />
                                </div>
                            </div>

                            <div className="hero-main__box">
                                <NavLink
                                    className="hero-main__box__link"
                                    to={'/channel'}
                                >
                                    <img
                                        className="hero-main__box__img"
                                        src={Round}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                    />
                                </NavLink>

                                <NavLink
                                    className="hero-main__box__link"
                                    to={'/channel'}
                                >
                                    <h2 className="hero-main__box__title">
                                        Dollie Blair
                                    </h2>
                                </NavLink>
                            </div>

                            <ul className="hero-main__list">
                                {photos.length > 0 &&
                                    photos.map((photo) => (
                                        <li
                                            className="hero-main__item"
                                            key={photo.id}
                                        >
                                            <NavLink
                                                className="hero-main__link"
                                                to={'/video/2'}
                                            >
                                                <img
                                                    className="hero-main__image"
                                                    src={Cover}
                                                    alt="Logo"
                                                    width={250}
                                                    height={150}
                                                />
                                            </NavLink>

                                            <h3 className="hero-main__title">
                                                {photo.title}
                                            </h3>

                                            <p className="hero-main__paragraph">
                                                80k views · 3 days ago Dollie
                                                Blair
                                            </p>
                                        </li>
                                    ))}
                            </ul>

                            <h2 className="hero-main__box__title-2">
                                Recommended
                            </h2>

                            <ul className="hero-main__list-2">
                                {photos.length > 0 &&
                                    photos.map((photo) => (
                                        <li
                                            className="hero-main__item-2"
                                            key={photo.id}
                                        >
                                            <NavLink
                                                className="hero-main__link"
                                                to={'/video/2'}
                                            >
                                                <img
                                                    className="hero-main__image-2"
                                                    src={Cover2}
                                                    alt="Logo"
                                                    width={540}
                                                    height={250}
                                                />
                                            </NavLink>

                                            <h3 className="hero-main__title">
                                                {photo.title}
                                            </h3>

                                            <p className="hero-main__paragraph">
                                                80k views · 3 days ago Dollie
                                                Blair
                                            </p>
                                        </li>
                                    ))}
                            </ul>

                            <div className="hero-main__box">
                                <NavLink
                                    className="hero-main__box__link"
                                    to={'/channel'}
                                >
                                    <img
                                        className="hero-main__box__img"
                                        src={Food}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                    />
                                </NavLink>

                                <NavLink
                                    className="hero-main__box__link"
                                    to={'/channel'}
                                >
                                    <h2 className="hero-main__box__title">
                                        Food & Drink
                                    </h2>
                                </NavLink>

                                <a className="hero-main__box__link-2" href="#">
                                    Recommended channel for you
                                </a>
                            </div>

                            <ul className="hero-main__list">
                                {photos.length > 0 &&
                                    photos.map((photo) => (
                                        <li
                                            className="hero-main__item"
                                            key={photo.id}
                                        >
                                            <NavLink
                                                className="hero-main__link"
                                                to={'/video/2'}
                                            >
                                                <img
                                                    className="hero-main__image"
                                                    src={Cover3}
                                                    alt="Logo"
                                                    width={250}
                                                    height={150}
                                                />
                                            </NavLink>

                                            <h3 className="hero-main__title">
                                                {photo.title}
                                            </h3>

                                            <p className="hero-main__paragraph">
                                                80k views · 3 days ago Dollie
                                                Blair
                                            </p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
