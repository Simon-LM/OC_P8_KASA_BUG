import Heading from '../../composents/Heading/Heading'
import './About.scss'
import imageAbout from '../../assets/images/Image_About.png'
import imageArrow from '../../assets/images/arrow_about.svg'

function About() {
  const srcImg = imageAbout
  const srcArrow = imageArrow
  return (
    <div className="about">
      <Heading srcImage={srcImg} />
      <div className="about__collapses">
        <div className="about__collapse">
          <div className="about__collapse__head">
            Fiabilité
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Respect
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre platforme.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Service
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre platforme.
          </p>
        </div>
        <div className="about__collapse">
          <div className="about__collapse__head">
            Sécurité
            <button className="about__arrows">
              <img className="" src={srcArrow} alt="logo" />
            </button>
          </div>
          <p className="about__collapse__text">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note bien à
            l'hôte qu'au locatiare, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisns également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

// srcImage={image.about}

{
  /* <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
</svg> */
}
