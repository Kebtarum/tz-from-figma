let initialState = {

    listData: [
        { id: 1, check: true, name: "Сходить в магазин", dedline: "29.09.2020", priority: "Высокий", mark: "yellow", discription: "Огибающая семейства поверхностей, конечно, естественно трансформирует интеграл по бесконечной области. Однако не все знают, что ортогональный определитель правомочен. Функция B(x,y) поддерживает интеграл от функции комплексной переменной, откуда следует доказываемое равенство." },
        { id: 2, check: true, name: "Помыть машину", dedline: "29.09.2020", priority: "Средний", mark: "red", discription: "..." },
        { id: 3, check: false, name: "Ужин", dedline: "29.09.2020", priority: "Низкий", mark: "green", discription: "Приготовить лазанью и Карбанару" },

    ],

    currentItem:[],

}

const listReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET-LIST-ITEM":
            let item = state.listData.find((i) => i.id == action.taskId);
            return {
                ...state,
                currentItem: item,
                // listData: [...state.listData, { id: 6, message: body }]
            };
        case "ADD-TODO":
            let dedlineYYYY = action.dedline.slice(0,4)
            let dedlineMM = action.dedline.slice(5,7)
            let dedlineDD = action.dedline.slice(8)
            let newDedline = dedlineDD + '. ' + dedlineMM + '. ' + dedlineYYYY
            return {
                ...state,
                listData: [...state.listData, { 
                    id: state.listData.length + 1, 
                    check: false, 
                    name: action.name, 
                    dedline: newDedline,
                    priority: action.priority, 
                    mark: action.mark, 
                    discription: action.discription }]
                // listData: [...state.listData, { id: 6, message: body }]
            };

        default:
            return state;
    }


}

export const getListItem = (taskId) => {
    return {
        type: 'GET-LIST-ITEM',
        taskId,
    }
}

export const addToDo = (name, dedline, priority, mark, discription ) => {
    return {
        type: 'ADD-TODO',
        name, 
        dedline, 
        priority, 
        mark, 
        discription,
    }
}

export default listReducer;