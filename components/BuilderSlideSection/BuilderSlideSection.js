import React, { useState, useEffect } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

import config from '../../config';

builder.init(config.BUILDER_API_KEY);

export const BuilderSlideSection = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);

  useEffect(() => {
    builder
      .get('slide', { url: window.location.pathname })
      .promise()
      .then(setBuilderContentJson);
  }, []);

  return <BuilderComponent model='slide' content={builderContentJson} />;
};
