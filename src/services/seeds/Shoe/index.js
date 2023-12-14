const { Shoe } = require('../../../db')
const getShoeBrand = require('../../../handlers/ShoeBrand/getShoeBrand')
const getShoeCategory = require('../../../handlers/ShoeCategory/getShoeCategory')
const getShoeColor = require('../../../handlers/ShoeColor/getShoeColor')
const getShoeGender = require('../../../handlers/ShoeGender/getShoeGender')
const getShoeMaterial = require('../../../handlers/ShoeMaterial/getShoeMaterial')
const getShoeSize = require('../../../handlers/ShoeSize/getShoeSize')

const data = [
    {
        name: 'Nike Air Zoom',
        description: 'Zapatillas deportivas Nike Air Zoom, diseñadas para brindar comodidad y rendimiento durante tus entrenamientos. Su tecnología de amortiguación ofrece soporte mientras corres o entrenas intensamente.',
        price: 540.28,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '42'
    },
    {
        name: 'Nike Flex Run',
        description: 'Zapatillas Nike Flex Run perfectas para corredores que buscan ligereza y flexibilidad. Su diseño ergonómico se adapta a tu pie, ofreciendo una experiencia de carrera cómoda y estable.',
        price: 189.75,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        category: null,
        color: 'azul claro',
        gender: 'Femenino',
        material: 'lona',
        size: '38'
    },
    {
        name: 'Nike Air Max',
        description: 'Zapatillas icónicas Nike Air Max con un estilo moderno y elegante. La combinación de materiales de alta calidad ofrece durabilidad y confort, perfectas para el uso diario.',
        price: 789.41,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        category: null,
        color: 'rojo',
        gender: 'Masculino',
        material: 'cuero',
        size: '44'
    },
    {
        name: 'Adidas Ultraboost',
        description: 'Zapatillas Adidas Ultraboost diseñadas para ofrecer una combinación perfecta de comodidad y estilo. Su amortiguación reactiva y su diseño moderno las convierten en el complemento ideal para tu día a día.',
        price: 322.06,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'tela',
        size: '40'
    },
    {
        name: 'Adidas Superstar',
        description: 'Zapatillas clásicas Adidas Superstar que combinan el estilo retro con la comodidad moderna. Ideales para cualquier ocasión, su diseño icónico y su durabilidad las convierten en un must-have.',
        price: 625.13,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '38'
    },
    {
        name: 'Adidas Gazelle',
        description: 'Zapatillas de estilo vintage Adidas Gazelle que combinan la moda retro con la comodidad actual. Su diseño clásico y su construcción duradera las hacen perfectas para un look casual.',
        price: 418.89,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '42'
    },
    {
        name: 'Puma RS-X',
        description: 'Zapatillas Puma RS-X que combinan estilo y comodidad para un look urbano. Su diseño innovador y su amortiguación superior las hacen ideales para un uso diario.',
        price: 151.64,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        category: null,
        color: 'rojo',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'Puma Suede Classic',
        description: 'Zapatillas clásicas Puma Suede con un toque retro y una construcción duradera. Perfectas para cualquier ocasión, su estilo atemporal las hace indispensables en tu armario.',
        price: 872.12,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41'
    },
    {
        name: 'Puma Cell Venom',
        description: 'Zapatillas Puma Cell Venom inspiradas en el diseño de los años 90, ofrecen un estilo retro y una comodidad excepcional. Su construcción robusta garantiza durabilidad.',
        price: 483.97,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '43'
    },
    {
        name: 'Reebok Classic Leather',
        description: 'Zapatillas icónicas Reebok Classic Leather que combinan estilo y comodidad. Su diseño atemporal y su construcción de alta calidad las convierten en un elemento esencial para cualquier colección de calzado.',
        price: 246.80,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40'
    },
    {
        name: 'Reebok Nano X',
        description: 'Zapatillas Reebok Nano X diseñadas para ofrecer rendimiento y durabilidad durante entrenamientos intensivos. Su tecnología de soporte y tracción las convierte en la elección perfecta para actividades deportivas.',
        price: 594.37,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '42'
    },
    {
        name: 'Reebok Club C 85',
        description: 'Zapatillas clásicas Reebok Club C 85 que ofrecen estilo retro y comodidad excepcional. Perfectas para uso diario, su diseño versátil se adapta a cualquier ocasión.',
        price: 716.50,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41'
    },
    {
        name: 'Converse Chuck Taylor All Star',
        description: 'Zapatillas clásicas Converse Chuck Taylor All Star, un ícono de estilo que combina comodidad y versatilidad. Su diseño atemporal las hace ideales para cualquier ocasión.',
        price: 102.43,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '39'
    },
    {
        name: 'Converse Jack Purcell',
        description: 'Zapatillas Converse Jack Purcell, conocidas por su elegancia y comodidad. Su diseño minimalista y su construcción duradera las hacen perfectas para un look casual.',
        price: 898.18,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40'
    },
    {
        name: 'Converse One Star',
        description: 'Zapatillas Converse One Star con un toque moderno y retro al mismo tiempo. Su estilo único y su comodidad las hacen perfectas para expresar tu individualidad.',
        price: 419.76,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        category: null,
        color: 'rojo',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41'
    },
    {
        name: 'Vans Old Skool',
        description: 'Zapatillas clásicas Vans Old Skool que combinan estilo y durabilidad. Su diseño icónico las hace perfectas para cualquier ocasión casual.',
        price: 577.91,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '38'
    },
    {
        name: 'Vans Authentic',
        description: 'Zapatillas Vans Authentic reconocidas por su simplicidad y comodidad. Su diseño versátil las convierte en el complemento ideal para cualquier estilo.',
        price: 311.25,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'lona',
        size: '40'
    },
    {
        name: 'Vans Slip-On',
        description: 'Zapatillas Vans Slip-On que combinan estilo urbano y facilidad de uso. Su diseño sin cordones y su comodidad las hacen perfectas para un uso diario.',
        price: 939.83,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '42'
    },
    {
        name: 'New Balance 574',
        description: 'Zapatillas New Balance 574 que combinan estilo retro y comodidad moderna. Su diseño clásico y su amortiguación superior las convierten en un elemento esencial para cualquier outfit casual.',
        price: 188.06,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        category: null,
        color: 'gris',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'New Balance Fresh Foam',
        description: 'Zapatillas New Balance Fresh Foam diseñadas para ofrecer una experiencia de carrera cómoda y estable. Su amortiguación reactiva brinda soporte durante tus actividades deportivas.',
        price: 673.94,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '40'
    },
    {
        name: 'New Balance 990v5',
        description: 'Zapatillas New Balance 990v5 conocidas por su durabilidad y confort. Su diseño clásico y su construcción de alta calidad las hacen ideales para un uso diario.',
        price: 155.21,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '41'
    },
    {
        name: 'Under Armour HOVR Phantom',
        description: 'Zapatillas Under Armour HOVR Phantom diseñadas para ofrecer comodidad y rendimiento. Su tecnología de amortiguación y su ajuste preciso las hacen ideales para correr o entrenar.',
        price: 828.65,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Under Armour Charged Assert 8',
        description: 'Zapatillas Under Armour Charged Assert 8 con un diseño versátil y una amortiguación cómoda. Perfectas para el uso diario y actividades deportivas.',
        price: 463.09,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'malla',
        size: '42'
    },
    {
        name: 'Under Armour Street Encounter',
        description: 'Zapatillas informales Under Armour Street Encounter ideales para un estilo casual y confort. Su diseño ligero y transpirable las hace perfectas para el día a día.',
        price: 796.72,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        category: null,
        color: 'gris',
        gender: 'Unisex',
        material: 'lona',
        size: '41'
    },
    {
        name: "Skechers D'Lites",
        description: "Zapatillas Skechers D'Lites que combinan estilo y comodidad. Su diseño moderno y ligero las hace ideales para un uso diario con un toque de moda.",
        price: 129.60,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'Skechers GOwalk Evolution',
        description: 'Zapatillas Skechers GOwalk Evolution conocidas por su comodidad y ligereza. Su diseño ergonómico las convierte en la opción perfecta para largas caminatas o uso diario.',
        price: 732.84,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'malla',
        size: '40'
    },
    {
        name: 'Skechers Energy',
        description: 'Zapatillas Skechers Energy con un estilo retro y una comodidad excepcional. Ideales para un look casual, ofrecen confort durante todo el día.',
        price: 398.52,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'cuero',
        size: '41'
    },
    {
        name: 'Fila Disruptor II',
        description: 'Zapatillas Fila Disruptor II reconocidas por su estilo audaz y comodidad. Su diseño llamativo las convierte en un elemento destacado para cualquier outfit urbano.',
        price: 217.10,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'Fila Ray Tracer',
        description: 'Zapatillas Fila Ray Tracer con un estilo retro y una construcción duradera. Perfectas para uso diario, ofrecen comodidad y un toque de moda.',
        price: 541.87,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '40'
    },
    {
        name: 'Fila Mindblower',
        description: 'Zapatillas Fila Mindblower que combinan estilo y personalidad. Su diseño único y su comodidad las hacen ideales para destacar en cualquier ocasión.',
        price: 901.59,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        category: null,
        color: 'rojo',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'DC Shoes Kalis S',
        description: 'Zapatillas DC Shoes Kalis S con un estilo skate moderno y durabilidad excepcional. Su diseño técnico las hace ideales para patinar o para un look urbano.',
        price: 475.39,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '39'
    },
    {
        name: 'DC Shoes Court Graffik',
        description: 'Zapatillas DC Shoes Court Graffik con un diseño clásico y confort superior. Perfectas para un uso diario con estilo y comodidad.',
        price: 290.92,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'DC Shoes Trase TX',
        description: 'Zapatillas DC Shoes Trase TX con un diseño sencillo y ligero. Ideales para un look casual y ofrecen comodidad durante todo el día.',
        price: 644.77,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'ASICS Gel-Kayano 28',
        description: 'Zapatillas ASICS Gel-Kayano 28 diseñadas para ofrecer estabilidad y comodidad durante la carrera. Su tecnología de amortiguación y sujeción las hacen ideales para corredores.',
        price: 594.89,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'ASICS Gel-Lyte III',
        description: 'Zapatillas clásicas ASICS Gel-Lyte III con un diseño retro y comodidad excepcional. Perfectas para uso diario o para completar un outfit casual.',
        price: 110.75,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40'
    },
    {
        name: 'ASICS Gel-Nimbus 24',
        description: 'Zapatillas ASICS Gel-Nimbus 24 con una amortiguación superior y ajuste cómodo. Ideales para corredores que buscan comodidad durante largas distancias.',
        price: 849.29,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'malla',
        size: '41'
    },
    {
        name: 'Lacoste Lerond',
        description: 'Zapatillas Lacoste Lerond con un estilo clásico y elegante. Su diseño minimalista las hace perfectas para un look casual y cómodo.',
        price: 701.65,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39'
    },
    {
        name: 'Lacoste Carnaby Evo',
        description: 'Zapatillas Lacoste Carnaby Evo con un toque deportivo y un diseño versátil. Ideales para uso diario, ofrecen estilo y confort.',
        price: 239.47,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Lacoste Masters Cup',
        description: 'Zapatillas Lacoste Masters Cup con un diseño retro y una construcción duradera. Perfectas para un look vintage y comodidad durante todo el día.',
        price: 915.14,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'Salomon Speedcross 5',
        description: 'Zapatillas Salomon Speedcross 5 diseñadas para el trail running. Ofrecen agarre y estabilidad en terrenos difíciles, ideales para corredores aventureros.',
        price: 612.34,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'Salomon XA Pro 3D',
        description: 'Zapatillas Salomon XA Pro 3D versátiles y duraderas. Ideales para actividades outdoor, ofrecen protección y rendimiento en terrenos variados.',
        price: 331.90,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '40'
    },
    {
        name: 'Salomon Sense Ride',
        description: 'Zapatillas Salomon Sense Ride con una combinación de comodidad y agarre para correr en senderos. Su diseño ligero y transpirable las hace ideales para aventuras al aire libre.',
        price: 779.45,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        category: null,
        color: 'gris',
        gender: 'Unisex',
        material: 'malla',
        size: '41'
    },
    {
        name: 'Timberland 6-Inch Premium Boot',
        description: 'Botas Timberland 6-Inch Premium Boot, duraderas y resistentes al agua. Ideales para aventuras al aire libre o para un estilo urbano resistente.',
        price: 699.18,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        category: null,
        color: 'marrón',
        gender: 'Unisex',
        material: 'cuero',
        size: '39'
    },
    {
        name: 'Timberland Bradstreet Chukka',
        description: 'Botas Timberland Bradstreet Chukka con un diseño elegante y comodidad excepcional. Perfectas para un uso diario con estilo y durabilidad.',
        price: 196.80,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Timberland Earthkeepers Originals',
        description: 'Botas Timberland Earthkeepers Originals, respetuosas con el medio ambiente y con estilo. Perfectas para un look casual con conciencia ecológica.',
        price: 888.23,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        category: null,
        color: 'verde',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'Botas de Senderismo Vibram Summit',
        description: 'Botas de senderismo robustas con suela Vibram resistente y tracción superior. Ideales para terrenos difíciles y largas caminatas en la montaña.',
        price: 413.72,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        category: null,
        color: 'gris',
        gender: 'Unisex',
        material: 'cuero',
        size: '40'
    },
    {
        name: 'Zapatillas de Trail Running Vibram TrailBlaze',
        description: 'Zapatillas de trail running con suela Vibram de agarre excepcional y amortiguación reactiva. Diseñadas para correr en terrenos variados y condiciones adversas.',
        price: 563.00,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39'
    },
    {
        name: 'Calzado Urbano Vibram CityStride',
        description: 'Zapatos urbanos de estilo moderno con suela Vibram que ofrece durabilidad y tracción. Perfectos para un look casual en entornos urbanos.',
        price: 358.26,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'Mizuno Wave Rider',
        description: 'Zapatillas Mizuno Wave Rider con una combinación perfecta de amortiguación y ligereza. Diseñadas para corredores que buscan comodidad y rendimiento.',
        price: 980.47,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'malla',
        size: '39'
    },
    {
        name: 'Mizuno Wave Inspire',
        description: 'Zapatillas Mizuno Wave Inspire con soporte y estabilidad superiores. Ideales para corredores que necesitan control de pronación y comodidad duradera.',
        price: 673.15,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        category: null,
        color: 'gris',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Mizuno Wave Sky',
        description: 'Zapatillas Mizuno Wave Sky con una sensación de suavidad y amortiguación excepcionales. Perfectas para corredores que buscan comodidad y rendimiento en largas distancias.',
        price: 415.60,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '41'
    },
    {
        name: 'Onitsuka Tiger Mexico 66',
        description: 'Zapatillas clásicas Onitsuka Tiger Mexico 66 con un diseño retro y elegante. Ideales para un estilo casual con un toque vintage.',
        price: 780.80,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39'
    },
    {
        name: 'Onitsuka Tiger Ultimate 81',
        description: 'Zapatillas Onitsuka Tiger Ultimate 81 con un diseño deportivo y ligero. Perfectas para uso diario con comodidad y estilo.',
        price: 227.91,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Onitsuka Tiger Serrano',
        description: 'Zapatillas Onitsuka Tiger Serrano inspiradas en el diseño retro para un estilo único. Ideales para un look casual con un toque de moda.',
        price: 851.70,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    },
    {
        name: 'Le Coq Sportif Arthur Ashe',
        description: 'Zapatillas Le Coq Sportif Arthur Ashe con un diseño clásico y elegante. Ideales para un look retro con comodidad y estilo.',
        price: 167.38,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        category: null,
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39'
    },
    {
        name: 'Le Coq Sportif Omega X',
        description: 'Zapatillas Le Coq Sportif Omega X con un diseño urbano y deportivo. Perfectas para uso diario con una combinación de estilo y comodidad.',
        price: 597.84,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        category: null,
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40'
    },
    {
        name: 'Le Coq Sportif LCS R Pure',
        description: 'Zapatillas Le Coq Sportif LCS R Pure con un diseño moderno y ligero. Ideales para un look casual y confort durante todo el día.',
        price: 444.29,
        image: null,
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        category: null,
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '41'
    }
]

