type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Arroz Carreteiro",
    desc: "Um prato tradicional do Sul do nosso país, o Arroz Carreteiro já conquistou todas as regiões. O sabor da carne seca, bacon e calabresa, junto à cor dos pimentões vermelhos, temperados com cebola, tomate e cheiro verde, trazem uma personalidade única quando combinados à um arroz soltinho",
    img: "/temporary/ARROZ.png",
    price: 32.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Feijoada",
    desc: "É quase impossível encontrar um brasileiro que não seja apaixonado por esse prato tão típico da culinária brasileira. Combinamos os melhores ingredientes para dar um toque de sabor especial, como bacon, linguiça paio, calabresa, carne seca e lombo suíno. O feijão preto cozido no seu ponto mais macio leva folha de louro para dar aquele toque de sabor indispensável.",
    img: "/temporary/Feijoada.png",
    price: 40.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Strogonoff de Frango",
    desc: "O Strogonoff de Frango é uma versão deliciosa do tradicional prato da culinária russa. Preparado com creme de leite e especiarias que completam o sabor inconfundível dos camarões, esta receita conquista paladares aguçados.",
    img: "/temporary/Strogonoff.png",
    price: 35.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Escondidinho",
    desc: "Esse delicioso escondidinho combina batata inglesa, batata baroa e mandioca com a cremosidade do requeijão para fazer um purê que cobre a carne moída temperada cheia de sabores caseiros como cebola, tomate e cheiro verde. Uma deliciosa casquinha de queijo parmesão gratinado da o toque final à receita.",
    img: "/temporary/Escondidinho.png",
    price: 27.3,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Pastel",
    desc: "A melhor porção de pastéis crocantes e sem ar que você irá comer, venha provar não vai se arrepender!.",
    img: "/temporary/PatelV.png",
    price: 23.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Açaí",
    desc: "Temos copos prontos e Self Service para você comer a vontade.",
    img: "/temporary/Acai.png",
    price: 20.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Torta Romeu e Julietta",
    desc: "Você gosta de receita agridoce? Então tenho certeza que você vai adorar essa maravilha de torta Romeu e Julieta que tem o sabor de uma das sobremesas mais deliciosas e tradicionais do Brasil",
    img: "/temporary/romeuejulieta.jpg",
    price: 25.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Canjica",
    desc: "Canjica, como conhecida no sul e sudeste, ou mugunzá como é conhecida no norte e nordeste este preparo é feito a base de milho branco cozido com leite e açucar. Na receita da Arena Gatronômica o milho macio com o leite adoçado na medida foi preparado pensando na época mais gostosa do ano, a festa junina! ",
    img: "/temporary/ArrozDoce.png",
    price: 7.5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Churros",
    desc: "Porção de churros de diversos sabores para você se deliciar.",
    img: "/temporary/Churros.png",
    price: 15.0,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Strogonoff de Frango",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/STROGONOFF DE FRANGO.jpg",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Prato Feito",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/PRATO FEITO.jpg",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "Pratos",
    title: "Pratos",
    desc: "Menu Típico Brasileiro com comida caseira de todas as regiões do Brasil",
    img: "/temporary/prato.jpg",
    color: "blue",
  },
  {
    id: 2,
    slug: "Sobremesas",
    title: "Sobremesas",
    desc: "Sobremesas com o Toque do Brasil, mais Doce que vencer da Argentina.",
    img: "/temporary/pudim.jpg",
    color: "yellow",
  },
  {
    id: 3,
    slug: "Bebidas",
    title: "Bebidas",
    desc: "Coquetéis feitos na Hora, Refrigerante e Suco para toda Família. Vai uma bebida pro Jogo?" ,
    img: "/temporary/bebidar.png",
    color: "blue",
  },
];
