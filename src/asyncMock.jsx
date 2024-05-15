const products = [
    // Pantalones
    {
        id: '1',
        name: "Jean Clásico",
        price: 39.99,
        category: "pantalones",
        img: "https://images.unsplash.com/photo-1616178193482-4dad15347c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhbnRhbG9uJTIwY2FyZ298ZW58MHwxfDB8fHwy",
        stock: 14,
        description: "Pantalón de jean clásico, ideal para cualquier ocasión."
    },
    {
        id: '2',
        name: "Pantalón Cargo",
        price: 45.99,
        category: "pantalones",
        img: "https://images.unsplash.com/photo-1584302052153-623ee529b70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFudGFsb24lMjBjYXJnb3xlbnwwfDF8MHx8fDI%3D",
        stock: 23,
        description: "Pantalón cargo con múltiples bolsillos, perfecto para un estilo casual."
    },
    {
        id: '3',
        name: "Pantalón Deportivo",
        price: 29.99,
        category: "pantalones",
        img: "https://images.unsplash.com/photo-1588117260148-b47818741c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFudGFsb24lMjBkZXBvcnRpdm98ZW58MHwxfDB8fHwy",
        stock: 20,
        description: "Pantalón deportivo cómodo y transpirable, ideal para entrenamientos."
    },
    // Remeras
    {
        id: '4',
        name: "Remera Básica",
        price: 12.99,
        category: "remeras",
        img: "https://plus.unsplash.com/premium_photo-1688497831503-235238709bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVtZXJhc3xlbnwwfDF8MHx8fDA%3D",
        stock: 10,
        description: "Remera básica de algodón, perfecta para uso diario."
    },
    {
        id: '5',
        name: "Remera Estampada",
        price: 17.99,
        category: "remeras",
        img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 12,
        description: "Remera con estampado moderno, ideal para lucir un estilo urbano."
    },
    {
        id: '6',
        name: "Remera Manga Larga",
        price: 19.99,
        category: "remeras",
        img: "https://plus.unsplash.com/premium_photo-1690034978661-47449cf3fe28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 4,
        description: "Remera de manga larga, perfecta para los días más frescos."
    },
    // Buzos
    {
        id: '7',
        name: "Buzo con Capucha",
        price: 49.99,
        category: "buzos",
        img: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VkYWRlcmF8ZW58MHwxfDB8fHww",
        stock: 16,
        description: "Buzo con capucha y bolsillo canguro, ideal para mantenerse abrigado."
    },
    {
        id: '8',
        name: "Buzo Cuello Redondo",
        price: 39.99,
        category: "buzos",
        img: "https://acdn.mitiendanube.com/stores/003/024/577/products/orange-buzo-redondo-011-0ea7daad3d39c1ac6816959072137410-1024-1024.webp",
        stock: 15,
        description: "Buzo de cuello redondo, cómodo y versátil."
    },
    {
        id: '9',
        name: "Buzo Estampado",
        price: 54.99,
        category: "buzos",
        img: "https://images.unsplash.com/photo-1609873814058-a8928924184a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stock: 9,
        description: "Buzo con estampado llamativo, perfecto para destacar."
    },
    // Camperas
    {
        id: '10',
        name: "Campera Impermeable",
        price: 79.99,
        category: "camperas",
        img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtcGVyYXxlbnwwfDF8MHx8fDI%3D",
        stock: 15,
        description: "Campera impermeable, ideal para días de lluvia."
    },
    {
        id: '11',
        name: "Campera de Cuero",
        price: 99.99,
        category: "camperas",
        img: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBlcmF8ZW58MHwxfDB8fHww",
        stock: 15,
        description: "Campera de cuero clásica, perfecta para un look elegante."
    },
    {
        id: '12',
        name: "Campera Militar",
        price: 64.99,
        category: "camperas",
        img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGVyYXxlbnwwfDF8MHx8fDA%3D",
        stock: 13,
        description: "Campera resistente al viento, ideal para actividades al aire libre."
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 1000)
    })
}