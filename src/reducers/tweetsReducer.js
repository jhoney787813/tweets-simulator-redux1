const inicialProps=
{
    tweets:[]
}


export default function (state=inicialProps,action){

    switch(action.type)
    {
        case "ADD_TWEET":        
            return {
                ...state ,
                tweets:[...state.tweets,action.payload]
            };

         break;

         default:
            return state;
            break;

    }
}