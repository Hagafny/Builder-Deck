import { Builder } from '@builder.io/react';
import { Fireworks }  from './Fireworks';

Builder.registerComponent(Fireworks, {
  name: 'Fireworks',
  image: 'https://cdn-icons-png.flaticon.com/512/1054/1054436.png',
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
            { color: '#41342d' },
            { color: '#375437' },
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

