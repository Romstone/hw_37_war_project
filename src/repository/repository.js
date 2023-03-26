import Api from "../data/api";

export default class DataRepository
{
    async getDeck()
    {
        const responseData = await Api.getDeck();
        console.log(responseData);
        responseData.cards.forEach(item => {
            switch (item.value)
            {
                case 'JACK':
                    item.value = 11;
                    break;
                case 'QUEEN':
                    item.value = 12;
                    break;
                case 'KING':
                    item.value = 13;
                    break;
                case 'ACE':
                    item.value = 14;
                    break;
            }
        })
        return responseData.cards;
    }
}