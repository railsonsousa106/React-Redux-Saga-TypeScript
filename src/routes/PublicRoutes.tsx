import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../constants/routes';

// const Blog = lazy(() => import(/* webpackChunkName: "Blog" */ '../pages/blog'));
// const BlogCreate = lazy(() => import(/* webpackChunkName: "BlogCreate" */ '../pages/blogCreatePage'));
// const Portal = lazy(() => import(/* webpackChunkName: "Portal" */ '../pages/Portal'));
// const PlatformRedirect = lazy(() => import(/* webpackChunkName: "PlatformRedirect" */ '../pages/PlatformRedirect'));
// const DigitalEmployee = lazy(() => import(/* webpackChunkName: "DigitalEmployee" */ '../pages/DigitalEmployee'));

// const About = lazy(() => import(/* webpackChunkName: "About" */ '../pages/About/About'));
// const BuildYourOwn = lazy(() => import(/* webpackChunkName: "BuildYourOwn" */ '../pages/BuildYourOwn/BuildYourOwn'));
// const ContactUs = lazy(() => import(/* webpackChunkName: "ContactUs" */ '../pages/ContactUs/ContactUs'));
// const HelpCenter = lazy(() => import(/* webpackChunkName: "HelpCenter" */ '../pages/HelpCenter/HelpCenter'));
// const Home = lazy(() => import(/* webpackChunkName: "Home" */ '../pages/Home/Home'));
// const FAQ = lazy(() => import(/* webpackChunkName: "FAQ" */ '../pages/FAQ/FAQ'));
// const OAuth = lazy(() => import(/* webpackChunkName: "OAuth" */ '../pages/OAuth/OAuth'));
// const Partners = lazy(() => import(/* webpackChunkName: "Partners" */ '../pages/Partners/Partners'));
// const PlugAndPlay = lazy(() => import(/* webpackChunkName: "PlugAndPlay" */ '../pages/PlugAndPlay/PlugAndPlay'));
// const Pricing = lazy(() => import(/* webpackChunkName: "Pricing" */ '../pages/Pricing/Pricing'));
// const PrivacyPolicy = lazy(
//   () => import(/* webpackChunkName: "PrivacyPolicy" */ '../pages/PrivacyPolicy/PrivacyPolicy')
// );
// const Terms = lazy(() => import(/* webpackChunkName: "Terms" */ '../pages/Terms/Terms'));
// const News = lazy(() => import(/* webpackChunkName: "Terms" */ '../pages/News/News'));
// const NewsSingle = lazy(() => import(/* webpackChunkName: "Terms" */ '../pages/NewsSingle/NewsSingle'));

// const Blog = lazy(() => import(/* webpackChunkName: "Blog" */ '../pages/blog'));
// const BlogCreate = lazy(() => import(/* webpackChunkName: "BlogCreate" */ '../pages/blogCreatePage'));
// const Portal = lazy(() => import(/* webpackChunkName: "Portal" */ '../pages/Portal'));
// const PlatformRedirect = lazy(() => import(/* webpackChunkName: "PlatformRedirect" */ '../pages/PlatformRedirect'));
// const DigitalEmployee = lazy(() => import(/* webpackChunkName: "DigitalEmployee" */ '../pages/DigitalEmployee'));

import About from '../pages/About/About';
import BuildYourOwn from '../pages/BuildYourOwn';
import ContactUs from '../pages/ContactUs';
import HelpCenter from '../pages/HelpCenter';
import Home from '../pages/Home';
import FAQ from '../pages/FAQ';
import OAuth from '../pages/OAuth/OAuth';
import Partners from '../pages/Partners';
import PlugAndPlay from '../pages/PlugAndPlay';
import Pricing from '../pages/Pricing';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';
import News from '../pages/News';
import NewsSingle from '../pages/NewsSingle';

import Blog from '../pages/Blog';
import Portal from '../pages/Portal';
import PlatformRedirect from '../pages/PlatformRedirect';
import DigitalEmployee from '../pages/DigitalEmployee';

const PublicRoutes = () => {
  const [newSItems, setNewsItems] = useState([{ post_id: 1 }]);

  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(result => {
        setNewsItems(result);
      });
  }, []);

  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route path={UI_ROUTES.blog} component={Blog} />
        <Route exact path={UI_ROUTES.portal} component={Portal} />
        <Route path={UI_ROUTES.platformRedirect} component={PlatformRedirect} />
        <Route exact path={UI_ROUTES.plugAndPlayDE} component={DigitalEmployee} />

        <Route exact path={UI_ROUTES.about} component={About} />
        <Route exact path={UI_ROUTES.buildYourOwn} component={BuildYourOwn} />
        <Route exact path={UI_ROUTES.contactUs} component={ContactUs} />
        <Route exact path={UI_ROUTES.helpCenter} component={HelpCenter} />
        <Route exact path={UI_ROUTES.home} component={Home} />
        <Route exact path={UI_ROUTES.faq} component={FAQ} />
        <Route path={UI_ROUTES.oAuth} component={OAuth} />
        <Route exact path={UI_ROUTES.partners} component={Partners} />
        <Route exact path={UI_ROUTES.plugAndPlay} component={PlugAndPlay} />
        <Route exact path={UI_ROUTES.pricing} component={Pricing} />
        <Route exact path={UI_ROUTES.privacyPolicy} component={PrivacyPolicy} />
        <Route exact path={UI_ROUTES.terms} component={Terms} />
        <Route exact path={UI_ROUTES.news} component={News} />
        {newSItems.map(news => (
          <Route
            key={news.post_id}
            exact
            path={`${UI_ROUTES.news}/${news.post_id}`}
            component={() => <NewsSingle newSItems={news} />}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default PublicRoutes;
export { PublicRoutes };
