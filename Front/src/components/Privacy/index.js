/* eslint-disable max-len */
import React from 'react';
import Menu from 'src/components/Menu';
import './styles.scss';
import Cookies from 'js-cookie';
import MenuBurger from '../MenuBurger';
import MenuDesktop from '../MenuDesktop';

const Privacy = () => (
  <div className="privacy">
    {Cookies.get('loggedIn') && (
      <>
        <MenuBurger />
        <MenuDesktop />
      </>
    )}

    {!Cookies.get('loggedIn') && (
      <>
        <Menu />
      </>
    )}
    <article className="privacy__content">
      <h2 className="privacy__content--bigTitle">Mentions légales</h2>
      <p className="privacy__content--text">Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site CarnetDeVoyage les présentes mentions légales. La connexion et la navigation sur le site "Carnet de Voyage" par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
      <h3 className="privacy__content--title">ARTICLE 1 :</h3>
      <p className="privacy__content--text">Le site CarnetDeVoyage est réalisé dans le cadre d'un projet de fin d'année pour l'école O'Clock.  Les propriétaires sont Monsieur Sébastien CAILLEAU,  Monsieur Quentin Garcia, Monsieur Thibault MORIZET-MARMINC, Mademoiselle Chloé TALOUR et Monsieur Christophe VASSEUR.</p>
      <h3 className="privacy__content--title">ARTICLE 2 :</h3>
      <p className="privacy__content--text">L'hébergeur du site CarnetDeVoyage est la Société AWS, dont le siège social est situé au 67 Boulevard du Général Leclerc, 92110 Clichy, France .</p>
      <h3 className="privacy__content--title">ARTICLE 3 :</h3>
      <p className="privacy__content--text">Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance. En cas de modification, interruption ou suspension des services le site CarnetDeVoyage ne saurait être tenu responsable.</p>
      <h3 className="privacy__content--title">ARTICLE 4 :</h3>
      <p className="privacy__content--text">Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans lamesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
      <h3 className="privacy__content--title">ARTICLE 5 :</h3>
      <p className="privacy__content--text">L'Utilisateur est informé que lors de ses visites sur le site, un cookie peut s'installer automatiquement sur son logiciel de navigation.En naviguant sur le site, il les accepte.Un cookie est un élément qui ne permet pas d'identifier l'Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet.  L'Utilisateur pourra désactiver ce cookie par l'intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
      <h3 className="privacy__content--title">ARTICLE 6 :</h3>
      <p className="privacy__content--text"> Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site CarnetDeVoyage, sans autorisation de l'Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
      <h3 className="privacy__content--title">ARTICLE 7 :</h3>
      <p className="privacy__content--text"> Les illustrations présentes sur le site proviennent du site <a className="linkFreepik" href="https://stories.freepik.com/">https://stories.freepik.com/</a> </p>
    </article>

  </div>
);

export default Privacy;