module.exports = async () => {
    try {
        const [
            brandData,
            categoryData,
            colorData,
            genderData,
            materialData,
            sizeData
        ] = await Promise.all([
            getShoeBrand(),
            getShoeCategory(),
            getShoeColor(),
            getShoeGender(),
            getShoeMaterial(),
            getShoeSize()
        ])

        // Insertar los usuarios si no existen
        await Promise.all(data.map(async (shoe) => {
            const brandId = brandData.find(({ brand }) => brand === shoe.brand)?.id || null
            const categoryId = categoryData.find(({ category }) => category === shoe.category)?.id || null
            const colorId = colorData.find(({ color }) => color === shoe.color)?.id || null
            const genderId = genderData.find(({ gender }) => gender === shoe.gender)?.id || null
            const materialId = materialData.find(({ material }) => material === shoe.material)?.id || null
            const sizeId = sizeData.find(({ size }) => size === shoe.size)?.id || null

            await Shoe.findOrCreate({
                where: {
                    name: shoe.name
                },
                defaults: {
                    description: shoe.description,
                    price: shoe.price,
                    image: shoe.image,
                    stock: shoe.stock,
                    discountPercentage: shoe.discountPercentage,
                    brandId,
                    colorId,
                    genderId,
                    materialId,
                    sizeId
                    // categoryId
                }
            })
        }))

        console.log('Usuarios insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar usuarios:', error)
    }
}
