export const initialItems = [
  {
    depth: 0,
    id: 0,
    fromFramework: true,
    text: "Matéria e energia",
    type: "topic",
    subTitle: "Tópico",
    children: [
      {
        depth: 1,
        id: 1,
        fromFramework: true,
        text: "Propriedades e usos dos materiais",
        type: "topic",
        subTitle: "Tópico - Matéria e energia",
        children: [
          {
            depth: 2,
            id: 2,
            fromFramework: false,
            text: "Sustentabilidade",
            type: "topic",
            subTitle: "Tópico customizado",
            children: [
              {
                depth: 3,
                id: 3,
                fromFramework: true,
                subTitle: "Objetivo - Consumo consciente",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
              {
                depth: 3,
                id: 4,
                fromFramework: true,
                subTitle: "Objetivo - Reciclagem",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
              {
                depth: 3,
                fromFramework: false,
                id: 5,
                subTitle: "Objetivo customizado",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
            ],
          },
        ],
      },
      {
        depth: 1,
        id: 6,
        fromFramework: true,
        subTitle: "Tópico - Matéria e energia",
        text: "Prevenção de acidentes domésticos",
        type: "topic",
      },
    ],
  },
];
