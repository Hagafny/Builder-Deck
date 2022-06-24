import { Builder } from '@builder.io/react';
import { Fireworks }  from './Fireworks';

Builder.registerComponent(Fireworks, {
  name: 'Fireworks',
  inputs: [
    {
      name: 'text',
      type: 'string',
      required: true,
      defaultValue: 'Some text...',
    },
    {
      name: 'count',
      type: 'number',
      required: true,
      defaultValue: '3',
    },
    {
        name: "colors",
        type: "list",
        defaultValue: [
            { color: '#cc3333' },
            { color: '#4CAF50' },
            { color: '#81C784' }
        ],
        subFields: [{ name: "color", type: "color" }]
      },

    {
        name: 'interval',
        type: 'number',
        required: true,
        defaultValue: 500,
      }  
  ],
});

