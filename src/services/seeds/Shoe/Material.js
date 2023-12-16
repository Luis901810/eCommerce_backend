const { ShoeMaterial } = require('../../../db')

const data = [
    {
        material: 'cuero',
        description: 'Piel curtida del ganado vacuno'
    },
    {
        material: 'sintetico',
        description: 'Material artificial hecho de polímeros'
    },
    {
        material: 'goma',
        description: 'Material elástico y resistente'
    },
    {
        material: 'tela',
        description: 'Tejido hecho de hilos entrelazados'
    },
    {
        material: 'lona',
        description: 'Tela de algodón resistente'
    },
    {
        material: 'gamuza',
        description: 'Cuero de cabra tratado'
    },
    {
        material: 'charol',
        description: 'Cuero cubierto con una capa de barniz'
    },
    {
        material: 'terciopelo',
        description: 'Tejido de pelo corto y denso'
    },
    {
        material: 'seda',
        description: 'Fibra natural de los gusanos de seda'
    },
    {
        material: 'lino',
        description: 'Fibra natural de la planta de lino'
    },
    {
        material: 'ante',
        description: 'Cuero de cabra o cordero tratado'
    },
    {
        material: 'plastico',
        description: 'Material sintético y moldeable'
    },
    {
        material: 'caucho',
        description: 'Material elástico y aislante'
    },
    {
        material: 'trenzado',
        description: 'Material entrelazado de hilos'
    },
    {
        material: 'fibra de carbono',
        description: 'Material resistente y ligero'
    }
]

module.exports = async () => {
    const count = await ShoeMaterial.count()
    if (count === 0) {
        await ShoeMaterial.bulkCreate(data)
    }
}
