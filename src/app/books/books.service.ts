import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name:'attitude is everything',
        author: 'jeff keller',
        image: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 700,
      },
  
      {
        name:'The Power of Your Subconscious Mind',
        author: 'Joseph Murphy',
        image: 'https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800,
      },
      
      {
        name:'The Everyday Hero Manifesto',
        author: ' Robin Sharma',
        image: 'https://m.media-amazon.com/images/I/81-XmZm67vS._AC_UY327_FMwebp_QL65_.jpg',
        amount: 269,
      },
      
      {
        name:'The Power of Your Subconscious Mind',
        author: 'Joseph Murphy',
        image: 'https://m.media-amazon.com/images/I/51DlDekQ5-L._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800,
      },
      
      {
        name:'The Psychology of Money',
        author: 'Morgan Housel',
        image: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 270,
      },
      
      {
        name:'Atomic Habits: The life-changing',
        author: ' James Clear',
        image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 295,
      },
      
      {
        name:'Ikigai: The Japanese secret to a long and happy life',
        author: 'Héctor García and Francesc Miralles',
        image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 300,
      },
      
      {
        name:'The Alchemist',
        author: 'Paulo Coelho',
        image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 240,
      },
      
      {
        name:'You Can',
        author: 'George Matthew Adams',
        image: 'https://m.media-amazon.com/images/I/813uPMOnskL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 100,
      },
      
      {
        name:"Man's Search For Meaning",
        author: 'Viktor E Frankl',
        image: 'https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 195,
      },
      
      {
        name:'Learning How to Fly: Life Lessons for the Youth',
        author: 'A.P.J. Abdul Kalam',
        image: 'https://m.media-amazon.com/images/I/61xPDmYV7SL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 150,
      },
  
    ]
  }



}
