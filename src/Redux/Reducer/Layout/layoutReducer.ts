export const APPMENU = "APPMENU";
export type layoutType ={
    appMenu:boolean
}
const initialState:layoutType = {
    appMenu:true
}
export function layoutReducer(state=initialState, action:{type:string, payload:any}){
   switch(action.type){
    case APPMENU:
        return {
            ...state, 
            appMenu:!state.appMenu
        }
    default:
        return state
   }
}