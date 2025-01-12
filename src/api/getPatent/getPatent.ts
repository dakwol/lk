import { get } from "../api";
import { Patent } from "../../Classes/Patent";

export async function getPatent(personId: string): Promise<Patent> {
    try {
        const endpoint = 'get-patent';
        const params = { personId };
        const response = await get(endpoint, params);

        const { patentId, number, issued, dateOfIssue, expirationDate, debt, payed_to_date, price, messages } = response;
        const patentObj = new Patent(
            patentId,
            number,
            issued,
            dateOfIssue,
            expirationDate,
            debt,
            payed_to_date,
            price,
            messages
        );

        const sortedResponse = [...response];
        console.log(sortedResponse)
        sortedResponse.sort((a: any, b: any) => new Date(b.dateOfIssue).getTime() - new Date(a.dateOfIssue).getTime());

        const sortedMessages = [...sortedResponse[0]?.messages];
        sortedMessages.sort((a: any, b: any) => b.type - a.type);

        sortedResponse[0].messages = sortedMessages

        localStorage.setItem('patent', JSON.stringify(sortedResponse));
        return patentObj;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
