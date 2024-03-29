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
        description:
            'Zapatillas deportivas Nike Air Zoom, diseñadas para brindar comodidad y rendimiento durante tus entrenamientos. Su tecnología de amortiguación ofrece soporte mientras corres o entrenas intensamente.',
        price: 54.28,
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7a2cfa28-3433-4ada-a09e-81785cfa0b7f/jordan-max-aura-5-mens-shoes-nTmBrg.png',
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        categories: ['Sneakers', 'Invierno', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '42',
    },
    {
        name: 'Nike Flex Run',
        description:
            'Zapatillas Nike Flex Run perfectas para corredores que buscan ligereza y flexibilidad. Su diseño ergonómico se adapta a tu pie, ofreciendo una experiencia de carrera cómoda y estable.',
        price: 18.75,
        image: 'https://i.ebayimg.com/images/g/SMMAAOSw4gBg9BNw/s-l960.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        categories: ['Tacones', 'Formal', 'Hombre'],
        color: 'azul claro',
        gender: 'Femenino',
        material: 'lona',
        size: '38',
    },
    {
        name: 'Nike Air Max',
        description:
            'Zapatillas icónicas Nike Air Max con un estilo moderno y elegante. La combinación de materiales de alta calidad ofrece durabilidad y confort, perfectas para el uso diario.',
        price: 78.41,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/14414764-1500-1500/image-9f2f2ede4ce6461fb1dbcc3b5b0af55d.jpg?v=638278926318000000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Nike',
        categories: ['Mocasines', 'Deportivo', 'Niños'],
        color: 'rojo',
        gender: 'Masculino',
        material: 'cuero',
        size: '44',
    },
    {
        name: 'Adidas Ultraboost',
        description:
            'Zapatillas Adidas Ultraboost diseñadas para ofrecer una combinación perfecta de comodidad y estilo. Su amortiguación reactiva y su diseño moderno las convierten en el complemento ideal para tu día a día.',
        price: 32.06,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/10181231-1500-1500/2136179.jpg?v=637951057322870000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        categories: ['Zapatillas', 'Formal', 'Mujer'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'tela',
        size: '40',
    },
    {
        name: 'Adidas Superstar',
        description:
            'Zapatillas clásicas Adidas Superstar que combinan el estilo retro con la comodidad moderna. Ideales para cualquier ocasión, su diseño icónico y su durabilidad las convierten en un must-have.',
        price: 62.13,
        image: 'https://mossashoes.vtexassets.com/arquivos/ids/195955-800-auto?v=638119798118330000&width=800&height=auto&aspect=true',
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        categories: ['Sandalias', 'Verano', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '38',
    },
    {
        name: 'Adidas Gazelle',
        description:
            'Zapatillas de estilo vintage Adidas Gazelle que combinan la moda retro con la comodidad actual. Su diseño clásico y su construcción duradera las hacen perfectas para un look casual.',
        price: 41.89,
        image: 'https://gioseppo.com/en-us/media/catalog/product/cache/3346f0c22e6da6be25b75c9e9c233185/6/7/67503_azul_02.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Adidas',
        categories: ['Bailarinas', 'Invierno', 'Hombre'],
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '42',
    },
    {
        name: 'Puma RS-X',
        description:
            'Zapatillas Puma RS-X que combinan estilo y comodidad para un look urbano. Su diseño innovador y su amortiguación superior las hacen ideales para un uso diario.',
        price: 15.64,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2F4cf1ef3a0ce24b2faced2dbbb544bd58?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=fdb15e6c0b076e7a6f1ad39c2821506a',
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        categories: ['Alpargatas', 'Deportivo', 'Niños'],
        color: 'rojo',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'Puma Suede Classic',
        description:
            'Zapatillas clásicas Puma Suede con un toque retro y una construcción duradera. Perfectas para cualquier ocasión, su estilo atemporal las hace indispensables en tu armario.',
        price: 87.12,
        image: 'https://www.gottaperu.com/cdn/shop/products/p-8715904-1-5d28fe27-9503-4cb2-915c-88eca76b7b86_800x.jpg?v=1699435219',
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        categories: ['Oxfords', 'Formal', 'Niños'],
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41',
    },
    {
        name: 'Puma Cell Venom',
        description:
            'Zapatillas Puma Cell Venom inspiradas en el diseño de los años 90, ofrecen un estilo retro y una comodidad excepcional. Su construcción robusta garantiza durabilidad.',
        price: 48.97,
        image: 'https://bataperu.vtexassets.com/arquivos/ids/157643-800-auto?v=637462430979600000&width=800&height=auto&aspect=true',
        stock: 30,
        discountPercentage: 0,
        brand: 'Puma',
        categories: ['Pantuflas', 'Verano', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '43',
    },
    {
        name: 'Reebok Classic Leather',
        description:
            'Zapatillas icónicas Reebok Classic Leather que combinan estilo y comodidad. Su diseño atemporal y su construcción de alta calidad las convierten en un elemento esencial para cualquier colección de calzado.',
        price: 24.8,
        image: 'https://plazavea.vteximg.com.br/arquivos/ids/27472853-1000-1000/image-47653c474fcb4714ba56b41f03713b69.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        categories: ['Deportivo', 'Informal', 'Mujer'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40',
    },
    {
        name: 'Reebok Nano X',
        description:
            'Zapatillas Reebok Nano X diseñadas para ofrecer rendimiento y durabilidad durante entrenamientos intensivos. Su tecnología de soporte y tracción las convierte en la elección perfecta para actividades deportivas.',
        price: 59.37,
        image: 'https://kerriman.com/wp-content/uploads/2021/06/mocasines-negros-caterina.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        categories: ['Mocasines', 'Informal', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '42',
    },
    {
        name: 'Reebok Club C 85',
        description:
            'Zapatillas clásicas Reebok Club C 85 que ofrecen estilo retro y comodidad excepcional. Perfectas para uso diario, su diseño versátil se adapta a cualquier ocasión.',
        price: 71.5,
        image: 'https://mercury.vtexassets.com/arquivos/ids/8745314-800-800?v=637956722893900000&width=800&height=800&aspect=true',
        stock: 30,
        discountPercentage: 0,
        brand: 'Reebok',
        categories: ['Zapatillas', 'Verano', 'Niños'],
        color: 'azul',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41',
    },
    {
        name: 'Converse Chuck Taylor All Star',
        description:
            'Zapatillas clásicas Converse Chuck Taylor All Star, un ícono de estilo que combina comodidad y versatilidad. Su diseño atemporal las hace ideales para cualquier ocasión.',
        price: 10.43,
        image: 'https://puntosalao.com/wp-content/uploads/2023/01/CF190-Negro_0.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        categories: ['Bailarinas', 'Invierno', 'Niños'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '39',
    },
    {
        name: 'Converse Jack Purcell',
        description:
            'Zapatillas Converse Jack Purcell, conocidas por su elegancia y comodidad. Su diseño minimalista y su construcción duradera las hacen perfectas para un look casual.',
        price: 89.18,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/9122961-1500-1500/2117358.jpg?v=637905022551270000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        categories: ['Sneakers', 'Formal', 'Hombre'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40',
    },
    {
        name: 'Converse One Star',
        description:
            'Zapatillas Converse One Star con un toque moderno y retro al mismo tiempo. Su estilo único y su comodidad las hacen perfectas para expresar tu individualidad.',
        price: 41.76,
        image: 'https://img.freepik.com/fotos-premium/tacones-aguja-clasicos-elegantes-rojos-sobre-fondo-blanco-zapato-rojo-tacon-alto-zapatos-mujer_470611-266.jpg?w=1060',
        stock: 30,
        discountPercentage: 0,
        brand: 'Converse',
        categories: ['Tacones', 'Deportivo', 'Mujer'],
        color: 'rojo',
        gender: 'Unisex',
        material: 'gamuza',
        size: '41',
    },
    {
        name: 'Vans Old Skool',
        description:
            'Zapatillas clásicas Vans Old Skool que combinan estilo y durabilidad. Su diseño icónico las hace perfectas para cualquier ocasión casual.',
        price: 57.91,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Faca4fe88bbe04890bdd3306a696e1f4b?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=7a062272c2e14feee945b001420c86ab',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        categories: ['Pantuflas', 'Formal', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '38',
    },
    {
        name: 'Vans Authentic',
        description:
            'Zapatillas Vans Authentic reconocidas por su simplicidad y comodidad. Su diseño versátil las convierte en el complemento ideal para cualquier estilo.',
        price: 31.25,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3723be3685ec476aaed0a991001b1389_9366/Chancla_Adilette_Aqua_Azul_F35542_01_standard.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        categories: ['Chanclas', 'Invierno', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'lona',
        size: '40',
    },
    {
        name: 'Vans Slip-On',
        description:
            'Zapatillas Vans Slip-On que combinan estilo urbano y facilidad de uso. Su diseño sin cordones y su comodidad las hacen perfectas para un uso diario.',
        price: 93.83,
        image: 'https://www.cordonsnegres.com/wp-content/uploads/Paul-Smith-oxford-blanco-AW13-par.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vans',
        categories: ['Oxfords', 'Verano', 'Niños'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '42',
    },
    {
        name: 'New Balance 574',
        description:
            'Zapatillas New Balance 574 que combinan estilo retro y comodidad moderna. Su diseño clásico y su amortiguación superior las convierten en un elemento esencial para cualquier outfit casual.',
        price: 18.06,
        image: 'https://falabella.scene7.com/is/image/FalabellaPE/17959161_1?wid=1500&hei=1500&qlt=70',
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        categories: ['Botas', 'Deportivo', 'Hombre'],
        color: 'gris',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'New Balance Fresh Foam',
        description:
            'Zapatillas New Balance Fresh Foam diseñadas para ofrecer una experiencia de carrera cómoda y estable. Su amortiguación reactiva brinda soporte durante tus actividades deportivas.',
        price: 67.94,
        image: 'https://ripleype.imgix.net/https%3A%2F%2Fmedia-prod-use-1.mirakl.net%2FSOURCE%2Faa1c077696dc40ccbb47d5e4de7fb8fe?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=604efe643ad2a1178c23bfc02e49a2a8',
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        categories: ['Sandalias', 'Informal', 'Niños'],
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '40',
    },
    {
        name: 'New Balance 990v5',
        description:
            'Zapatillas New Balance 990v5 conocidas por su durabilidad y confort. Su diseño clásico y su construcción de alta calidad las hacen ideales para un uso diario.',
        price: 15.21,
        image: 'https://gretel-images.s3.us-west-2.amazonaws.com/images/TO10017668-0002.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'New Balance',
        categories: ['Alpargatas', 'Formal', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '41',
    },
    {
        name: 'Under Armour HOVR Phantom',
        description:
            'Zapatillas Under Armour HOVR Phantom diseñadas para ofrecer comodidad y rendimiento. Su tecnología de amortiguación y su ajuste preciso las hacen ideales para correr o entrenar.',
        price: 82.65,
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8db62ddf-e680-41a3-b483-975c66414921/terminator-low-zapatillas-szDsNw.png',
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        categories: ['Sneakers', 'Invierno', 'Hombre'],
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Under Armour Charged Assert 8',
        description:
            'Zapatillas Under Armour Charged Assert 8 con un diseño versátil y una amortiguación cómoda. Perfectas para el uso diario y actividades deportivas.',
        price: 46.09,
        image: 'https://underarmour.scene7.com/is/image/Underarmour/3026197-003_A?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=75&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688',
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        categories: ['Mocasines', 'Verano', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'malla',
        size: '42',
    },
    {
        name: 'Under Armour Street Encounter',
        description:
            'Zapatillas informales Under Armour Street Encounter ideales para un estilo casual y confort. Su diseño ligero y transpirable las hace perfectas para el día a día.',
        price: 79.72,
        image: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_119529718_2380749_1?wid=1500&hei=1500&qlt=70',
        stock: 30,
        discountPercentage: 0,
        brand: 'Under Armour',
        categories: ['Bailarinas', 'Informal', 'Hombre'],
        color: 'gris',
        gender: 'Unisex',
        material: 'lona',
        size: '41',
    },
    {
        name: "Skechers D'Lites",
        description:
            "Zapatillas Skechers D'Lites que combinan estilo y comodidad. Su diseño moderno y ligero las hace ideales para un uso diario con un toque de moda.",
        price: 12.6,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/16292032-1500-1500/2476246.jpg?v=638308641845930000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        categories: ['Zapatillas', 'Formal', 'Niños'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'Skechers GOwalk Evolution',
        description:
            'Zapatillas Skechers GOwalk Evolution conocidas por su comodidad y ligereza. Su diseño ergonómico las convierte en la opción perfecta para largas caminatas o uso diario.',
        price: 73.84,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/16025985-1500-1500/2205816.jpg?v=638279997629570000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        categories: ['Tacones', 'Deportivo', 'Niños'],
        color: 'negro',
        gender: 'Unisex',
        material: 'malla',
        size: '40',
    },
    {
        name: 'Skechers Energy',
        description:
            'Zapatillas Skechers Energy con un estilo retro y una comodidad excepcional. Ideales para un look casual, ofrecen confort durante todo el día.',
        price: 39.52,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/14438611-1500-1500/2341230.jpg?v=638279542011130000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Skechers',
        categories: ['Pantuflas', 'Invierno', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'cuero',
        size: '41',
    },
    {
        name: 'Fila Disruptor II',
        description:
            'Zapatillas Fila Disruptor II reconocidas por su estilo audaz y comodidad. Su diseño llamativo las convierte en un elemento destacado para cualquier outfit urbano.',
        price: 21.1,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/3041133-1000-1000/1778906.jpg?v=637492495515800000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        categories: ['Chanclas', 'Informal', 'Hombre'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'Fila Ray Tracer',
        description:
            'Zapatillas Fila Ray Tracer con un estilo retro y una construcción duradera. Perfectas para uso diario, ofrecen comodidad y un toque de moda.',
        price: 54.87,
        image: 'https://oechsle.vteximg.com.br/arquivos/ids/3041286-1000-1000/1778924.jpg?v=637492496288870000',
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        categories: ['Oxfords', 'Verano', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '40',
    },
    {
        name: 'Fila Mindblower',
        description:
            'Zapatillas Fila Mindblower que combinan estilo y personalidad. Su diseño único y su comodidad las hacen ideales para destacar en cualquier ocasión.',
        price: 90.59,
        image: 'https://assets.ajio.com/medias/sys_master/root/20210325/mHU6/605cac397cdb8c1f146cae8e/-473Wx593H-460829134-red-MODEL3.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Fila',
        categories: ['Botas', 'Deportivo', 'Niños'],
        color: 'rojo',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'DC Shoes Kalis S',
        description:
            'Zapatillas DC Shoes Kalis S con un estilo skate moderno y durabilidad excepcional. Su diseño técnico las hace ideales para patinar o para un look urbano.',
        price: 47.39,
        image: 'https://thebox.com.pe/cdn/shop/products/300529_3BK_6_1_1024x1024@2x.jpg?v=1679604033',
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        categories: ['Sandalias', 'Deportivo', 'Mujer'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '39',
    },
    {
        name: 'DC Shoes Court Graffik',
        description:
            'Zapatillas DC Shoes Court Graffik con un diseño clásico y confort superior. Perfectas para un uso diario con estilo y comodidad.',
        price: 29.92,
        image: 'https://dcdn.mitiendanube.com/stores/001/174/815/products/6eb43ec0-7459-40b6-8be2-62b2cbff43951-01cc75416f81ef025416348283640070-1024-1024.webp',
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        categories: ['Alpargatas', 'Informal', 'Niños'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'DC Shoes Trase TX',
        description:
            'Zapatillas DC Shoes Trase TX con un diseño sencillo y ligero. Ideales para un look casual y ofrecen comodidad durante todo el día.',
        price: 64.77,
        image: 'https://images.boardriders.com/global/dcshoes-products/all/default/hi-res/302361_dcshoes,p_0bg_frt2.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'DC Shoes',
        categories: ['Sneakers', 'Verano', 'Hombre'],
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'ASICS Gel-Kayano 28',
        description:
            'Zapatillas ASICS Gel-Kayano 28 diseñadas para ofrecer estabilidad y comodidad durante la carrera. Su tecnología de amortiguación y sujeción las hacen ideales para corredores.',
        price: 59.89,
        image: 'https://asicsperu.vtexassets.com/arquivos/ids/540127-800-auto?v=638393941811300000&width=800&height=auto&aspect=true',
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        categories: ['Mocasines', 'Formal', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'ASICS Gel-Lyte III',
        description:
            'Zapatillas clásicas ASICS Gel-Lyte III con un diseño retro y comodidad excepcional. Perfectas para uso diario o para completar un outfit casual.',
        price: 11.75,
        image: 'https://images.asics.com/is/image/asics/1022A215_100_SR_RT_GLB?$zoom$',
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        categories: ['Zapatillas', 'Invierno', 'Niños'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '40',
    },
    {
        name: 'ASICS Gel-Nimbus 24',
        description:
            'Zapatillas ASICS Gel-Nimbus 24 con una amortiguación superior y ajuste cómodo. Ideales para corredores que buscan comodidad durante largas distancias.',
        price: 84.29,
        image: 'https://asicsperu.vtexassets.com/arquivos/ids/546205-800-auto?v=638393952702200000&width=800&height=auto&aspect=true',
        stock: 30,
        discountPercentage: 0,
        brand: 'ASICS',
        categories: ['Bailarinas', 'Verano', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'malla',
        size: '41',
    },
    {
        name: 'Lacoste Lerond',
        description:
            'Zapatillas Lacoste Lerond con un estilo clásico y elegante. Su diseño minimalista las hace perfectas para un look casual y cómodo.',
        price: 70.65,
        image: 'https://rustans.com/cdn/shop/files/3041352_01.jpg?v=1685502584&width=500',
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        categories: ['Tacones', 'Informal', 'Hombre'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39',
    },
    {
        name: 'Lacoste Carnaby Evo',
        description:
            'Zapatillas Lacoste Carnaby Evo con un toque deportivo y un diseño versátil. Ideales para uso diario, ofrecen estilo y confort.',
        price: 23.47,
        image: 'https://www.tradeinn.com/f/13728/137283536_3/lacoste-blue---brown-ankle-trainers.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        categories: ['Pantuflas', 'Deportivo', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Lacoste Masters Cup',
        description:
            'Zapatillas Lacoste Masters Cup con un diseño retro y una construcción duradera. Perfectas para un look vintage y comodidad durante todo el día.',
        price: 91.14,
        image: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_118879025_2197331_1?wid=1500&hei=1500&qlt=70',
        stock: 30,
        discountPercentage: 0,
        brand: 'Lacoste',
        categories: ['Chanclas', 'Formal', 'Niños'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'Salomon Speedcross 5',
        description:
            'Zapatillas Salomon Speedcross 5 diseñadas para el trail running. Ofrecen agarre y estabilidad en terrenos difíciles, ideales para corredores aventureros.',
        price: 61.34,
        image: 'https://www.patta.nl/cdn/shop/files/L41663500.jpg?v=1692352529&width=535',
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        categories: ['Oxfords', 'Invierno', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'Salomon XA Pro 3D',
        description:
            'Zapatillas Salomon XA Pro 3D versátiles y duraderas. Ideales para actividades outdoor, ofrecen protección y rendimiento en terrenos variados.',
        price: 33.9,
        image: 'https://www.tradeinn.com/f/13762/137627724/salomon-x-ultra-3-hiking-shoes.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        categories: ['Botas', 'Verano', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '40',
    },
    {
        name: 'Salomon Sense Ride',
        description:
            'Zapatillas Salomon Sense Ride con una combinación de comodidad y agarre para correr en senderos. Su diseño ligero y transpirable las hace ideales para aventuras al aire libre.',
        price: 77.45,
        image: 'https://salomon.com.au/cdn/shop/files/L47299100_0_GHO_ACSPROMetal_GhostGray_SilverMetallicX_720x.png?v=1686095176',
        stock: 30,
        discountPercentage: 0,
        brand: 'Salomon',
        categories: ['Sandalias', 'Formal', 'Hombre'],
        color: 'gris',
        gender: 'Unisex',
        material: 'malla',
        size: '41',
    },
    {
        name: 'Timberland 6-Inch Premium Boot',
        description:
            'Botas Timberland 6-Inch Premium Boot, duraderas y resistentes al agua. Ideales para aventuras al aire libre o para un estilo urbano resistente.',
        price: 69.18,
        image: 'https://images.timberland.com/is/image/timberland/A62KN968-HERO?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0',
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        categories: ['Alpargatas', 'Invierno', 'Niños'],
        color: 'marrón',
        gender: 'Unisex',
        material: 'cuero',
        size: '39',
    },
    {
        name: 'Timberland Bradstreet Chukka',
        description:
            'Botas Timberland Bradstreet Chukka con un diseño elegante y comodidad excepcional. Perfectas para un uso diario con estilo y durabilidad.',
        price: 19.8,
        image: 'https://www.timberland.com.my/wp-content/uploads/product/f23/10073001-HERO-768x768.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        categories: ['Sneakers', 'Deportivo', 'Niños'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Timberland Earthkeepers Originals',
        description:
            'Botas Timberland Earthkeepers Originals, respetuosas con el medio ambiente y con estilo. Perfectas para un look casual con conciencia ecológica.',
        price: 88.23,
        image: 'https://keeshoes.com/a/ale/auction_image/image1_137999.s790/timberland-madbury-sneaker-m-a2k9x-shoes-green-790x790.jpeg?_=1649245708.5398741',
        stock: 30,
        discountPercentage: 0,
        brand: 'Timberland',
        categories: ['Mocasines', 'Informal', 'Hombre'],
        color: 'verde',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'Botas de Senderismo Vibram Summit',
        description:
            'Botas de senderismo robustas con suela Vibram resistente y tracción superior. Ideales para terrenos difíciles y largas caminatas en la montaña.',
        price: 41.72,
        image: 'https://www.vibram.com/dw/image/v2/AAWR_PRD/on/demandware.static/-/Sites-vbi-apparel-footwear/default/dw4ca0aad1/images/M86/Grey/EL-X_KNIT_23M8602_GREY_06.jpg?sw=950&sh=1188',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        categories: ['Zapatillas', 'Verano', 'Mujer'],
        color: 'gris',
        gender: 'Unisex',
        material: 'cuero',
        size: '40',
    },
    {
        name: 'Zapatillas de Trail Running Vibram TrailBlaze',
        description:
            'Zapatillas de trail running con suela Vibram de agarre excepcional y amortiguación reactiva. Diseñadas para correr en terrenos variados y condiciones adversas.',
        price: 56.0,
        image: 'https://m.media-amazon.com/images/I/611Yiqqe15L._SX695_.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        categories: ['Bailarinas', 'Formal', 'Niños'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '39',
    },
    {
        name: 'Calzado Urbano Vibram CityStride',
        description:
            'Zapatos urbanos de estilo moderno con suela Vibram que ofrece durabilidad y tracción. Perfectos para un look casual en entornos urbanos.',
        price: 35.26,
        image: 'https://www.vibrams.co.uk/cdn/shop/products/14121180233777_1100x.jpg?v=1646671464',
        stock: 30,
        discountPercentage: 0,
        brand: 'Vibram',
        categories: ['Tacones', 'Invierno', 'Hombre'],
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'Mizuno Wave Rider',
        description:
            'Zapatillas Mizuno Wave Rider con una combinación perfecta de amortiguación y ligereza. Diseñadas para corredores que buscan comodidad y rendimiento.',
        price: 98.47,
        image: 'https://media.sportitude.com.au/e98f47d4-764d-46cf-914d-76194c99f282.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        categories: ['Pantuflas', 'Informal', 'Mujer'],
        color: 'azul',
        gender: 'Unisex',
        material: 'malla',
        size: '39',
    },
    {
        name: 'Mizuno Wave Inspire',
        description:
            'Zapatillas Mizuno Wave Inspire con soporte y estabilidad superiores. Ideales para corredores que necesitan control de pronación y comodidad duradera.',
        price: 67.15,
        image: 'https://startfitness.co.uk/cdn/shop/files/Mizuno-Wave-Rider-27-J1GC2303-01.jpg?v=1687450008&width=823',
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        categories: ['Chanclas', 'Deportivo', 'Niños'],
        color: 'gris',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Mizuno Wave Sky',
        description:
            'Zapatillas Mizuno Wave Sky con una sensación de suavidad y amortiguación excepcionales. Perfectas para corredores que buscan comodidad y rendimiento en largas distancias.',
        price: 41.6,
        image: 'https://emea.mizuno.com/dw/image/v2/BDBS_PRD/on/demandware.static/-/Sites-masterCatalog_Mizuno/default/dwcaf9cc18/SS23/Footwear/SH_J1GC231403_00.png?sw=900&sh=900',
        stock: 30,
        discountPercentage: 0,
        brand: 'Mizuno',
        categories: ['Oxfords', 'Informal', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'cuero',
        size: '41',
    },
    {
        name: 'Onitsuka Tiger Mexico 66',
        description:
            'Zapatillas clásicas Onitsuka Tiger Mexico 66 con un diseño retro y elegante. Ideales para un estilo casual con un toque vintage.',
        price: 78.8,
        image: 'https://images.asics.com/is/image/asics/DL408_0101_SR_RT_GLB-3?$zoom$',
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        categories: ['Botas', 'Invierno', 'Mujer'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39',
    },
    {
        name: 'Onitsuka Tiger Ultimate 81',
        description:
            'Zapatillas Onitsuka Tiger Ultimate 81 con un diseño deportivo y ligero. Perfectas para uso diario con comodidad y estilo.',
        price: 22.91,
        image: 'https://images.asics.com/is/image/asics/D4J2L_9090_SR_RT_GLB-2?$zoom$',
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        categories: ['Sandalias', 'Deportivo', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Onitsuka Tiger Serrano',
        description:
            'Zapatillas Onitsuka Tiger Serrano inspiradas en el diseño retro para un estilo único. Ideales para un look casual con un toque de moda.',
        price: 85.7,
        image: 'https://images.asics.com/is/image/asics/1183A360_401_SR_RT_GLB?$zoom$',
        stock: 30,
        discountPercentage: 0,
        brand: 'Onitsuka Tiger',
        categories: ['Alpargatas', 'Verano', 'Niños'],
        color: 'azul',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'Le Coq Sportif Arthur Ashe',
        description:
            'Zapatillas Le Coq Sportif Arthur Ashe con un diseño clásico y elegante. Ideales para un look retro con comodidad y estilo.',
        price: 16.38,
        image: 'https://www.tradeinn.com/f/13762/137624248/le-coq-sportif-lcs_t01-hard-court-shoes.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        categories: ['Sneakers', 'Formal', 'Mujer'],
        color: 'blanco',
        gender: 'Unisex',
        material: 'cuero',
        size: '39',
    },
    {
        name: 'Le Coq Sportif Omega X',
        description:
            'Zapatillas Le Coq Sportif Omega X con un diseño urbano y deportivo. Perfectas para uso diario con una combinación de estilo y comodidad.',
        price: 59.84,
        image: 'https://www.tradeinn.com/f/13865/138653118/le-coq-sportif-alpha-trainers.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        categories: ['Mocasines', 'Invierno', 'Niños'],
        color: 'azul',
        gender: 'Unisex',
        material: 'sintetico',
        size: '40',
    },
    {
        name: 'Le Coq Sportif LCS R Pure',
        description:
            'Zapatillas Le Coq Sportif LCS R Pure con un diseño moderno y ligero. Ideales para un look casual y confort durante todo el día.',
        price: 44.29,
        image: 'https://d32bkruz86sidu.cloudfront.net/6144b9fd59bc8443798756.png',
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        categories: ['Zapatillas', 'Deportivo', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '41',
    },
    {
        name: 'Le Coq Sportif LCS R Pure X',
        description:
            'Zapatillas Le Coq Sportif LCS R Pure con un diseño moderno y ligero. Ideales para un look casual y confort durante todo el día.',
        price: 99.99,
        image: 'https://runcolors.com/eng_pm_Le-Coq-Sportif-JAZY-CLASSIC-AUTOMNE-TRIPLE-BLACK-2020331-1634_1.jpg',
        stock: 30,
        discountPercentage: 0,
        brand: 'Le Coq Sportif',
        categories: ['Zapatillas', 'Deportivo', 'Hombre'],
        color: 'negro',
        gender: 'Unisex',
        material: 'tela',
        size: '40',
    },
]

module.exports = async () => {
    try {
        // * Obtener Tablas de datos para filtrar ids
        const [brandData, colorData, genderData, materialData, sizeData, categoryData] = await Promise.all([
            getShoeBrand(),
            getShoeColor(),
            getShoeGender(),
            getShoeMaterial(),
            getShoeSize(),
            getShoeCategory(),
        ])

        // * Insertar o actualizar zapatos
        await Promise.all(
            data.map(async shoe => {
                // * Obtener ids de los propiedades de los zapatos
                const brandId = brandData.find(({ brand }) => brand === shoe.brand)?.id || null
                const colorId = colorData.find(({ color }) => color === shoe.color)?.id || null
                const genderId = genderData.find(({ gender }) => gender === shoe.gender)?.id || null
                const materialId = materialData.find(({ material }) => material === shoe.material)?.id || null
                const sizeId = sizeData.find(({ size }) => size === shoe.size)?.id || null
                const categoriesObj = categoryData.filter(({ category }) => shoe.categories.includes(category))

                // Intentar encontrar el zapato existente por el nombre
                const existingShoe = await Shoe.findOne({
                    where: {
                        name: shoe.name,
                    },
                })

                if (existingShoe) {
                    // Si el zapato ya existe, actualizar sus propiedades
                    await existingShoe.update({
                        description: shoe.description,
                        price: shoe.price,
                        image: shoe.image,
                        stock: shoe.stock,
                        discountPercentage: shoe.discountPercentage,
                        brandId,
                        colorId,
                        genderId,
                        materialId,
                        sizeId,
                    })
                } else {
                    // Si el zapato no existe, crear uno nuevo
                    const newShoe = await Shoe.create({
                        name: shoe.name,
                        description: shoe.description,
                        price: shoe.price,
                        image: shoe.image,
                        stock: shoe.stock,
                        discountPercentage: shoe.discountPercentage,
                        brandId,
                        colorId,
                        genderId,
                        materialId,
                        sizeId,
                    })
                    await newShoe.addShoeCategory(categoriesObj)
                }
            }),
        )

        console.log('Zapatos insertados correctamente.')
    } catch (error) {
        console.error('Error al insertar zapatos:', error)
    }
}
