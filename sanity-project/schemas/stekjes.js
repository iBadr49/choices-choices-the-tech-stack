// schemas/stekje.js
export default {
  name: 'stekjes',
  type: 'document',
  title: 'Stekjes',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Hiermee kun je het focuspunt voor de afbeelding instellen
      }
    }
  ]
};
  