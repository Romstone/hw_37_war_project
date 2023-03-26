import Api from "../data/api";

export default class DataRepository
{
    async getDeck()
    {
        const responseData = await Api.getDeck();
        console.log(responseData);
        responseData.cards.forEach(item => {
            if (item.value === 'JACK')
                item.value = 11;
            if (item.value === 'QUEEN')
                item.value = 12;
            if (item.value === 'KING')
                item.value = 13;
            if (item.value === 'ACE')
                item.value = 14;
        })
        return responseData.cards;
    }
}