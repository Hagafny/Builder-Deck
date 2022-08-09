import React from 'react';
import { Image } from 'mdx-deck';

import ron from '../images/ron.png';
import bottle from '../images/bottleneck2.png';
import openBottle from '../images/openBottle.png';
import devDep from '../images/depDependencies.png';
import easyplant from '../images/easyplant.png';
import mixtiles from '../images/mixtiles.png';
import homepage from '../images/homepage.png';
import collections from '../images/collections.png';
import faq from '../images/faq.png';
import designSystem from '../images/designSystem.png';
import muiButton from '../images/muiButton.png';
import componentsOnlyMode from '../images/com.png';
import builder from '../images/builder.png';
import nextJS from '../images/nextjs.png';
import builder1 from '../images/builder1.png';
import builder2 from '../images/builder2.png';
import seo from '../images/seo.png';
import rocket from '../images/rocket.png';
import faqEnd1 from '../images/faq_end_1.png';
import faqEnd2 from '../images/faq_end_2.png';
import faqEnd3 from '../images/faq_end_3.png';
import developers from '../images/developers.png';
import marketing from '../images/marketing.png';
import product from '../images/product.png';
import design from '../images/design.png';
import twitter from '../images/twitter.png';
import pot from '../images/pot.png';
import whatIf from '../images/whatIf.jpeg';
import kawaii from '../images/kawaii.png';

export const DECK_IMAGES = {
  RON: 'ron.png',
  BOTTLE: 'bottleneck2.png',
  OPEN_BOTTLE: 'openBottle.png',
  DEV_DEPENDNECIES: 'devDependencies.png',
  EASYPLANT: 'easyplant.png',
  MIXTILES: 'mixtiles.png',
  HOMEPAGE: 'homepage.png',
  COLLECTIONS: 'collections.png',
  FAQ: 'faq.png',
  DESIGN_SYSTEM: 'designSystem.png',
  MUI_BUTTON: 'muiButton.png',
  COMPONENTS_ONLY_MODE: 'com.png',
  BUILDER: 'builder.png',
  NEXT_JS: 'nextjs.png',
  BUILDER_1: 'builder1.png',
  BUILDER_2: 'builder2.png',
  ROCKET: 'rocket.png',
  SEO: 'seo.png',
  FAQ_END_1: 'faq_end_1.png',
  FAQ_END_2: 'faq_end_2.png',
  FAQ_END_3: 'faq_end_3.png',
  DEVELOPERS: 'developers.png',
  MARKETING: 'marketing.png',
  PRODUCT: 'product.png',
  DESIGN: 'design.png',
  TWITTER: 'twitter.png',
  POT: '../images/pot.png',
  WHAT_IF: '../whatIf.jpeg',
  KAWAII: 'kawaii.png'
};

const IMAGES = {
  [DECK_IMAGES.RON]: ron,
  [DECK_IMAGES.BOTTLE]: bottle,
  [DECK_IMAGES.DEV_DEPENDNECIES]: devDep,
  [DECK_IMAGES.EASYPLANT]: easyplant,
  [DECK_IMAGES.MIXTILES]: mixtiles,
  [DECK_IMAGES.HOMEPAGE]: homepage,
  [DECK_IMAGES.COLLECTIONS]: collections,
  [DECK_IMAGES.FAQ]: faq,
  [DECK_IMAGES.DESIGN_SYSTEM]: designSystem,
  [DECK_IMAGES.MUI_BUTTON]: muiButton,
  [DECK_IMAGES.COMPONENTS_ONLY_MODE]: componentsOnlyMode,
  [DECK_IMAGES.BUILDER]: builder,
  [DECK_IMAGES.NEXT_JS]: nextJS,
  [DECK_IMAGES.BUILDER_1]: builder1,
  [DECK_IMAGES.BUILDER_2]: builder2,
  [DECK_IMAGES.ROCKET]: rocket,
  [DECK_IMAGES.SEO]: seo,
  [DECK_IMAGES.FAQ_END_1]: faqEnd1,
  [DECK_IMAGES.FAQ_END_2]: faqEnd2,
  [DECK_IMAGES.FAQ_END_3]: faqEnd3,
  [DECK_IMAGES.OPEN_BOTTLE]: openBottle,
  [DECK_IMAGES.DEVELOPERS]: developers,
  [DECK_IMAGES.MARKETING]: marketing,
  [DECK_IMAGES.PRODUCT]: product,
  [DECK_IMAGES.DESIGN]: design,
  [DECK_IMAGES.TWITTER]: twitter,
  [DECK_IMAGES.POT]: pot,
  [DECK_IMAGES.WHAT_IF]: whatIf,
  [DECK_IMAGES.KAWAII]: kawaii
};

export const ImageDeck = ({ deckImage, width, height, style = {} }) => {
  return (
    <Image
      src={IMAGES[deckImage]}
      width={width}
      height={height}
      style={{ backgroundSize: 'contain', ...style }}
    />
  );
};
