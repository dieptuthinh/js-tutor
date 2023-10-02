// lay du lieu ra tu local storage va luu du lieu va local storage 
const TODOS_STORAGE_KEY = 'TODOS';

export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
    },
    set(todos){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
}