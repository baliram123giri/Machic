export const LOGIN = "LOGIN";
export type auth ={
    test:string
}
const initialState:auth = {
    test:"Hello"
}
export function authReducer(state=initialState, action:{type:string, payload:any}){
   switch(action.type){
    default:
        return state
   }
}