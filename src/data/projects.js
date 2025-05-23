import gmaoImage from '../assets/images/gmaosary.jpg'; 
import signature from '../assets/images/signature.png';
import logopassioncampagne from '../assets/images/passioncampagne.png';
import yvonportfolioimg from '../assets/images/yvnportfolio.png';
import felanaportfolioimg from '../assets/images/felanaportfolio.png'; 


export const projects = [
  {
    id: 1,
    title: "GMAO APP",
    description: "GMAO est une application de gestion de maintenance assistée par ordinateur, développée avec React pour l'interface utilisateur, Supabase et PostgreSQL pour la gestion des données, et déployée sur Vercel pour une accessibilité optimale.",
    link: "https://gmao-app.vercel.app/",
    image: gmaoImage, 
  },
  {
    id: 2,
    title: "Portfolio Tahiry",
    description: "Portfolio professionnelle  développée avec ReactJS, déployée sur Vercel ,avec des données statiques tout simplement",
    link: "https://bro-portfolio.vercel.app/",
    image: signature,
  },
  {
    id: 3,
    title: "Passion Campagne",
    description: "Une application mobile pour vendre des produits de chasse, dévéloppée et la maintenance de cette application avec React Native , back-office de site passion campagne",
    link: "https://www.passion-campagne.com/",
    image: logopassioncampagne,
  },
  {
    id: 4,
    title: "Portfolio Yvon ",
    description: "Portfolio professionnelle développée avec ReactJS, déployée sur Vercel ,avec des données statiques tout simplement",
    link: "https://yvonraharinjatovo.vercel.app/",
    image: yvonportfolioimg,
  },
  {
    id: 5,
    title: "Portfolio Felana",
    description: "Portfolio professionnelle développée avec ReactJS, déployée sur Vercel ,avec des données statiques tout simplement",
    link: "https://felana.vercel.app/",
    image: felanaportfolioimg,
  },

];