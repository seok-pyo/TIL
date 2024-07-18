interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

interface Ud2 {
  // id?: number;
  // name?: string;
  // dname?: string;
  // captain?: string;

  [i: string]: string | number;

  addr: string;
}

const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };
