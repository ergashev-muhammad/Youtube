import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import './Channel.scss'

// Import images
import Top1 from '../../Assets/Images/top(1).png'
import Top2 from '../../Assets/Images/top(2).png'
import Top3 from '../../Assets/Images/top(3).png'
import Top4 from '../../Assets/Images/top(4).png'
import Green from '../../Assets/Images/Green.png'
import Margaret from '../../Assets/Images/Margaret.png'
import Search from '../../Assets/Images/search.png'
import Blue from '../../Assets/Images/blue.png'
import Person1 from '../../Assets/Images/person1.png'
import Person2 from '../../Assets/Images/person2.png'
import Person3 from '../../Assets/Images/person.png'
import Orange from '../../Assets/Images/Orange.png'

function Channel() {
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
            <section className="channel">
                <div className="container">
                    <div className="channel-face">
                        <div className="channel-top">
                            <Navbar />
                        </div>

                        <div className="channel-main">
                            <div className="channel-main-top">
                                <input
                                    className="channel-main-top__input"
                                    type=" text"
                                    placeholder="Search"
                                />

                                <div className="channel-main-top__images">
                                    <img
                                        className="channel-main-top__image"
                                        src={Top1}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="channel-main-top__image"
                                        src={Top4}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="channel-main-top__image"
                                        src={Top3}
                                        alt="Logo"
                                        width={25}
                                        height={20}
                                    />

                                    <img
                                        className="channel-main-top__image"
                                        src={Top2}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />
                                </div>
                            </div>

                            <NavLink to="/video/2">
                                <img
                                    className="channel-main__image-green"
                                    src={Green}
                                    alt="Image"
                                    width={1590}
                                    height={280}
                                />
                            </NavLink>

                            <div className="channel-main__middle">
                                <div className="channel-main__profile">
                                    <img
                                        className="channel-main__profile__img"
                                        src={Margaret}
                                        alt="MArgaret's photo"
                                        width={80}
                                        height={80}
                                    />

                                    <div className="channel-main__profile-box">
                                        <h3 className="channel-main__profile-box__title">
                                            Margaret Phelps
                                        </h3>

                                        <p className="channel-main__profile-box__paragraph">
                                            245K subscribed
                                        </p>
                                    </div>
                                </div>

                                <div className="channel-main__middle-span">
                                    <button
                                        className="channel-main__middle-button"
                                        type="submit"
                                    >
                                        Subscribe 2.3m
                                    </button>
                                </div>
                            </div>

                            <div className="channel-main__menu">
                                <div className="channel-main__menu-left">
                                    <ul className="channel-main__menu-list">
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link channel-main__menu-link--1"
                                                href="#"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link"
                                                href="#"
                                            >
                                                Videos
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link"
                                                href="#"
                                            >
                                                Playlists
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link"
                                                href="#"
                                            >
                                                Channels
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link"
                                                href="#"
                                            >
                                                Discussion
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <a
                                                className="channel-main__menu-link"
                                                href="#"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li className="channel-main__menu-item">
                                            <img
                                                className="channel-main__menu-icon"
                                                src={Search}
                                                alt="Search icon"
                                                width={18}
                                                height={18}
                                            />
                                        </li>
                                    </ul>

                                    <div className="channel-main__menu-left__info">
                                        <NavLink to="/video/2">
                                            <img
                                                className="channel-main__menu-left__info-img"
                                                src={Blue}
                                                alt="Photo"
                                                width={540}
                                                height={250}
                                            />
                                        </NavLink>

                                        <div className="channel-main__menu-left__info-data">
                                            <h3 className="channel-main__menu-left__info-title">
                                                Choosing The Best Audio Player
                                                Software For Your Computer
                                            </h3>

                                            <p className="channel-main__menu-left__info-paragraph">
                                                Your cheap internet-based banner
                                                advertising will become one of
                                                the sought for ads there are.
                                                Today, the world of Internet
                                                advertising is rapidly evolving
                                                beyond banner ads and intrusive
                                                pop-ups. Bayles A common medium
                                                for advertising on the Internet
                                                is the use of banner ads.
                                            </p>

                                            <span className="channel-main__menu-left__info-span">
                                                11k views · 6 months ago
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="channel-main__menu-left__recommended">
                                    <h4 className="channel-main__menu-left__recommended-title">
                                        Recommended channel
                                    </h4>

                                    <span className="channel-main__menu-left__recommended-span">
                                        <img
                                            className="channel-main__menu-left__recommended-image"
                                            src={Person1}
                                            alt="Photo"
                                            width={50}
                                            height={50}
                                        />

                                        <p className="channel-main__menu-left__recommended-name">
                                            Flora Benson
                                        </p>
                                    </span>

                                    <span className="channel-main__menu-left__recommended-span">
                                        <img
                                            className="channel-main__menu-left__recommended-image"
                                            src={Person2}
                                            alt="Photo"
                                            width={50}
                                            height={50}
                                        />

                                        <p className="channel-main__menu-left__recommended-name">
                                            Flora Benson
                                        </p>
                                    </span>

                                    <span className="channel-main__menu-left__recommended-span">
                                        <img
                                            className="channel-main__menu-left__recommended-image"
                                            src={Person3}
                                            alt="Photo"
                                            width={50}
                                            height={50}
                                        />

                                        <p className="channel-main__menu-left__recommended-name">
                                            Flora Benson
                                        </p>
                                    </span>
                                </div>
                            </div>

                            <h3 className="channel-main__heading">
                                Margaret Phelps videos
                            </h3>

                            <ul className="channel-main__list">
                                {photos.length > 0 &&
                                    photos.map((photo) => (
                                        <li
                                            className="channel-main__item"
                                            key={photo.id}
                                        >
                                            <NavLink
                                                className="channel-main__link"
                                                to={'/video/2'}
                                            >
                                                <img
                                                    className="channel-main__image"
                                                    src={Orange}
                                                    alt="Logo"
                                                    width={250}
                                                    height={150}
                                                />
                                            </NavLink>

                                            <h3 className="channel-main__title">
                                                {photo.title}
                                            </h3>

                                            <p className="channel-main__paragraph">
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

export default Channel
