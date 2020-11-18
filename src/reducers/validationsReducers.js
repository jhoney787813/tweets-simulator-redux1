const inicialProps ={

    errorFormAddTweet:false
}

export default  function(state= inicialProps,action)
{
            switch(action.type)
            {
                case "VALIDATION_FORM_ADD_TWEET":

                    return{
                        ...state,
                        errorFormAddTweet:action.payload
                    };

                break;

                default:
                    return state;

            }

}