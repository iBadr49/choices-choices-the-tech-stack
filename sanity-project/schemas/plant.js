export default {
    name: 'plant',
    type: 'document',
    title: 'Plant',
    fields: [
      {
        name: 'naam',
        title: 'Naam',
        type: 'string'
      },
      {
        name: 'beschrijving',
        title: 'Beschrijving',
        type: 'text'
      },
      {
        name: 'fotos',
        title: 'Foto\'s',
        type: 'image',
        },
      {
        name: 'aanmelddatum',
        title: 'Aanmelddatum',
        type: 'date'
      },
      {
        name: 'landvanherkomst',
        title: 'Land van Herkomst',
        type: 'string'
      },
      {
        name: 'voeding',
        title: 'Voeding',
        type: 'text'
      },
      {
        name: 'verpotten',
        title: 'Verpotten',
        type: 'text'
      },
      {
        name: 'giftig',
        title: 'Giftig',
        type: 'text'
      },
      {
        name: 'temperatuur',
        title: 'Temperatuur',
        type: 'text'
      },
      {
        name: 'zonlicht',
        title: 'Zonlicht',
        type: 'text'
      },
      {
        name: 'watergeven',
        title: 'Watergeven',
        type: 'text'
      },
      {
        name: 'stekken',
        title: 'Stekken',
        type: 'text'
      }
    ]
  }
  