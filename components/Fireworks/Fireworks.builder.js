import { Builder } from '@builder.io/react';
import { Fireworks }  from './Fireworks';

Builder.registerComponent(Fireworks, {
  name: 'Fireworks',
  image: 'https://cdn-icons.flaticon.com/png/512/2963/premium/2963356.png?token=exp=1656099867~hmac=33a11d1dbb5cf474916d774c61fe5c00',
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

