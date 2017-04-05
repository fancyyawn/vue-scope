const products = {
  'cc919e21-ae5b-5e1f-d023-c40ee669520c': {
    id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
    imageUrl: 'http://www.keaitupian.net/uploads/allimg/160820/10240C126-0.jpg',
    imageName: 'cobolbooks.jpeg',
    name: 'COBOL 101 vintage',
    description: 'Learn COBOL with this vintage programming book',
    price: 399,
  },
  'bcd755a6-9a19-94e1-0a5d-426c0303454f': {
    id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
    imageUrl: 'http://www.keaitupian.net/uploads/allimg/160820/10240A242-3.jpg',
    imageName: 'sharp_curved.jpeg',
    name: 'Sharp C2719 curved TV',
    description: 'Watch TV like never before with the brand new curved screen technology',
    price: 1995,
  },
  '67407cc1-7174-6a0d-1e22-05d5357b08c2': {
    id: '67407cc1-7174-6a0d-1e22-05d5357b08c2',
    imageUrl: 'http://www.keaitupian.net/uploads/allimg/160820/10240A254-5.jpg',
    imageName: 'lamarzocco.jpeg',
    name: 'LaMarzocco 5000',
    description: 'The LaMarzocco 5000 takes your coffee experience to a whole new level.',
    price: 7495,
  },
};


export default {
  ['GET /products/'](){
    return {
      body: { data: products},
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      delay: 2000, // millisecond
    }
  },
}