// import db config
import db from "..";

// collection name
const COLLECTION_NAME = "todos";

// mapping the todo document
export type Todo = {
    id?: string;
    bookingCode: string;
    ticketNumber: any;
    useStatus: string;
    useDate: any;
    outDate:any;
    gateCheck:string
    serialNumber:any;
};

// retrieve all todos
export const all = async (): Promise<Array<Todo>> => {
    const snapshot = await db.collection("TicketManage").get();
    const data: Array<any> = [];

    snapshot.docs.map((_data) => {
        data.push({
            id: _data.id, // because id field in separate function in firestore
            ..._data.data(), // the remaining fields
        });
    });

    // return and convert back it array of todo
    return data as Array<Todo>;
};

// create a todo
export const create = async (todo: Todo): Promise<Todo> => {
    const docRef = await db.collection("TicketManage").add(todo);

    // return new created todo
    return {
        id: docRef.id,
        ...todo,
    } as Todo;
};

// update a todo
export const update = async (id: string, todo: Todo): Promise<Todo> => {
    await db.collection("TicketManage").doc(id).update(todo);

    // return updated todo
    return {
        id: id,
        ...todo,
    } as Todo;
};

// delete a todo
export const remove = async (id: string) => {
    await db.collection("TicketManage").doc(id).delete();
};