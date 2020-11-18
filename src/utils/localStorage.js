export const getStateLocalStorage = ()=>
{
    const tweetsStorare=localStorage.getItem("tweets");
    if(tweetsStorare===null)
    {
        return undefined;
    }
    else
      return  JSON.parse(tweetsStorare);
    
}

export const setStateLocalStorage=state=>
{
    localStorage.setItem("tweets",JSON.stringify(state))
}