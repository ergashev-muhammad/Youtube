import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './Video.scss'

// Import images
import Top1 from '../../Assets/Images/top(1).png'
import Top2 from '../../Assets/Images/top(2).png'
import Top3 from '../../Assets/Images/top(3).png'
import Top4 from '../../Assets/Images/top(4).png'
import Videoo from '../../Assets/Images/Video.png'
import Food from '../../Assets/Images/Foodrr.png'

// Import photos for render list
import Cherry from '../../Assets/Images/cherry.png'

function Video() {
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
            <section className="video">
                <div className="container">
                    <div className="video-face">
                        <div className="video-main">
                            <div className="video-main-top">
                                <div className="video-main-top__icon">
                                    <FaIcons.FaBars />
                                </div>
                                <input
                                    className="video-main-top__input"
                                    type=" text"
                                    placeholder="Search"
                                />

                                <div className="video-main-top__images">
                                    <img
                                        className="video-main-top__image"
                                        src={Top1}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="video-main-top__image"
                                        src={Top4}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />

                                    <img
                                        className="video-main-top__image"
                                        src={Top3}
                                        alt="Logo"
                                        width={25}
                                        height={20}
                                    />

                                    <img
                                        className="video-main-top__image"
                                        src={Top2}
                                        alt="Logo"
                                        width={27}
                                        height={20}
                                    />
                                </div>
                            </div>

                            <div className="video-main__info">
                                <div className="video-main__video">
                                    <img
                                        className="video-main__video-image"
                                        src={Videoo}
                                        alt="Video"
                                        width={1363}
                                        height={700}
                                    />

                                    <h3 className="video-main__video-title">
                                        Dude You Re Getting A Telescope
                                    </h3>

                                    <div className="video-main__buttons">
                                        <button className="video-main__button">
                                            123k views
                                        </button>
                                        <button className="video-main__button">
                                            123k
                                        </button>
                                        <button className="video-main__button">
                                            435k
                                        </button>
                                        <button className="video-main__button">
                                            Share
                                        </button>
                                    </div>

                                    <hr className="video-main__line" />

                                    <div className="video-main__extra">
                                        <div className="video-main__icon">
                                            <img
                                                className="video-main__icon-round"
                                                src={Food}
                                                alt="Icon"
                                                width={80}
                                                height={80}
                                            />
                                        </div>

                                        <div className="video-main__extra-info">
                                            <h4 className="video-main__extra-info__title">
                                                Food & Drink
                                            </h4>
                                            <span className="video-main__extra-info__span">
                                                Published on 14 Jun 2019
                                            </span>
                                            <p className="video-main__extra-info__paragraph">
                                                A successful marketing plan
                                                relies heavily on the
                                                pulling-power of advertising
                                                copy. Writing result-oriented ad
                                                copy is difficult, as it must
                                                appeal to, entice, and convince
                                                consumers to take action. There
                                                is no magic formula to write
                                                perfect ad copy; it is based on
                                                a number of factors, including
                                                ad placement, demographic, even
                                                the consumer’s mood when they
                                                see your ad.{' '}
                                            </p>
                                            <span className="video-main__extra-info__span--2">
                                                Show more
                                            </span>
                                        </div>

                                        <div className="video-main__extra-span">
                                            <button
                                                className="video-main__extra-button"
                                                type="submit"
                                            >
                                                Subscribe 2.3m
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="video-main__playlist">
                                    <div className="video-main__playlist-box">
                                        <h3 className="video-main__playlist__title">
                                            Next
                                        </h3>

                                        <p className="video-main__playlist__text">
                                            Autoplay
                                        </p>
                                    </div>

                                    <ul className="video-main__list">
                                        {photos.length > 0 &&
                                            photos.map((photo) => (
                                                <li
                                                    className="video-main__item"
                                                    key={photo.id}
                                                >
                                                    <NavLink
                                                        className="video-main__link"
                                                        to={'/video/2'}
                                                    >
                                                        <img
                                                            className="video-main__image"
                                                            src={Cherry}
                                                            alt="Logo"
                                                            width={367}
                                                            height={213}
                                                        />
                                                    </NavLink>

                                                    <h3 className="video-main__title">
                                                        {photo.title}
                                                    </h3>

                                                    <p className="video-main__paragraph">
                                                        123k views Dollie Blair
                                                    </p>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
