

export const useDebounce=(time,fn)=>{

    let timeoutId;

    let debounce=()=>{
        return ()=>{
            timeoutId&&clearTimeout(timeoutId)
            timeoutId=setTimeout(()=>{
fn()
console.log('inside debounce');


            },time)
        }
    }

    return  debounce()
}