import type { Attribute, Schema } from '@strapi/strapi';

export interface PersonPerson extends Schema.Component {
  collectionName: 'components_person_people';
  info: {
    displayName: 'Person';
    icon: 'user';
  };
  attributes: {
    email: Attribute.Email;
    name: Attribute.String;
  };
}

export interface ResponseResponse extends Schema.Component {
  collectionName: 'components_response_responses';
  info: {
    description: '';
    displayName: 'Response';
    icon: 'check';
  };
  attributes: {
    response: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'person.person': PersonPerson;
      'response.response': ResponseResponse;
    }
  }
}
