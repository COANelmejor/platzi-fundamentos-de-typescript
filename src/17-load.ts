// Before run this file, you need to install lodash and @types/lodash
// npm i --save-dev @types/lodash
// This will help you to get the type of the lodash functions

import _ from 'lodash';

const data = [
  {
    username: 'admin.name',
    role    : 'admin',
  },
  {
    username: 'user.name',
    role    : 'user',
  },
  {
    username: 'guest.name',
    role    : 'guest',
  },
  {
    username: 'customer.name',
    role    : 'customer',
  },
  {
    username: 'customer2.name',
    role    : 'customer',
  },
  {
    username: 'customer3.name',
    role    : 'guest',
  },
];

const result = _.groupBy(data, (item) => item.role);

console.log(result);
