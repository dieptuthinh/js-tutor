import {createStore} from 'https://cdn.skypack.dev/redux';

//////////// Code lai Redux //////////////


function createStore2(){
    let state2 = reducer2(undefined, {})
    const subscribers2 = [];

    return{
        getState2(){
            return state2;
        },
        dispatch2(){
            state2 = reducer2(state2, action2);

            subscribers2.forEach(subscriber2 => subscribe2());
        },
        subscribe2(){

            subscribers2.push(subscriber2);
        }

    }
}



///////////////////////////////////

const initState = 0;

// Reducer
function reducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;    
        default: 
            return state
    }
}

// Store
const store = window.store = createStore(reducer)

console.log(store.getState())

// Actions
function actionDeposit(payload) {
    return {
        type: 'DEPOSIT',
        payload
    }
}

function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}

// DOM events
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

// Event handlers
deposit.onclick = function(e){
    store.dispatch(actionDeposit(10));
    
}

withdraw.onclick = function(e){
    store.dispatch(actionWithdraw(10))
}

// Listener
const a = store.subscribe(()=>{
    // Lay du lieu hien tai update ra view
    render()
})


// Render
function render(){
    const output = document.querySelector('#output');
    output.innerText = store.getState();
}

render();