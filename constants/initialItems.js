export const initialItems = [
  {
    id: 1,
    fromFramework: true,
    text: "Matéria e energia",
    type: "topic",
    subTitle: "Tópico",
    children: [
      {
        id: 10,
        fromFramework: true,
        text: "Propriedades e usos dos materiais",
        type: "topic",
        subTitle: "Tópico - Matéria e energia",
        children: [
          {
            id: 100,
            fromFramework: false,
            text: "Sustentabilidade",
            type: "topic",
            subTitle: "Tópico customizado",
            children: [
              {
                id: 1001,
                fromFramework: true,
                subTitle: "Objetivo - Consumo consciente",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
              {
                id: 1002,
                fromFramework: true,
                subTitle: "Objetivo - Reciclagem",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
              {
                fromFramework: false,
                id: 1003,
                subTitle: "Objetivo customizado",
                text: "Identificar de que materiais são feitos os objetos que fazem parte da vida cotidiana",
                type: "goal",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        fromFramework: true,
        subTitle: "Tópico - Matéria e energia",
        text: "Prevenção de acidentes domésticos",
        type: "topic",
        children: [],
      },
    ],
  },
];
