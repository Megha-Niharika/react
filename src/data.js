
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
      book1:"the_outsider",
      book2:"the_at_the_door",
      book3:"the_silent_patient",
      featured: true,
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


