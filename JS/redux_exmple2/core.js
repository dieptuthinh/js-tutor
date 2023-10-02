// values = la bien noi suy ${...}
// [], first la <h1>, ...strings la con lai gap noi suy thi cach ra 
export default function html([first, ...strings], ...values){
    return values.reduce(
        // acc o trong truong hop nay la <ul>
        //cur o trong truong hop nay la <li> BMW </li>
        (acc,cur)=> acc.concat(cur, strings.shift()), 
        [first]
    )
    .filter(x => x && x!== true || x===0)
    .join('')
} 

export function createStore(reducer){
    // retirn du lieu ban dau cua store va luu vao state
    let state = reducer()
    
    // root chua cac goc element dung de render ra view
    const roots = new Map()

    // lap qua root der render ra view
    function render(){
        // component la thanh phan chua view
        for(const [root, component] of roots){
            // component return ra chuoi html
            const output = component()
            root.innerHTML = output
        }
    }

    // return ra object gom cac phuong thuc lam viec voi store
    return{

        attach(component,root){
        // set root la key va component la value 
            roots.set(root, component)
            render()
        },
        // connect tu store toi view
        connect(selector = state => state){
            return component =>(props, ...args)=>
                component(Object.assign({}, props,selector(state), ...args))
        },
        dispatch(action, ...args){
            state = reducer(state,action,args)
            render()
        }

    }
}