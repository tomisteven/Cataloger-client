import React, {useEffect} from "react";
import "./SectionOne.css";

export default function SectionOne() {
    useEffect(() => {
        const title = document.querySelector('.title-f');
        const subtitle = document.querySelector('.subtitle');
        const startButton = document.querySelector('.start-button');

        title.classList.add('animate-left');
        subtitle.classList.add('animate-left');
        startButton.classList.add('animate-left');

        return () => {
          title.classList.remove('animate-left');
          subtitle.classList.remove('animate-left');
          startButton.classList.remove('animate-left');
        };
      }, []);
  return (
    <section id="home" className="first-section">
      <div className="content">
        <h1 className="title-f">Bienvenido a Cataloger!</h1>
        <h2 className="subtitle">
          Un sitio donde todos tus productos son presentados de la mejor manera posibl para que tus clientes puedan verlos de forma rapida y sencilla.
        </h2>
        <button className="start-button">Comenzar</button>
      </div>
    </section>
  );
}
