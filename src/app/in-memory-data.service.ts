import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      {
        id: 1,
        name: 'Mario Granada',
        age: 28,
        username: 'mariograf1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Colombia',
        status: true,
        area: 'Services',
        tipRate: 0
      },
      {
        id: 2,
        name: 'Jose Villareal',
        age: 28,
        username: 'josef1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Alemania',
        status: true,
        area: 'Services',
        tipRate: 0
      },
      {
        id: 3,
        name: 'Javier Paternina',
        age: 28,
        username: 'javierf1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Colombia',
        status: true,
        area: 'Serbia',
        tipRate: 0
      },
      {
        id: 4,
        name: 'Nacho Fontalvo',
        age: 28,
        username: 'nachof1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Inglaterra',
        status: true,
        area: 'Kitchen',
        tipRate: 0
      },
      {
        id: 5,
        name: 'Felipe Valencia',
        age: 28,
        username: 'felipef1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Francia',
        status: true,
        area: 'Services',
        tipRate: 0
      },
      {
        id: 6,
        name: 'Johan Pelaez',
        age: 28,
        username: 'johanf1',
        hireDate: new Date(Date.now()),
        jobTitle: 'front end developer',
        dateOfBirthday: new Date(Date.now()),
        country: 'Rusia',
        status: true,
        area: 'Kitchen',
        tipRate: 0
      }
    ];
    return { employees };
  }
}
