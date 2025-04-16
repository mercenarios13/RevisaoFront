const produtos = [
    {
        "id": 1,
        "nome": "Tn Purple dragon",
        "descricao": "Esse tenis combina estilo arrojado com conforto e tecnologia.",
        "preco": 397.90,
        "peso": 0.5,
        "imagem": "https://www.tnsdojota.com/wp-content/uploads/2024/08/ec06e090.jpeg"
    },
    {
        "id": 2,
        "nome": "Jordan 4",
        "descricao": "Este Air Jordan 4 traz uma nova energia ao modelo histórico",
        "preco": 1234.99,
        "peso": 0.5,
        "imagem": "https://acdn-us.mitiendanube.com/stores/002/304/420/products/1000687821-f2722788868489084017259245295242-1024-1024.jpg"
    },
    {
        "id": 3,
        "nome": "Chuteria Nike Mercurial",
        "descricao": "O cadarço assimétrico oferece uma superfície de toque maior ao driblar",
        "preco": 2374.99,
        "peso": 0.3,
        "imagem": "https://acdn-us.mitiendanube.com/stores/001/669/060/products/big4-b64ad377406d1f60ff17087389728077-1024-1024.jpeg"
    },
    {
        "id": 4,
        "nome": "Camisa Polo NIke",
        "descricao": "Tecido em algodão é macio e cofotável",
        "preco": 256.49,
        "peso": 0.3,
        "imagem": "https://rogerstenis.vteximg.com.br/arquivos/ids/2753669-1000-1000/1000891376_1.jpg?v=637647341898670000"
    },
    {
        "id": 5,
        "nome": "Calsa Cargo",
        "descricao": "Tecido em algodão é macio e cofotável",
        "preco": 198.00,
        "peso": 1.2,
        "imagem": "https://images.tcdn.com.br/img/img_prod/703344/calca_cargo_tradicional_sarja_basic_preta_3310_1_74797dc68cb52404c8fa1ea18ea95b46.jpeg"
    },
    {
        "id": 6,
        "nome": "Boné Jhon John",
        "descricao": "Confortavel e facil acesso",
        "preco": 144.99,
        "peso": 0.9,
        "imagem": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxfSdP_i6osgAU1Rch4BJArp8GVJivwc7ajkBYqQecwU5KxEiYTpePA3BBH35EkVyHdOS69MBujj1tHVwOiXo8RFPeDjuAAL6tP3x1Z7dXTpZ3f1IW4DyR_g"
    },
    {
        "id": 7,
        "nome": "Camisa do Corinthians",
        "descricao": "Camisa oficial do time",
        "preco": 332.49,
        "peso": 0.9,
        "imagem": "data:image/jpeg;base64,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"
    },
    {
        "id": 8,
        "nome": "Bola da Penalty ",
        "descricao": "Bola feita de material resistente e durável",
        "preco": 390.90,
        "peso": 0.9,
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNePMM2cRB6d_3OkOX9oxna4zFU13BLtAWg&s"
    },
    {
        "id": 9,
        "nome": "Luva de goleiro",
        "descricao": "Luva de goleiro feita de material resistente e durável",
        "preco": 190.90,
        "peso": 0.3,
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQkPzwgAAkvT65_Zt1eTS84EZyaePhej9Pg&s"
    }
];
