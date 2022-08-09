import { Builder } from '@builder.io/react';
import { KawaiiWrapper } from './KawaiiWrapper';

Builder.registerComponent(KawaiiWrapper, {
  name: 'Kawaii',
  image: 'https://cdn-icons-png.flaticon.com/512/1054/1054436.png',
  inputs: [
    {
      name: 'character',
      type: 'enum',
      required: true,
      enum: ['Chocolate', 'Backpack', 'Ice Cream'],
      defaultValue: 'Chocolate',
    },
    {
      name: 'mood',
      type: 'string',
      required: true,
      enum: ['Blissful', 'Shocked', 'Love Struck'],
      defaultValue: 'Blissful',
    },
    {
      name: 'color',
      type: 'color',
      required: true,
      defaultValue: '#fc105c',
    },
  ],
})
