import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import logements from "../../assets/data/logements.json";
import { Tag } from "../../components/tag/Tag";
import { Rating } from "../../components/Rating";
import Slider from "../../components/slider/Slider";
import { TopPage } from "../../components/Util/TopPage";
import Collapse from "../../components/collapse/Collapse";

const Fiche = () => {
  const [appartement, setAppartement] = useState({});
  const { appartementId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getApparts();
  });

  const getApparts = () => {
    const newAppartement = logements.find(
      (appart) => appart.id === appartementId
    );
    if (newAppartement) {
      setAppartement(newAppartement);
    } else {
      navigate("/404");
    }
  };
  return (
    <>
      <header>
        <TopPage />
        <Nav />
      </header>
      <main className="fiche">
        <section className="fiche__slider">
          <Slider pics={appartement.pictures} />
        </section>
        <section className="fiche__info">
          <div className="fiche__info__title">
            <h1 className="fiche__info__title--h1">{appartement.title}</h1>
            <p className="fiche__info__title--ville">{appartement.location}</p>
            <div className="fiche__tags">
              <div className="fiche__tags__container">
                {appartement.tags?.map((tag) => (
                  <span className="fiche__tags__container--tag" key={tag}>
                    <Tag tag={tag} />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="fiche__info__vendeur">
            <div className="fiche__info__vendeur--profil">
            <p
                className="fiche__info__vendeur--profil--name"
                style={{ whiteSpace: "pre-wrap" }}>
                {appartement.host?.name.split(" ").join("\n")}
              </p>
              <img
                className="fiche__info__vendeur--profil--photo"
                src={appartement.host?.picture}
                alt={appartement.host?.name}
              ></img>
            </div>
            <div className="fiche__tags--note">
              <Rating rate={appartement.rating} />
            </div>
          </div>
        </section>

        <section className="fiche__collapse">
          <div
            className="fiche__collapse--description"
            key={appartement.description}
          >
            <Collapse object={appartement} content={appartement.description} />
          </div>
          <div
            className="fiche__collapse--equipement"
            key={appartement.equipments}
          >
            <Collapse object={appartement} content={appartement.equipments} />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Fiche;