const series = [
    { id: 1, name: 'Breaking Bad', channel: 'AMC', seasons: 5, description: 'Sigue a Walter White, un profesor de química que, tras ser diagnosticado con cáncer, se convierte en fabricante de metanfetaminas para asegurar el futuro financiero de su familia.', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { id: 2, name: 'Stranger Things', channel: 'Netflix', seasons: 4, description: 'Ambientada en los años 80, un grupo de niños descubre experimentos secretos, fenómenos sobrenaturales y una misteriosa niña mientras buscan a su amigo desaparecido.', imageUrl: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHclp-1JynUWnj9GdlOIvdYHUxD_rBSmk_Q53L_xPrPHOrv9tobzVvkBJCOshIp4P0hDc_3Zus-1ACtLZjGd0GF682Bf46iZQXVIk4hwY1mWsSG_9enpVAi_qNn08Nr-kAT2A.jpg?r=c68' },
    { id: 3, name: 'The Crown', channel: 'Netflix', seasons: 5, description: 'Una serie histórica que narra la vida de la Reina Isabel II desde su boda en 1947 hasta la actualidad, explorando eventos políticos, personales y culturales de su reinado.', imageUrl: 'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT6-ilIJZPo41mx2cuziG5zyjn7BWGZZgBKTF7F8eheSGHPGzL8jiYiL9ie1lExbidAdcjqVmXZtCho0A8qMgY4UP5rJEbR6qtvNG5ZP3Ls_1FEqyPQTvTMNnybGFsb202NhmA.jpg?r=844' },
    { id: 4, name: 'The Boys', channel: 'Amazon Prime Video', seasons: 3, description: 'En un mundo donde los superhéroes son corruptos y explotados comercialmente, un grupo de vigilantes intenta derribarlos y exponer sus crímenes.', imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3263af101694149.5f247b910dda5.png' },
    { id: 5, name: 'Friends', channel: 'NBC', seasons: 10,description: 'Sigue la vida de un grupo de amigos en Nueva York mientras enfrentan las dificultades del trabajo, las relaciones y la vida cotidiana con humor y camaradería.', imageUrl: 'https://www.yourdecoration.at/cdn/shop/files/Poster-Friends-In-Central-Perk-61x91-5cm-Pyramid-PP32138_500x.jpg?v=1714115976'  },
    { id: 6, name: 'The Office', channel: 'NBC', seasons: 9,description: 'Un falso documental que sigue las vidas cotidianas de los empleados de una oficina, mostrando sus interacciones absurdas y cómicas en el lugar de trabajo.', imageUrl: 'https://i.pinimg.com/474x/c1/6c/9f/c16c9f254b8c62fe443659d03761661f.jpg'  },
    { id: 7, name: 'Rick and Morty', channel: 'Adult Swim', seasons: 6,description: 'Animación que narra las aventuras de un científico excéntrico y su nieto mientras viajan a través de dimensiones y viven situaciones bizarras y surrealistas.', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_806006-MCO75832425780_042024-O.webp'  },
    { id: 8, name: 'Better Call Saul', channel: 'AMC', seasons: 6,description: 'Precuela de "Breaking Bad" que sigue a Jimmy McGill, un abogado con poca suerte, mientras se transforma en el astuto abogado Saul Goodman.', imageUrl: 'https://m.media-amazon.com/images/I/71o+WrVPLfL._AC_UF894,1000_QL80_.jpg'  },
    { id: 9, name: 'Dark', channel: 'Netflix', seasons: 3,description: 'Un thriller de ciencia ficción alemán que explora el viaje en el tiempo y los oscuros secretos de un pequeño pueblo, desencadenados por la desaparición de un niño.', imageUrl: 'https://www.magnumphotos.com/learn/wp-content/uploads/2021/06/the-dark-poster.jpg'  },
    { id: 10, name: 'The Witcher', channel: 'Netflix', seasons: 2,description: 'Sigue a Geralt de Rivia, un cazador de monstruos solitario, mientras se enfrenta a amenazas sobrenaturales en un mundo lleno de magia y corrupción.', imageUrl: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2019/07/01/5fa532527f848.jpeg'  },
    { id: 11, name: 'Game of Thrones', channel: 'HBO', seasons: 8,description: 'Basada en los libros de George R.R. Martin, narra la lucha por el poder entre varias familias nobles en el continente ficticio de Westeros.', imageUrl: 'https://static.posters.cz/image/1300/pinturas-sobre-lienzo-game-of-thrones-season-1-key-art-i135455.jpg'  },
    { id: 12, name: 'Narcos', channel: 'Netflix', seasons: 3,description: 'Basada en hechos reales, sigue el auge y caída del cártel de drogas de Medellín liderado por Pablo Escobar y la lucha de la DEA para detenerlo.', imageUrl: 'https://static.posters.cz/image/750/posters/narcos-blow-business-i31851.jpg'  },
    { id: 13, name: 'La casa de papel', channel: 'Netflix', seasons: 5,description: 'Un grupo de criminales planea y ejecuta un elaborado atraco a la Fábrica Nacional de Moneda y Timbre de España, liderados por el enigmático "El Profesor".', imageUrl: 'https://es.web.img2.acsta.net/pictures/21/08/03/13/56/3572084.jpg'  },
    { id: 14, name: 'Lucifer', channel: 'Netflix', seasons: 6,description: 'Lucifer Morningstar, el diablo, abandona el infierno para vivir en Los Ángeles, donde ayuda a la policía a resolver crímenes mientras explora su propia redención.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Xmam6KyaHiUKzwju_rB4Stu09JPtpwpQgQ&s'  },
    { id: 15, name: 'Sherlock', channel: 'BBC', seasons: 4,description: 'Una moderna adaptación de las historias de Sherlock Holmes que sigue a un detective brillante y su compañero, el Dr. John Watson, mientras resuelven misterios en el Londres actual.', imageUrl: 'https://cdn.europosters.eu/image/750/posters/sherlock-series-4-iconic-i33910.jpg'  },
    { id: 16, name: 'Black Mirror', channel: 'BBC', seasons: 5,description: 'Una serie de antología que examina la vida moderna y el impacto de la tecnología a través de historias independientes que tienden a ser oscuras y satíricas.', imageUrl: 'https://i.pinimg.com/originals/e1/fb/16/e1fb164433849d9ac3fd18052d02f113.jpg'  },
  ];
  