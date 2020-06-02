
import young from "./images/room-8.jpeg";
import fantacy from "./images/room-13.jpeg";
import fiction from "./images/room-14.jpeg";
import bio from "./images/room-15.jpeg";
import horror from "./images/room-16.jpeg";
import mystery from "./images/room-17.jpeg";
import fic1 from "./images/fiction-1.jpeg";
import fic2 from "./images/fiction-2.jpeg";
import fic3 from "./images/fiction-3.jpeg";
import bio1 from "./images/bio-1.jpeg";
import bio2 from "./images/bio-2.jpeg";
import bio3 from "./images/bio-3.jpeg";

import hrr1 from "./images/horror-1.jpeg";
import hrr2 from "./images/horror-2.jpeg";
import hrr3 from "./images/horror-3.jpeg";

import mys1 from "./images/mystery-1.jpeg";
import mys2 from "./images/mystery-2.jpeg";
import mys3 from "./images/mystery-3.jpeg";

import fan1 from "./images/fan-1.jpeg";
import fan2 from "./images/fan-2.jpeg";
import fan3 from "./images/fan-3.jpeg";

import yng1 from "./images/young-1.jpeg";
import yng2 from "./images/young-2.jpeg";
import yng3 from "./images/young-3.jpeg";



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "fiction",
      slug: "fiction",
      type: "fiction",
      featured: true,
      books :[ {
        book:1,
        name: "An Orphan's War",
        description: "War rages, but the women and children of Liverpool’s Dr Barnado’s Home cannot give up hope. An Orphan’s War is a gripping saga about love and loss on the Home Front. ",
        url:fic1
      },
      {
        book:2,
        name: "Pride and Prejudice ",
        description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work her own darling child and its vivacious heroine, Elizabeth Bennet, as delightful a creature as ever appeared in print. The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England. ",
        url:fic2
      },
      { 
        book:3,
        name: "The Age of Light ",
        description: "She went to Paris to start over, to make art instead of being made into it A captivating debut novel by Whitney Scharer, The Age of Light tells the story of Vogue model turned renowned photographer Lee Miller, and her search to forge a new identity as an artist after a life spent as a muse. ",
        url:fic3
      }
    ],

      images: [
        {
          fields: {
            file: {
              url: fiction
            }
          }
        },
        {
          fields: {
            file: {
              url: fic1
            }
          }
        },
        {
          fields: {
            file: {
              url: fic2
            }
          }
        },
        {
          fields: {
            file: {
              url: fic3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "biography",
      slug: "biography",
      type: "biography",
      featured: true,
      books :[ {
        book:1,
        name: "Gandhi: An autobiography ",
        description: "Mohandas K. Gandhi is one of the most inspiring figures of our time. In his classic autobiography he recounts the story of his life and how he developed his concept of active nonviolent resistance, which propelled the Indian struggle for independence and countless other nonviolent struggles of the twentieth century.",
        url:bio1
      },
      {
        book:2,
        name: "Wings of Fire: An Autobiography ",
        description: "Avul Pakir Jainulabdeen Abdul Kalam, the son of a little-educated boat-owner in Rameswaram, Tamil Nadu, had an unparalleled career as a defence scientist, culminating in the highest civilian award of India, the Bharat Ratna. As chief of the country's defence research and development programme, Kalam demonstrated the great potential for dynamism and innovation that existed in seemingly moribund research establishments",
        url:bio2
      },
      {
        book:3,
        name: "Steve Jobs ",
        description: "From the author of the bestselling biographies of Benjamin Franklin and Albert Einstein, this is the exclusive, New York Times bestselling biography of Apple co-founder Steve Jobs",
        url:bio3
      }
    ],
      images: [
        {
          fields: {
            file: {
              url: bio
            }
          }
        },
        {
          fields: {
            file: {
              url: bio1
            }
          }
        },
        {
          fields: {
            file: {
              url: bio2
            }
          }
        },
        {
          fields: {
            file: {
              url: bio3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "horror",
      slug: "horror",
      type: "horror",
      featured: true,
      books :[ {
        book:1,
        name: "Naomi's Room ",
        description: "Charles and Laura are a young, happily married couple inhabiting the privileged world of Cambridge academia. Brimming with excitement, Charles sets off with his daughter Naomi on a Christmas Eve shopping trip to London.",
        url:hrr1
      },
      {
        book:2,
        name: "It ",
        description: "Welcome to Derry, Maine It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ",
        url:hrr2
      },
      {
        book:3,
        name: "Dracula",
        description: "A rich selection of background and source materials is provided in three areas: Contexts includes probable inspirations for Dracula in the earlier works of James Malcolm Rymer and Emily Gerard.",
        url:hrr3
      }
    ],
      images: [
        {
          fields: {
            file: {
              url: horror
            }
          }
        },
        {
          fields: {
            file: {
              url: hrr1
            }
          }
        },
        {
          fields: {
            file: {
              url: hrr2
            }
          }
        },
        {
          fields: {
            file: {
              url: hrr3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "mystery",
      slug: "mystery",
      type: "mystery",
      featured: true,
      books :[ {
        book:1,
        name: "The Outsider",
        description: "An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger, he has delivered one of his most unsettling and compulsively readable stories",
        url:mys1
      },
      {
        book:2,
        name: "The Boy at the Door",
        description: "This riveting psychological suspense debut by Alex Dahl asks the question, how far would you go to hold on to what you have? ",
        url:mys2
      },
      {
        book:3,
        name: "The Silent Patient ",
        description: "Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. ",
        url:mys3
      }
    ],
      images: [
        {
          fields: {
            file: {
              url: mystery
            }
          }
        },
        {
          fields: {
            file: {
              url: mys1
            }
          }
        },
        {
          fields: {
            file: {
              url: mys2
            }
          }
        },
        {
          fields: {
            file: {
              url: mys3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "fantasy",
      slug: "fantasy",
      type: "fantasy",
      featured: true,
      books :[ {
        book:1,
        name: "The Lord of the Rings ",
        description: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others.",
        url:fan1
      },
      {
        book:2,
        name: "A Curse So Dark and Lonely ",
        description: "Cursed by a powerful enchantress to repeat the autumn of his eighteenth year, Prince Rhen, the heir of Emberfall, thought he could be saved easily if a girl fell for him.",
        url:fan2
      },
      {
        book:3,
        name: "Harry Potter and the Goblet of Fire ",
        description: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys.",
        url:fan3
      }
    ],
      images: [
        {
          fields: {
            file: {
              url: fantacy
            }
          }
        },
        {
          fields: {
            file: {
              url: fan1
            }
          }
        },
        {
          fields: {
            file: {
              url: fan2
            }
          }
        },
        {
          fields: {
            file: {
              url: fan3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "young Adult",
      slug: "young-Adult",
      type: "young-Adult",
      featured: true,
      books :[ {
        book:1,
        name: "Fangirl",
        description: "Cath’s sister has mostly grown away from fandom, but Cath can’t let go. She doesn’t want to. ",
        url:yng1
      },
      {
        book:2,
        name: "One Indian Girl ",
        description: "Hi, I'm Radhika Mehta and I'm getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you.",
        url:yng2
      },
      {
        book:3,
        name: "Revolution 2020: Love, Corruption, Ambition ",
        description: "Book Summary of Revolution 2020 Once upon a time, in small-town India, there lived two intelligent boys. One wanted to use his intelligence to make money. One wanted to use his intelligence to create a revolution. The problem was, they both loved the same girl. Welcome to Revolution 2020.",
        url:yng3
      }
    ],
      images: [
        {
          fields: {
            file: {
              url: young
            }
          }
        },
        {
          fields: {
            file: {
              url: yng1
            }
          }
        },
        {
          fields: {
            file: {
              url: yng2
            }
          }
        },
        {
          fields: {
            file: {
              url: yng3
            }
          }
        }
      ]
    }
  },

];


