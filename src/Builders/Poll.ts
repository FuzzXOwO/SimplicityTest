export default class Poll {
    public question: string | undefined = undefined;
    public answers: Array<{ text: string, emoji: string }> | undefined = undefined;
    public multiselect: boolean | undefined = undefined;
    public expiry: string | undefined = undefined;
    public layout: number | undefined = undefined;

    
}
