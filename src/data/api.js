export default class Api
{
   static async getDeck()
   {
       const deckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
       const data = await deckResponse.json();
       const response = await fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=52`);
       return response.json();
   }

}