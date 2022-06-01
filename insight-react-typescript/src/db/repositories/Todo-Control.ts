// import db config
import db from "..";

// collection name
const COLLECTION_NAME = "todos";

// mapping the todo document
export type TodoControl = {
    id?: string;
    controlStatus: string;
    ticketNumber: any;
    ticketName: string;
    useDate: any;
    gateCheck:string
};

// retrieve all todos
export const all = async (): Promise<Array<TodoControl>> => {
    const snapshot = await db.collection("TicketControl").get();
    const data: Array<any> = [];

    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, // because id field in separate function in firestore
            ..._data.data(), // the remaining fields
        });
    });

    // return and convert back it array of todo
    return data as Array<TodoControl>;
};

// create a todo
export const create = async (todo: TodoControl): Promise<TodoControl> => {
    const docRef = await db.collection("TicketControl").add(todo);

    // return new created todo
    return {
        id: docRef.id,
        ...todo,
    } as TodoControl;
};

// update a todo
export const update = async (id: string, todo: TodoControl): Promise<TodoControl> => {
    await db.collection("TicketControl").doc(id).update(todo);

    // return updated todo
    return {
        id: id,
        ...todo,
    } as TodoControl;
};

// delete a todo
export const remove = async (id: string) => {
    await db.collection("TicketControl").doc(id).delete();
};