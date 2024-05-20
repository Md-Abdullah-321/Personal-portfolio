import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-EYTDVT5GPF'); 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
